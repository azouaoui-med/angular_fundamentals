import { IEvent, ISession, EventService  } from './../shared/index';
import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl:'./event-details.component.html',
    styles:[`
        .container{padding-right:20px;padding-left:20px}
        .event-image{height:100px;}
        a{cursor:pointer}
    `]
})
export class EventDetailsComponent {
    event:IEvent;
    addMode:Boolean;
    constructor(private eventService:EventService, private route: ActivatedRoute){

    }
    ngOnInit(){
        // + sign used to cast the parms[id] to number
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession(){
        this.addMode=true;
    }
    saveNewSession(session:ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode= false;
    }
    cancelAddSession(){
        this.addMode= false;
    }
}