import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHamburgertoggle]'
})
export class HamburgertoggleDirective {

  @HostBinding('class.is-active')
  private isActive = false;

  @HostListener('click')
  toggleActive(): void {
    this.isActive = !this.isActive;
  }

}
