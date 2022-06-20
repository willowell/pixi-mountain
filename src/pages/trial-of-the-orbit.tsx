import ErrorBoundary from '@components/ErrorBoundary'
import loadable from '@loadable/component'

const LazyTrialOfTheOrbit = loadable(async () => await import('@components/TrialOfTheOrbitReactPixi'))

// markup
export default function IndexPage (): JSX.Element {
  return (
    <div>
      <ErrorBoundary>
        <LazyTrialOfTheOrbit />
      </ErrorBoundary>
    </div>
  )
}
