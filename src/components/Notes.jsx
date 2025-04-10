import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Notes = () => {
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
                setNotes(response.data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchNotes()
    }, [])
    
  return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">To-do</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && (
                <ul className="list-disc pl-5">
                    {notes.map(note => (
                        <li key={note.id} className="mb-2">{note.title}</li>
                    ))}
                </ul>
            )}
        </div>
  )
}

export default Notes