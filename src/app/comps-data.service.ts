import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { comp } from './comp-list/comp';

const URL = 'https://6328746b9a053ff9aab85fbf.mockapi.io/Computers';

@Injectable({
  providedIn: 'root'
})
export class CompsDataService {

  constructor(private http: HttpClient) { }

  public getAll():Observable<comp[]>{
    
    return this.http.get<comp[]>(URL)
              .pipe(
                tap((computers:comp[])=>computers.forEach(computers=>computers.quantity=0))
              );
  }
}
