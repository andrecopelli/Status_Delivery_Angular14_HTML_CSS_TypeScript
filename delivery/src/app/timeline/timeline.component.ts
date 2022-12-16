import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent{
  @Output() public OnUpdate: EventEmitter<string> = new EventEmitter<string>();

  opcao: string = '';

  public atualizaOpcao(): void {
    this.OnUpdate.emit(this.opcao);
  }

  public atualizaComponente(valorRecebido: string): void {
    this.opcao = valorRecebido;
    this.atualizaOpcao();
  }
}
