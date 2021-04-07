import React, { Component } from "react";
import ResizableRect from "react-resizable-rotatable-draggable";

class DragResizeBox extends Component {
    constructor() {
        super();
        this.state = {
            width: 100,
            height: 100,
            top: 100,
            left: 100,
            rotateAngle: 0,
        };
    }


     ristrictArea = () => {
        const [fromTop, fromLeft, width, height ] = [300, 400,80,30]
        
    }

    handleResize = (style, isShiftKey, type) => {
        // type is a string and it shows which resize-handler you clicked
        // e.g. if you clicked top-right handler, then type is 'tr'
        let { top, left, width, height } = style;
        top = Math.round(top);
        left = Math.round(left);
        width = Math.round(width);
        height = Math.round(height);
        this.setState({
            top,
            left,
            width,
            height,
        });
    };

    handleRotate = (rotateAngle) => {
        this.setState({
            rotateAngle,
        });
    };

    handleDrag = (deltaX, deltaY) => {
      
        this.setState({
            left: this.state.left + deltaX,
            top: this.state.top + deltaY,
        });
    };

    render() {
        const { width, top, left, height, rotateAngle } = this.state;
        return (
            <div className={"drb-box"}>
                <div className="resize-box-info" style={{ top: top - 100, left: left + 100 }}>
                    {" "}
                    <h6>{`${width} X ${height} = ${width * height} pixels at position (${top}, ${left})`}</h6>
                    <h6>{`Price: ${((height * width) * 0.001).toFixed(2)}ETH + Gas Fees`}</h6>
                    { <h5 className="text-danger">Box is not Avialable</h5> }
                </div>

                {
                    <div className="adbox"></div>
                }
                <ResizableRect
                    left={left}
                    top={top}
                    width={width}
                    height={height}
                    rotateAngle={rotateAngle}
                    // aspectRatio={false}
                    // minWidth={10}
                    // minHeight={10}
                    zoomable="n, w, s, e, nw, ne, se, sw"
                    // rotatable={true}
                    // onRotateStart={this.handleRotateStart}
                    onRotate={this.handleRotate}
                    // onRotateEnd={this.handleRotateEnd}
                    // onResizeStart={this.handleResizeStart}
                    onResize={this.handleResize}
                    // onResizeEnd={this.handleUp}
                    // onDragStart={this.handleDragStart}
                    onDrag={this.handleDrag}
                    // onDragEnd={this.handleDragEnd}
                />
            </div>
        );
    }
}

export default DragResizeBox;
