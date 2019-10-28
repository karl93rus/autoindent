export const multyLineObjBegin = /=+\s*{\n$/;
export const multyLineObjEnd = /}\n$/;
export const functionStart = /\)+\s*{\n/;
export const objField = /[_\s\w\d]+:[_\-\s\'\"\w\d]+,*/;

let insideJson: boolean = false;

export function parseFile(stringifyedFile: string[]): string[] {
	let buffer: string[] = [];
	for(let i = 0; i < stringifyedFile.length; i++) {
		let input = stringifyedFile[i];
		if(multyLineObjBegin.test(input) && !functionStart.test(input)) {
			insideJson = true;
		}
		else if(multyLineObjEnd.test(input)) {
			insideJson = false;
		}

		if(insideJson) {
			if(objField.test(input)) {
				buffer.push(input);
			}
		}
	}
	return buffer;
}