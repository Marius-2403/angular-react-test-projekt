import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReactReactInputDataExchange {

  public provideInputName(): string {
    return (document.getElementById('inputname') as HTMLInputElement).value;
  }
  
}
