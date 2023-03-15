import { Component } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class  SpinnerComponent {
isLoading = this._spinnerService.isLoading;
  constructor(private _spinnerService: SpinnerService) { }

}