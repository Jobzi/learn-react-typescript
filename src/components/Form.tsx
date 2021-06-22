import useNewItem from '../hooks/useNewItem'
import { Information } from '../interfaces/types'

// ?Aqui llega los methodos explicitos de las props
interface FormProps{
    // onNewItem:React.Dispatch<React.SetStateAction<Information[]>>
    onNewItem:(newItem: Information) => void
}

const Form = ({ onNewItem }:FormProps) => {
  const [inputValue, dispatch] = useNewItem()
  // const [inputValue, setinputValue] = useState<FormState['inputValues']>(INITAL_STATE)
  /*
   * esto seria sin utilizar los useReducer
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewItem(inputValue)
    handleClean()
  }
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setinputValue({
      ...inputValue,
      [evt.target.name]: evt.target.value
    })
  }
  const handleClean = () => {
    setinputValue(INITAL_STATE)
  } */
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewItem(inputValue)
    handleClean()
  }
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = evt.target
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value

      }
    })
  }
  const handleClean = () => {
    dispatch({ type: 'clean' })
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={inputValue.name} type='text'name ='name' placeholder='name'/>
            <input onChange={handleChange} value={inputValue.avatar} type='text'name ='avatar' placeholder='avatar'/>
            <input onChange={handleChange} value={inputValue.age} type='number'name ='age' placeholder='age'/>
            <textarea onChange={handleChange} value={inputValue.description} name ='description' placeholder='description'/>
            <button type='submit'>Save New Item</button>
            <button type='button' onClick={handleClean}>Clean Fiels</button>
        </form>
    </div>
  )
}
export default Form
