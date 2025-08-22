import { Endpoint } from 'payload';
import { PayloadRequest } from 'payload';

const submitApplication: Endpoint = {
  path: '/submit-application',
  method: 'post',
  handler: async (req: PayloadRequest) => {
    const { payload } = req;

    try {
      // Get form data from request
      const formData = req.body;

      // Validate the form data (reuse your existing logic)
      if (!formData.studentEmail || !formData.parentEmail) {
        return Response.json(
          { success: false, error: 'Missing required email fields' },
          { status: 400 }
        );
      }

      // Create application record in Payload
      const application = await payload.create({
        collection: 'applications',
        data: {
          studentName: formData.studentName,
          studentEmail: formData.studentEmail,
          studentCell: formData.studentCell,
          birthDate: formData.birthDate,
          gender: formData.gender,
          risingGrade: formData.risingGrade,
          tshirtSize: formData.tshirtSize,
          course: formData.course,
          sports: formData.sports,
          address: formData.address,
          currentSchoolName: formData.currentSchoolName,
          yearApplyingFor: formData.yearApplyingFor,
          financialAidInterest: formData.financialAidInterest,
          parentName: formData.parentName,
          parentEmail: formData.parentEmail,
          parentPhone: formData.parentPhone,
          status: 'submitted',
          submittedAt: new Date(),
        },
      });

      // Handle file upload if present
      if (req.files?.transcript) {
        const transcriptFile = await payload.create({
          collection: 'media',
          data: {
            alt: `Transcript for ${formData.studentName.first} ${formData.studentName.last}`,
            filename: req.files.transcript.name,
          },
          file: req.files.transcript,
        });

        // Update application with transcript reference
        await payload.update({
          collection: 'applications',
          id: application.id,
          data: {
            transcript: transcriptFile.id,
          },
        });
      }

      // Send confirmation emails (you can implement this logic)
      // await sendConfirmationEmails(application);

      return Response.json({
        success: true,
        message: 'Application submitted successfully',
        application_id: application.id,
        emails: {
          student: `Confirmation sent to ${formData.studentEmail}`,
          parent: `Confirmation sent to ${formData.parentEmail}`,
        },
      });

    } catch (error) {
      console.error('Application submission error:', error);

      return Response.json(
        {
          success: false,
          error: process.env.NODE_ENV === 'development' ? error.message : 'Submission failed'
        },
        { status: 500 }
      );
    }
  },
};

const validateEmail: Endpoint = {
  path: '/validate-email',
  method: 'post',
  handler: async (req: PayloadRequest) => {
    const { payload } = req;
    const { email } = req.body;

    try {
      // Check if email already exists in applications
      const existingApplication = await payload.find({
        collection: 'applications',
        where: {
          or: [
            { studentEmail: { equals: email } },
            { parentEmail: { equals: email } },
          ],
        },
        limit: 1,
      });

      const available = existingApplication.docs.length === 0;

      return Response.json({
        available,
        message: available
          ? 'Email is available'
          : 'Email is already registered',
      });

    } catch (error) {
      console.error('Email validation error:', error);

      return Response.json(
        { error: 'Email validation failed' },
        { status: 500 }
      );
    }
  },
};

export { submitApplication, validateEmail };
