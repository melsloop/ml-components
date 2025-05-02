import React from 'react';
import { render } from '@testing-library/react';
import Spinner from '../src/components/Spinner';

describe('Spinner', () => {
	test('renders the spinner component', () => {
		render(
			<Spinner
				label="Loading..."
				delay={1000}
			/>,
		);
	});
});
