import { BeforeChangeHook } from 'payload/types';

// Custom validation hook for user data
export const validateUserData: BeforeChangeHook = ({ data, req }) => {
  // Ensure email is properly formatted
  if (data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Invalid email format');
    }
  }

  // Ensure name is not empty
  if (data.name && data.name.trim().length < 2) {
    throw new Error('Name must be at least 2 characters long');
  }

  // Ensure role is valid
  if (data.role && !['admin', 'editor'].includes(data.role)) {
    throw new Error('Invalid role selected');
  }

  return data;
};

// Custom validation hook for content data
export const validateContentData: BeforeChangeHook = ({ data, req }) => {
  // Ensure title is not empty
  if (data.title && data.title.trim().length === 0) {
    throw new Error('Title cannot be empty');
  }

  // Ensure slug is properly formatted
  if (data.slug) {
    const slugRegex = /^[a-z0-9-]+$/;
    if (!slugRegex.test(data.slug)) {
      throw new Error('Slug must contain only lowercase letters, numbers, and hyphens');
    }
  }

  return data;
};

// Custom hook for logging changes
export const logChanges: BeforeChangeHook = ({ data, req, operation }) => {
  console.log(`[${operation}] ${req.user?.email || 'Anonymous'} modified data:`, {
    collection: req.collection?.config?.slug,
    operation,
    timestamp: new Date().toISOString(),
  });

  return data;
};
