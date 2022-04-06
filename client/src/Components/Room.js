import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import RoomCard from './RoomCard'
import RoomForm from './RoomForm'

export default function Room() {

    const { id } = useParams() // récupère l'id des paramètres (de l'URL)
    const [room, setRoom] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetch(`/api/rooms/${id}`) // appel à l'API
            const json = await data.json() // conversion en json
            setRoom(json)
        }

        fetchData()
    }, [id])

    return room[0] && (
        <div>
            <RoomCard room={room[0]} />
            <h2>Editer</h2>
            <RoomForm id={id} room={room[0]} setRoom={setRoom} />
        </div>
    )
}
