import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WarningService } from '../services/warning.service';
import { Warning } from '../../interface/warning';

declare var jquery: any;
declare var $: any;

@Component({
	selector: 'cba-warning',
	templateUrl: './warning.component.html',
	styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

	public alert: Warning;

	constructor(
		private router: Router,
		private warning: WarningService
	) { }

	ngOnInit() {
		this.warning.getAll()
			.then((response) => {
				this.alert = response[0];
				if (this.alert) {
					setTimeout(function() {
						$(".modal").each(function(l){$(this).on("show.bs.modal",function(l){var o=$(this).attr("data-easein");"shake"==o?$(".modal-dialog").velocity("callout."+o):"pulse"==o?$(".modal-dialog").velocity("callout."+o):"tada"==o?$(".modal-dialog").velocity("callout."+o):"flash"==o?$(".modal-dialog").velocity("callout."+o):"bounce"==o?$(".modal-dialog").velocity("callout."+o):"swing"==o?$(".modal-dialog").velocity("callout."+o):$(".modal-dialog").velocity("transition."+o)})});

						$('#warning').modal('show');
					}, 5500);
				}
			});

	}

	public goTo(url: string): void {
		$('#warning').modal('hide');
		this.router.navigate([url]);
	}

}
