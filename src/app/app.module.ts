import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NZ_DATE_CONFIG, NzDateAdapter, NzDatePickerModule} from "nz-date-picker-jalali";
import {JalaliMomentDateAdapter} from "./jalali-moment.adapter";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BrowserAnimationsModule, FormsModule, NzDatePickerModule],
    providers: [
        {provide: NzDateAdapter, useClass: JalaliMomentDateAdapter},
        {
            provide: NZ_DATE_CONFIG, useValue: {
                displayFormats: {
                    veryShortWeekLabel: 'dd',
                    dateInput: 'yyyy/MM/DD',
                    dateTimeInput: 'yyyy-MM-DD HH:mm:ss'
                }
            }
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
