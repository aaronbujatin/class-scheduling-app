import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Schedule } from '../model/schedule.mode';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course.model';
import { User } from '../model/user.model';
import { AuthenticationService } from '../service/authentication.service';
import { ScheduleService } from '../service/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  constructor(private authenticationService : AuthenticationService, 
    private scheduleService : ScheduleService,
    private activatedRoute: ActivatedRoute,) { }

  params: string
  course: string

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.getScheduleByInstructorNameAndCourse(params['course']))
    this.activatedRoute.params.subscribe(params => {
      this.params = params[('course')];
    })

    if (this.params === 'BSIT') {
      this.course = "Bachelor of Science In Information Technology";
    } else if (this.params === 'BSCPE') {
      this.course = "Bachelor of Science in Computer Engineering"
    } else if (this.params === 'BEEd-ECED') {
      this.course = "Bachelor of Early Childhood Education"
    } else if (this.params === 'BSEd-SCI') {
      this.course = "Bachelor of Secondary Education major in Science"
    } else if (this.params === 'BEEd-GEN') {
      this.course = "Bachelor of Elementary Education - Generalist"
    } else if (this.params === 'BSBA-HRM') {
      this.course = "Bachelor of Science in Business Administration Major in Human Resource Management"
    } else if (this.params === 'BSE') {
      this.course = "Bachelor of Science in Entrepreneurship"
    }
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

  instructorName: string
  courseSelected: string


  public getAuthenticatedUser() {
    this.authenticationService.getUserDetails().subscribe(
      (response: User) => {
        this.instructorName = response.name;
        console.log(this.instructorName);
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    )
  }

  schedules : Schedule[] 
  
  public getScheduleByInstructorNameAndCourse(course: string) {
    this.authenticationService.getUserDetails().subscribe(
      (response: User) => {
        this.instructorName = response.name;
        console.log(this.instructorName);
        this.scheduleService.getScheduleByInstructorNameAndCourse(this.instructorName, course).subscribe(
          (response : Schedule[]) => {
            this.schedules = response
            console.log(this.schedules);
          }, (error) => {
            console.log(error);
          }
        )
      }, (error) => {
        console.log(error);
      }
    )
  }

  // constructor() { }
  // tableStyle = 'material';
  // encapsulation: ViewEncapsulation.None

  // ngOnInit() {
  // }

  // schedules: Schedule[] = [
  //   { instructorName: "Allen Patrolla", subject: "DSA", yearAndSection: "3A", semester: "2nd Semester", roomNumber: 302, days: "Tuesday", course: "BSIT", startTime: "15:30:00", endTime: "17:30:00" },
  //   { instructorName: "Norman Garbo", subject: "DSA", yearAndSection: "3A", semester: "2nd Semester", roomNumber: 302, days: "Tuesday", course: "BSIT", startTime: "18:30:00", endTime: "19:30:00" },

  // ]

}
