import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post.model';
import { Author } from '../models/author.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl: string = `${environment.backendOrigin}/posts`;
  private userUrl: string = `${environment.backendOrigin}/users`;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}`);
  }

  getPostById(id:number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }

  getAuthorById(userId: number): Observable<string> {
    return this.http.get<Author[]>(`${this.userUrl}`).pipe(
      map(
        users => {
          const user = users.find(userData => userData.id === userId);
          return user ? user.username : '';
        }
      )
    )
  }
}
