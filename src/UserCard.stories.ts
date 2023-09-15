import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './user-card';

export default {
  title: 'Example/UserCard',
  argTypes: {
    name: { control: 'text' },
  },
  render: (args) => html`<user-card .name=${args.name}></user-card>`,
} as Meta;

export const Default: StoryObj = {
  args: {
    name: 'John Doe',
  },
};