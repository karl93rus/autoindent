let currentMaxIdent: number = 0;

export function indent(arr: string[]): string[] {
	console.log('indent source ARR', arr);
	let maxIndent: number = 0;
	let res: string[] = [];

	for(let i = 0; i < arr.length; i++) {
		let separateKey = arr[i].split(':');
		if(separateKey[0].length > maxIndent) {
			maxIndent = separateKey[0].length;
			separateKey.join(':');
		}
	}
	if(maxIndent < currentMaxIdent) {
		return [] as string[];
	}
	currentMaxIdent = maxIndent;
	for(let i = 0; i < arr.length; i++) {
		let separateKey: string[] = arr[i].split(':');
		let spacesToAdd: number = maxIndent - separateKey[0].length;
		let spaces: string = '';
		for(let i = 0; i < spacesToAdd; i++) {
			spaces += ' ';
		}
		separateKey[1] = spaces + separateKey[1];
		res.push(separateKey.join(':'));
	}

	return res;
}