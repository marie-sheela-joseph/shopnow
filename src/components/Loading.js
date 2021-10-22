import React from "react";

const Loading = ({ text, imgSource }) => {
    return <div className="loading-products d-flex justify-content-center align-items-center">
        <div>
            <div className="messsage">
                <p className="text-upper">{text}</p>
            </div>
            <div className="image-container-loading-products">
                <img src={imgSource} alt="" />
            </div>
        </div>
    </div>
}
export default Loading