import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ROUTES } from './questions.routes';
import { QuestionsComponent } from './questions.component';
import { QuestionService } from '../../services/question.service';


@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ROUTES),
	],
	declarations: [QuestionsComponent],
	providers: [QuestionService]
})
export class QuestionsModule { }
