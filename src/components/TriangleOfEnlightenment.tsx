import { useEffect, useRef } from 'react'
import * as PIXI from 'pixi.js'
import triangleShaderFrag from '@shaders/triangle/shader.frag'
import triangleShaderVert from '@shaders/triangle/shader.vert'

export default function TriangleOfEnlightenment (): JSX.Element {
  const pixiRoot = useRef<HTMLCanvasElement>(null)

  const geometry = new PIXI.Geometry()
    .addAttribute('aVertexPosition', // the attribute name
      [
        -100, -50, // x, y
        100, -50, // x, y
        0.0, 100.0 // x, y
      ],
      2
    ) // the size of the attribute
    .addAttribute('aColor', // the attribute name
      [
        1, 0, 0, // r, g, b
        0, 1, 0, // r, g, b
        0, 0, 1 // r, g, b
      ],
      3
    ) // the size of the attribute

  const shader = PIXI.Shader.from(triangleShaderVert, triangleShaderFrag)

  const triangle = new PIXI.Mesh(geometry, shader)

  let app: PIXI.Application

  useEffect(() => {
    if (pixiRoot.current != null) {
      app = new PIXI.Application({
        width: 640,
        height: 480,
        antialias: true,
        backgroundColor: 0,
        view: pixiRoot.current,
        resizeTo: window
      })

      triangle.position.set(app.view.width / 2, app.view.height / 2)
      triangle.scale.set(2)

      app.stage.addChild(triangle)

      app.ticker.add((_delta) => {
        triangle.position.set(app.view.width / 2, app.view.height / 2)
        triangle.rotation += 0.01
      })

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
