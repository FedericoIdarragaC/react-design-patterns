import axios from "axios"
import { useEffect, useState } from "react"
import React from "react"

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:8080/current-user');
      const currentUser = response.data;
      setUser(currentUser)
    })()
  }, [])

  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user })
        }

        return child
      })}
    </>
  )
}