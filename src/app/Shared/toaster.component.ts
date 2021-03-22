import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Toast } from '../models/toast.interface';

@Component({
  selector: 'app-toaster',
  template: `
    <div class="toast"
      [style.bottom.px]="i*100">
      <div  class="toast-{{toast.type}}"></div>
      <div class="messageContainer">
      <h4 class="toast-heading">{{ toast.title}}</h4>
      <div class="alignXiconAndTitle">
        {{toast.body}}
      </div>
      </div>

      <a class="close" (click)="remove.emit(i)">&times;</a>
    </div>
  `,
  styles: [`
    .toast {
      position: fixed;
      left: 0;
      width: 350px;
      height: 120px;
      background-color: #fcfcfd;
      border-radius: .5rem;
      animation: move 2s ;
      display:flex;
      flex-wrap:nowrap;
      color: #7b8594;
      box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.16);
    }
    .messageContainer {
      padding:4px;
    }
    
    .alignXiconAndTitle {
      font-style:justify;
      margin:1px 8px;
    }
    .xred {
      font-size: 16px;
      color:red;
      padding-right:8px;

    }
    h4 {
      padding-top:8px;
    }
    .toast-success {
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
      background-color: #00c367;
      border-color: #00c367;
      width: 21px;
      height: 120px;
      border-top-left-radius: .5rem;
      border-bottom-left-radius: .5rem;
    }

    .toast-error {
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
      background-color:#ff0000;
      border-color:#ff0000;
      width: 21px;
      height: 120px;
      border-top-left-radius: .5rem;
      border-bottom-left-radius: .5rem;
    }

    .toast-warning {
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
      background-color: #feca6a;
      border-color: #feca6a;
      width: 21px;
      height: 120px;
      border-top-left-radius: .5rem;
      border-bottom-left-radius: .5rem;
    }

    .close {
      position: absolute;
      top: 7px;
      right: 10px;
      font-size: 1.5em;
      cursor: pointer;
    }

    .toast-heading {
      margin: 8px 10px;
      
    }

    @keyframes move {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(100%);
      }
  `]
})
export class ToasterComponent {
  @Input() toast: Toast;
  @Input() i: number;

  @Output() remove = new EventEmitter<number>();
}
