import { FormControl } from "@angular/forms";

export interface FilterForm {
    title        : FormControl<string>;
    release_year : FormControl<string>;
}