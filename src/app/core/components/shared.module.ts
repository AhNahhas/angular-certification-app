import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MovieHeaderComponent } from "./movie-header/movie-header.component";
import { BudgetPipe } from "../pipes/budget/budget.pipe";
import { DurationPipe } from "../pipes/duration/duration.pipe";
import { Router, RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        MovieHeaderComponent,
        BudgetPipe,
        DurationPipe
    ],
    imports: [
        CommonModule, 
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MovieHeaderComponent,
        BudgetPipe,
        DurationPipe
    ]
})
export class SharedModule { }