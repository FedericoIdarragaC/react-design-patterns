import { useEffect, useState } from "react"

export const ControlledForm = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState()
  const [hairColor, setHairColor] = useState('')

  useEffect(() => {
    if (name.length <= 2) {
      console.log('Name must be 2 o more car')
    }
  }, [name])

  return (
    <form>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        name="age"
        type="text"
        placeholder="Age"
        value={age}
        onChange={e => setAge(Number(e.target.value))}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        value={hairColor}
        onChange={e => setHairColor(e.target.value)}
      />
      <button >Submit</button>
    </form>
  )
}