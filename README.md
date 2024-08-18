# el memotest de prueba

  console.log(shuffle([1,2,3,4,5]))
*este es un memotest que es de prueba y estoy siguiendo la clase* 


## lenguajes utilizados son:

- HTML
- CSS
- JavaScript
- React
- Tailwind

|Modo Facil| Modo Dificil|
|---       | ---         |
| 4x4      | 6x6         |
| 4 pares  | 25 pares    |


### Codigo Shuffle
```javascript
export function shuffle(arr) {
  let arr2 = [];
  while (arr.length > 0) {
    const posicionRandom = Math.round(Math.random() * arr.length);
    const elemento = arr.splice(posicionRandom, 1);
    arr2 = arr2.concat(elemento);
  }
  return arr2;
}
```
