import fs from 'fs';

import { replace } from './replacer';
import { readByLine } from './readByLine';
import { parseFile } from './parseFile';
import { indent2 } from './indenter';

let fileContent: string = fs.readFileSync(`${__dirname}/../test/test_json.ts`, 'utf8');
let strings: string[] = readByLine(fileContent);

let parsedFile = parseFile(strings);

let done = replace(strings, indent2(parsedFile)).join('');

fs.writeFileSync(`${__dirname}/../test/test_json.ts`, done, 'utf8');