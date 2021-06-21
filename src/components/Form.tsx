import { useState } from 'react'
import { Information } from '../interfaces/types'

interface FormState{
    inputValues:Information
}

interface FormProps{
    // onNewItem:React.Dispatch<React.SetStateAction<Information[]>>
    onNewItem:(newItem: Information) => void
}

const Form = ({ onNewItem }:FormProps) => {
  const [inputValue, setinputValue] = useState<FormState['inputValues']>({
    avatar: '',
    name: '',
    age: 0,
    description: ''
  })
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewItem(inputValue)
  }
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setinputValue({
      ...inputValue,
      [evt.target.name]: evt.target.value
    })
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={inputValue.name} type='text'name ='name' placeholder='name'/>
            <input onChange={handleChange} value={inputValue.avatar} type='text'name ='avatar' placeholder='avatar'/>
            <input onChange={handleChange} value={inputValue.age} type='number'name ='age' placeholder='age'/>
            <textarea onChange={handleChange} value={inputValue.description} name ='description' placeholder='description'/>
            <button>Save New Item</button>
        </form>
    </div>
  )
}
export default Form
