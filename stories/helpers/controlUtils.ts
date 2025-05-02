import type { ArgTypes } from '@storybook/react';
import { fullApiControls } from './commonControls';

export const excludeControls = <T extends readonly string[]>(
	props: T,
): ArgTypes => {
	const fullApiControlKey = Object.keys(fullApiControls)[0];
	return Object.fromEntries(
		props.map((prop) => [
			prop,
			{ control: false, if: { arg: fullApiControlKey, truthy: true } },
		]),
	) as ArgTypes;
};
