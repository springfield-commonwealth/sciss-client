// Hook to update timestamps and audit trail
export const afterChangeHook = async ({
  doc,
  req,
  operation,
}: {
  doc: any;
  req: any;
  operation: string;
}) => {
  // Log the operation for audit purposes
  console.log(`Document ${operation}: ${doc.id} by user ${req.user?.id}`);

  // You can add additional logic here like:
  // - Sending notifications
  // - Updating search indexes
  // - Triggering webhooks
  // - Cache invalidation

  return doc;
};

// Hook for academic programs
export const afterAcademicProgramChange = async ({
  doc,
  req,
  operation,
}: {
  doc: any;
  req: any;
  operation: string;
}) => {
  // Update course availability if needed
  if (operation === 'update' && doc.status === 'inactive') {
    // Handle inactive course logic
    console.log(`Course ${doc.title} marked as inactive`);
  }

  return doc;
};
