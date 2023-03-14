import axios from "axios";
import React, { useState, useEffect } from "react";

export const withUser = (Component, userId) => {
  return props => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`http://localhost:8080/users/${userId}`)
        setUser(response.data)
      })();
    }, [])

    return <Component {...props} user={user} />
  }
}