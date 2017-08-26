import { Component, OnInit, HostListener } from '@angular/core';
import { CounterInterface } from './counter.interface';

declare var $: any;
declare var jQuery:any;

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
			num: 1151,
			text: 'Imóveis prospectados'
		},
		{
			num: 108,
			text: 'Indenizações concluídas'
		}
	];
	constructor() {}

	@HostListener('window:scroll', [])
	onWindowScroll() {
		const number = document.body.scrollTop;
		const oTop = $('#counter').offset().top - window.innerHeight / 2;
		let a = 0;
		if (a === 0 && number > oTop) {
			a = 1;
			$('.count').each(function() {
				const $this = $(this);
				const countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
						countNum: countTo
					},
					{
						duration: 2500,
						easing: 'swing',
						step: function() {
							$this.text(Math.floor(this.countNum));
						},
						complete: function() {
							$this.text(this.countNum);
							a = 0;
						}

					});
			});
		} else if (a === 0 && number < oTop) {
			$('.count').each(function() {
				const $this = $(this);
				$this.text(0);
			});
		}
	}

	ngOnInit() {}

}
