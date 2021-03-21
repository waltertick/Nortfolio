import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Toast } from '../models/toast.interface';

@Component({
  selector: 'app-toaster',
  template: `
    <div class="toast toast-{{toast.type}}"
      [style.bottom.px]="i*100">
      <div class="alignXiconAndTitle">
      <span class="xred">X</span>
      <h4 class="toast-heading">{{ toast.title}}</h4>
      </div>
      <p>{{toast.body}}</p>
      <a class="close" (click)="remove.emit(i)">&times;</a>
    </div>
  `,
  styles: [`
    .toast {
      position: fixed;
      left: 0;
      width: 320px;
      height: 120px;
      padding: .75rem 1.01rem;
      margin-top: 1rem;
      
      border-radius: .25rem;
      animation: move 2s ;
    }
    .alignXiconAndTitle {
      display:flex;
      flex-wrap:nowrap;
    }
    .xred {
      font-size: 16px;
      color:red;
      padding-right:8px;

    }
    .toast-success {
      color: #acb8cb;
      background-color: #4d6180;
      border-color: #c3e6cb;
      box-shadow: 0px 4px 10px rgba(146, 143, 143, 0.431);
    }

    .toast-error {
      color: #acb8cb;
      background-color: #4d6180;
      border-color: #f5c6cb;
      box-shadow: 0px 4px 10px rgba(146, 143, 143, 0.431);
    }

    .toast-warning {
      color: #acb8cb;
      background-color: #4d6180;
      border-color: #ffeeba;
      box-shadow: 0px 4px 10px rgba(146, 143, 143, 0.431);
    }

    .close {
      position: absolute;
      top: 7px;
      right: 10px;
      font-size: 1.5em;
      cursor: pointer;
    }

    .toast-heading {
      margin-top: 0px;
      margin-left: 10px;
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
