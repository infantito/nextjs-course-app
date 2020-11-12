import { FunctionComponent } from 'react'
import Link from 'next/link'

const Page: FunctionComponent = () => {
  return (
    <div>
      <h1>Index Page</h1>
      <Link href="/notes">
        <a>Visit</a>
      </Link>
    </div>
  )
}

export default Page
