export type FormFieldProps = {
	name: string;
	type: 'text' | 'number' | 'tel' | 'email' | 'textarea';
	initialValue: unknown;
	required?: boolean;
	label?: string;
	placeholder?: string;
	icon?: string;
	validation?: yup.Schema;
	input?: React.ReactNode;
	component?: 'input' | 'textarea' | 'select';
};

export type FormProps = {
	name: string;
	path: string;
	fields: FormFieldProps[];
	recaptchaSiteKey?: string;
	onSuccess?: () => void;
	onError?: (e: unknown) => void;
	submitButtonLabel?: string;
	submitButtonIcon?: string;
	submitButtonLabelActive?: string;
};
