import { Component, ViewEncapsulation, Input, AfterViewInit, ElementRef } from "@angular/core";


@Component({
  selector: "read-more",
  template: `
        <div [class.collapsed]="isCollapsed" [ngClass]="{'isCollapsed': !isCollapsed}" class="pull-left pt-2 readMore">
            <ng-content></ng-content>
        </div>
        <a (click)="isCollapsed = !isCollapsed" [hidden]="dataLength" class="pt-2 pull-right">
          <img  alt="Voir Plus" class="resizeImage" src="../assets/Images/VectorFleche.svg" *ngIf="isCollapsed">

          <img  alt="Voir Plus" class="resizeImage" src="../assets/Images/VectorFleche1.svg" *ngIf="!isCollapsed">
        </a>
        <div class='cb'></div>
    `,
  styleUrls: ["./read-more.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ReadMoreComponent implements AfterViewInit {
  @Input() dataLength: boolean;
   @Input() maxHeight: number; // enable below comment if you want to show 1 or 2 lines of the content element
   @Input() maxWidth: number; // enable below comment if you want to show 1 or 2 lines of the content element
  public isCollapsed: boolean = true;
  public isCollapsable: boolean = false;
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
    // enable below comment if you want to show 1 or 2 lines of the content element
    let currentHeight = this.elementRef.nativeElement.getElementsByTagName(
      "div"
    )[0].offsetHeight;
    //collapsable only if the contents make container exceed the max height
    if (currentHeight > this.maxHeight) {
      this.isCollapsed = true;
      this.isCollapsable = true;
    }
  }
}
