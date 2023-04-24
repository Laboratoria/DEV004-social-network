# Creando una Red Social

## Índice

poner el link del deploy
investigacion de usuario 

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)

* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)

## 1. Preámbulo chuz

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos
vivir sin ellas.

![adem-ay-Tk9m_HP4rgQ-unsplash](https://user-images.githubusercontent.com/110297/135544666-4efa54f1-4ff6-4c4c-b398-6df04ef56117.jpg)

Hay redes sociales de todo tipo y para todo tipo de intereses. Por ejemplo,
en una ronda de financiamiento con inversionistas, se presentó una red social
para químicos en la que los usuarios podían publicar artículos sobre sus
investigaciones, comentar en los artículos de sus colegas, y filtrar artículos
de acuerdo a determinadas etiquetas o su popularidad, lo más reciente, o lo
más comentado.

## 2. Resumen del proyecto chuz

En este proyecto construirás una Red Social sobre lo que decidan tú y tu equipo.
Podría ser, por ejemplo, sobre alimentación saludable, feminismo, educación,
salud, energías renovables, amantes de las [Empanadas](https://es.wikipedia.org/wiki/Empanada)
o de los [Tacos de Canasta](https://es.wikipedia.org/wiki/Taco),
de la [Feijoada](https://es.wikipedia.org/wiki/Feijoada), o de lo que sea.

Tu Red Social tendrá que permitir a cualquier usuario crear una cuenta de acceso
y loguearse con ella; crear, editar, borrar y _"likear"_ publicacciones.

Por lo tanto, en este proyecto construirás una
[Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
[_responsive_](https://curriculum.laboratoria.la/es/topics/css/02-responsive) (con más de una vista / página)
en la que podamos **leer y escribir datos**.

### Los objetivos generales de este proyecto son los siguientes

* Desarrollar una SPA con temática de red social
* Aplicar los conceptos de responsividad en el desarrollo de las vistas (templates)
* Implementar un router para la navegación entre las diferentes vistas de la aplicación
* Emplear un servicio externo para la persistencia de datos de la aplicación
* Crear una suite de pruebas unitarias que permitan testear código asíncrono

Para lograr estos objetivos, deberás aprender y hacer uso de las siguientes
herramientas o habilidades técnicas:



## 5. Criterios de aceptación mínimos del proyecto

### 5.1 Boilerplate

Este proyecto no incluye un _boilerplate_ completo, solo algunos archivos de
configuración basico, así es que tendrás que definir la estructura de carpetas
y escribir tus propias Pruebas Unitarias (_tests_). Para hacerlo, puedes guiarte
de los proyectos anteriores y/o organizar los archivos siguiendo una estructura
de [Modelo-Vista-Controlador](https://developer.mozilla.org/es/docs/Glossary/MVC).

En este proyecto vamos a usar una herramienta llamada
[Vite](https://es.vitejs.dev/) para empaquetar nuestros módulos y arrancar
el servidor de desarrollo, el cual provee nuestros archivos utilizando
la estrategia `Hot Module Replacement`
[(HMR)](https://es.vitejs.dev/guide/features.html#hot-module-replacement),
esto significa que cuando hagas cambios en los archivos que estén siendo
servidos, el navegador automáticamente se actualizará sin tener que refrescar
y volver a cargar todo el sitio. Debes tener especial cuidado de no tener
ninguna _dependencia circular_ en tu código ya que
[eso puede ocasionar problemas con HMR](https://es.vitejs.dev/guide/troubleshooting.html#ocurre-un-refresco-completo-en-lugar-de-hmr).
(`eslint-plugin-import` tiene una regla
[import/no-cycle](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md)
que va a avisar si las tiene.)

### 5.2 Definición del producto kata

En el `README.md` cuéntanos brevemente cómo descubriste las necesidades de los
usuarios y cómo llegaste a la definición final de tu producto. Es importante
que detalles:

* Quiénes son los principales usuarios de producto.
* Qué problema resuelve el producto / para qué le servirá a estos usuarios.

### 5.3 Historias de usuario kata

Una vez que entiendas las necesidades de tus usuarixs, escribe las Historias de
Usuario que representen todo lo que necesitan hacer/ver en la Red Social. Cada
una de tus Historias de Usuario debe tener:

* **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las
  necesidades del usuario.

* **Definición de terminado:** todos los aspectos técnicos que deben cumplirse
  para que, como equipo, sepan que esa historia está terminada y lista
  para publicarse. **Todas** tus Historias de Usuario (salvo excepciones), deben
  incluir estos aspectos en su Definición de Terminado (más todo lo que
  necesiten agregar):

  - Debe ser una SPA.
  - Debe ser _responsive_.
  - Deben haber recibido _code review_ de al menos una compañera de otro equipo.
  - Hicieron los _test_ unitarios
  - Testearon manualmente buscando errores e imperfecciones simples.
  - Hicieron _pruebas_ de usabilidad e incorporaron el _feedback_ de los
    usuarios como mejoras.
  - Desplegaron su aplicación y etiquetaron la versión (git tag).

### 5.4 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad) kata

Debes definir cuál será el flujo que seguirá el usuario dentro de tu aplicación
y, con eso, diseña la Interfaz de Usuario (UI por sus siglas en inglés) que
siga este flujo.

### 5.5 Responsive kata

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (_tablets_, celulares, etc.). Te
sugerimos seguir la técnica de [_`mobile first`_](#mobile-first) (más detalles sobre esta técnica
al final).

### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI) kata

Estas consideraciones te ayudarán a escribir las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión lady
En el presente proyecto se implementò  Firebase, la plataforma en la nube para el desarrollo de aplicaciones web y móvil de Google. Firebase proporciona servicios de backend, SDK fáciles de usar y bibliotecas de interfaz  las cuales  posibilitan la autenticaciòn de los usuarios y el almacenamiento de las publicaciones que estos deseen crear.
Con base a lo anterior, el proyecto REDA posibilita lo siguiente:

* Creaciòn de cuenta e inicio de sesiòn:
- Crear una cuenta de acceso y autenticación con cuenta de correo y contraseña.
- Iniciar sesiòn con la cuenta anteriormente creada.
- Iniciar sesiòn con una cuenta de Google.
 
 Las anteriores funcionalidades cumplen una serie de requisitos (validaciones) y comportamientos escenciales para su correcto funcionamiento.

* Validaciones:
  - Si la cuenta no es vàlida, el usuario no puede inciar sesiòn.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo  de contraseña debe ser secreto.

* Comportamiento:
  - Antes de que el usuario envìe el formulario de registro o inicio de sesión se valida que los campos no esten vacìos.
  - Cuando hay errores se  muestra una serie de mensajes descriptivos que ayuda all usuario a corregirlos.

#### Muro/timeline lady
 Antes de que el usuario publique contenido de su interès; REDA se encarga de realizar las repectivas validaciones garantizando un adecuado funcionamiento, las cuales se basan en la validaciòn de usuarios y el comportamiento de la interfaz.

* Validaciones:
  - Al publicar, Reda valida que exista contenido en la caja de texto.
* Comportamiento:
  Es necesario que el usuario haya iniciado sesiòn antes poder relaizar las siguientes actividades:

  - Ver las publiaciones propias y de otros usuarios.
  - Poder publicar un post.
  - Poder dar y quitar like a una publicación. 
   Cabe aclarar que el usuario solo puede dar like una vez y en la interfaz se visualiza la cantidad de 
  likes que tienen los post.

   - El usuario solo puede  eliminar sus propios posts, no las publiaciones pertenecientes a otros 
     usuarios.
   Se le muestra al usuario una ventana que le pide confirmar antes de elimianr cualquier publicaciòn.
  - El usuario solo puede editar sus propias publicaciones.
  Cuando el usuario modifica un escrito, èste se actualiza y le  permite guardar y publicar los nuevos 
  cambios.
  -
   
  

### 5.7 Consideraciones técnicas Front-end lady

En el presente proyecto se separò las responsabilidades permtiendo un funcionamiento sencillo y eficaz.
Es por esto que se crèo un archivo Java Script por cada una de las vistas:
- Home: Pàgina de inicio la cual muestra la opciòn de inciar sesiòn o registrarse.
- Register: Pàgina que le indica al usuario la informaciòn que debe digitar para regsistrarse.
- Login : Vista que le posibilita al usuario anteriormente registrado iniciar sesiòn o para lo no registrados existe la opciòn de ingresar con uan cuenta de Google.
- Feed: Implementaciòn de las funciones importadas del archivo Firebase.js que permitieron la funcionalidades de REDA anteriormente descritas.
- Firebase.js: En este documento se crearon todas las funciones que permiten crear, visualizar, editar, likear, deslikear y eliminar un post.
- Autenticaciòn: En este apartado se crearon las funciones que le permiten al usuario registarse e inciar sesiòn.
- Router: en este archivo se crea por un lado la funciòn que permite navegar por los diferentes archivos, y por el otro la funciòn que permite identificar què usuario se encuentra logueado.
- Routes:  En este documento se crean las rutas de las vistas del proyecto.
- Main: En este archivo se inicializan las rutas.
- Styles: En este documento se configura la parte estètica de todas las vistas.

Con el objetivo de garantizar la velocidad de la pàgina se implemento una Single-page application, es decir, un sitio web que cabe en una sola página con el propósito de dar una experiencia más fluida a los usuarios, como si fuera una aplicación de escritorio.



#### Pruebas unitarias (unit tests) lady 
Con el objetivo de garantizar la calidad del còdigo implementado se relizaron 11 test a las funciones implementadas haciendo uso de Jest. Cabe destacar que el proyecto cumple con una covertura total de 96.8% de 100% porcentaje considerado alto.


### 5.8 Consideraciones técnicas UX

* Hacer al menos 2 entrevistas con usuarios.
* Hacer un  prototipo de baja y alta fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de _testing de usabilidad_ con el producto en HTML.

