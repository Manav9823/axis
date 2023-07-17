import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-banner-parent',
  templateUrl: './cookie-banner-parent.component.html',
  styleUrls: ['./cookie-banner-parent.component.scss']
})
export class CookieBannerParentComponent {
  showCookieBanner:boolean = true;
}
