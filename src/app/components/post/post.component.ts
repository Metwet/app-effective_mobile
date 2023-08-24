import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() post?: Post;
  loadedPost?: Post;
  postId?: number;

  constructor (private route: ActivatedRoute, private postService: PostsService, private router: Router) {}

  ngOnInit(): void {
    if(this.post){
      this.loadedPost = this.post;
    } else {
      this.route.params.subscribe(params => {
        this.postId = +params['id'];
        if(this.postId){
          this.loadPost(this.postId);
        }
      });
    }
  }

  loadPost(id: number): void {
    this.postService.getPostById(id).subscribe(
      (data)=>{
        this.loadedPost = data;
      }
    );
  }

  goToList(): void {
    this.router.navigate(['/posts']);
  }
}
