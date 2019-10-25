import * as fs from 'fs';
import { readByLine } from './readByLine';

let fileContent: string = fs.readFileSync(`${__dirname}/../test/test_json.ts`, 'utf8');

let strings = readByLine(fileContent);

const multyLineObjBegin = /{$/;
const multyLineObjEnd = /}$/;
let insideJson: boolean = false;
const objField = /[_\s\w\d]+:[_\-\s\'\"\w\d]+,*/;

// const rt = 'abcde: \'123\'';
// const rte = 'abcde: \'12:3\'';
// const rtr = '';
// console.log('objField test', objField.test(rt));
// console.log('objField test', objField.test(rtr));
// console.log('objField test', objField.test(rte));

let buffer: string[] = [];

for(let i = 0; i < strings.length; i++) {
	let input = strings[i];
	if(multyLineObjBegin.test(input)) insideJson = true;
	else if(multyLineObjEnd.test(input)) insideJson = false;

	if(insideJson) {
		if(objField.test(input)) {
			buffer.push(input);
		}
	}
}

function indent(arr: string[]): void {
	let maxIndent: number = 0;
	let res: string[] = [];

	for(let i = 0; i < arr.length; i++) {
		// console.log('indent fn', arr[i]);
		let separateKey = arr[i].split(':');
		if(separateKey[0].length > maxIndent) {
			maxIndent = separateKey[0].length;
		}
	}
	console.log('maxIndent', maxIndent);
	for(let i = 0; i < arr.length; i++) {
		// console.log('indent fn', arr[i]);
		let separateKey: string[] = arr[i].split(':');
		let spacesToAdd: number = maxIndent - separateKey[0].length;
		let spaces: string = '';
		for(let i = 0; i < spacesToAdd; i++) {
			spaces += ' ';
		}
		separateKey[1] = spaces + separateKey[1];
		res.push(separateKey.join(''));
	}
	for(let i = 0; i < res.length; i++) {
		console.log(res[i]);
	}
}

indent(buffer);

export const A: number = 10;