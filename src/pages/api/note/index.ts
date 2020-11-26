import nc from 'next-connect'
import notes from 'data/notes'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = nc()
  .post((req: NextApiRequest, res: NextApiResponse): void => {
    const note = {
      ...req.body,
      id: Date.now(),
    }

    notes.push(note)

    res.json({ data: note })
  })
  .get((_req: NextApiRequest, res: NextApiResponse): void => {
    res.json({ data: notes })
  })

export default handler
