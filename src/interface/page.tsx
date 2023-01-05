import React from 'react'
import { ICanvas } from 'pixi.js'
import Controls from './controls'
import Status from './status'

interface Props {
  gameCanvas: ICanvas
}

class Page extends React.Component<Props> {
  containerRef: React.RefObject<HTMLDivElement>

  constructor (props: Props) {
    super(props)
    this.containerRef = React.createRef()
  }

  componentDidMount (): void {
    if (this.containerRef.current != null) {
      this.containerRef.current.appendChild(this.props.gameCanvas as any)
    }
  }

  render (): JSX.Element {
    return (
      <div className="flex">
        <div className="flex-none" ref={this.containerRef}></div>
        <div className="flex-auto">
          <Controls />
          <Status />
        </div>
      </div>
    )
  }
}

export default Page
