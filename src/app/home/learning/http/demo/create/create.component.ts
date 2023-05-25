import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { HttpDemoPostComponent } from "../post/post.component";
import { PostsService } from "../posts.service";

@Component({
    standalone: true,
    imports: [FormsModule, CommonModule, RouterModule, HttpDemoPostComponent],
    templateUrl: './create.component.html'
})
export class HttpDemoCreatePostComponent implements OnInit {
    loading: boolean = true
    post: Post | undefined
    constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            if(params['id']) {
                this.postsService.fetchPost(params['id']).subscribe(post => {
                    this.post = post
                    this.loading = false
                }, (error) => {
                    alert(error.message)
                    this.loading = false
                })
            } else {
                this.loading = false
            }
        })
    }

    handleSubmit(data: { title: string, body: string }) {
        this.loading = true
        if(this.post) {
            this.postsService.updatePost({ ...data, id: this.post.id }).subscribe(() => {
                this.loading = false
                this.router.navigate(['/learning/http'])
            }, (error) => {
                this.loading = false
                alert(error.message)
            })
        } else {
            this.postsService.createPost(data).subscribe(() => {
                this.loading = false
                this.router.navigate(['/learning/http'])
            }, (error) => {
                this.loading = false
                alert(error.message)
            })
        }
    }
    
}