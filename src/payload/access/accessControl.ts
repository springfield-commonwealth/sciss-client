import { Access } from 'payload';

// Public read access for all collections
export const publicReadAccess: Access = () => true;

// Admin-only access for sensitive operations
export const adminOnly: Access = ({ req: { user } }) => {
  return user?.role === 'admin';
};

// Editor and admin access
export const editorOrAdmin: Access = ({ req: { user } }) => {
  return user?.role === 'admin' || user?.role === 'editor';
};

// User can only edit their own content
export const ownContent: Access = ({ req: { user } }) => {
  if (!user) return false;
  if (user.role === 'admin') return true;
  return {
    createdBy: {
      equals: user.id,
    },
  };
};
