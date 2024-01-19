import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  parentMsg='';
  childMsg='';

  getParentInput(event:any){
    this.parentMsg=event.target.value;
  }

  sendToChild(){
    console.log(this.parentMsg);
    
  }

  parentMsgg(){
    return this.parentMsg;
  }
  getChildMsg(msg:any){
this.childMsg=msg;
  }

}
