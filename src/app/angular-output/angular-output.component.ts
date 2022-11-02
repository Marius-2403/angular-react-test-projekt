import { Component } from '@angular/core';
import { ReactReactInputDataExchange } from '../react-input/react-react-input-data-exchange.service';

@Component({
  selector: 'app-angular-output',
  templateUrl: './angular-output.component.html',
  styleUrls: ['./angular-output.component.css']
})
export class AngularOutputComponent {

  inputName: string = '';

  constructor(private reactReactInputDataExchange: ReactReactInputDataExchange) { }

  receiveInputName() {
    this.inputName = this.reactReactInputDataExchange.provideInputName();
  }

}
