import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from './Dropdown';

const Story: ComponentMeta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Dropdown',
};
export default Story;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
