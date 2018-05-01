import { ToastrService } from './../common/toastr.service';
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
    template:`
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">            
                <event-thumbnail (click)="handlThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
        
    </div>
    `
})
export class EventsListComponent implements OnInit{
  events: any[];
  constructor (private eventService: EventService, private toastrService: ToastrService){
  }
  ngOnInit(){
    this.events = this.eventService.getEvents();
  }
  handlThumbnailClick(eventName){
    this.toastrService.success(eventName);
  }
}