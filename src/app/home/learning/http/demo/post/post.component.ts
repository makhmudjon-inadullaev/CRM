import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { EllipseTextPipe } from "./ellipse.pipe";
import { RouterModule } from "@angular/router";
import { PostsService } from "../posts.service";

@Component({
    standalone: true,
    imports: [CommonModule, EllipseTextPipe, RouterModule],
    selector: 'app-learning-http-post',
    templateUrl: './post.component.html',
})
export class HttpDemoPostComponent {
    deleted = false
    deleting = false
    @Input() title: string = ''
    @Input() body: string = ''
    @Input() id: number = 0
    @Input() pure: boolean = false

    constructor(private postsService: PostsService) {}

    handleDelete() {
        this.deleting = true
        this.postsService.deletePost(this.id).subscribe(() => {
            this.deleted = true
            this.deleting = false
        }, (error) => {
            this.deleting = false
            alert(error.message)
        })
    }
}