import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  

  courses : Course[] = [
    {abbreviation : "BSIT", fullName : "Bachelor of Science in Information Technology"},
    {abbreviation : "BSCPE", fullName : "Bachelor of Science in Computer Engineering"},
    {abbreviation : "BEEd-ECED", fullName : "Bachelor of Early Childhood Education"},
    {abbreviation : "BSEd-SCI", fullName : "Bachelor of Secondary Education major in Science"},
    {abbreviation : "BEEd-GEN", fullName : "Bachelor of Elementary Education - Generalist"},
    {abbreviation : "BSBA-HRM", fullName : "Bachelor of Science in Business Administration Major in Human Resource Management"},
    {abbreviation : "BSE", fullName : "Bachelor of Science in Entrepreneurship"},
  ]





}
