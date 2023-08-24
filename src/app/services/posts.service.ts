import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseUrl: string = `${environment.backendOrigin}/posts`;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}`);
  }

  getPostById(id:number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }
}
