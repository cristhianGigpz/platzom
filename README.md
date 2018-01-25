# platzom

Platzom es un idioma inventado para el [Curso de fundamentos de javascript]
(https://gigpz.com), de [platzi](https://platzi.com), el mejor lugar de educación online

## Descripcion del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con z, se le añade "pe" al final
- si la palabra traducida tiene 10 o mas letras, se debe paritir en
  dos por la mitad y unir con un guion medio
- por ultimo, si la palabra original es un polindromo, ninguna regla anterior
  cuenta y se devuelve la misma palabra pero intercalando letras mayusculas y
  minusculas.

## Instalación
```
npm install platzom
```

## Uso
```
import platzom from 'platzom'
platzom("Programar") //Program
platzom('Zorro') //Zorrope
platzom('Zarpar') //Zarppe
platzom('abecedario') //abece-dario
platzom('sometemos') //SoMeTeMos

```

## Créditos
- [Cristhian Acevedo](http://gigpz.com)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
