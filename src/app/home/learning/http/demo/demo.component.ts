import { Component, OnInit } from "@angular/core";
import { HttpDemoPostComponent } from "./post/post.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PostsService } from "./posts.service";
import { catchError, of } from "rxjs";

@Component({
    standalone: true,
    imports: [HttpDemoPostComponent, RouterModule, CommonModule],
    templateUrl: './demo.component.html'
})
export class HttpDemoComponent implements OnInit {
    posts: Post[] = []
    loading: boolean = true

    constructor(private postsService: PostsService) {}

    ngOnInit(): void {
        this.postsService.fetchPosts().pipe(catchError((error) => {
            this.loading = false
            alert(error.message)
            return of(error.message)
        })).subscribe(posts => {
            this.loading = false
            // posts.sort((a, b) => a.id - b.id)
            this.posts = posts
        })
    }
}