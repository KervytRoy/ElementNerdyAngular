import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../api/services/post.service';
import { SpinnerServiceService } from '../../../shared/services/spinner-service.service';


@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {
  public lisBlog =  []
  constructor(private postService: PostService, private spinner: SpinnerServiceService) {

   }

  ngOnInit(): void {
    const data = {PageSize:1, PageNumber: 4}
    this.postService.getPosts().subscribe(
      res => {
       this.lisBlog = res.data
      },
      err => {
        console.log('err666',err);
      }
    )
  }




}
