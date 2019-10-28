import * as fs from 'fs';
import { readByLine } from './readByLine';
import {
	multyLineObjBegin,
	multyLineObjEnd,
	objField,
	functionStart,
} from './parseFile';

let insideJson: boolean = false;

export function replace(src: string[], indented: string[]): string[] {
	if(indented.length === 0) {
		return [] as string[];
	}
	let indentedIndex: number = 0;
	src.forEach((line: string, index: number) => {
		if(multyLineObjBegin.test(line)  && !functionStart.test(line)) {
			insideJson = true;
		} else if(multyLineObjEnd.test(line)) {
			insideJson = false;
		}
		
		if(insideJson && objField.test(line)) {
			src[index] = indented[indentedIndex];
			indentedIndex++;
		}
	});
	return src;
}