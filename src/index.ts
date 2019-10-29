import fs from 'fs';

import { replace } from './replacer';
import { readByLine } from './readByLine';
import { parseFile } from './parseFile';

let fileContent: string = fs.readFileSync(`${__dirname}/../test/test_json.ts`, 'utf8');
let strings: string[] = readByLine(fileContent);

let parsedFile = parseFile(strings);

let done = replace(strings, parsedFile).join('');

fs.writeFileSync(`${__dirname}/../test/test_json.ts`, done, 'utf8');