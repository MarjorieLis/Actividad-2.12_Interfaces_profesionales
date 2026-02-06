import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './registro-usuario.html',  // ✅ CORRECTO
  styleUrls: ['./registro-usuario.scss']   // ✅ CORRECTO
})
export class RegistroUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
  roles = [
    { value: 'admin', viewValue: 'Administrador' },
    { value: 'editor', viewValue: 'Editor' },
    { value: 'viewer', viewValue: 'Visualizador' }
  ];

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.usuarioForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required],
      rol: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  get nombre() {
    return this.usuarioForm.get('nombre');
  }

  get email() {
    return this.usuarioForm.get('email');
  }

  get fechaNacimiento() {
    return this.usuarioForm.get('fechaNacimiento');
  }

  get rol() {
    return this.usuarioForm.get('rol');
  }

  get selectedRoleText(): string {
    const selectedValue = this.rol?.value;
    if (!selectedValue) return '';
    const role = this.roles.find(r => r.value === selectedValue);
    return role?.viewValue || '';
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      const usuario = this.usuarioForm.value;
      
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      usuarios.push({
        ...usuario,
        id: usuarios.length + 1,
        fechaNacimiento: usuario.fechaNacimiento.toISOString()
      });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      
      this.snackBar.open('Usuario registrado exitosamente', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
      
      this.usuarioForm.reset();
    }
  }

  onReset(): void {
    this.usuarioForm.reset();
  }
}