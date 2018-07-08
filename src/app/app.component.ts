import { Component } from '@angular/core';
import { NODES } from './tree/mock-nodes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular tree like structure';

  nodes = NODES;
}

