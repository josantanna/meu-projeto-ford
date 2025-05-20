import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  cadastroSucesso: boolean = false;

  constructor(private router: Router) {}

  onSubmit(): void {
    // Validação de campos obrigatórios
    if (!this.email || !this.password || !this.confirmPassword) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // Validação de e-mail
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.email)) {
      alert('Por favor, insira um e-mail válido');
      return;
    }

    // Validação de senha
    if (this.password.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    // Validação de confirmação de senha
    if (this.password !== this.confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    // Simulação de cadastro bem-sucedido
    console.log('Cadastro realizado:', {
      email: this.email,
      password: this.password
    });

    // Mostra mensagem de sucesso
    this.cadastroSucesso = true;

    // Limpa os campos (opcional)
    this.email = '';
    this.password = '';
    this.confirmPassword = '';

    // Opcional: Redireciona após 3 segundos
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
  }
}