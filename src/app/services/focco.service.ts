import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userLogin } from '../models/userLogin';
import { response } from '../models/response';
import { userRegister } from '../models/userRegister';

@Injectable({
  providedIn: 'root'
})
export class FoccoService {

  ApiUrl = `https://localhost:7168/api/Auth`;
  ApiUrlTransactions = `https://localhost:7168/api`;


  constructor(private http: HttpClient) { }

  public register(user: userRegister): Observable<response>{
    return this.http.post<response>(`${this.ApiUrl}/register`, user);
  }

  public login(user: userLogin): Observable<response>{
    return this.http.post<response>(`${this.ApiUrl}/login`, user)
  }

  public getAllTransactions(date: string): Observable<response>{
    return this.http.get<response>(`${this.ApiUrlTransactions}/Transactions/all/${date}`)
  }

  public getCashFLow(id:number, date: string): Observable<response>{
    return this.http.get<response>(`${this.ApiUrlTransactions}/Transactions/cashflow/${id}/${date}`);
  }

  public getCurrentBalance(date: string): Observable<response>{
    return this.http.get<response>(`${this.ApiUrlTransactions}/Transactions/balance/${date}`)
  }

  public getUser(): Observable<string> {
    return this.http.get<string>(`${this.ApiUrlTransactions}/Transactions/user`, { responseType: 'text' as 'json' });
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