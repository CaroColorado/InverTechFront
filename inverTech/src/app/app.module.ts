import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderuserinfoComponent } from './headeruserinfo/headeruserinfo.component';
import { MainuserinfoComponent } from './mainuserinfo/mainuserinfo.component';

import { MessageComponent } from './profiling/message/message.component';
import { ProfilingComponent } from './profiling/profiling.component';
import { LearningPathComponent } from './LearningPath/learning-path.component';
import { LearningheaderComponent } from './LearningPath/learningheader/learningheader.component';
import { LearningsectionComponent } from './LearningPath/learningsection/learningsection.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MainPageComponent } from './mainPage/main-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ReactiveFormsModule } from '@angular/forms';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ModalComponent } from './modal/modal.component';
import { ErrorRegisterModalComponent } from './modal/errorregister-modal.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NewContentComponent } from './new-content/new-content.component';
import { FormsModule } from '@angular/forms';
import { ContentListComponent } from './content-list/content-list.component';
import { ErrorLoginModalComponent } from './modal/errorlogin-modal.component';
import { JwtInterceptorInterceptor } from './interceptors/jwt-interceptor.interceptor';
import { PaypalComponent } from './paypal/paypal.component';
import {MaterialModule} from '../app/commons/material/material.module';



@NgModule({
  declarations: [
    //Aqui se deben declarar TODOs lo componentes que se van a usar, a menos de que sean hijos de otros componentes y no se deban mostrar aca
    AppComponent,
    ProfilingComponent,
    MessageComponent,
    LearningPathComponent,
    LearningheaderComponent,
    LearningsectionComponent,
    HeaderuserinfoComponent,
    MainuserinfoComponent,
    UserInfoComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,

    ModalComponent,
    ErrorRegisterModalComponent,
    ErrorLoginModalComponent,
    //DialogElementsExampleDialog


    NewContentComponent,
    ContentListComponent,
    PaypalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    

    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())

  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass: JwtInterceptorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
