import { Component, OnInit } from '@angular/core';
import { Question } from '../../../interface/question';
import { QuestionService } from '../../services/question.service';

@Component({
	selector: 'cba-questions',
	templateUrl: './questions.component.html',
	styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

	public questions: Array<Question>;

	constructor(
		private questServive: QuestionService
	) { }

	ngOnInit() {
		this.questServive.getAll()
			.then((response) => {
				this.questions = response;
			});
	}

}
