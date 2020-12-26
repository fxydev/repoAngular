import { Injectable, NgZone } from "@angular/core";
import * as _ from "lodash";
import { GoogleAuthService } from "ng-gapi";
import GoogleUser = gapi.auth2.GoogleUser;


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public static readonly SESSION_STORAGE_KEY: string = "usuarioGoogle";

  profile: any = undefined;
  tokenUser: any;
  userId: any;

  constructor(public googleAuthService: GoogleAuthService, private ngZone: NgZone) { 
    if(this.isUserSignedIn()){
      this.setUser(this.getSessionUser());
    }
  }

private setUser(user: any){
    this.profile = user;
    this.tokenUser = user.access_token;
    this.userId = this.profile;
}

  public getSessionUser(): GoogleUser {
    let user: any = sessionStorage.getItem(LoginService.SESSION_STORAGE_KEY);
    if (!user) {
      throw new Error("no token set , authentication required");
    }
    return JSON.parse(user);
  }

  public signIn() {
    this.googleAuthService.getAuth().subscribe((auth:any) => {
      auth.signIn().then(
        (        res: any) => this.signInSuccessHandler(res),
        (        err: any) => this.signInErrorHandler(err));
    });
  }

  public signOut(): void {
    this.googleAuthService.getAuth().subscribe((auth:any) => {
      try {
        auth.signOut();
        this.profile = undefined;
        this.tokenUser = undefined;
        this.userId = undefined;
      } catch (e) {
        console.error(e);
      }
      sessionStorage.removeItem(LoginService.SESSION_STORAGE_KEY);
    });
  }

  public isUserSignedIn(): boolean {
    return !_.isEmpty(sessionStorage.getItem(LoginService.SESSION_STORAGE_KEY));
  }

  private signInSuccessHandler(res: GoogleUser) {
    console.log('Sesion iniciada como '+res.toString());
    this.ngZone.run(() => {
      this.setUser(res);
      sessionStorage.setItem(
        LoginService.SESSION_STORAGE_KEY, JSON.stringify(res)
      );
    });
  }

  private signInErrorHandler(err:any) {
    console.warn(err);
  }
} 