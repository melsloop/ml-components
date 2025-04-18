import type { ArgTypes } from 'storybook/internal/types';
import icons from './icons';

export const sizeControls: ArgTypes = {
	size: {
		options: ['xs', 'sm', 'md', 'lg', 'xl'],
		control: { type: 'select' },
	},
};

export const fullWidthControls: ArgTypes = {
	fullWidth: {
		control: 'boolean',
	},
};

export const disabledControls: ArgTypes = {
	disabled: {
		control: 'boolean',
	},
};

export const seoTitleControls: ArgTypes = {
	title: {
		control: 'text',
	},
};

export const buttonVariantControls: ArgTypes = {
	variant: {
		options: ['contained', 'outline'],
		control: { type: 'select' },
	},
};

export const buttonModeControls: ArgTypes = {
	mode: {
		options: ['primary', 'secondary'],
		control: { type: 'select' },
	},
};

export const shadowControls: ArgTypes = {
	shadow: {
		options: ['none', 'sm', 'md', 'lg'],
		control: 'select',
	},
};

export const radiusControls: ArgTypes = {
	radius: {
		options: ['none', 'sm', 'md', 'lg'],
		control: 'select',
	},
};

export const textVariantControls: ArgTypes = {
	variant: {
		options: ['title', 'subtitle1', 'subtitle2', 'subtitle3', 'subtitle4', 'subtitle5', 'body1', 'body2'],
		control: { type: 'select' },
	},
};

export const iconControls: ArgTypes = {
	icon: {
		options: [undefined, ...icons],
		control: 'select',
	},
};
