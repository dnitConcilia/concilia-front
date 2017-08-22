import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'humanizeDate'
})
export class HumanizeDatePipe implements PipeTransform {

	transform(value: any, args?: any): any {
		value = value.split('-');
		return value[2] + '/' + value[1] + '/' + value[0];
	}

}
