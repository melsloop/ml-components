import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { FormFieldProps } from '../src/components/Form/types';
import Form from '../src/components/Form';
import * as yup from 'yup';

const formFields: FormFieldProps[] = [
	{
		name: 'fullName',
		initialValue: '',
		required: true,
		label: 'Name',
		placeholder: 'Enter name',
		icon: 'person',
		component: 'input',
		type: 'text',
		validation: yup.string().required(),
	},
	{
		name: 'email',
		initialValue: '',
		required: true,
		label: 'Email',
		placeholder: 'Enter email',
		icon: 'closed-envelope',
		component: 'input',
		type: 'email',
		validation: yup.string().email().required(),
	},
];

const meta = {
	title: 'Form/Form',
	component: Form,
	parameters: {
		layout: 'centered',
	},
	// tags: ['autodocs'],
	args: {
		name: 'StoryForm',
		fields: formFields,
	},
	argTypes: {},
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: ({ name, fields }) => {
		return (
			<Form
				name={name}
				fields={fields}
			/>
		);
	},
};
