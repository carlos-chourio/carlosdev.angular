import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { CommonUtilitiesModule } from './common-utilities/common-utilities.module';
import { PostSummaryComponent } from './posts/post-summary.component';
import { HamburgerButtonComponent } from './hamburger-button/hamburger-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ContactComponent,
    HomeComponent,
    PostsComponent,
    PostSummaryComponent,
    HamburgerButtonComponent
  ],
  imports: [
    BrowserModule,
    CommonUtilitiesModule,
    RouterModule.forRoot([
      { path: 'contact', component: ContactComponent },
      { path: '', component: HomeComponent },
      { path: 'posts-summary', component: PostSummaryComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
