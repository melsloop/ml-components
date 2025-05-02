export type TextDirection = 'rtl' | 'ltr';

// Define a type that allows data attributes
// eslint-disable-next-line @typescript-eslint/ban-types
export type WithDataAttributes<P = {}> = P & {
	[key: `data-${string}`]: unknown; // Allow any `data-*` attributes
};
