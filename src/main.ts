import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { jwtInterceptor } from './app/services/auth.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

bootstrapApplication(AppComponent,{
  providers: [
    provideHttpClient(withInterceptors([jwtInterceptor])),
    provideHttpClient(),
  ]
})
  .catch((err) => console.error(err));
