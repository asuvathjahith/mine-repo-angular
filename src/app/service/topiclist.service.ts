import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic} from '../Models/topic';
import { Course } from '../Models/course';


@Injectable({
  providedIn: 'root'
})
export class TopiclistService {

  constructor(private http: HttpClient) { }
  baseurl = "https://localhost:7161/Course/"
  getAllTopicByCourseId(id: number): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseurl + `GetAllTopicsByCourseId/${id}`)
}
}
 