import {Component, ElementRef, Output, Input, EventEmitter, AfterViewInit} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'modal',
    templateUrl: './modal.component.html'
})
export class ModalComponent implements AfterViewInit{ 

    private _element: ElementRef;
    
    @Input() private titulo: string = 'Tem certeza?';
    @Input() private frase: string;
    @Output() confirma = new EventEmitter();
   
    constructor(private element: ElementRef) {
        
        this._element = element;
    }

    ngAfterViewInit() {

        $(this.element.nativeElement).dialog({
                title: this.titulo,
                autoOpen: false,
                resizable: false,
                modal: true,
                buttons: {
                    Cancelar: ()=> {
                        $(this.element.nativeElement).dialog( "close" );
                    },
                    Confirmar: ()=> {
                        $(this.element.nativeElement).dialog( "close" );
                        this.confirma.emit(null);
                    }
                }
        });

    }

    show() {    
        
        $(this._element.nativeElement).dialog('open');
    }
}