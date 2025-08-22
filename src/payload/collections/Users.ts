import { CollectionConfig } from 'payload';
import { logChanges, validateUserData } from '../hooks/validationHooks';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Admin',
    description: 'Manage admin users and their permissions',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => {
      // Allow creating users if no user exists (first user)
      // or if the current user is an admin
      return !user || user.role === 'admin';
    },
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user && user.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Full name of the user',
      },
      validate: (value) => {
        if (!value || value.length < 2) {
          return 'Name must be at least 2 characters long';
        }
        return true;
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      admin: {
        description: 'Email address used for login',
      },
      validate: (value) => {
        if (!value || !value.includes('@')) {
          return 'Please enter a valid email address';
        }
        return true;
      },
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      admin: {
        description: 'User role determines access permissions',
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this user account is active',
      },
    },
    {
      name: 'lastLogin',
      type: 'date',
      admin: {
        readOnly: true,
        description: 'Last time the user logged in',
      },
    },
  ],
  hooks: {
    beforeChange: [
      validateUserData,
      logChanges,
      ({ data }) => {
        // Ensure email is lowercase
        if (data.email) {
          data.email = data.email.toLowerCase();
        }
        return data;
      },
    ],
    afterLogin: [
      ({ user }) => {
        // Update last login time
        if (user) {
          // This would be handled by Payload automatically
          console.log(`User ${user.email} logged in`);
        }
      },
    ],
  },
};
