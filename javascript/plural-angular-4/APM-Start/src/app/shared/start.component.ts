import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.component.css"]
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 4;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  starWidth: number;
  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

  click() {
    console.log(`The rating ${this.rating} was clicked`);
    this.notify.emit("EMITINDO UM EVENTO");
  }
}
