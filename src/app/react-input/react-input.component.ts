import { AfterViewInit, Component, OnChanges, SimpleChanges } from '@angular/core';

import * as React from 'react';
import { createRoot } from 'react-dom/client';

import ReactComponentReactInput from './react-component-react-input'

@Component({
  selector: 'app-react-input',
  template: '<div [id]="reactComponentReactInputId"></div>'
})
export class ReactInputComponent implements OnChanges, AfterViewInit {
  
  public reactComponentReactInputId = 'reactComponentReactInputId';

  ngOnChanges(_changes: SimpleChanges) {
    this.render()
  }

  ngAfterViewInit() {
    this.render()
  }

  private render() {
    const container = document.getElementById(this.reactComponentReactInputId);
    const root = createRoot(container!);
    root.render(React.createElement(ReactComponentReactInput));
  }

}
