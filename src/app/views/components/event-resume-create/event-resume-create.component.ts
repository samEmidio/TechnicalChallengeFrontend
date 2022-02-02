import { EventService } from './../../../services/event.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-resume-create',
  templateUrl: './event-resume-create.component.html',
  styleUrls: ['./event-resume-create.component.scss']
})
export class EventResumeCreateComponent implements OnInit {


  @Output() createEvent: EventEmitter<string> = new EventEmitter<string>()


  isLoading:boolean = false;
  evt = {
    description:"",
    date:new Date(),
    additionalInformation:""
  }


  constructor(private event:EventService) { }

  ngOnInit(): void {
  }


  create(evt){

    if(!this.isLoading){
      this.isLoading = true;

        this.event.create(evt).subscribe(user => {
          this.isLoading = false;
          this.emitEventCreate();
        },error => {
          debugger;

           alert(error.errors[0])
           console.log(error.errors[0])
           location.reload();
        })


    }


  }

  emitEventCreate(){
    this.createEvent.emit("Um novo evento foi criado");
  }



}
