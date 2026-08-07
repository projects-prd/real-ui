// import { inject, Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from '@env/environment';
// import { RegisterCredentials } from '@features/auth/models/auth.model';
//
// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private http = inject(HttpClient);
//
//   private dbUrl = (environment as any).firebase?.databaseURL;
//
//   registerUser(credentials: RegisterCredentials): Observable<any> {
//     return this.http.post(`${this.dbUrl}/users.json`, credentials);
//   }
// }
import { AfterViewInit, inject, Injectable, OnInit, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { LoginCredentials, RegisterCredentials } from '@features/auth/models/auth.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);

  readonly user$ = user(this.auth);

  readonly currentUser = toSignal(this.user$, { initialValue: null });

  login(credentials: LoginCredentials): Observable<UserCredential> {
    const promise = signInWithEmailAndPassword(this.auth, credentials.email, credentials.password);
    return from(promise);
  }

  registerUser(credentials: RegisterCredentials): Observable<UserCredential> {
    const promise = createUserWithEmailAndPassword(
      this.auth,
      credentials.email,
      credentials.password,
    );
    return from(promise);
  }

  loginWithGoogle(): Observable<UserCredential> {
    const provider = new GoogleAuthProvider();
    const promise = signInWithPopup(this.auth, provider);
    return from(promise);
  }

  logout(): Observable<void> {
    return from(signOut(this.auth));
  }
}
