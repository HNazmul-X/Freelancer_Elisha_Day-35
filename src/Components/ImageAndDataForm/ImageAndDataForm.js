import React, { useContext } from 'react';
import { EssentialContext } from '../../App';

const ImageAndDataForm = () => {
      const [essentialContext , setEssentialContext] = useContext(EssentialContext)

    return (
        <div className={!essentialContext.isFormShown && "d-none"}>
            <div className="alert-dark p-2 w-75 shadow mb-3">
                <input type="text" placeholder="Title" className="form-control my-2" />
                <input type="text" placeholder="url" className="form-control my-2" />
                <input type="file" placeholder="Title" className="form-control my-2" />
            </div>
        </div>
    );
};

export default ImageAndDataForm;