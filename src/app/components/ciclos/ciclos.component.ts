import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.scss']
})
export class CiclosComponent  {

  constructor(){ 
    console.log('Constructor')

  }

  queHace(algo: any){
    console.log('Hago un console log de: ', algo);
  }


  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   console.log('OnInit')
  // }
  
  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   console.log('OnChanges')
    
  // }
  
  // ngAfterContentInit(): void {
  //   //Called after ngOnInit when the component's or directive's content has been initialized.
  //   console.log('AfterContentInit')
    
  // }
  
  // ngAfterContentChecked(): void {
  //   //Called after every check of the component's or directive's content.
  //   console.log('AfterContentChechek')
    
  // }
  
  // ngAfterViewInit(): void {
  //   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   console.log('AfterViewInit')
    
  // }
  
  // ngAfterViewChecked(): void {
  //   //Called after every check of the component's view. Applies to components only.
  //   console.log('AfterViewChecked')
    
  // }
  
  // ngOnDestroy(): void {
  //   //Called once, before the instance is destroyed.
  //   console.log('OnDestroy')

  // }



}
