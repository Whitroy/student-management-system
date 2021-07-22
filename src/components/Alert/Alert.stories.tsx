import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import Alert from "./Alert";

export default {
	title: "Alert",
	component: Alert,
} as Meta;

const Template: Story<ComponentProps<typeof Alert>> = (args) => (
	<Alert {...args}></Alert>
);

export const main = Template.bind({});

main.args = {
	children: "Lorem Ipsum is simply dummy text of the printing. ",
};
