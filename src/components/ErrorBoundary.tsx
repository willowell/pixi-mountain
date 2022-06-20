import React from 'react'
import { withErrorBoundary, useErrorBoundary } from 'react-use-error-boundary'
import { isNullish } from '@lib/utils/type-guards'

function ErrorBoundary ({ children }: React.PropsWithChildren): JSX.Element {
  const [error] = useErrorBoundary()

  if (!isNullish(error)) {
    return (
      <div>
        <pre>{error.message}</pre>
      </div>
    )
  }

  return <>{children}</>
}

export default withErrorBoundary(ErrorBoundary)
