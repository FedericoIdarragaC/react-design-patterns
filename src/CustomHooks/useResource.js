import axios from "axios"
import { useEffect, useState } from "react"

export const useResource = resourcePath => {
  const [resource, setResource] = useState(null)

  useEffect(() => {
    (async () => {
      const response = await axios.get(resourcePath)
      setResource(response.data)
    })()
  }, [resourcePath])

  return resource;
}