// import { useState } from 'react'

const useParam = (name , email) => {
    let Name = `Name : ${name}`
    let Email = `Email : ${email}`

    return [ Name , Email ]
}

export default useParam