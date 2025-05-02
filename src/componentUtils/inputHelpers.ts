// Property definitions for the DOM element
export const createElementProperties = <T extends Record<string, unknown>>(
	value: string | boolean | undefined,
	setValue: (value: boolean) => void,
	additionalProperties?: T,
) => ({
	value: {
		get: () => value,
		enumerable: true,
		configurable: true,
	},
	setValue: {
		value: setValue,
		enumerable: true,
		configurable: true,
	},
	...(additionalProperties ?? {}),
});
