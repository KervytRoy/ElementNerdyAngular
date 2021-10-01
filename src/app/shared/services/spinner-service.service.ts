import { Injectable } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class SpinnerServiceService {

  constructor( private spinnerService: NgxSpinnerService ) { }
  public getSpinner(){
    this.spinnerService.show();
  }
  public detenerSpinner(){
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2200);
  }
}
