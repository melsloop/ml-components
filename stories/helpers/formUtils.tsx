import React from 'react';
import Button from '../../src/components/Button';

export const withForm = (children: React.ReactElement) => {
	return (
		<form id="form">
			{children}
			<div style={{ marginTop: '1em' }}>
				<Button
					size="xs"
					variant="contained"
					mode="primary"
				>
					Submit
				</Button>
			</div>
		</form>
	);
};
