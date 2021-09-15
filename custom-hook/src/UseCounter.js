import { useState } from 'react'

const useCounter = () => {
    const [Counter, setCounter] = useState({ count : 0 })

    const onPlus = () => {
        setCounter({ count : Counter.count + 1 })
    }

    const onMinus = () => {
        setCounter({ count : Counter.count - 1 })
    }

    return { Counter , onPlus , onMinus }
}

export default useCounter