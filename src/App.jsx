import './App.css'
import Card from './components/Card'
import Texto from './components/Texto'

function App() {
  
//las props sirven para mandar propiedades del padre al hijo

  const me = {
    name: "Benjamin",
    age: 30,
    favoriteMovie: "Forest Gump",
    favoriteMusic: "Funk"
  }

  const hobbies = {
    title: "Hobbies",
    list: ["Música", "Ir a la playa", "Películas"]
  }
  
  const favoriteFood = {
    title: "Mi comida favorita",
    list: ["Porotos con riendas", "Pizza", "Sushi"]
  }

  const skill = {
    title: "My stack tech",
    list: ["html","css","javascript"]
  }

  const idiomas = {
    title: "Mis idiomas",
    list: ["español","ingles","paris"]
  }

  return (
    <div className="App">
      <ul className='list list1'>
        <li className='list__item'><b>Nombre: </b>{me.name}</li>
        <li className='list__item'><b>Edad: </b>{me.age} años.</li>
        <li className='list__item'><b>Película Favorita: </b>{me.favoriteMovie}</li>
        <li className='list__item'><b>Música Favorita: </b>{me.favoriteMusic}</li>
      </ul>
      <Card objInfo={hobbies} nameClass='list2' />
      <Card objInfo={favoriteFood} nameClass='list3' />
      <Card objInfo={skill} nameClass='list4' />
      <Card objInfo={idiomas} nameClass='list5' />
      <Texto textClass='texto' />
      
    </div>
  )
}

export default App