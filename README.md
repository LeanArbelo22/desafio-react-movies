# Desafío de código React
# Cinematics - Leandro Arbelo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Iniciar la aplicacion
Si quieres probar la aplicación en un servidor local:
- Abre tu terminal.
- Posiciónate en la carpeta en donde quieras descargar el repositorio.
- Introduce los comandos git init, y luego git clone https://github.com/LeanArbelo22/desafio-react-movies.
- Una vez clonado el repositorio, posicionarse en la carpeta 'challenge-movies'.
- Por último, introducir el comando npm start.
Tambien subi la aplicación a Heroku:
[Cinematics Heroku](https://cinematics-la.herokuapp.com/)

## Dependencias
Para la realización de este desafío utilice React (v18.2.0) y todos los estilos los realice con CSS.
Las dependencias que utilice fueron:

### axios
La elegí para realizar los fetchs a las APIs.
Decidí utilizarla ya que es con la que habitualmente lo hago, y considero que es un poco más eficiente comparado
con la forma tradicional.

### react-icons
La elegí para representar las estrellas de puntuación con iconos.
Decidí utilizarla porque considero que es la más completa en cuanto a cantidad y variedad de iconos.

### react-infinite-scroll-component
La elegí para que cada vez que el usuario llegue al final de la página (las primeras 20 películas) se cargue la siguiente página (con un nuevo llamado a la API) y se sume a las anteriores.
Decidí utilizarla porque considero que ahorra mucho tiempo y líneas de código cuando se necesita hacer un scroll 
infinito.

### react-router-dom
La elegí para crear el enrutador de la aplicación, crear enlaces y poder acceder a los parametros de
la ruta.

## Aclaraciones
Estoy muy contento con el resultado de mi desafío pero me gustaría aclarar algunas cosas:
- Decidí no manejar los estados de manera global (con Redux, o en su defecto, con useContext) porque quise
  demostrarles lo que realmente DOMINO, no porque no sepa cómo se usan, simplemente no tengo suficiente habilidad con ellos. Sé que no es una buena práctica pasar props por muchos componentes, pero creo haberlo simplificado lo suficiente.
- No trabaje sobre las mediaquerys porque el desafío no lo pedía y quería evitar perder tiempo en ello, pero
  a diferencia del punto anterior, trabajar con comportamientos responsive si es algo que habitualmente hago.
- En un principio, para la realización del filtro con estrellas, utilice una dependencia llamada 
  react-rating-stars-component, pero con ella solo se escucha el evento onChange, lo cual me imposibilitaba
  a cumplir con el requisito de que se borrara el filtro al volver a clickear sobre la estrella ya seleccionada,
  por esto dedicí eliminar la dependencia y hacer el componente yo mismo, tome ideas de internet para aplicar los estilos a las estrellas, pero la lógica del filtrado y el borrado del mismo la desarrolle yo.
- El hecho de que algunos estilos estén declarados en los componentes, no es por falta de consistencia, 
  simplemente quería demostrar que conozco diferentes formas de realizarlos, lo mismo para los componentes de
  una línea.
- Elimine <React.StrictMode> del archivo index.js ya que esto preventivamente hace dos llamados iniciales a la
  API (aunque en el useEffect solo se haga uno) y duplica los primeros 20 resultados, si bien es algo que solo afecta durante el desarrollo, decidí removerlo para que no haya confusiones.
- Para hacer la vista detallada de la pelicula, al no manejar los estados con un contexto y para evitar
  complicar mucho el envio de props, decidi utilizar la API disponible para buscar peliculas individualmente
  con su ID, el cual lo vincule con useParams.