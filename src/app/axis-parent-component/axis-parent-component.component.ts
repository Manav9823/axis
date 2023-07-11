import { Component, ElementRef, ViewChild } from '@angular/core';

interface task{
  x  : number
  y  : number
  id : string
}


@Component({
  selector: 'app-axis-parent-component',
  templateUrl: './axis-parent-component.component.html',
  styleUrls: ['./axis-parent-component.component.scss']
})
export class AxisParentComponentComponent {
  points: task[] = [
    {id : 'first', x:0, y:0},
    {id : 'second' , x:40, y:50},
    {id : 'third', x:110, y:110},
    {id : 'fourth', x:220, y:220},
    {id : 'fifth', x:330, y:330},
    {id : 'sixth', x:330, y:10},
    {id : 'seventh', x:10, y:330},
    {id : 'eighth', x:400, y:400}
  ];

  @ViewChild('graphContainer')
  graphContainer!: ElementRef<HTMLDivElement>
  containerPosition!: {width: number, height: number}

  ngAfterViewInit() {
    const containerRect = this.graphContainer.nativeElement.getBoundingClientRect();
    this.containerPosition = {width: containerRect.width, height: containerRect.height};
  }

  getContainerPosition() {
    return this.containerPosition;
  }

  onPositionChanged(event: { index: number, x: number, y: number }, pointIndex: number) {
    const reqId = this.points[pointIndex].id
    this.points[pointIndex] = { id: reqId, x: event.x, y: event.y };
  }
  
  allowDrop(event:DragEvent){
    event.preventDefault()
  }
}
