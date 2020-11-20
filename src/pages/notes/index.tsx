/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FunctionComponent } from 'react'
import Link from 'next/link'

const notes = [...Array(15).keys()].map((id: number) => ({
  id,
  title: `This is my note ${id}`,
}))

const Notes: FunctionComponent = () => {
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>My Notes</h1>
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {notes.map(note => (
          <div sx={{ width: '33%', p: 2 }} key={note.id}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card' }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notes
