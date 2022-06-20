import { Container, Graphics, Sprite, Text, TextStyle, Ticker } from 'pixi.js'
import bunnyImg from '@assets/bunny.png'

export class TrialOfTheOrbitScene extends Container {
  private readonly screenWidth: number
  private readonly screenHeight: number

  private readonly bunny: Sprite
  private readonly antiBunny: Sprite
  private readonly planet: Graphics
  private readonly root: Container
  private readonly aestheticText: Text

  constructor (
    screenWidth: number,
    screenHeight: number
  ) {
    super()

    this.screenWidth = screenWidth
    this.screenHeight = screenHeight

    this.root = new Container()

    this.bunny = Sprite.from(bunnyImg)
    this.antiBunny = Sprite.from(bunnyImg)
    this.planet = new Graphics()

    const style = new TextStyle({
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
    })

    this.aestheticText = new Text('A E S T H E T I C', style)

    this.aestheticText.anchor.set(0.5)
    this.aestheticText.x = this.screenWidth / 2
    this.aestheticText.y = 50

    this.root.x = this.screenWidth / 2
    this.root.y = this.screenHeight / 2

    this.bunny.anchor.set(0.5)

    this.bunny.x = 200
    this.bunny.y = 0
    this.bunny.scale.set(1.5)

    this.root.addChild(this.bunny)

    this.antiBunny.anchor.set(0.5)

    this.antiBunny.x = -125
    this.antiBunny.y = 0

    this.root.addChild(this.antiBunny)

    this.planet.beginFill(0xFCBA03)
    this.planet.drawCircle(0, 0, 30)
    this.planet.endFill()

    this.root.addChild(this.planet)

    this.addChild(this.root)
    this.addChild(this.aestheticText)

    Ticker.shared.add(this.update, this)
  }

  private update (_deltaTime: number): void {
    this.root.position.set(this.screenWidth / 2, this.screenHeight / 2)
    this.root.rotation += 0.01

    this.bunny.rotation += 0.01

    this.antiBunny.rotation += 0.05
  }
}
