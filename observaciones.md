### Comentarios Generales

Maqui, lo primero que quiero es darte mis felicitaciones por un hermoso trabajo. Me gusta mucho como adaptaste el modelo que te dio Ada a tu propia personaliad, la elección de colores y los detalles que revelan que hiciste tuyo este proyecto.

El responsive en particular te quedó perfecto, no hay resolución en donde tu web no se vea a la perfección. Fue muy placentero recorrerlo y ver como todo se iba adaptando. Esa atención al detalle es muy valiosa, y habla muy bien de vos y tu capacidad de aprendizaje. 

Tu HTML esta muy prolijo, ordenado y bien tabulado. Usas correctamente las etiquetas semánticas, no agregaste mucho código de más (algo que suele ser habitual al comenzar) y se nota el esfuerzo por dejarlo lo más claro posible. 

- Tu CSS esta muy bien ordenado. Se nota que le pusiste trabajo. Aprecio que te hayas tomado el trabajo de ordenar los estilos generales arriba de todo y que tu CSS vaya siguiendo la estructura de tu web. Noto que usas un tabulado particular, me da la impresión de que pones mas hacia la derecha los elementos que son hijos de otros; sin embargo esto no es lo habitual, ni lo recomendable: el tabulado siempre se mantiene igual, al menos cuando trabajamos con CSS puro (vamos a ver más adelante algunas herramientas como SASS que hacen algo similar a lo que vos haces aca)

- Ocasionalmente usas alturas fijas para las secciones, y eso no es buena práctica: salvo cuando se trata de elementos pequeños (como tarjetas o botones), la altura de un elemento tiene que estar dada por sus contenidos. A veces te trae problemas, como el tamaño excesivo de algunas secciones en mobile. Tambien usas muchisimo width 100% - no te comente toods pero si algunos - que no es necesario casi nunca, salvo en elementos muy especificos como imagenes. Tambien tenes tendencia a darle espacio interno a una seccion poniendo un div interno, alineado al centro, con width y height 90%. Esta es una solucion muy complicada e innecesaria, porque podias darle padding de 10% al div padre y ni te tenes que molestar en agregar ese div de mas. 

Noto que repetis muchas veces font-family a lo largo de tu css. Recorda que el font-family se hereda de padres a hijos, asi que lo mejor es darselo al elemento padre de todos (body) y luego cambiarlo solo en aquellos elementos que usen un font family distinto, como tu nombre. Asi evitamos tanta repeticion. Imaginate si en algun momento queres modificar el font family de tu web: va a ser un enorme trabajo!

Tus nombres de clases son muy buenos, en general, cumplis bien el requisito de que sean descriptivos en un sentido funcional: describir que es un elemento y qué hace, no necesariamente como se ve. Tendes a abreviarlos de mas ("ppal") y eso dificulta su comprension. Recorda que la idea no es que vos entiendas tu codigo, sino otras personas. 

Tengo que mencionar lo bien ordenado de tu proyecto en github, aunque tenes relativamente pocos commits. Si bien entiendo que no es fácil subir un código cuando está recién empezado y lleno de problemas, es lo mejor, tanto para irse acostumbrando una a hacerlo, como para permitir que colegas (y profes!) puedan ver la evolución del código y encontrar rapidamente los commits en donde se hicieron determinados cambios. Cuando trabajamos en equipo es muy importante hacer commits breves, asi cualquier cambio puede identificarse facilmente. En particular, tu primer commit abarca muchisimas cosas y habria estado bueno poder ir subiendo los cambios de a poco para ir evaluando como hiciste el proyecto. 

Podrias haber aprovechado mejor la reutilizacion de estilos, en el sentido de que por ejemplo las tarjetas de skills y conocimientos son tan similares que quiza podian compartir clase (con algunos arreglos), o los botones de "contacto" y "lo que hago" tambien. 
En ese mismo sentido, algo que me llama la atencion es que en las media queries repetis *todos* los estilos de algunos elementos. Esto no es necesario. Si en desktop pusimos que la tipografia es Montserrat, no hace falta ponerlo de nuevo en la media query. Solo ponemos los estilos que queremos cambiar! Esto es importantisimo, es algo que se te evaluara en ofertas laborales y que tenes que tener en claro al momento de superar esta etapa. 

Preferimos que los nombres de clases en HTML no tengan nunca tildes, y siempre las palabras se separen en guiones. Lo mismo para tus carpetas. Cuando te descubras poniendo cosas como "seccion1" o "seccion2", es momento de reevaluar tus nombres: seguro hay algo mas descriptivo para poner como nombre. 

### Nota final: 9

Nota desagregada: 
✅ Estructura correcta de documento HTML.
✅ Respeta la consigna.
✅ Respeta el diseño dado.
✅ Responsive funciona correctamente.
✔️ Código bien indentado --> con observaciones
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✔️ Buenos nombres de clases --> con observaciones
✔️ Reutilización de estilos --> con observaciones 
✅ Código CSS ordenado.
✔️ Commits con mensajes adecuados --> con observaciones

