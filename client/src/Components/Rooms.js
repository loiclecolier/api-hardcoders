import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RoomCard from './RoomCard'

export default function Rooms() {

    const [rooms, setRooms] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetch('/api/rooms') // appel à l'API
            const json = await data.json() // conversion en json
            setRooms(json)
        }

        fetchData()
    }, [])

    return (
        <>
            {rooms.map(room => (
                <Link to={'/rooms/' + room._id} key={room._id}> 
                    <RoomCard room={room}></RoomCard>
                </Link>
            ))}
        </>
    )
}
