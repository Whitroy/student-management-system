import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import Input from "./Input";
import { FaSpinner } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";

const Icons = { FaSpinner, HiLockClosed };

export default {
	title: "Input",
	component: Input,
	argTypes: {
		Icon: {
			options: Object.keys(Icons),
			mapping: Icons,
			control: { type: "radio" },
		},
	},
} as Meta;

const Template: Story<ComponentProps<typeof Input>> = (args) => (
	<Input {...args}></Input>
);

export const main = Template.bind({});

main.args = {
	Icon: HiLockClosed,
	errors: "Invalid !",
	touched: false,
	iconClassName: "fill-primary-400",
	placeholder: "Email Address",
	id: "email",
	type: "text",
};
