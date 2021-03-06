import ErrorBoundary from '@components/ErrorBoundary'
import loadable from '@loadable/component'

const LazyTriangleOfEnlightenment = loadable(async () => await import('@components/TriangleOfEnlightenment'))

// markup
export default function IndexPage (): JSX.Element {
  return (
    <div>
      <ErrorBoundary>
        <LazyTriangleOfEnlightenment />
      </ErrorBoundary>
    </div>
  )
}
