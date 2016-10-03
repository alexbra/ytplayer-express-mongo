import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HomeComponent } from './home.component';
import { VideoCollectionComponent } from './video-collection.component';
import { ManageVideosPageComponent } from './manage-videos-page.component';
import { VideoService,
         VideoGridComponent,
         VideoPlayerComponent,
         VideoWidgetComponent,
         VideoWidgetPlaylistComponent,
         VideoDetailComponent,
         ManageVideosComponent,
         ManageVideosListComponent,
         ManageVideoFormComponent } from './videos';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    VideoCollectionComponent,
    VideoPlayerComponent,
    VideoWidgetComponent,
    VideoWidgetPlaylistComponent,
    VideoGridComponent,
    VideoDetailComponent,
    ManageVideosPageComponent,
    ManageVideosComponent,
    ManageVideosListComponent,
    ManageVideoFormComponent
  ],
  providers: [ VideoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
