import React, { useContext } from 'react';
import { EssentialContext } from '../../App';

const DragBoxInfo = ({top, height, width,left}) => {

    const [essentialContext, setEssentialContext] = useContext(EssentialContext);
    const showingForm = ()=> {
        setEssentialContext({
            isFormShown: !essentialContext.isFormShown,
        });
    }

    return (
        <div>
            <div className="resize-box-info border border-success" style={{ top: top - 100, left: left + 100 }}>
                {" "}
                <h6>{`${width} X ${height} = ${width * height} pixels at position (${top}, ${left})`}</h6>
                <h6>{`Price: ${(height * width * 0.001).toFixed(2)}ETH + Gas Fees`}</h6>
                {
                    <h6 className="">
                        Slot is availealbe <button onClick={showingForm}>Buy Now</button>
                    </h6>
                }
            </div>
        </div>
    );
};

export default DragBoxInfo;