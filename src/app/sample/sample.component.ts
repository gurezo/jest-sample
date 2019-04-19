import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';
@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  constructor(private service: SampleService) {}

  ngOnInit() {
    this.service.method();
    console.log('this.service.method()', this.service.method());
  }
}
