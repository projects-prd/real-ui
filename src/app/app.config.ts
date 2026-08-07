import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { routes } from './app.routes';
import { environment } from '@env/environment';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { MessageService } from 'primeng/api';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    provideFirebaseApp(() => initializeApp(environment.firebase)),

    provideAuth(() => getAuth()),

    provideDatabase(() => getDatabase()),

    provideRouter(routes),
    provideHttpClient(),

    MessageService,

    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          options: {
            cssLayer: false,
          },
        },
      },
    }),
  ],
};



// import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideHttpClient } from '@angular/common/http';
//
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { getAuth, provideAuth } from '@angular/fire/auth';
// import { getDatabase, provideDatabase } from '@angular/fire/database';
//
// import { routes } from './app.routes';
// import { environment } from '@env/environment';
//
// import { providePrimeNG } from 'primeng/config';
// import Aura from '@primeuix/themes/aura';
// import { MessageService } from 'primeng/api';
//
// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//
//     // Firebase App
//     provideFirebaseApp(() => initializeApp(environment.firebase)),
//
//     // Firebase Auth
//     provideAuth(() => getAuth()),
//
//     // Firebase Realtime Database
//     provideDatabase(() => getDatabase()),
//
//     provideRouter(routes),
//
//     provideHttpClient(),
//
//     // PrimeNG Toast Service
//     MessageService,
//
//     // PrimeNG Theme
//     providePrimeNG({
//       theme: {
//         preset: Aura,
//       },
//     }),
//   ],
// };








// import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideHttpClient } from '@angular/common/http';
//
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { getAuth, provideAuth } from '@angular/fire/auth';
// import { getDatabase, provideDatabase } from '@angular/fire/database';
//
// import { routes } from './app.routes';
// import { environment } from '@env/environment';
//
// import { providePrimeNG } from 'primeng/config';
// import Aura from '@primeuix/themes/aura';
// import { MessageService } from 'primeng/api';
//
// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideBrowserGlobalErrorListeners(),
//
//     // Initialize Firebase base instance explicitly
//     provideFirebaseApp(() => {
//       return initializeApp(environment.firebase);
//     }),
//
//     // Provide sub-modules without passing getApp()
//     provideAuth(() => getAuth()),
//     provideDatabase(() => getDatabase()),
//
//     provideRouter(routes),
//     provideHttpClient(),
//
//     MessageService,
//
//     providePrimeNG({
//       theme: {
//         preset: Aura,
//       },
//     }),
//   ],
// };
