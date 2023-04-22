import type { Meta, StoryObj } from '@storybook/react';

import DateResult from '../components/DateResult';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'DateResult',
  component: DateResult,
  tags: ['autodocs'],
} satisfies Meta<typeof DateResult>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    type: 'day',
    date: 1,
  },
};

