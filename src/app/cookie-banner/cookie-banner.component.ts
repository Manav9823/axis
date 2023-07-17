import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent {
  
  @Input() showCookieBanner!:boolean
  onAccept(){
    console.log('onAccept() method is working now')
  }
  displayResponsive:boolean = true
}
