import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
	selector: 'cba-warning',
	templateUrl: './warning.component.html',
	styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

	constructor(
		private router: Router
	) { }

	ngOnInit() {
		setTimeout(function() {
			$(".modal").each(function(l){$(this).on("show.bs.modal",function(l){var o=$(this).attr("data-easein");"shake"==o?$(".modal-dialog").velocity("callout."+o):"pulse"==o?$(".modal-dialog").velocity("callout."+o):"tada"==o?$(".modal-dialog").velocity("callout."+o):"flash"==o?$(".modal-dialog").velocity("callout."+o):"bounce"==o?$(".modal-dialog").velocity("callout."+o):"swing"==o?$(".modal-dialog").velocity("callout."+o):$(".modal-dialog").velocity("transition."+o)})});

			$('#warning').modal('show');
		}, 5500);

	}

	public goTo(url: string): void {
		$('#warning').modal('hide');
		this.router.navigate([url]);
	}

}
