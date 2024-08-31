const serialPrefix = (index: number, limit: number, customPrefix: string) => {
		if (index <= 0) {
			return ''
		}
		return index <= limit ? customPrefix : ''
	};

export const leadingZero = (index: number) => serialPrefix(index, 9, '0');
