import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WallpaperComponent } from './components/wallpaper/wallpaper.component';
import { WallpaperListComponent } from './components/wallpaper-list/wallpaper-list.component';

import { MetadataService } from './services/metadata.service';
import { WallpaperService } from './services/wallpaper.service';

@NgModule({
  declarations: [
    AppComponent,
    WallpaperComponent,
    WallpaperListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    MetadataService,
    WallpaperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
