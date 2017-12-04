import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ng2-form',
    templateUrl: './ng2-forms.html',
    styleUrls: ['./ng2-forms.scss']
})
export class NG2Component {
    public startDate= new Date('Jan 1 2017');
    minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);
 
  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

  startTime = new Date('Jan 1 2017 3:00 PM');
  singleModel: any;
  taxtType = 'W2';

}