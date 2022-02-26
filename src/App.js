import Comentario from './components/Comentario';
import Saludo from './components/Saludo';


function App() {

  const imagen = 'https://picsum.photos/200'  
  return (
    <div className="App">
        <h1>Comentarios</h1>
        <Saludo nombre='Roberto' edad={30}/>
        <hr/>
        <h3>Comentarios</h3>
        <Comentario
          urlImagen = {imagen}
          nombre= 'Roberto Morales'
          texto = 'Esto es un comentario de Roberto'
        />
    </div>
  );
}

export default App;
