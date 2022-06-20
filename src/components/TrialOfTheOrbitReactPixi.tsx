import { useCallback, useState } from 'react'
import { Container, Graphics, Sprite, Stage, Text, useTick } from '@inlet/react-pixi'
import { Graphics as PixiGraphics, TextStyle } from 'pixi.js'
import bunnyImg from '@assets/bunny.png'

const MAX_WIDTH = 640
const MAX_HEIGHT = 480

export function AestheticText (): JSX.Element {
  const [scale, setScale] = useState(1)

  const [dt, setDt] = useState(0)

  useTick((delta) => {
    setDt(dt + 0.05 * delta)

    setScale(1.5 + Math.sin(dt) * 0.5)
  })

  return (
    <Text
      text='A E S T H E T I C 美味しい緑茶'
      anchor={0.5}
      position={[MAX_WIDTH / 2, 50]}
      scale={scale}
      style={new TextStyle({
        dropShadow: true,
        fill: [
          '#ff14cc',
          '#1fffc7',
          '#0fd7ff'
        ],
        fillGradientType: 1,
        fontFamily: 'Arial Black',
        fontStyle: 'oblique',
        letterSpacing: 1,
        lineJoin: 'round',
        strokeThickness: 1
      })}
    />
  )
}

export function Planet (): JSX.Element {
  const draw = useCallback((g: PixiGraphics) => {
    g.beginFill(0xFCBA03)
    g.drawCircle(0, 0, 30)
    g.endFill()
  }, [])

  return (
    <Graphics draw={draw} />
  )
}

export function Scene (): JSX.Element {
  const [rootRotation, setRootRotation] = useState(0)
  const [bunnyRotation, setBunnyRotation] = useState(0)
  const [antiBunnyRotation, setAntiBunnyRotation] = useState(0)

  useTick(delta => {
    setRootRotation(rootRotation + 0.01 * delta)

    setBunnyRotation(bunnyRotation + 0.01 * delta)

    setAntiBunnyRotation(antiBunnyRotation + 0.05 * delta)
  })

  return (
    <Container position={[MAX_WIDTH / 2, MAX_HEIGHT / 2]} rotation={rootRotation}>
      <Planet />
      <Sprite
        anchor={0.5}
        x={200}
        y={0}
        scale={1.5}
        image={bunnyImg}
        rotation={bunnyRotation}
      />
      <Sprite
        anchor={0.5}
        x={-125}
        y={0}
        image={bunnyImg}
        rotation={antiBunnyRotation}
      />
    </Container>
  )
}

export default function TrialOfTheOrbitReactPixiApp (): JSX.Element {
  return (
    <Stage
      width={MAX_WIDTH}
      height={MAX_HEIGHT}
      options={{
        antialias: true,
        backgroundColor: 0x6495ED,
        resolution: (window.devicePixelRatio > 0) ? window.devicePixelRatio : 1,
        autoDensity: true
      }}
    >
      <Scene />
      <AestheticText />
    </Stage>
  )
}
