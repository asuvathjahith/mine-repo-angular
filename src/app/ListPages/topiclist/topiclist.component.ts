import { Component, OnInit } from '@angular/core';
import { CourseDTO } from 'src/app/Models/CourseDTO';
import { Topic } from 'src/app/Models/topic';



import { TopiclistService } from 'src/app/service/topiclist.service';

@Component({
  selector: 'app-topiclist',
  templateUrl: './topiclist.component.html',
  styleUrls: ['./topiclist.component.css']
})
export class TopiclistComponent implements OnInit {
  constructor(private topicService:TopiclistService ) { }
  course:CourseDTO={
    id: 20,
    statusId: 1,
    trainerId: 1,
    departmentId: 1,
    name: 'ASP.Net',
    duration: '40 hours',
    description: 'Framework',
  }
  public data: Topic[]=[]
  ngOnInit(): void {
    this.getAllTopics()
  }

  getAllTopics(){
    this.topicService.getAllTopicByCourseId(1).
      subscribe(res =>{
        console.log(res)
        this.data=res
      })
  }

// constructor(private topicService: TopiclistService) { }
//   data: TopicDTO[] = []
//   ngOnInit(): void {
//     this.getAll()
//   }
//   getAll() {
//     this.topicService.getAllTopicByCourseId(1).subscribe(res => {
//       console.log(res)
//       this.data = res
//     })
//   }
}
