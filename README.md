# Sal.js


## Variables Globales

- Valores por defecto
```
$$SETUP = {
  "duration": $$SETUP.duration,
  "offset": $$SETUP.offset,
  "triggerHook": $$SETUP.triggerHook,
  "direction": $$SETUP.direction,
  "time": $$SETUP.time,
  "reverse": $$SETUP.reverse,
  "ease": $$SETUP.ease,
  "delay": $$SETUP.delay,
}
```

#Sal

Main function

**Parameters**

-   `el` **string** Elemento (query) que vamos a animar
-   `triggerel` **string** Elemento que vamos a usar como trigger

Returns **sal** 

## fadeIn

Fade In con SimpleObjectAnimation

**Parameters**

-   `fromValue` **float** El valor desde el que se va a animar
-   `duration` **float** La duración en % de scroll o px
-   `offset`  
-   `triggerHook`  

Returns **salObject** Devuelve un objeto SAL.

## heroParallax

Hero Parallax

**Parameters**

-   `ratio` **float** La velocidad de scroll
-   `duration` **float** La duración en % de scroll o px

Returns **salObject** Devuelve un objeto SAL.

## move

Move
Mueve un elemento en la coordenada dada

**Parameters**

-   `coord`  
-   `value` **float** Valor desde el que hacemos la escala
-   `duration` **integer-string** Duración de la animación en %/px
-   `offset` **integer** Valor en px para el "retardo" de la animación
-   `triggerHook` **string** Elemento que hará de trigger para scrollmagic

## moveY

Move Y
Mueve un elemento en la coordenada Y, este método es básicamente para probar el
como funciona el uso de otros métodos más "core", en concreto move()

**Parameters**

-   `value` **float** Valor desde el que hacemos la escala
-   `duration` **integer-string** Duración de la animación en %/px
-   `offset` **integer** Valor en px para el "retardo" de la animación
-   `triggerHook` **string** Elemento que hará de trigger para scrollmagic

## parallax

Parallax

**Parameters**

-   `ratio` **float** La velocidad de scroll
-   `duration` **float** La duración en % de scroll o px

Returns **salObject** Devuelve un objeto SAL.

## scale

Scale

**Parameters**

-   `fromValue` **float** Valor desde el que hacemos la escala
-   `value`  
-   `duration` **integer-string** Valor de scroll en % o en px de la duración de la
    animación
-   `offset` **integer** Valor en px para el "retardo" de la animación
-   `triggerHook`  

## soa

SOA. Single Object animation.
Mueve un elemento utilizando un objeto Greensock

**Parameters**

-   `gsobject` **object** Objeto Greensock que contiene la animación
-   `animationObject` **object** Objeto tipo Greensock para animar el elemento
-   `duration`  
-   `offset`  
-   `triggerHook` **string** Elemento que hará de trigger para scrollmagic

# getData

getData

**Parameters**

-   `el` **string** Elemento (query) del que vamos a obtener los data-*

Returns **string or int or float** 

# sal

Constructor sal

**Parameters**

-   `el` **string** Elemento (query) que vamos a animar
-   `triggerel` **string** Elemento que vamos a usar como trigger

Returns **sal**

















# SAL

## Setting Globales
#### Se puede añadir en el sal-site-config.js estas variables que actuan de forma genérica.

- Activa o desactiva la salida de llamadas a métodos en la consola
```
$$CONSOLE = (true|false)
```

