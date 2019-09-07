import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cbutton',
  templateUrl: './cbutton.component.html',
  styleUrls: ['./cbutton.component.scss']
})
export class CbuttonComponent implements OnInit {
  @Input() value;
  constructor() { }

  ngOnInit() {
  }

}
