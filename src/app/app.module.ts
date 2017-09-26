import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WallpaperComponent } from './components/wallpaper/wallpaper.component';
import { WallpaperListComponent } from './components/wallpaper-list/wallpaper-list.component';

import { MetadataService } from './services/metadata.service';
import { WallpaperService } from './services/wallpaper.service';
import { TopNavComponent } from './components/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    WallpaperComponent,
    WallpaperListComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [
    MetadataService,
    WallpaperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
