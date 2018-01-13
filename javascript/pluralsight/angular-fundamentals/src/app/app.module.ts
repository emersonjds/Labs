import { ApproutingModule } from './approuting.module';
import { EventDetails } from './eventlist/event-details/event-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from './eventlist/shared/toastr.service';
import { EventService } from './eventlist/shared/event.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { EventlistComponent } from './eventlist/eventlist.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    EventlistComponent,
    ThumbnailComponent,
    NavbarComponent,
    ProfileComponent,
    EventDetails
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ApproutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
