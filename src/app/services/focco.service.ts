import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userLogin } from '../models/userLogin';
import { response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class FoccoService {

  ApiUrl = `https://localhost:7168/api/Auth`;
  ApiUrlTransactions = `https://localhost:7168/api`;


  constructor(private http: HttpClient) { }

 /*  public register(user: user): Observable<any>{
    return this.http.post<any>(`${this.ApiUrl}/register`, user);
  } */

  public login(user: userLogin): Observable<response>{
    return this.http.post<response>(`${this.ApiUrl}/login`, user)
  }

  public getTransactions(): Observable<response>{
    return this.http.get<response>(`${this.ApiUrlTransactions}/Transactions/All`)
  }

  public logout(): void{
    localStorage.removeItem(`token`);
  }

  public getMe(): Observable<string>{
    return this.http.get(`${this.ApiUrl}`, {
      responseType: 'text'
    });
  }


}