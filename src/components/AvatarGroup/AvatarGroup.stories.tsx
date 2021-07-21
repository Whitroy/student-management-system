import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import Avatar from "../Avatar/Avatar";
import AvatarGroup from "./AvatarGroup";

export default {
	title: "AvatarGroup",
	component: AvatarGroup,
} as Meta;

const Template: Story<ComponentProps<typeof AvatarGroup>> = (args) => (
	<AvatarGroup {...args}>{args.children}</AvatarGroup>
);

export const MinGroup = Template.bind({});

MinGroup.args = {
	children: [
		<Avatar appearance="rounded" />,
		<Avatar appearance="rounded" />,
		<Avatar appearance="rounded" />,
	],
};

export const MaxGroup = Template.bind({});

MaxGroup.args = {
	children: [
		<Avatar appearance="rounded" />,
		<Avatar appearance="rounded" />,
		<Avatar appearance="rounded" />,
		<Avatar appearance="rounded" />,
		<Avatar appearance="rounded" />,
		<Avatar appearance="rounded" />,
	],
};
