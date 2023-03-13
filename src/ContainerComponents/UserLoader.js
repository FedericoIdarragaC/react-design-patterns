import axios from "axios"
import { useEffect, useState } from "react"
import React from "react"

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://localhost:8080/users/${userId}`);
      const userData = response.data;
      setUser(userData)
    })()
  }, [userId])

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