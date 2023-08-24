import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: Post[] = [];

  constructor(private postsService: PostsService, private router: Router) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(
      (posts: Post[])=>{
        this.posts = posts;
      }
    )
  }

  goToPost(postId: number ):void {
    this.router.navigate(['/post', postId]);
  }
}
