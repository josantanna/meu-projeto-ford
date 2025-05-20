import { Component, OnInit, OnDestroy, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit, OnDestroy {
  currentIndex: number = 0;
  carouselInterval: any;
  menuAberto = false;

  @ViewChild('menuContainer') menuRef!: ElementRef;

  images = [
    'imagem_1.png',
    'imagem_2.png',
    'imagem_3.png'
  ];

  formData = {
  nome: '',
  email: '',
  telefone: '',
  mensagem: '',
  newsletter: false,
  tipoContato: '',
  lgpd: false,
};


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    clearInterval(this.carouselInterval);
  }

  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }

  getImagePath(imageName: string): string {
    return 'assets/img/' + imageName;
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

  @HostListener('document:click', ['$event'])
  onClickFora(event: MouseEvent): void {
    const clickedInside = this.menuRef?.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.menuAberto = false;
    }
  }

  enviarContato() {
    console.log('Dados do formulário:', this.formData);
    alert('Mensagem enviada com sucesso!');
    this.formData = {
  nome: '',
  email: '',
  telefone: '',
  mensagem: '',
  newsletter: false,
  tipoContato: '',
  lgpd: false
};

  }
}