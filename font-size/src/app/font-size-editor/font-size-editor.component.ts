import { Component, OnInit } from '@angular/core';
import { fontsize } from '../font-size';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.css']
})
export class FontSizeEditorComponent implements OnInit {
  font: fontsize = {
    fontSize: 14,
  }


  constructor() { }

  onChange(value: number) {
    this.font.fontSize = value;
}

  ngOnInit(): void {
  }

}
