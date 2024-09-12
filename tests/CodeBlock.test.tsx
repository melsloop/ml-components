import React from 'react';
import { render } from '@testing-library/react';
import CodeSnippet from '../src/components/CodeSnippet';

describe('CodeBlock', () => {
	test('renders the CodeSnippet component', () => {
		render(<CodeSnippet>{`{ key: 'value' }`}</CodeSnippet>);
	});
});
