import { NgModule } from '@angular/core';
import { CommonUtilitiesModule } from '../common-utilities/common-utilities.module';
import { PostsComponent as PostsComponent } from './components/posts.component';
import { PostSummaryComponent } from './components/post-summary.component';



@NgModule({
  declarations: [
    PostsComponent,
    PostSummaryComponent
  ],
  imports: [
    CommonUtilitiesModule
  ],
  exports: [
    PostsComponent,
    PostSummaryComponent
  ]
})
export class PostModule { }
