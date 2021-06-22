import { useReducer } from 'react'
import { Information } from '../interfaces/types'

interface FormState{
    inputValues:Information
}

const INITAL_STATE = {
  avatar: '',
  name: '',
  age: 0,
  description: ''
}

type FormReducerAction={
    type:'change_value',
    payload:{
      inputName:string,
      inputValue:string,
    }
  }|{
    type:'clean'
  }

const formReducer = (state: FormState['inputValues'], action: FormReducerAction) => {
  switch (action.type) {
    case 'change_value': {
      const { inputName, inputValue } = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    }
    case 'clean':
      return INITAL_STATE
    default:
      return state
  }
}

const useNewItem = () => {
  return useReducer(formReducer, INITAL_STATE)
}

export default useNewItem
