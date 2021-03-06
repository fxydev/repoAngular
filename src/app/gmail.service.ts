import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GmailService {

  constructor(private http: HttpClient, private login: LoginService) { }

  public getRecibidos =  () => {
    const url = "https://www.googleapis.com/gmail/v1/users/"+this.login.userId+"/messages?";
    const authToken = this.login.tokenUser;
    let headers = new HttpHeaders({ Authorization: `Bearer ${authToken}`});
    return this.http.get(url, { headers } );
  };

  public getMessage =  (id: string) => {
    const url = "https://www.googleapis.com/gmail/v1/users/"+this.login.userId+"/messages/"+id;
    const authToken = this.login.tokenUser;
    let headers = new HttpHeaders({ Authorization: `Bearer ${authToken}`});

    let params = new HttpParams();
    params = params.append('format', 'full');

    return this.http.get(url, { headers:headers, params: params } );
  };
  
  public sendMessage =  (text: string, to: string, subject: string) =>{
    const url = "https://www.googleapis.com/gmail/v1/users/"+this.login.userId+"/messages/send";
    const authToken = this.login.tokenUser;

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    });

    const emailTemplate = 
      "Content-Type:  text/plain; charset=\"UTF-8\"\nContent-length: 5000\nContent-Transfer-Encoding: message/rfc2822\n" +
      `To: ${to}\n`+
      `Subject: ${subject}\n\n`+
      `${text}`;
    const base64EncodedEmail = btoa(emailTemplate).replace(/\+/g, '-').replace(/\//g, '_');

    return this.http.post(url, { 'raw': base64EncodedEmail }, { headers: headers } );
  }
}