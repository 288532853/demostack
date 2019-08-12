import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaxCodeService {

  constructor(private _router: Router,private http : HttpClient) { }

//Get TaxCode List
  getTaxCode() {
    return this.http.get(environment.apiURL+'/TaxCode/GetTaxCodeList');
  }

  addUpdateTaxCode(data) {
    return this.http.post(environment.apiURL+'/TaxCode/AddUpdateTaxCode',data);
  }

  getTaxType(){
    return this.http.get(environment.apiURL+'/TaxCode/GetTaxType');
  }

}//end class


