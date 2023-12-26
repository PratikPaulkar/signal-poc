import { Component, Input, ViewChild } from '@angular/core';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(Component1Component) childComponent1: Component1Component | undefined;
  @ViewChild(Component2Component) childComponent2: Component2Component | undefined;
  title = 'signal-poc';
}
