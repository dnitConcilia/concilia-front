import { Component, OnInit } from '@angular/core';
import { CounterInterface } from './counter.interface';

@Component({
	selector: 'cba-counter-up',
	templateUrl: './counter-up.component.html'
})
export class CounterUpComponent implements OnInit {

	public counters: Array<CounterInterface> = [
		{
			num: 123,
			text: 'Famílias no aluguel social'
		},
		{
			num: 1385,
			text: 'Moradias seladas'
		},
		{
			num: 264,
			text: 'Nº de famílias na  1ª etapa'
		},
		{
			num: 108,
			text: 'Indenizações concluídas'
		}
	];
	constructor() {}

	ngOnInit() {}

}
