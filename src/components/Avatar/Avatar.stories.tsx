import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import Avatar from "./Avatar";

export default {
	title: "Avatar",
	component: Avatar,
} as Meta;

const Template: Story<ComponentProps<typeof Avatar>> = (args) => (
	<Avatar {...args}></Avatar>
);

export const main = Template.bind({});

main.args = {};
