


# PROYECTO PERSONAL BOOTCAMP FULL STACK DEVELOPER OCT-25

## DESCRIPCIÓN DEL PROYECTO
Frontend (client) del proyecto personal para el Bootcamp Full Stack Vitoria (oct-25). 
Este proyecto está construido con React + Vite, utiliza Firebase Authentication para la autenticación y se comunica con el backend construido en Node.js + Express.

## TECONOLOGÍAS UTILIZADAS
- React
- Vite
- Firebase,
- React router dom
- Sass
- TipTap
- JS-Cookie
- React DatePicker
- React DayPicker

## INSTALACIÓN Y EJECUCIÓN EN ENTORNO LOCAL
1. Forkear este repositorio https://github.com/Albasan08/proyecto-personal-bfs_client.git
2. Instalar dependencias
```bash
yarn add 
```
3. Crear proyecto nuevo en firebase 

4. Renombrar el archivo .env.template como .env y asignar las variables de entorno
5. Ejecutar servidor
```bash
yarn run dev
```

## ESTRUCTURA DEL PROYECTO
```bash
public/
    assets/
src/
    admin/
        components/
        pages/
    auth/
        components/
        helpers/
        hooks/
        pages/
    components/
    contexts/
    db/
    firebase/
    hooks/
    pages/
    program/
        components/
        pages/
    routes/
    user/
        components/
        pages/
App.jsx
App.scss
```
## ENDPOINTS PRINCIPALES
1. Públicos
```bash
/experiencias/
```
2. User
```bash
/user/
/experiencias/
```
3. Admin
```bash
/admin/
```
4. Program
```bash
/gestor
```

## GESTIÓN DE AUTENTICACIÓN
Para la autenticación se utiliza Firebase Authentication.

## ROLES DE USUARIO
Se diferencian tres roles de usuario: 
- **Admin:** Rol que gestiona la información de las experiencias
- **Program:** Rol que gestiona la programación de cada experiencia
- **User:**Rol cliente normal
