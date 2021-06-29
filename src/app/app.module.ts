import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbComponent } from "./navb/navb.component";
import { FootComponent } from "./foot/foot.component";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";
import { ProfilComponent } from "./profil/profil.component";
import { EventComponent } from "./event/event.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpRequestInterceptor } from "./shared/auth/http.request.interceptor";
import { CreateEventModalComponent } from "./event/create-event-modal.component";
import { ToastrModule } from "ngx-toastr";
import { RegisterEventModalComponent } from "./event/register-event-modal.component";
import { ControlSpeedrunComponent } from "./admin/control-speedrun/control-speedrun.component";
import { SanitizeHtmlPipe } from "./tool/pipe.component";
import { RankingComponent } from "./ranking/ranking.component";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ControlSpeedrunEventComponent } from "./admin/control-speedrun/control-speedrun-event/control-speedrun-event.component";
import { EventTypeComponent } from "./event/event-type/event-type.component";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbComponent,
    FootComponent,
    FourOhFourComponent,
    ProfilComponent,
    EventComponent,
    CreateEventModalComponent,
    RegisterEventModalComponent,
    ControlSpeedrunComponent,
    ControlSpeedrunEventComponent,
    EventTypeComponent,
    SanitizeHtmlPipe,
    RankingComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpRequestInterceptor,
        multi: true,
      },
    ],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
