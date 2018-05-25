import { Input } from '@angular/core';
import { Component } from '@angular/core';
@Component({
    selector:'collapsibale-well',
    template:`
        <div (click)="toggleContent()" class="well pointable">
            <h4>
                <ng-content select="[well-title]"></ng-content>
            </h4>
            <ng-content *ngIf="visible"  select="[well-body]"></ng-content>
        </div>
    `
})

export class CollapsibaleWellComponent {
    visible: boolean = true;
    toggleContent(){
        this.visible= !this.visible;
        }
}