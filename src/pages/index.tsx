// https://github.com/system-ui/theme-ui/issues/1160#issuecomment-715530924
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FunctionComponent } from 'react'

const Page: FunctionComponent = () => {
  return (
    <div sx={{ height: `calc(100vh - 60px)` }}>
      <div
        sx={{
          variant: 'containers.page',
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <h1 sx={{ fontSize: 8, my: 0 }}>
          This is a really dope note taking app.
        </h1>
      </div>
    </div>
  )
}

export default Page
