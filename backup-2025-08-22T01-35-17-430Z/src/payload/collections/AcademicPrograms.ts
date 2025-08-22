import { CollectionConfig } from 'payload';

export const AcademicPrograms: CollectionConfig = {
  slug: 'academic-programs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'ageRange', 'updatedAt'],
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
        { label: 'Core Academic', value: 'core-academic' },
        { label: 'Elective', value: 'elective' },
        { label: 'Enrichment', value: 'enrichment' },
        { label: 'Language', value: 'language' },
        { label: 'STEM', value: 'stem' },
        { label: 'Arts & Humanities', value: 'arts-humanities' },
      ],
    },
    {
      name: 'ageRange',
      type: 'text',
      required: true,
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
    },
    {
      name: 'instructor',
      type: 'relationship',
      relationTo: 'staff',
    },
    {
      name: 'prerequisites',
      type: 'array',
      fields: [
        {
          name: 'prerequisite',
          type: 'text',
        },
      ],
    },
    {
      name: 'learningObjectives',
      type: 'array',
      fields: [
        {
          name: 'objective',
          type: 'text',
        },
      ],
    },
    {
      name: 'materials',
      type: 'array',
      fields: [
        {
          name: 'material',
          type: 'text',
        },
      ],
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
