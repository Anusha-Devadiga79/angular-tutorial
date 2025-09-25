import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class Masterr {
  
  constructor(private http:HttpClient){ }

    getDesignations():Observable<APIResponseModel>{
      return this.http.get<APIResponseModel>('http://localhost:3000/designations');
    }
   
  }