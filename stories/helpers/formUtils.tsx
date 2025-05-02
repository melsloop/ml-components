import React from 'react';
import Button from '../../src/components/Button';
import Form from '../../src/components/Form';
import { Container } from '../../src';

export const withForm = (children: React.ReactElement) => {
	return (
		<Form
			noValidate={false}
			onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
				if (!e.currentTarget.checkValidity()) {
					return;
				}
				e.preventDefault();
				e.stopPropagation();
			}}
		>
			{children}
			<Container
				xs={{
					'--ml-container-vertical-spacing': 'var(--ml-spacing-sm)',
				}}
			>
				<Button
					variant="contained"
					mode="primary"
					size="xs"
					radius="md"
				>
					Submit
				</Button>
			</Container>
		</Form>
	);
};
