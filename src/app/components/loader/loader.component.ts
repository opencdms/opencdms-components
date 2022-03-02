import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.Emulated, // will not work with shadow dom as uses classes
})
export class LoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
