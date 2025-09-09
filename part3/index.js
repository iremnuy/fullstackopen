import express from 'express'

const app = express()

app.use(express.json())

const notes = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.get('/api/persons', (request, response) => {
    response.json(notes)
    }
)

app.get('/info', (request, response) => {
    const date = new Date()
    response.send(`<p>Phonebook has info for ${notes.length} people</p><p>${date}</p>`)
    }

)
app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
    }
)

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const noteIndex = notes.findIndex(note => note.id === id)
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1) 
        response.status(204).end()
    } else {
        response.status(404).end()
    }
    }
)

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({ 
            error: 'name or number is missing' 
        })
    }

    const nameExists = notes.find(note => note.name === body.name)
    if (nameExists) {
        return response.status(400).json({ 
            error: 'name must be unique' 
        })
    }

    const newNote = {
        id: (Math.random() * 10000).toFixed(0),
        name: body.name,
        number: body.number,
    }

    notes.push(newNote)
    response.json(newNote)
    }
)



