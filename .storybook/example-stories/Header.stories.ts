import { CommonModule } from '@angular/common';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';

import Button from './button.component';
import Header from './header.component';

const meta: Meta<Header> = {
  title: 'Examples/Stories/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/angular/writing-docs/docs-page
  tags: ['autodocs'],
  render: (args) => ({ props: args }),
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/angular/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<Header>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
