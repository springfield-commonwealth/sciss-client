import { CollectionConfig } from 'payload';

export const Trips: CollectionConfig = {
  slug: 'trips',
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
        { label: 'University Visits', value: 'university-visits' },
        { label: 'Cultural Experiences', value: 'cultural-experiences' },
        { label: 'Educational Tours', value: 'educational-tours' },
        { label: 'Recreational', value: 'recreational' },
        { label: 'Historical Sites', value: 'historical-sites' },
      ],
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
    },
    {
      name: 'destination',
      type: 'text',
      required: true,
    },
    {
      name: 'itinerary',
      type: 'array',
      fields: [
        {
          name: 'time',
          type: 'text',
        },
        {
          name: 'activity',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'location',
          type: 'text',
        },
      ],
    },
    {
      name: 'transportation',
      type: 'text',
    },
    {
      name: 'cost',
      type: 'number',
    },
    {
      name: 'maxParticipants',
      type: 'number',
    },
    {
      name: 'requirements',
      type: 'array',
      fields: [
        {
          name: 'requirement',
          type: 'text',
        },
      ],
    },
    {
      name: 'whatToBring',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'safetyNotes',
      type: 'textarea',
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
