import axios from "axios";
import { useEffect, useState } from "react"


export const withEditableUser = (Component, userId) => {
  return props => {
    const [originalUser, setOriginalUser] = useState(null)
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`http://localhost:8080/users/${userId}`);
        setOriginalUser(response.data)
        setUser(response.data)
      })()
    }, []);

    const onChangeUser = changes => {
      setUser({ ...user, ...changes })
    }

    const onSaveUser = async () => {
      const response = await axios.post(`http://localhost:8080/users/${userId}`, { user })
      setUser(response.data)
    }

    const onResetUser = () => {
      setUser(originalUser)
    }

    return <Component {...props}
      user={user}
      onChangeUser={onChangeUser}
      onSaveUser={onSaveUser}
      onResetUser={onResetUser} />
  }
}