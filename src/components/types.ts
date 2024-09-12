export type TextDirection = 'rtl' | 'ltr';

// Define a type that allows data attributes
export type WithDataAttributes<P = {}> = P & {
	[key: `data-${string}`]: any; // Allow any `data-*` attributes
};
