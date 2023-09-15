import type { Meta, StoryObj } from '@storybook/web-components';
import { CircleCard } from './circle-card';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Example/Circle-Card',
  tags: ['autodocs'],
  render: () => new CircleCard(),
// component: CircleCard,
} satisfies Meta<typeof CircleCard>;

export default meta;
type Story = StoryObj<any>;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: Story = {
  args: {
    name: 'Harry',
  },
};

// export const Secondary: Story = {
//     render: (args) => (
//       <CircleCard {...args}>
//       </CircleCard>
//     ),
//   };

// import { html } from 'lit';

// const meta = {
//     title: 'Example/Circle-Card',
//     component: 'circle-card',
//     argTypes: {
//         name: { control: 'text' },
//     }
// } satisfies Meta<any>;

// export default meta;
// type Story = StoryObj<any>;

// export const Primary: Story = {
//     render: (args) => html`
//         <circle-card .name=${args.name}>
//         </circle-card>
//     `,
// };