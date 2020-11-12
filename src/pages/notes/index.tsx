import { FunctionComponent } from 'react'
import Link from 'next/link'

const notes = [...Array(15).keys()].map((id: number) => ({
  id,
  title: `Note: ${id}`,
}))

const Notes: FunctionComponent = () => {
  return (
    <div>
      <h1>Note index path</h1>
      <ul>
        {notes.map(item => (
          <li key={item.id}>
            <Link
              href="/notes/[id]"
              as={`/notes/${encodeURIComponent(item.id)}`}
            >
              <a>
                <strong>{item.title}</strong>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Notes
