# Challenge FullTimeForce

Desafío técnico FullTimeForce


## Instalacion
 
1. Posicionarse con una terminal en la carpeta raiz, y ejecutar el siguiente comando para instalar las dependencias del backend


    ```bash
    npm install

2. Cuando termine de instalar, en la misma terminal, ejecutar los siguientes comandos para instalar las dependencias del frontend:

    ```bash
    cd frontend
    npm install

3. En la carpeta raiz del proyecto, crear un archivo '.env', este archivo guardara los valores de las variables de entorno. Dentro de este archivo pegar estos valores:

GITHUB_KEY="TOKEN ENVIADO POR MAIL"  

GITHUB_REPO_NAME="challengeFullTimeForce" 

GITHUB_USER="danielpalza"

PORT=4000

En 'GITHUB_KEY' debe ir el token enviado por mail, por motivos de seguridad, github no permite subir estos datos al repositorio. Tambien puede servir el token de otra cuenta de github, ya que el repositorio es publico

## Iniciar el proyecto
1. Posicionandose en la raiz del proyecto, ejecutar el siguiente comando:
     
    ```bash
    npm start

2. Luego, en otra terminal posicionado en la raiz, ejecutar lo siguiente para iniciar el front:
   
    ```bash
    cd frontend
    npm start

3. Cuando los dos procesos terminen, se podra visitar el sitio [aqui](http://localhost:4200/): 

## Test
1. Ir a la carpeta raiz
2. Ejecutar el siguiente comando
 
    ```bash
    npm test