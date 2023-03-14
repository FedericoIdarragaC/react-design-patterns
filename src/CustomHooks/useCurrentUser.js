import axios from "axios"
import { useEffect, useState } from "react"

export const useCurrentUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:8080/current-user')
      setUser(response.data)
    })()
  }, [])

  return user;
}