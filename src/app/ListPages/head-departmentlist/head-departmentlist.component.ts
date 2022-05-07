import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-departmentlist',
  templateUrl: './head-departmentlist.component.html',
  styleUrls: ['./head-departmentlist.component.css']
})
export class HeadDepartmentlistComponent implements OnInit {
  role ="Head"
  constructor() { }

  ngOnInit(): void {
  }

}
