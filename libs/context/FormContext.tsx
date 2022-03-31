import {createContext, useState} from 'react'

export const FormContext = createContext<any | undefined>(undefined)

type Props = {children?: JSX.Element | JSX.Element[];}

export default function FormProvider({children}: Props) {
    const [formData, setFormData] = useState({})
    return (
    <FormContext.Provider value={{formData, setFormData}}>
        {children}
    </FormContext.Provider>
  )
}