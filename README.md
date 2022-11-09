# Prueba Idukay - Starship Enterprise

Esta prueba consistía en base a unos inputs calcular el combustible requerido para viajar a al porcentaje de la velocidad de la luz requerido, calcular el tiempo operable utilizando dicho combustible y calcular la velocidad máxima a la que el cohete podría viajar de manera indefinidia.

## Output

Dado el input:

| Daño inyector A | Daño inyector B | Daño inyector C | Porcentaje de la velocidad de la luz |
| :-------------: | --------------- | --------------- | ------------------------------------ |
|       0%        | 0%              | 30%             | 140%                                 |

Se da el siguiente output

| (index)        | Values                                  |
| -------------- | --------------------------------------- |
| Fuel needed    | 'A: 150 mg/s, B: 150 mg/s, C: 120 mg/s' |
| Operating time | 50 minutes                              |
| Max Speed      | 70 % of light speed                     |

En donde:

-   _Fuel needed_ es el combustible necesario para que el cohete se desplace a la velocidad requerida.
-   _Operating time_ es el tiempo en el que el cohete podrá estar operando dados los requerimientos ya antes planteados.
-   _Max Speed_ es la velocidad máxima en la que un cohete puede viajar de manera indefinida basado en el daño.

### ¿Cómo utilizar?

#### Antes de empezar

Antes de empezar se deben de instalar las dependencias de nodejs

```
$ npm install
```

#### Comandos disponibles

-   Si se desea ver la aplicación con el primer caso de uso se debe de correr el comando

```
$ npm start
```

-   Si se desea correr el app con todos los casos de uso ya prescritos en la prueba correr

```
$ npm run start:all
```

-   Si se desean correr los tests

```
$ npm test
```

-   Si se desea ver la covertura de todos los test correro:

```
$ npm run serve
```

Abrir en el navegador la ruta \* localhost:3000
