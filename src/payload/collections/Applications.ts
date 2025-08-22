import { CollectionConfig } from 'payload';

export const Applications: CollectionConfig = {
  slug: 'applications',
  admin: {
    useAsTitle: 'studentEmail',
    defaultColumns: ['studentEmail', 'studentName', 'course', 'status', 'submittedAt'],
    listSearchableFields: ['studentEmail', 'parentEmail', 'studentName.first', 'studentName.last'],
  },
  access: {
    read: () => true, // Adjust based on your admin access requirements
    create: () => true, // Allow form submissions
    update: ({ req: { user } }) => !!user, // Only admins can update
    delete: ({ req: { user } }) => !!user, // Only admins can delete
  },
  fields: [
    // Student Information
    {
      name: 'studentName',
      type: 'group',
      fields: [
        {
          name: 'first',
          type: 'text',
          required: true,
        },
        {
          name: 'last',
          type: 'text',
          required: true,
        },
        {
          name: 'preferredName',
          type: 'text',
        },
      ],
    },
    {
      name: 'studentEmail',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'studentCell',
      type: 'text',
      required: true,
    },
    {
      name: 'birthDate',
      type: 'date',
      required: true,
    },
    {
      name: 'gender',
      type: 'select',
      options: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
        { label: 'Prefer not to say', value: 'Prefer not to say' },
      ],
      required: true,
    },
    {
      name: 'risingGrade',
      type: 'select',
      options: [
        { label: 'Grade 9', value: 'G9' },
        { label: 'Grade 10', value: 'G10' },
        { label: 'Grade 11', value: 'G11' },
        { label: 'Grade 12', value: 'G12' },
      ],
      required: true,
    },
    {
      name: 'tshirtSize',
      type: 'text',
      required: true,
    },
    {
      name: 'course',
      type: 'text',
      required: true,
    },
    {
      name: 'sports',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Basketball', value: 'Basketball' },
        { label: 'Soccer', value: 'Soccer' },
        { label: 'Tennis', value: 'Tennis' },
        { label: 'Swimming', value: 'Swimming' },
        { label: 'Track & Field', value: 'Track & Field' },
      ],
    },

    // Address Information
    {
      name: 'address',
      type: 'group',
      fields: [
        {
          name: 'address1',
          type: 'text',
          required: true,
        },
        {
          name: 'address2',
          type: 'text',
        },
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'state',
          type: 'text',
          required: true,
        },
        {
          name: 'zip',
          type: 'text',
          required: true,
        },
        {
          name: 'country',
          type: 'text',
          required: true,
        },
      ],
    },

    // Academic Information
    {
      name: 'currentSchoolName',
      type: 'text',
      required: true,
    },
    {
      name: 'yearApplyingFor',
      type: 'text',
      required: true,
    },
    {
      name: 'financialAidInterest',
      type: 'select',
      options: [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },
      ],
      required: true,
    },
    {
      name: 'transcript',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },

    // Parent Information
    {
      name: 'parentName',
      type: 'group',
      fields: [
        {
          name: 'first',
          type: 'text',
          required: true,
        },
        {
          name: 'last',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'parentEmail',
      type: 'email',
      required: true,
    },
    {
      name: 'parentPhone',
      type: 'text',
      required: true,
    },

    // Application Status
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Submitted', value: 'submitted' },
        { label: 'Under Review', value: 'under_review' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
        { label: 'Waitlisted', value: 'waitlisted' },
      ],
      defaultValue: 'submitted',
      required: true,
    },
    {
      name: 'submittedAt',
      type: 'date',
      admin: {
        readOnly: true,
      },
      defaultValue: () => new Date(),
    },
    {
      name: 'reviewNotes',
      type: 'textarea',
      admin: {
        description: 'Internal notes for admissions review',
      },
    },
  ],
  timestamps: true,
};
