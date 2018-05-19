import { IEvent } from './../shared/event.model';
import { EventService } from './../shared/event.service';
import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl:'./event-details.component.html',
    styles:[`
        .container{padding-right:20px;padding-left:20px}
        .event-image{height:100px;}
    `]
})
export class EventDetailsComponent {
    event:IEvent;
    constructor(private eventService:EventService, private route: ActivatedRoute){

    }
    ngOnInit(){
        // + sign used to cast the parms[id] to number
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
}