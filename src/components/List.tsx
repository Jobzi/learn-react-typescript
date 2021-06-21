import { Information } from '../interfaces/types'

interface Props{
  items:Array<Information>
  pokemon:number
}

const List = ({ items, pokemon }:Props) => {
  const renderList = ():JSX.Element[] => {
    return (
      items.map((item) => {
        return <li key={item.name}>
          <img src={item.avatar} alt={item.name}/>
          <h4>{item.name}</h4>
          <p>{item.description?.substr(0, 100)}</p>
          <p>Pokemon {pokemon}</p>
        </li>
      })
    )
  }
  return (
    <ul>
    {renderList()}
  </ul>
  )
}
export default List

// * typescritp para pasar valores de las props como un childres son los metodos o formas
// List:React.FunctionComponent<Props> = ({ items, pokemon }) asi podria recibir el valor mediante un children
// List:React.FC<Props> = ({ items, pokemon }) asi podria recibir el valor mediante un children
/*
interface Props{
  children:JsxElement|React.ReactNode|(name:string)=>React.ReactNode  }
*/
