# Data Lovers

## Índice

* [1. Introduccion](#1-Introduccion)
* [2. Recopilando informaccion](#2-recopilando-informacion)
* [3. ](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

***

## 1. Introduccion


En este proyecto construimos una pagina web , que toma por base un conjunto de datos los cuales son mostrados en la interfaz por medio de la presentacion de una tarjeta que contiene el poster de la pelicula,asi com su fecha de lanzamiento y un puntaje sobre el cual esta rankeado.
El usuario puede interactuar con los datos por medio de botones,menus desplegables y un espacio para buscar por medio de texto.Las accines que permite  la interfaz son:
               Ordenado de las peliculas por orden de la A-Z y de la Z-A
               Filtrado de las peliculas en base al director y productor que participaron en ellas
               Busqueda de las peliculas por formato texto que toma en cuenta las coincidencias con el titulo o año por cada tecla que se suelte
               
El tema sobre el cua trato nuestra pagina fue:               

* [Studio Ghibli](src/data/ghibli/ghibli.json).
  En este set encontrarás una lista de las animaciones y sus personajes del
  [Studio Ghibli](https://ghiblicollection.com/).
  - [Investigación con seguidores de las animaciones del Studio Ghibli](src/data/ghibli/README.md)




## 2. Recopilando informacion

Planteamos un seguimiento de los objetivos a alcanzar y lo que esperabamos de nuestra pagina

### 2.1. Definiendo al usuario

Hicimos la pagina enfocada a usuarios que estaban familiarizados y tenian interes en los films de Studio Ghibli por lo cual no era extrictamente necesario iniciar con un contexto tan general de la informacion.

Para poder encaminar nuestro proyecto buscamos una retroalimentacion de nuestros prospectos de usuarios por medio de una encuesta [Google Forms](https://docs.google.com/forms/d/1CBeQi23bW2J1OdZLrwLgxiqm4ndU9vKbKoNhQOCPYwk/edit?usp=sharing),la cual tenia el proposito de orientarnos acerca de las preferencias de nuestros usuarios.

Los resultados que arrojo la encuesta nos mostraron usuarios bastante familiarizados con el tema de la data para quienes la importancia de la data ya seguia una jerarquia siendo su principal interes el filtrado de dichos datos por titulo,año de lanzamiento y director.

Nuestros usuarios ademas se sentian mas comodos con la idea de interactuar con la interfaz por medio de botones y menues desplegables, prefiriendo estos ultimos sobre los enlaces.

Los usuarios tenian interes en un buscador intuitivo que les ayudara a encontrar el titulo de una pelicula con solo tener unas pocas coincidencias de texto.


### 2.2.HU

Con la informacion recopilada luego de aplicar un orden y priorizacion se destacaron las siguientes historias:


#### 2.2.1.

       Yo como usuario de Cine Ghibli 

       quiero poder visualizar los posters de las películas 

       para saber cuales son todas

#### 2.2.2.
       
       Yo como usuario de Cine Ghibli 

       quiero poder buscar las películas por título, personajes y año

       para encontrar la película que estoy buscando.

  
#### 2.2.3. 

       Yo como usuario de Cine Ghibli 

       quiero poder fltrar las películas por personajes, título y año
       
       para agruparlas según mis preferencia

#### 2.2.4.

        Yo como usuario de Cine Ghibli

        quiero ver en la pantalla principal un top 5 de las mejores películas

        para acceder rápido a ellas.


## 3. Diseño de interfaz
      
       El diseño de la interfaz se hizo de acuerdo a la informacion y sugerencias de nuestros usuarios, en las cuales expresaban cuestiones como
       la sensacion de sobresaturacion visual que experimentaban al tener fondos con multiples formas y colores al mismo tiempo que las tarjetas con posters sobre ello.

       Tomamos tambien en cuenta le necesidad de nuestros usuarios de poder identificar a primera vista los botones y menues y que hacen cada uno ,teniendo como consecuencia una menor curva de aprendizaje necesaria en el usuario a la hora de manejar la interfaz.

       Nuestra interfaz parte dede ser visualmente sencilla y armoniosa al mismo tiempo busca redirigir y enfocar al usuario hacia el contenido principal asi como hacia el area de interaccion.




¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.





#### Prototipo de baja fidelidad



#### Prototipo de alta fidelidad

#### Testeos de usabilidad



### Implementación de la Interfaz de Usuario (HTML/CSS/JS)


### Pruebas unitarias


