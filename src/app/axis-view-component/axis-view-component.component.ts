import { Component, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-axis-view-component',
  templateUrl: './axis-view-component.component.html',
  styleUrls: ['./axis-view-component.component.scss']
})
export class AxisViewComponentComponent {
  @Input() x!: number;
  @Input() y!: number;
  @Input() id!:string;
  @Input() containerPosition!: {width:number, height:number };
  @Input() graphContainer!: HTMLElement
  @Output() positionChanged = new EventEmitter<{index : number, x:number, y:number}>();

  private isDragging = false;
  private offsetX = 0
  private offsetY = 0

  @HostBinding('class.dragging')
  get draggingClass(): boolean {
    return this.isDragging;
  }

  onDragStart(event: DragEvent){

    this.isDragging = true;
    event.dataTransfer?.setData('text', '');
    this.offsetX = event.clientX 
    this.offsetY = event.clientY 
  }

  onDragEnd(event: DragEvent) {
    let offsetX:number = this.x + (event.clientX - this.offsetX) 
    let offsetY:number = event.clientY >= this.offsetY ? this.y - (event.clientY - this.offsetY) : this.y - (event.clientY - this.offsetY) 

    if(offsetX > this.containerPosition.width || offsetX < 0 || offsetY > this.containerPosition.height || offsetY < 0){
      offsetX = this.x
      offsetY = this.y
    }
    this.positionChanged.emit({ index: event.target as any, x: offsetX, y: offsetY })
    this.isDragging = false
  } 
  onDragOver(event: DragEvent){
    event.preventDefault()
  }
}
