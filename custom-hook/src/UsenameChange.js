import { useState } from 'react'

const useNameChange = () => {
    const [Name, setName] = useState('John Wick')

    const onChange = (e) => {
        setName(e.target.value)
    }

    const ChangeBtn = () => {
        setName(Name)
    }
  
    return { Name , onChange , ChangeBtn }
}

export default useNameChange