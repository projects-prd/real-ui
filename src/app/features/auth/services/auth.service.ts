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
import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  user,
  UserCredential
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
    ).then(async (credential) => {
      if (credentials.fullName) {
        await updateProfile(credential.user, { displayName: credentials.fullName });
      }
      return credential;
    });
    return from(promise);
  }

  resetPassword(email: string): Observable<void> {
    return from(sendPasswordResetEmail(this.auth, email));
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
