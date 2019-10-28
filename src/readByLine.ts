export function readByLine(file: string): string[] {
	let buffer: string = '';
	let lines: string[] = [];

	for(let i = 0; i < file.length; i++) {
		buffer += file[i];
		if(file[i] === '\n' || i === file.length - 1) {
			lines.push(buffer.slice(0, buffer.length));
			buffer = '';
		}
	}
	return lines;
}