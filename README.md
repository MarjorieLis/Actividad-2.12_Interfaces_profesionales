# Panel Administrativo con Angular Material

Proyecto de interfaz profesional desarrollado con Angular Material para la actividad S12 de Interfaces y Multimedia.

## Tema de Colores Elegido

Para este proyecto, elegí el tema **Indigo-Pink** de Angular Material, que ofrece una combinación de colores profesional y moderna:

- **Primary (Azul Índigo #3f51b5)**: Utilizado en la barra de navegación, botones principales y elementos destacados
- **Accent (Rosa #e91e63)**: Utilizado en chips de roles "Editor" y elementos secundarios
- **Warn (Naranja/Rojo)**: Utilizado en botones de eliminación y mensajes de advertencia

Este tema proporciona un diseño limpio, profesional y visualmente atractivo que cumple con los estándares de Material Design.

## Instrucciones de Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- Angular CLI (versión 18 o superior)

### Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/MarjorieLis/Actividad-2.12_Interfaces_profesionales.git
   ```

2. **Navega al directorio del proyecto:**
cd Actividad-2.12_Interfaces_profesionales

3. **Instala las dependencias:**
npm install

4. **Ejecuta el servidor de desarrollo:**
ng serve

5. **Abre tu navegador en:**
http://localhost:4200

## Características del Proyecto
# Funcionalidades Implementadas
- Menú Lateral Responsivo: Navegación con MatSidenav que se adapta a diferentes tamaños de pantalla
- Formulario de Registro: Con validaciones completas (campos requeridos, email válido, longitud mínima)
- Validaciones en Tiempo Real: Mensajes de error que aparecen después de interactuar con los campos
- Botón Inteligente: Se deshabilita automáticamente cuando el formulario es inválido
- Tabla de Usuarios: Con paginación, filtro de búsqueda y chips de colores por rol
- Diálogos Modales: Para visualización de detalles y confirmación de eliminación
- Persistencia de Datos: Almacenamiento en localStorage del navegador
- Diseño Responsivo: Adaptable a escritorio, tablet y móvil
- Interfaz en Español: Todos los textos y componentes en español

## Tecnologías Utilizadas
- Angular 18: Framework de desarrollo web
- Angular Material 18: Biblioteca de componentes UI
- TypeScript 5.4: Lenguaje de programación
- SCSS: Preprocesador de CSS
- RxJS 7.8: Programación reactiva