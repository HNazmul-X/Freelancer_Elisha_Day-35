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

    showingForm = () => {
        console.log("etc.")
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

    handleDrag = (deltaX, deltaY,event) => {
     

    if(this.state.left > 0 && (this.state.left + this.state.width)<=1000 ){
        this.setState({
            left: this.state.left + deltaX
        })
    }else if(this.state.left <=0){
        this.setState({
            left:1
        })
    }
    if((this.state.left + this.state.width) >= 1000){
        this.setState({
            left:999 - this.state.width
        })
    }






    if(this.state.top > 0 && (this.state.top + this.state.height) <= 1000){
        this.setState({
            top: this.state.top + deltaY
        })
    }else if(this.state.top <= 0){
        this.setState({
            top:1
        })
    } else if((this.state.top + this.state.height)>= 1000){
        this.setState({
            top:999 - this.state.height
        })
    }





    };

    render() {
        const { width, top, left, height, rotateAngle } = this.state;
        return (
            <div className={"drb-box"}>
                <div className="resize-box-info border border-success" style={{ top: top - 100, left: left + 100 }}>
                    {" "}
                    <h6>{`${width} X ${height} = ${width * height} pixels at position (${top}, ${left})`}</h6>
                    <h6>{`Price: ${((height * width) * 0.001).toFixed(2)}ETH + Gas Fees`}</h6>
                    { <h6 className="">Slot is availealbe <button onClick={this.showingForm}>Buy Now</button></h6> }
                </div>

                {
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
