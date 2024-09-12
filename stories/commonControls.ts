import type { ArgTypes } from 'storybook/internal/types';

export const sizeControls: ArgTypes = {
	size: {
		name: 'Size',
		options: ['xs', 'sm', 'md', 'lg', 'xl'],
		control: { type: 'select' },
	},
};

export const fullWidthControls: ArgTypes = {
	fullWidth: {
		name: 'Full Width',
		control: 'boolean',
	},
};

export const disabledControls: ArgTypes = {
	disabled: {
		name: 'Disabeld',
		control: 'boolean',
	},
};

export const seoTitleControls: ArgTypes = {
	title: {
		name: 'title',
		control: 'text',
	},
};

export const buttonVariantControls: ArgTypes = {
	variant: {
		name: 'Variant',
		options: ['contained', 'outline'],
		control: { type: 'select' },
	},
};

export const buttonModeControls: ArgTypes = {
	mode: {
		name: 'Mode',
		options: ['primary', 'secondary'],
		control: { type: 'select' },
	},
};

export const shadowControls: ArgTypes = {
	shadow: {
		name: 'Shadow',
		options: ['none', 'sm', 'md', 'lg'],
		control: 'select',
	},
};

export const radiusControls: ArgTypes = {
	radius: {
		name: 'Radius',
		options: ['none', 'sm', 'md', 'lg'],
		control: 'select',
	},
};

export const textVariantControls: ArgTypes = {
	variant: {
		name: 'Variant',
		options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2'],
		control: { type: 'select' },
	},
};
