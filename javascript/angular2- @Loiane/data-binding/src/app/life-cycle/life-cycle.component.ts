import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {

  @Input() valorInicial: number = 10

  constructor() {
    this.log('constructor')
  }

  ngOnInit() {
    this.log('ngOnInit')
  }

  ngOnChanges() {
    this.log('ngOnChanges')
  }

  ngDoCheck() {
    this.log('doCheck')
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit')
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')
  }

  ngOnDetroy() {
    this.log('ngOnDetroy')
  }

  private log(hook: string) {
    console.log(hook)
  }

}
