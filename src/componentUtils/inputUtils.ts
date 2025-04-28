export const createElementProperties = (
	value: boolean,
	setValue: (value: boolean) => void,
	validity: ValidityState,
	setCustomValidity: (errorMessage: string) => void,
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
	validity: {
		get: () => validity,
		enumerable: true,
		configurable: true,
	},
	setCustomValidity: {
		value: setCustomValidity,
		enumerable: true,
		configurable: true,
	},
});
