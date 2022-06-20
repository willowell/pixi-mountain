import { useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'
import { TrialOfTheOrbitScene } from '@lib/scenes/trial-of-the-orbit-scene'

export default function TrialOfTheOrbit (): JSX.Element {
  const pixiRoot = useRef<HTMLCanvasElement>(null)

  const MAX_WIDTH = 640
  const MAX_HEIGHT = 480

  let app: PIXI.Application

  useEffect(() => {
    if (pixiRoot.current != null) {
      app = new PIXI.Application({
        width: MAX_WIDTH,
        height: MAX_HEIGHT,
        antialias: true,
        backgroundColor: 0x6495ED,
        view: pixiRoot.current,
        resolution: (window.devicePixelRatio > 0) ? window.devicePixelRatio : 1,
        autoDensity: true
      })

      const trialOfTheOrbitScene = new TrialOfTheOrbitScene(app.screen.width, app.screen.height)

      app.stage.addChild(trialOfTheOrbitScene)

      return () => {
        app.destroy(true, true)
      }
    }
    return () => {}
  }, [])

  return (
    <canvas id='pixi-root' ref={pixiRoot} />
  )
}
