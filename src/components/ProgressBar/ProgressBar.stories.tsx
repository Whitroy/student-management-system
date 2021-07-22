import { Meta, Story } from "@storybook/react";
import { ComponentProps } from "react";
import ProgressBar from "./ProgressBar";

export default {
	title: "ProgressBar",
	component: ProgressBar,
	argTypes: {
		progressPercentage: {
			control: { type: "range", min: 1, max: 100 },
		},
	},
} as Meta;

const Template: Story<ComponentProps<typeof ProgressBar>> = (args) => (
	<ProgressBar {...args}></ProgressBar>
);

export const main = Template.bind({});

main.args = {};
