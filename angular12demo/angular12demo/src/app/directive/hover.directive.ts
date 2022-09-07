import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective  implements OnInit,OnChanges{
  @HostBinding("src")
  imgSrc:string='';
  @Input()
  img1:string='';

  constructor(private el:ElementRef, private render:Renderer2) {

    console.log( el.nativeElement);
    render.setStyle(el.nativeElement,'border','2px solid red');
    render.setStyle(el.nativeElement,'padding','10px')
    // this.imgSrc ="../../assets/images/Honda.jpg" 
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.imgSrc = "../../assets/images/"+this.img1;
  }
  ngOnInit(): void {
    this.imgSrc = "../../assets/images/"+this.img1;
  }

   @HostListener('mouseenter')
    mouseenter(){
    this.render.setStyle(this.el.nativeElement,'border','2px solid #56ABEE');
   }

   @HostListener('mouseleave')
   mouseleave(){
    this.render.setStyle(this.el.nativeElement,'border','2px solid black');
   }
   

}
