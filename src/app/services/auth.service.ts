import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token_endpoint = environment.token_endpoint;

  constructor(private httpClient: HttpClient) {}
  //llamada como la del endpoint de obtener token ng
  public getToken(code: string, code_verifier: string): Observable<any> {
    let body = new URLSearchParams();
    body.set('grant_type', environment.grant_type);
    body.set('client_id', environment.client_id);
    body.set('redirect_uri', environment.redirect_uri);
    body.set('scope', environment.scope);
    body.set('code_verifier', code_verifier);
    body.set('code', code);
    //const basic_auth = 'Basic ' + btoa('client:secret');
    // Mejor calculado??
    const basic_auth = 'Basic Y2xpZW50OnNlY3JldA==';
    const headers_object = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: '*/*',
      Authorization: basic_auth,
    });
    const httpOptions = { headers: headers_object };
    return this.httpClient.post<any>(this.token_endpoint, body, httpOptions);
  }
}
