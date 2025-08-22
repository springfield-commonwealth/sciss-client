import { CollectionConfig } from 'payload';

export const Activities: CollectionConfig = {
  slug: 'activities',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'duration', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Sports & Recreation', value: 'sports-recreation' },
        { label: 'Arts & Crafts', value: 'arts-crafts' },
        { label: 'Music & Dance', value: 'music-dance' },
        { label: 'Technology', value: 'technology' },
        { label: 'Outdoor Adventure', value: 'outdoor-adventure' },
        { label: 'Social Activities', value: 'social-activities' },
      ],
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
    },
    {
      name: 'schedule',
      type: 'group',
      fields: [
        {
          name: 'days',
          type: 'select',
          hasMany: true,
          options: [
            { label: 'Monday', value: 'monday' },
            { label: 'Tuesday', value: 'tuesday' },
            { label: 'Wednesday', value: 'wednesday' },
            { label: 'Thursday', value: 'thursday' },
            { label: 'Friday', value: 'friday' },
            { label: 'Saturday', value: 'saturday' },
            { label: 'Sunday', value: 'sunday' },
          ],
        },
        {
          name: 'time',
          type: 'text',
        },
        {
          name: 'location',
          type: 'text',
        },
      ],
    },
    {
      name: 'instructor',
      type: 'text',
    },
    {
      name: 'maxParticipants',
      type: 'number',
    },
    {
      name: 'equipment',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'safety',
      type: 'array',
      fields: [
        {
          name: 'guideline',
          type: 'text',
        },
      ],
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
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
