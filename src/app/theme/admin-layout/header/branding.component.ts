import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="matero-branding" href="#/">
      <img src="./assets/images/octa_logo.svg" class="matero-branding-logo-expanded" alt="" />
<!--      <span class="matero-branding-name">Octa Energy</span>-->
    </a>
  `,
})
export class BrandingComponent {}
