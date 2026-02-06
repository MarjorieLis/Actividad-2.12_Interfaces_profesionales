import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { DialogConfirmacionComponent } from '../dialog-confirmacion/dialog-confirmacion';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    DatePipe,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatChipsModule,
    MatSnackBarModule
  ],
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.scss']
})
export class UsuariosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'email', 'rol', 'fechaNacimiento', 'acciones'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getChipColor(rol: string): string {
    switch (rol) {
      case 'Administrador':
        return 'primary';
      case 'Editor':
        return 'accent';
      case 'Visualizador':
        return 'warn';
      default:
        return 'primary';
    }
  }

  cargarDatos(): void {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    this.dataSource.data = usuarios.map((u: any) => ({
      ...u,
      fechaNacimiento: new Date(u.fechaNacimiento)
    }));
  }

  verDetalles(usuario: any): void {
    this.dialog.open(DialogConfirmacionComponent, {
      width: '500px',
      data: {
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol,
        fechaNacimiento: usuario.fechaNacimiento,
        tipo: 'detalles'
      }
    });
  }

  eliminarUsuario(usuario: any): void {
    const dialogRef = this.dialog.open(DialogConfirmacionComponent, {
      width: '450px',
      data: {
        nombre: usuario.nombre,
        id: usuario.id,
        tipo: 'eliminar'
      }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const nuevosUsuarios = usuarios.filter((u: any) => u.id !== usuario.id);
        localStorage.setItem('usuarios', JSON.stringify(nuevosUsuarios));
        this.cargarDatos();

        this.snackBar.open(`Usuario ${usuario.nombre} eliminado exitosamente`, 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    });
  }

  aplicarFiltro(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
