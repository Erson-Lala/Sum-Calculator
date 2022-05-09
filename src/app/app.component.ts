import { Component, Input, Directive } from '@angular/core';
import { AddService } from './add.service';

@Component({
  selector: 'app-root',
  // template: `<button [directiveListen] = 'counter' (click)="run()">Change</button>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// Sum of two numbers logic goes here: 
num1: number = 0;
num2: number=0;
sum: number=0;

constructor(public addServ:AddService) {   
}
add() {
  this.sum=this.addServ.addSum(this.num1, this.num2)
}


























//   title = 'lesson_three_part_two';
//   counter = 3;
//   run() {
//     this.counter ++;
//   }
// }

// @Directive({
//   selector: '[directiveListen]'
// })
//  export class DirectiveListen {
//   @Input() directiveListen: any;
//   ngOnChanges(chg: any) {
//     alert (
//       `CurrentValue:` + chg.directiveListen.currentValue +
//       '\r\n previewsValue' + chg.directiveListen.previousValue
//     )
//   }
 }
