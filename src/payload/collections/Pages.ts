import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user?.role === 'admin'),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Page title',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug (e.g., "about-us")',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
        { label: 'Archived', value: 'archived' },
      ],
      admin: {
        description: 'Page status',
      },
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'Meta description for SEO',
          },
        },
        {
          name: 'keywords',
          type: 'array',
          fields: [
            {
              name: 'keyword',
              type: 'text',
            },
          ],
          admin: {
            description: 'Meta keywords for SEO',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Open Graph image',
          },
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: {
          heading: {
            options: [
              { label: 'Heading 1', value: 'h1' },
              { label: 'Heading 2', value: 'h2' },
              { label: 'Heading 3', value: 'h3' },
              { label: 'Heading 4', value: 'h4' },
            ],
          },
        },
      }),
      admin: {
        description: 'Main page content',
      },
    },
    {
      name: 'blocks',
      type: 'array',
      fields: [
        {
          name: 'blockType',
          type: 'select',
          required: true,
          options: [
            { label: 'Hero Section', value: 'hero' },
            { label: 'Content Section', value: 'content' },
            { label: 'Gallery', value: 'gallery' },
            { label: 'Testimonials', value: 'testimonials' },
            { label: 'CTA Section', value: 'cta' },
          ],
        },
        {
          name: 'hero',
          type: 'group',
          admin: {
            condition: (data, siblingData) => siblingData?.blockType === 'hero',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'subtitle',
              type: 'text',
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'ctaText',
              type: 'text',
            },
            {
              name: 'ctaLink',
              type: 'text',
            },
          ],
        },
        {
          name: 'content',
          type: 'group',
          admin: {
            condition: (data, siblingData) => siblingData?.blockType === 'content',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor(),
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'imagePosition',
              type: 'select',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' },
                { label: 'Top', value: 'top' },
                { label: 'Bottom', value: 'bottom' },
              ],
              defaultValue: 'left',
            },
          ],
        },
        {
          name: 'gallery',
          type: 'group',
          admin: {
            condition: (data, siblingData) => siblingData?.blockType === 'gallery',
          },
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'images',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'caption',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
      admin: {
        description: 'Page content blocks',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        description: 'Publication date',
        condition: (data) => data?.status === 'published',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data.status === 'published' && !data.publishedAt) {
          data.publishedAt = new Date().toISOString();
        }
        return data;
      },
    ],
  },
};