- Establece los valores por defecto a nivel general del site.
```
$$SETUP = {
  "duration": ""
  "offset": ""
  "triggerHook": ""
  "direction": ""
  "time": ""
  "reverse": ""
  "ease": ""
  "delay": ""
}
````


Main function

**Parameters**

-   `el` **string** Elemento (query) que vamos a animar
-   `triggerel` **string** Elemento que vamos a usar como trigger

Returns **sal** 

## fadeIn

Fade In con SimpleObjectAnimation

**Parameters**

-   `fromValue` **float** El valor desde el que se va a animar
-   `duration` **float** La duración en % de scroll o px
-   `offset`  
-   `triggerHook`  

Returns **salObject** Devuelve un objeto SAL.

## heroParallax

Hero Parallax

**Parameters**

-   `ratio` **float** La velocidad de scroll
-   `duration` **float** La duración en % de scroll o px

Returns **salObject** Devuelve un objeto SAL.

## move

Move
Mueve un elemento en la coordenada dada

**Parameters**

-   `coord`  
-   `value` **float** Valor desde el que hacemos la escala
-   `duration` **integer-string** Duración de la animación en %/px
-   `offset` **integer** Valor en px para el "retardo" de la animación
-   `triggerHook` **string** Elemento que hará de trigger para scrollmagic

## moveY

Move Y
Mueve un elemento en la coordenada Y, este método es básicamente para probar el
como funciona el uso de otros métodos más "core", en concreto move()

**Parameters**

-   `value` **float** Valor desde el que hacemos la escala
-   `duration` **integer-string** Duración de la animación en %/px
-   `offset` **integer** Valor en px para el "retardo" de la animación
-   `triggerHook` **string** Elemento que hará de trigger para scrollmagic

## parallax

Parallax

**Parameters**

-   `ratio` **float** La velocidad de scroll
-   `duration` **float** La duración en % de scroll o px

Returns **salObject** Devuelve un objeto SAL.

## scale

Scale

**Parameters**

-   `fromValue` **float** Valor desde el que hacemos la escala
-   `value`  
-   `duration` **integer-string** Valor de scroll en % o en px de la duración de la
    animación
-   `offset` **integer** Valor en px para el "retardo" de la animación
-   `triggerHook`  

## soa

SOA. Single Object animation.
Mueve un elemento utilizando un objeto Greensock

**Parameters**

-   `gsobject` **object** Objeto Greensock que contiene la animación
-   `animationObject` **object** Objeto tipo Greensock para animar el elemento
-   `duration`  
-   `offset`  
-   `triggerHook` **string** Elemento que hará de trigger para scrollmagic

# getData

getData

**Parameters**

-   `el` **string** Elemento (query) del que vamos a obtener los data-*

Returns **string or int or float** 

# sal

Constructor sal

**Parameters**

-   `el` **string** Elemento (query) que vamos a animar
-   `triggerel` **string** Elemento que vamos a usar como trigger

Returns **sal**

















# SAL

## Setting Globales
#### Se puede añadir en el sal-site-config.js estas variables que actuan de forma genérica.

- Activa o desactiva la salida de llamadas a métodos en la consola
```
$$CONSOLE = (true|false)
```

- Establece los valores por defecto a nivel general del site.
```
$$SETUP = {
  "duration": ""
  "offset": ""
  "triggerHook": ""
  "direction": ""
  "time": ""
  "reverse": ""
  "ease": ""
  "delay": ""
}
````


Main function

**Parameters**

-   `el` **string** Elemento (query) que vamos a animar
-   `triggerel` **string** Elemento que vamos a usar como trigger

Returns **sal** 

## fadeIn

Fade In con SimpleObjectAnimation

**Parameters**

-   `fromValue` **float** El valor desde el que se va a animar
-   `duration` **float** La duración en % de scroll o px
-   `offset`  
-   `triggerHook`  

Returns **salObject** Devuelve un objeto SAL.

## heroParallax

Hero Parallax

**Parameters**

-   `ratio` **float** La velocidad de scroll
-   `duration` **float** La duración en % de scroll o px

Returns **salObject** Devuelve un objeto SAL.

## move

Move
Mueve un elemento en la coordenada dada

**Parameters**

-   `coord`  
-   `value` **float** Valor desde el que hacemos la escala
-   `duration` **integer-string** Duración de la animación en %/px
-   `offset` **integer** Valor en px para el "retardo" de la animación
-   `triggerHook` **string** Elemento que hará de trigger para scrollmagic

## moveY

Move Y
Mueve un elemento en la coordenada Y, este método es básicamente para probar el
como funciona el uso de otros métodos más "core", en concreto move()

**Parameters**

-   `value` **float** Valor desde el que hacemos la escala
-   `duration` **integer-string** Duración de la animación en %/px
-   `offset` **integer** Valor en px para el "retardo" de la animación
-   `triggerHook` **string** Elemento que hará de trigger para scrollmagic

## parallax

Parallax

**Parameters**

-   `ratio` **float** La velocidad de scroll
-   `duration` **float** La duración en % de scroll o px

Returns **salObject** Devuelve un objeto SAL.

## scale

Scale

**Parameters**

-   `fromValue` **float** Valor desde el que hacemos la escala
-   `value`  
-   `duration` **integer-string** Valor de scroll en % o en px de la duración de la
    animación
-   `offset` **integer** Valor en px para el "retardo" de la animación
-   `triggerHook`  

## soa

SOA. Single Object animation.
Mueve un elemento utilizando un objeto Greensock

**Parameters**

-   `gsobject` **object** Objeto Greensock que contiene la animación
-   `animationObject` **object** Objeto tipo Greensock para animar el elemento
-   `duration`  
-   `offset`  
-   `triggerHook` **string** Elemento que hará de trigger para scrollmagic

# getData

getData

**Parameters**

-   `el` **string** Elemento (query) del que vamos a obtener los data-*

Returns **string or int or float** 

# sal

Constructor sal

**Parameters**

-   `el` **string** Elemento (query) que vamos a animar
-   `triggerel` **string** Elemento que vamos a usar como trigger

Returns **sal**