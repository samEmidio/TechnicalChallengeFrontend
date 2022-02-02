import { Component, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  eventUsers = [];
  eventResumeDetail ={
    totalToPay:0,
    totalPaid:0,
    totalUsers:0,
    totalPaidUsers:0
  };


  eventId:any;

  user = {
    name:"",
    value:0,
    isPaid:false,
    eventId:""
  }

  constructor(private eventService:EventService,private router:Router,private routeActive:ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this.eventId= this.getEventResume();
    this.user.eventId = this.eventId;
    this.getResumeDetail(this.user.eventId);
    this.getAllEventUsers(this.user.eventId);
  }

  getEventResume(){
    return this.routeActive.snapshot.paramMap.get('id');
  }

  saveUser(user){


    this.eventService.addUser(user).subscribe(x => {
      this.getAllEventUsers(this.user.eventId);
      this.getResumeDetail(this.user.eventId);
    },error=>{
      alert(error.errors[0]);
      console.log(error.errors[0])
      location.reload();
    });
  }

  getAllEventUsers(eventId){

    this.eventService.getAllEventUsers(eventId).subscribe(x => {
      debugger;
      this.eventUsers = x.data;
    },error=>{
      alert(error.errors[0]);
      console.log(error.errors[0])
      location.reload();
    })

  }

  updateIsPaid(id,event){
    debugger;
    var check = event.currentTarget.checked;
    this.eventService.updateIsPaidEventUser(id,check).subscribe(x => {
      this.getResumeDetail(this.user.eventId);
    },error => {
      alert(error.errors[0]);
      console.log(error.errors[0])
      location.reload();
    })
  }


  getResumeDetail(eventId){

    this.eventService.getResumeDetail(eventId).subscribe(x => {
      debugger;
      this.eventResumeDetail = x.data;
    },error => {
      alert(error.errors[0]);
      console.log(error.errors[0])
      location.reload();
    })

  }


  removeEventUser(id){
    this.eventService.removeEventUser(id).subscribe(x => {
      this.getAllEventUsers(this.user.eventId);
      this.getResumeDetail(this.user.eventId);
    },error => {
      alert(error.errors[0]);
      console.log(error.errors[0])
      location.reload();
    })
  }

}
