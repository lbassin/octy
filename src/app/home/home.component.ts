import { Component, OnInit } from '@angular/core';
import anime from 'animejs'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    private relativeOffset = anime.timeline({
        //direction: 'alternate',
        loop: true
    });

    constructor() { }

    ngOnInit() { }

    private animeIso(): void {
        this.relativeOffset
        .add({
            targets: 'svg .cls-1 #Calque_2 #Calque_12 .gr1',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInQuint',
            duration: 1000
        })
        .add({
            targets: 'svg .cls-1 #Calque_2 #Calque_12 #line4',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeOutExpo',
            duration: 1000
        })
        .add({
            targets: 'svg .cls-1 #Calque_2 #Calque_12 #line5',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            offset: '-=1000'
        })
        .add({
            targets: 'svg .cls-1 #Calque_2 #Calque_12 #line6',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeOutExpo',
            duration: 1000,
            offset: '-=500'
        })
        .add({
            targets: 'svg .cls-1 #Calque_2 #Calque_12',
            easing: 'easeOutExpo',
            duration: 800,
            opacity: 0
        });
    }
}