import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import Button from "./Button";
import { FaSpinner } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";

const Icons = { "No Icon": undefined, FaSpinner, HiLockClosed };

export default {
	title: "Button",
	component: Button,
	argTypes: {
		theme: {
			control: { type: "select" },
		},
		Icon: {
			options: Object.keys(Icons),
			mapping: Icons,
			control: { type: "select" },
		},
	},
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
	<Button {...args}>{args.children}</Button>
);

export const main = Template.bind({});

main.args = {
	children: "Sign in",
	disabled: false,
	Icon: HiLockClosed,
};
