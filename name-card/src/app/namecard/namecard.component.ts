import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-namecard',
  templateUrl: './namecard.component.html',
  styleUrls: ['./namecard.component.css']
})
export class NamecardComponent implements OnInit {
  @Input() cardName: string | undefined;
  @Input() email: string | undefined;
  @Input() phone: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
