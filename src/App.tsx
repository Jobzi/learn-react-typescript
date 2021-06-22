import { useEffect, useState } from 'react'
import { Information } from './interfaces/types'
import List from './components/List'
import Form from './components/Form'
import './App.css'
import { getAllCountry } from './services/country'

// ? Otros valores inciales
// const INITAL_VALUES = { avatar: 'https://i.pravatar.cc/150?img=Jobzi', name: 'Jipson Murillo', age: 25, description: 'Hola soy una buena descripcion para Jipson' }
interface AppState{
  information:Array<Information>
  pokemones:number
}

function App () {
  const [items, setItems] = useState<AppState['information']>([])
  const [pokemon, setPokemon] = useState<AppState['pokemones']>(0)

  useEffect(() => {
    getAllCountry()
      .then(setItems)
  }, [])

  const handleChange = () => {
    setPokemon(prev => prev + 1)
    // setItems([...items, { avatar: 'https://i.pravatar.cc/150?img=50', name: 'Jobz5', age: 23, description: 'Hola soy una buena descripcion' }])
  }
  const handleNewItem = (newItem:Information) => {
    setItems(items => [...items, newItem])
  }
  return (
    <div className="App">
      <List items={items} pokemon={pokemon}/>
      <Form onNewItem={handleNewItem}/>
      <h1>{pokemon}</h1>
      <button onClick={handleChange}>Add other Item</button>
    </div>
  )
}

export default App
