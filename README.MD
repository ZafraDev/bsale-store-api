# Desafío Bsale

Proyecto API para el desafío de la Tienda Online de Bsale

* [Ver Demo final](http://bsale-store.s3-website-us-west-2.amazonaws.com)
* [Ver Documentación del API](http://bsale-store.s3-website-us-west-2.amazonaws.com)

## Acerca del Proyecto
El proyecto es la solución del Desafío para la empresa Bsale, en este caso es el API del proyecto, el cual fue desarrollado con una arquitectura Serverless y desplegado en AWS usando Javascript como lenguaje de programación y Nodejs como entorno de ejecución.

### Tecnologías

* [![Javascript][Javascript-logo]][Javascript-url]
* [![Nodejs][Nodejs-logo]][Nodejs-url]
* [![Serverless][serverless-logo]][serverless-url]
* [![aws][aws-logo]][aws-url]

## Getting Started

### Requerimientos

* [Instalar Serverless Framework](https://www.serverless.com/framework/docs/getting-started)
* [Configurar tus credenciales de AWS](https://www.serverless.com/framework/docs/providers/aws/guide/credentials)

### Instalación

1. Clone el repositorio

   ```sh
    git clone https://github.com/ZafraDev/bsale-store-api.git
   ```
2. Instale las dependencias de NPM dentro de la carpeta generada

   ```sh
    npm install
   ```

### Environment Variables

1. Renombre el archivo `env.example` to `.env`.
2. Añada las variables de entorno necesarias en el proyecto, las cuales están descritas en el archivo.

### Uso

Para correr el proyecto en local simulando un API Gateway ejecute: 

```sh
 $ npm run dev
```

Para desplegar el proyecto use:

```sh
 $ serverless deploy
```
## Contacto

Rodrigo Berrios - rodrigoberrios1998@gmail.com

Demo Final: [http://bsale-store.s3-website-us-west-2.amazonaws.com](http://bsale-store.s3-website-us-west-2.amazonaws.com)

[Javascript-logo]: https://img.shields.io/badge/javascript-F0DB4F?style=for-the-badge&logo=javascript&logoColor=black
[Javascript-url]: https://javascript.com/
[serverless-logo]: https://img.shields.io/badge/serverless-FD5750?style=for-the-badge&logo=serverless&logoColor=white
[serverless-url]: https://www.serverless.com
[Nodejs-logo]: https://img.shields.io/badge/node.js-2C682C?style=for-the-badge&logo=node.js&logoColor=white
[Nodejs-url]: https://nodejs.dev
[aws-logo]: https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white
[aws-url]: https://aws.amazon.com/es