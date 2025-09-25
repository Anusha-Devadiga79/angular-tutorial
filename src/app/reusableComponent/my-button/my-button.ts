import { Component, Input, Output, EventEmitter, output} from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css'
})
export class MyButton {
  @Input() btnText:string = '';
  @Input() btnClass:string = '';

@Output() onBtnClicked = new EventEmitter<any>();

  onClick(){
    debugger;
    this.onBtnClicked.emit('admin');
  }
}
