import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-resume',
  templateUrl: './event-resume.component.html',
  styleUrls: ['./event-resume.component.scss']
})
export class EventResumeComponent implements OnInit {

  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>()

  @Input() event;

  constructor(private eventService:EventService,private router:Router) { }

  ngOnInit(): void {
  }


  emitEventCreate(){
    this.deleteEvent.emit("Um novo evento foi criado");
  }

  removeEvent(id){
    this.eventService.remove(id).subscribe(x => {
      this.emitEventCreate();
    },error => {
      alert(error.errors[0]);
    })
  }

  navigateToEventDetails(){
    this.router.navigate([`home/events/details`,this.event.eventId]);
  }


}
