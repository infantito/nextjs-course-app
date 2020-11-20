/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Notes: FunctionComponent = () => {
  const router = useRouter()

  /**
   * [catch-all routes]
   * notes/[...params].tsx
   * e.g. notes/1/2/3 => params === ['1', '2', '3']
   * const { params } = router.query
   */

  /**
   * [dynamic route parameters]
   * notes/[id].tsx
   */
  const { id } = router.query

  /**
   * [Programmatic routing: use router to do so]
   * <button onClick={() => router.push('/')}>Go Home</button>
   * <button onClick={() => router.push('/notes')}>Dashboard</button>
   */

  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>Note: {id} </h1>
    </div>
  )
}

export default Notes
