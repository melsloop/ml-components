import { useEffect, useRef, useCallback } from 'react';

export const useCopyToClipboard = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	const setTextSelection = useCallback(() => {
		const idx = inputRef.current?.value?.length || 0;
		inputRef.current?.setSelectionRange(0, idx);
	}, [inputRef]);

	useEffect(() => {
		inputRef.current?.addEventListener('copied', setTextSelection);
		() => {
			inputRef.current?.removeEventListener('copied', setTextSelection);
		};
	}, [inputRef]);

	return {
		inputRef,
		setTextSelection,
	};
};

export default useCopyToClipboard;
