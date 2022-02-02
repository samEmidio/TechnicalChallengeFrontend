import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  events:[];

  constructor(private event:EventService) { }

  ngOnInit(): void {
    this.getEventsResume();
  }


  getEventsResume(){
    this.event.getAllResume().subscribe(x => {
      debugger;
      this.events = x.data;
    })

  }

  parrentEventHandlerFunctionEventCreate(event){
    debugger;
    this.getEventsResume();
  }

  parrentEventHandlerFunctionDeleteEvent(event){
    debugger;
    this.getEventsResume();
  }

}
