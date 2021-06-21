import { useState } from 'react'
import { Information } from './interfaces/types'
import List from './components/List'
import Form from './components/Form'
import './App.css'

const INITAL_VALUES = { avatar: 'https://i.pravatar.cc/150?img=Jobzi', name: 'Jipson Murillo', age: 25, description: 'Hola soy una buena descripcion para Jipson' }
interface AppState{
  information:Array<Information>
  pokemones:number
}

function App () {
  const [items, setItems] = useState<AppState['information']>([INITAL_VALUES])
  const [pokemon, setPokemon] = useState<AppState['pokemones']>(0)

  const handleChange = () => {
    setItems([...items, { avatar: 'https://i.pravatar.cc/150?img=50', name: 'Jobz5', age: 23, description: 'Hola soy una buena descripcion' }])
    setPokemon(prev => prev + 1)
  }
  const handleNewItem = (newItem:Information) => {
    setItems(items => [...items, newItem])
  }
  return (
    <div className="App">
      <List items={items} pokemon={pokemon}/>
      <Form onNewItem={handleNewItem}/>
      <button onClick={handleChange}>Add other Item</button>
    </div>
  )
}

export default App
