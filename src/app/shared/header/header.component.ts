import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 @ViewChild('searchInput') searchInput!:ElementRef

 focusInput(){
  this.searchInput.nativeElement.focus()
 }
}
