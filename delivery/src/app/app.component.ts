import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Delivery';
  opcao:string = '';

  @Output() public OnUpdate: EventEmitter<string> = new EventEmitter<string>();

  public atualizaOpcao(): void {
    this.OnUpdate.emit(this.opcao);
  }

  public atualizaComponente(valorRecebido: string): void {
    this.opcao = valorRecebido;
    this.atualizaOpcao();
  }
}
