import { Component } from '@angular/core';

@Component({
  selector: 'nz-date-picker-jalali-demo-application-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  date = new Date();


  onChange(result: Date): void {
    console.log('onChange: ', result);
  }}
