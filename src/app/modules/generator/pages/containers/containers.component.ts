import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContainerService } from '../../../../core/services/container.service';
import { Container } from '../../../../core/models/container';
import { Listable } from '../../../../core/interfaces/listable';

@Component({
    templateUrl: './containers.component.html',
    styleUrls: ['./containers.component.scss']
})
export class ContainersComponent implements OnInit, OnDestroy {

    containers: Container[];
    displayed: Listable[];

    private subscribeContainers;

    constructor(private containerService: ContainerService) {
    }

    ngOnInit(): void {
        this.containers = null;
        this.displayed = null;

        this.containerService.getAll().subscribe((containers: Container[]) => {
            this.containers = containers;
            this.displayed = containers;
        });
    }

    ngOnDestroy(): void {
        this.subscribeContainers.unsubscribe();
    }

    updateDisplayed(containers: Listable[]) {
        this.displayed = containers;
    }
}