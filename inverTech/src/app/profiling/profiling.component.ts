import { Component } from '@angular/core';

@Component({
  selector: 'app-profiling',
  templateUrl: './profiling.component.html',
  styleUrls: ['./profiling.component.css']
})
export class ProfilingComponent {
  messageParent: number = 0;
  rangeValue: number = 0;
  tamanoRange: number = 25;

  siguiente(){
    if(this.messageParent < 7){
      this.messageParent = this.messageParent + 1;
      this.rangeValue = this.messageParent;
      this.tamanoRange = this.tamanoRange + 25;
    } 
  }

  anterior(){
    if(this.messageParent > 0){
      this.messageParent = this.messageParent - 1;
      this.rangeValue = this.messageParent;
      this.tamanoRange = this.tamanoRange - 25;
    }
  }
}
