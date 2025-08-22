import { Field } from 'payload';

// Custom field for course difficulty
export const courseDifficultyField: Field = {
  name: 'difficulty',
  type: 'select',
  required: true,
  options: [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Intermediate', value: 'intermediate' },
    { label: 'Advanced', value: 'advanced' },
    { label: 'All Levels', value: 'all-levels' },
  ],
  admin: {
    description: 'Select the difficulty level for this course',
  },
};

// Custom field for age range
export const ageRangeField: Field = {
  name: 'ageRange',
  type: 'group',
  fields: [
    {
      name: 'minAge',
      type: 'number',
      required: true,
      admin: {
        description: 'Minimum age required',
      },
    },
    {
      name: 'maxAge',
      type: 'number',
      required: true,
      admin: {
        description: 'Maximum age allowed',
      },
    },
  ],
  admin: {
    description: 'Age range for this program/activity',
  },
};

// Custom field for schedule
export const scheduleField: Field = {
  name: 'schedule',
  type: 'array',
  fields: [
    {
      name: 'day',
      type: 'select',
      required: true,
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
      name: 'startTime',
      type: 'text',
      required: true,
      admin: {
        description: 'Start time (e.g., "09:00 AM")',
      },
    },
    {
      name: 'endTime',
      type: 'text',
      required: true,
      admin: {
        description: 'End time (e.g., "11:00 AM")',
      },
    },
    {
      name: 'location',
      type: 'text',
      admin: {
        description: 'Location or room number',
      },
    },
  ],
  admin: {
    description: 'Weekly schedule for this program/activity',
  },
};
