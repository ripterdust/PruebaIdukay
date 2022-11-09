# PruebaIdukay - Starship Enterprise

Esta prueba consistía en base a unos inputs calcular el combustible requerido para viajar a al porcentaje de la velocidad de la luz requerido, calcular el tiempo operable utilizando dicho combustible y calcular la velocidad máxima a la que el cohete podría viajar de manera indefinidia.

## Output

Dado el output:

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

-   _Fuel needed_ es el combustible necesario para que el cohete
-   _Operating time_ es el tiempo en el que el cohete podrá estar operando dados los requerimientos ya antes planteados
-   _Max Speed_ es la velocidad máxima en la que un cohete puede viajar de manera indefinida basado en el daño
