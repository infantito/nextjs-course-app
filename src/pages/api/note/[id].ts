import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import notes, { Note } from 'data/notes'

const getNote = (id: string) =>
  notes.find((note: Note) => note.id === parseInt(id))

const handler = nc()
  .get((req: NextApiRequest, res: NextApiResponse): void => {
    const note = getNote(req.query.id as string)

    if (!note) {
      res.status(404)

      res.end()

      return void 0
    }

    res.json({ data: note })
  })
  .patch((req: NextApiRequest, res: NextApiResponse): void => {
    const note = getNote(req.query.id as string)

    if (!note) {
      res.status(404)

      res.end()

      return
    }

    const index = notes.findIndex(
      (n: Note) => n.id === parseInt(req.query.id as string),
    )

    const updated = { ...note, ...req.body }

    notes[index] = updated

    res.json({ data: updated })
  })
  .delete((req: NextApiRequest, res: NextApiResponse): void => {
    const note = getNote(req.query.id as string)

    if (!note) {
      res.status(404)

      res.end()

      return void 0
    }

    const index = notes.findIndex(
      n => n.id === parseInt(req.query.id as string),
    )

    notes.splice(index, 1)

    res.json({ data: req.query.id })
  })

export default handler
