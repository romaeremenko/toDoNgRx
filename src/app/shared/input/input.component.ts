import {AfterViewInit, Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor, AfterViewInit {
  private value = new FormControl();
  private onTouchedCallback: () => void;
  private onChangeCallback: (_: any) => void;

  ngAfterViewInit() {
    this.value.valueChanges.subscribe((x) => {
      this.onChangeCallback(x);
    });
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(value: any) {
    this.value.setValue(value);
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {}

}
