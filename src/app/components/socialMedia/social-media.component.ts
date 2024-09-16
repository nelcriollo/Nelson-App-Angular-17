import { Component } from '@angular/core';
import { SocialMediaElementComponent } from './social-media-element/social-media-element.component';
import { SocialMediaElement } from './models';
import { MainContainerComponent } from '../layout/main-container';
import { WobbleDirective } from '../directives/animations';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [SocialMediaElementComponent, MainContainerComponent, WobbleDirective],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  socialMediaList: SocialMediaElement[] = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com',
      imgPath: 'assets/imagenes/facebook.png'
    },
    {
      name: 'Twitter',
      link: 'https://www.twitter.com',
      imgPath: 'assets/imagenes/twitter.png'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com',
      imgPath: 'assets/imagenes/instagram.png'
    }
  ];

}
