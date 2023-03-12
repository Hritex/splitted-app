import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked {
  @Input('srvElement') element: { type: string; name: string; content: string; } | any;
  @Input() name: string | any;

  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges called!');
      console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngDoCheck(): void{
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
      console.log('ngAfterContentInit called!'); // Will be called due to ng-content in html
  }

  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked called! ');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterView called!');
  }

  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked called!');
  }

}
