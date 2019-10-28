export function indent2(arr: string[]): string[] {
	let maxIndent: number = 0;
	let res: string[] = [];
	let currentMaxSpaces: number = 0;
	let valSpaces: number = 0;
	for(let i = 0; i < arr.length; i++) {
		let separateKey = arr[i].split(':');
		valSpaces = separateKey[1].length - separateKey[1].trim().length;
		// console.log('separateKey[1] before', separateKey[1], 
		// 						'currentMaxSpaces', currentMaxSpaces);
		if(valSpaces > currentMaxSpaces) {
			currentMaxSpaces = separateKey[1].length - separateKey[1].trim().length;
		}
		if(separateKey[0].length > maxIndent) {
			maxIndent = separateKey[0].length;
			separateKey.join(':');
			// console.log('separateKey[1].length', separateKey[1].length,
			//  'separateKey[1].trim().length', separateKey[1].trim().length);
		}
	}

	// console.log('max indent', maxIndent, 'currentMaxSpaces', currentMaxSpaces);
	if(maxIndent <= currentMaxSpaces) {
		return arr;
	}
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
	// console.log('indent NEW res returns');
	return res;
}