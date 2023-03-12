import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: { type: string; name: string; content: string; } | any;
  @Input() name: string | any;
  @ViewChild('heading') header: ElementRef | any;

  constructor() {
    console.log('Constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges called!');
      console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content ' + this.header.nativeElement.textContent);
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
    console.log('Text Content ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
