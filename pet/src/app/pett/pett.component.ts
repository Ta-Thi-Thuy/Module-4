import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pett',
  templateUrl: './pett.component.html',
  styleUrls: ['./pett.component.css']
})
export class PettComponent implements OnInit {


  petName = 'puppie';
  petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';

  updateName(name: string) {
      this.petName = name;
  }

  updateImage(image: string) {
      this.petImage = image;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
