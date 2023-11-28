import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Page1 = () => {
    const { id } = useParams()
    const [person, setPerson] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getPersonData = async () => {
            setIsLoading(true)
            const response = await fetch(`https://swapi.dev/api/people/${id}`)
            const data = await response.json()
            setPerson(data)
            setIsLoading(false)
        }

        getPersonData()

    }, [])

    return (
        <div>
            {
                isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        <h1>Star Wars People</h1>
                        <p>Persons's name: {person.name}</p>
                    </>
                )
            }
        </div>
    )
}

export default Page1