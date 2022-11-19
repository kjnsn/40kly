import React from "react";
import { ICanvas } from "pixi.js";
import Controls from "./controls";

interface Props {
  gameCanvas: ICanvas;
}

class Page extends React.Component<Props> {
  containerRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount(): void {
    this.containerRef.current.appendChild(this.props.gameCanvas as any);
  }

  render() {
    return (
      <div className="flex">
        <div className="flex-none" ref={this.containerRef}></div>
        <div className="flex-auto">
          <Controls />
        </div>
      </div>
    );
  }
}

export default Page;
