import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SocialMediaComponent } from './components/socialMedia/social-media.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolbarComponent,WelcomeComponent,SocialMediaComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NelsonApp';
}
