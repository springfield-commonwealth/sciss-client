import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { CollectionConfig } from 'payload';

export const Staff: CollectionConfig = {
  slug: 'staff',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'position', 'department', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'position',
      type: 'text',
      required: true,
    },
    {
      name: 'department',
      type: 'select',
      required: true,
      options: [
        { label: 'Academic', value: 'academic' },
        { label: 'Administration', value: 'administration' },
        { label: 'Student Life', value: 'student-life' },
        { label: 'Support Services', value: 'support-services' },
      ],
    },
    {
      name: 'bio',
      type: 'richText',
      required: true,
      editor: lexicalEditor(),
    },
    {
      name: 'education',
      type: 'array',
      fields: [
        {
          name: 'degree',
          type: 'text',
        },
        {
          name: 'institution',
          type: 'text',
        },
        {
          name: 'year',
          type: 'number',
        },
      ],
    },
    {
      name: 'experience',
      type: 'array',
      fields: [
        {
          name: 'position',
          type: 'text',
        },
        {
          name: 'organization',
          type: 'text',
        },
        {
          name: 'duration',
          type: 'text',
        },
      ],
    },
    {
      name: 'specializations',
      type: 'array',
      fields: [
        {
          name: 'specialization',
          type: 'text',
        },
      ],
    },
    {
      name: 'certifications',
      type: 'array',
      fields: [
        {
          name: 'certification',
          type: 'text',
        },
        {
          name: 'issuingOrganization',
          type: 'text',
        },
        {
          name: 'year',
          type: 'number',
        },
      ],
    },
    {
      name: 'profileImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        {
          name: 'linkedin',
          type: 'text',
        },
        {
          name: 'website',
          type: 'text',
        },
      ],
    },
    {
      name: 'activities',
      type: 'array',
      fields: [
        {
          name: 'activity',
          type: 'text',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'Draft', value: 'draft' },
      ],
    },
  ],
};
