import { Subject, map } from "rxjs";
import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class PostsService {
    error = new Subject<string>()
    private baseUrl = 'https://comic-leopard-80.hasura.app/api/rest'

    constructor(private http: HttpClient) {}

    fetchPosts() {
        return this.http.get<{ posts: Post[] }>(`${this.baseUrl}/posts`).pipe(map(response => response.posts))
    }

    fetchPost(id: number) {
        return this.http.get<{ posts_by_pk: Post}>(`${this.baseUrl}/post/${id}`).pipe(map(response => response.posts_by_pk))
    }

    createPost(data: { title: string, body: string }) {
        return this.http.post<{ insert_posts_one: Post }>(`${this.baseUrl}/create_post`, { ...data }).pipe(map(response => response.insert_posts_one))
    }

    updatePost(data: { title: string, body: string, id: number }) {
        return this.http.put<{ update_posts_by_pk: Post }>(`${this.baseUrl}/update_post`, data).pipe(map(response => response.update_posts_by_pk))
    }

    deletePost(id: number) {
        return this.http.delete<{ delete_posts_by_pk: Post }>(`${this.baseUrl}/delete_post/${id}`).pipe(map(response => response.delete_posts_by_pk))
    }
}