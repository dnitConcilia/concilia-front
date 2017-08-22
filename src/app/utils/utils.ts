export class Utils {

	public range(start: number, end: number): Array<number> {
		const range: Array<number> = [];
		for (let i = start; i <= end; i++) {
			range.push(i);
		}
		return range;
	}
}
