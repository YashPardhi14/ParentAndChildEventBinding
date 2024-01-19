import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input()   parentMsg='';

@Output()  childEventEmit = new EventEmitter<string>();

childMsg=''
ChildInput(e:any){
this.childMsg=e.target.value;
}

sendToChild(){
  console.log(this.childMsg);

  this.childEventEmit.emit(this.childMsg);
  
}



}
