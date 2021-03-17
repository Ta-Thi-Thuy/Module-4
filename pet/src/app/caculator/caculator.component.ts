import { Component } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent  {

    output: number;
    first: number;
    second: number;
    operator = '+';
    onFirstChange(value: number) {
      this.first = Number(value);
    }
    onSecondChange(value: number) {
      this.second = Number(value);
    }
    onSelectChange(value) {
      this.operator = value;
    }
    calculate() {
      switch (this.operator) {
        case '+':
          this.output = this.first + this.second;
          break;
        case '-':
          this.output = this.first - this.second;
          break;
        case '*':
          this.output = this.first * this.second;
          break;
        case '/':
          this.output = this.first / this.second;
          break;
      }
    }
  }
