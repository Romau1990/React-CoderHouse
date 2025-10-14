
//CSR vs SSR vs SSG
/*
CSR - Client side rendering

    1- toda la informacion y la data se renderiza en el navegador, menos html 
    2- excelente para apps privadas que tienen poco contacto con el usuario de forma masiva. 

SSR - Server side rendering

    1- Muy rápidas para cargar ya que el navegador renderiza muy poco
    2- excelente para webs públicas que tienen alta taza de concurrencia de usuarios
    3- Código más complejo ya que el navegador recibe todo el codigo html armado y listo
    4- bueno para SEO

SSG - static site generation
    1- El contenido de la página se genera de forma estática en el momento de build, no cuando llega la petición.
    2- El navegador recibe HTML fijo, igual que SSR, pero no depende del servidor cada vez que alguien entra.
    3- Ventaja: muy rápido y estable, bueno para sitios con contenido que no cambia seguido.


*/

//LIBRERIA VS FRAMEWORK
/*
Libreria (React)
    1- exportas solo lo que necesitas implementar en tu proyecto 
    2- alto nivel de libertad
    4- más fácil de aprender 
    3- liviano 

Framework (AngularJS y Vue, Ruby in rails, SolidJS, QwikJS, NextJS(el más popular)).
    1- Debes de trabajar bajo las normativas del entorno
    2- debes usar las herramientas correspondientes para cada ocasión 
    3- bajo nivel de libertad (hay estandares y protocolos a seguir)
    5- entorno propio
    4- más pesado
    5- más dificil de aprender
*/


//REACT ¿QUE ES?

/*
    -Es una libreria de basada en Javascript y centrada en el trabajo con componentes. 
    -Al ser una libreria esto quiere decir que usa código de terceros, por lo que amplifica el potencial de JS. 
    -Inicialmente creada por Facebook 
    -Es el framework más popular de hoy en día 
    -React trabaja mano a mano con otras librerias como React router Dom o Tempo o Moment o DayJs, etc. 
    -Excelente para SPA(single page applications) webs de una sola página.
    -es CSR(client side rendering). Todo se renderiza en el navegador. 
    -React hace cambios estructurales en JS y crea archivos JSX
    -JSX es una funcion de: html, css y javascript
    
    Cada componente creado va a tener:

    -HTML -> puede modificar el modelo
    -CSS
    -JS/TS -> controller donde yace la lógica

    el controller modifica el modelo -> modelo <-> vista (la vista también puede modificar el modelo)


    COMO FUNCIONA REACT? 

    flujo normal de informacion de una web SIN react 

    servidor -> API -> interfaz grafica(client side) asi devuelve una respuesta una web al servidor. 

    En el caso de React este crea una copia de la web la cual usará para realizarle los cambios dinamicos correspondientes siempre que la web lo requiera. 
    Estos cambios se hacen de forma independiente componente a componente lo que hace que no sea necesario recorrer todo el dom para reconfigurar la web tras cada cambio. 
    Los componentes que genera React estan escrito en formato jsX es decir, un formato que nuestro navegador no conoce ya que este solo trabaja con JS puro. Para ello React cuenta con un compilador como puede ser Vite o Babel que ayudan a pasar los componentes de codigo JSX a JS puro. 
    El conjunto de dichos componentes se conoce como UI (user interface), es decir, la imagen renderizada de nuestra web. 


    Sintaxis de un componente con React

    import React from 'react'; //Esto nos permite trabajar con react y sus funcionalidades

    function DynamicButton(){  

        return{
            <button>
                click en este botón
            </button>
        }
    }

*/