import React, { Component, useContext } from "react";
import ResizableRect from "react-resizable-rotatable-draggable";
import {showingForm} from "../ImageAndDataForm/ImageAndDataForm.js"
import DragBoxInfo from "./DragBoxInfo.jsx";



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

    handleDrag = (deltaX, deltaY, event) => {
        if (this.state.left > 0 && this.state.left + this.state.width <= 1000) {
            this.setState({
                left: this.state.left + deltaX,
            });
        } else if (this.state.left <= 0) {
            this.setState({
                left: 1,
            });
        }
        if (this.state.left + this.state.width >= 1000) {
            this.setState({
                left: 999 - this.state.width,
            });
        }

        if (this.state.top > 0 && this.state.top + this.state.height <= 1000) {
            this.setState({
                top: this.state.top + deltaY,
            });
        } else if (this.state.top <= 0) {
            this.setState({
                top: 1,
            });
        } else if (this.state.top + this.state.height >= 1000) {
            this.setState({
                top: 999 - this.state.height,
            });
        }
    };

    render() {
        const { width, top, left, height, rotateAngle } = this.state;
        return (
            <div className={"drb-box"}>
                <DragBoxInfo height={height} width={width} left={left} top={top}  />

                {}
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
