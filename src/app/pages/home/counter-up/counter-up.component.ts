import { Component, OnInit, HostListener } from '@angular/core';
import { CounterInterface } from './counter.interface';

declare var $: any;
declare var jQuery: any;

@Component({
	selector: 'cba-counter-up',
	templateUrl: './counter-up.component.html'
})
export class CounterUpComponent implements OnInit {

	public counters: Array<CounterInterface> = [
		{
			num: 96,
			text: 'Famílias no aluguel social',
			image: 'assets/images/amarelo2.png',
			info: 'Termo de acordo'
		},
		{
			num: 1354,
			text: 'Moradias seladas',
			image: 'assets/images/azul2.png',
			info: 'Termo de acordo'
		},
		// {
		// 	num: 1151,
		// 	text: 'Imóveis prospectados',
		// 	image: 'assets/images/magenta2.png',
		// 	info: 'Banco de imóveis'
		// },
		{
			num: 34,
			text: 'Casos conciliados em mutirões',
			image: 'assets/images/magenta2.png',
			info: 'Termo de acordo'
		},
		{
			num: 23,
			text: 'Mudanças concluídas',
			image: 'assets/images/verde2.png',
			info: 'Balanço final'
		}
	];
	constructor() {}

	@HostListener('window:scroll', [])
	onWindowScroll() {
		const number = $(document).scrollTop();
		const oTop = $('#counter').offset().top - window.innerHeight / 2;
		let a = 0;
		if (a === 0 && number > oTop) {
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
		}
	}

	ngOnInit() {}

}
