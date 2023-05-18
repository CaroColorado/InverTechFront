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

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorModalComponent } from './modal/errormodal.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NewContentComponent } from './new-content/new-content.component';
import { FormsModule } from '@angular/forms';
import { ContentListComponent } from './content-list/content-list.component';


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
    ErrorModalComponent
    //DialogElementsExampleDialog


    NewContentComponent,
    ContentListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,

    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
