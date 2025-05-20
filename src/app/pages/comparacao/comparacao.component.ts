import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

class Car {
  constructor(
    public nome: string,
    public preco: number,
    public alturaCacamba: number,
    public alturaVeiculo: number,
    public alturaSolo: number,
    public capacidadeCarga: number,
    public motor: number,
    public potencia: number,
    public volumeCacamba: number,
    public roda: string,
    public image: string
  ) {}
}

@Component({
  selector: 'app-comparacao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comparacao.component.html',
  styleUrls: ['./comparacao.component.css']
})
export class ComparacaoComponent {
  carArr: Car[] = [];
  showComparison = false;
  menuAberto = false;

  @ViewChild('menu') menuRef!: ElementRef;

  cars = [
    new Car(
      'XL Cabine Simples 2.2 Diesel 4X4 MT 2022',
      183850,
      511,
      1821,
      232,
      1234,
      2.2,
      160,
      1420,
      'Aço Estampado 16',
      'assets/img/XL Cabine.jpg'
    ),
    new Car(
      'XLS 2.2 Diesel 4X4 AT 2022',
      220690,
      511,
      1821,
      232,
      1076,
      2.2,
      160,
      1180,
      'Aço Estampado 16',
      'assets/img/xls 2.2 diesel.jpg'
    ),
    new Car(
      'Storm 3.2 Diesel 4X4 AT 2022',
      222790,
      511,
      1821,
      232,
      1040,
      3.2,
      200,
      1180,
      'Liga Leve 17',
      'assets/img/storm.jpg'
    )
  ];

  constructor(private router: Router) {}

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent): void {
    if (
      this.menuAberto &&
      this.menuRef &&
      !this.menuRef.nativeElement.contains(event.target)
    ) {
      this.menuAberto = false;
    }
  }

  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  retornarHome(): void {
    this.menuAberto = false;
    this.router.navigate(['/home']);
  }

  retornarLogin(): void {
    this.menuAberto = false;
    this.router.navigate(['/login']);
  }

  setCarToCompare(event: Event, car: Car): void {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      if (this.carArr.length < 2) {
        this.carArr.push(car);
      } else {
        target.checked = false;
        alert('Você só pode comparar 2 veículos por vez');
      }
    } else {
      const index = this.carArr.findIndex(c => c.nome === car.nome);
      if (index !== -1) {
        this.carArr.splice(index, 1);
      }
    }
  }

  showCompare(): void {
    if (this.carArr.length < 2) {
      alert('Precisa marcar 2 carros para apresentar a comparação');
      return;
    }
    this.showComparison = true;
  }

  hideCompare(): void {
    this.showComparison = false;
  }
}
