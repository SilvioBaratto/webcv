import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  activeEducation = 0;

  educationJobs = [
    {
      Tab: 'MSc',
      Title: 'Data Science & Scientific Computing',
      Date: 'September 2021 - December 2023',
      Description: []
    },
    {
      Tab: 'Erasmus+',
      Title: 'Mathematics and Computer Science',
      Date: 'September 2022 - February 2023',
      Description: []
    },
    {
      Tab: 'BSc',
      Title: 'Electronic and Computer Engineering',
      Date: 'September 2016 - December 2020',
      Description: []
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
