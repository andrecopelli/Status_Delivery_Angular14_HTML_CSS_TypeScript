import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-atualizador',
  templateUrl: './atualizador.component.html',
  styleUrls: ['./atualizador.component.css']
})
export class AtualizadorComponent {
  
  @Output() public onChange: EventEmitter<string> = new EventEmitter<string>();

  public enviaValor(): void {
    const select: HTMLInputElement = document.getElementById('select') as HTMLInputElement;
    this.onChange.emit(select.value);
  }

}
