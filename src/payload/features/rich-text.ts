import { lexicalEditor } from '@payloadcms/richtext-lexical';

// Rich text features configuration
export const richTextFeatures = {
  // Lexical editor configuration
  lexicalEditor: lexicalEditor({
    features: {
      // Text formatting
      bold: true,
      italic: true,
      underline: true,
      strikethrough: true,
      code: true,
      codeHighlight: true,

      // Headings
      heading: {
        options: [
          { label: 'Heading 1', value: 'h1' },
          { label: 'Heading 2', value: 'h2' },
          { label: 'Heading 3', value: 'h3' },
          { label: 'Heading 4', value: 'h4' },
          { label: 'Heading 5', value: 'h5' },
          { label: 'Heading 6', value: 'h6' },
        ],
      },

      // Lists
      list: {
        options: [
          { label: 'Ordered List', value: 'ol' },
          { label: 'Unordered List', value: 'ul' },
        ],
      },

      // Links
      link: true,

      // Blockquotes
      blockquote: true,

      // Tables
      table: true,

      // Media
      image: {
        fields: [
          {
            name: 'caption',
            type: 'text',
            label: 'Caption',
          },
          {
            name: 'alt',
            type: 'text',
            label: 'Alt Text',
          },
        ],
      },

      video: {
        fields: [
          {
            name: 'caption',
            type: 'text',
            label: 'Caption',
          },
        ],
      },
    },
  }),

  // Rich text field configuration
  richTextField: {
    name: 'content',
    type: 'richText',
    editor: lexicalEditor({
      features: {
        bold: true,
        italic: true,
        underline: true,
        strikethrough: true,
        code: true,
        codeHighlight: true,
        heading: {
          options: [
            { label: 'Heading 1', value: 'h1' },
            { label: 'Heading 2', value: 'h2' },
            { label: 'Heading 3', value: 'h3' },
            { label: 'Heading 4', value: 'h4' },
            { label: 'Heading 5', value: 'h5' },
            { label: 'Heading 6', value: 'h6' },
          ],
        },
        list: {
          options: [
            { label: 'Ordered List', value: 'ol' },
            { label: 'Unordered List', value: 'ul' },
          ],
        },
        link: true,
        blockquote: true,
        table: true,
        image: {
          fields: [
            {
              name: 'caption',
              type: 'text',
              label: 'Caption',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
            },
          ],
        },
        video: {
          fields: [
            {
              name: 'caption',
              type: 'text',
              label: 'Caption',
            },
          ],
        },
      },
    }),
    admin: {
      description: 'Rich text content with advanced formatting options',
    },
  },
};
