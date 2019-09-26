import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HireMeComponent } from './hire-me/hire-me.component';
import { HomeComponent } from './home/home.component';
import { CommonUtilitiesModule } from './common-utilities/common-utilities.module';
import { PostModule } from './post/post.module';
import { POST_ROUTES } from './post/models/post.routes';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HireMeComponent,
    HomeComponent,
    SideNavBarComponent
  ],
  imports: [
    BrowserModule,
    CommonUtilitiesModule,
    PostModule,
    RouterModule.forRoot([
      { path: 'contact', component: HireMeComponent },
      { path: '', component: HomeComponent },
      ...POST_ROUTES
    ], {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
