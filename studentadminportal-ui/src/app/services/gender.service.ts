import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gender } from '../models/api-models/gender.model';

@Injectable({
  providedIn: 'root'
})
export class GenderService {
  private baseApiUrl = 'https://localhost:44388';

  constructor(private httpClient: HttpClient) { }

  getGenderList():Observable<Gender[]>
  {
    return this.httpClient.get<Gender[]>(this.baseApiUrl +'/Gender');
  }
}
