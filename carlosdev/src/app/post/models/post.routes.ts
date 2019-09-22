import { PostsComponent } from '../components/posts.component';
import { PostSummaryComponent } from '../components/post-summary.component';
import { Route } from '@angular/router';

export const POST_ROUTES : Route[] = [
    { path: 'post', component : PostsComponent },
    { path: 'post-summary', component : PostSummaryComponent },
]

