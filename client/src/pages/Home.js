import React, { useEffect, useState } from 'react'

const Home = () => {
    const [trainings, setTrainings] = useState(null)
    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/trainings')
            const json = await response.json()

            if (response.ok) {
                setTrainings(json)
            }
        }

        fetchWorkouts()
    }, [])
    return (
        <div className="home">
            <div className="trainings">
                {trainings && trainings.map((trainingRecord) => (
                    <p key={trainingRecord._id}>{trainingRecord.name}</p>
                ))}
            </div>
        </div>
    )
}

export default Home