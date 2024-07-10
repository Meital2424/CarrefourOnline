import axios from 'axios'

const baseUrl = "http://localhost:4000/user"

export const fetchUsere = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}


export const addUser = async (newUser) => {
  const response = await axios.post(baseUrl, newUser)
  console.log("customerapi: ", response.data)
  return response.data
}

export const setCurrentUser = async (password) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, { password: password })
    return response.data
  }

  catch {
    return null
  }
}


