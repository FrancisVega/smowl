Secuoyas Animation Library
==========================

##### Selector principal
### $$(<sel>, [trigger])
**sel** Selector tipo jQuery al que vamos a aplicar la animación\
**trigger** Selector tipo jQuery que vamos a usar como trigger. Este parámetro es opcional y su valor por defecto es **sel**

#### ejemplos
```
$$(".header__search--blue")
$$("#feature-page .box")
$$("div")
```

##### FadeIn
### $$(<sel>, [trigger]).fadeIn([duration], [offset]);
**duration** Duración "de scroll" de la animación en px o %\
**offset** Offset Retardo de la animación en px (sin indicar px)

#### ejemplos
```
$$(".mySelector").fadeIn()
$$(".mySelector").fadeIn"("50%", 50)
```
$(".mySelector").fadeIn"("50%", 50);
