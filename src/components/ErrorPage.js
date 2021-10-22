import React from "react"

const ErrorPage = () => {
    return (
        <div className="space error-page">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <p className="messsage text-upper">page not found</p>
                        <div className="image-container">
                            <img src="http://localhost:3000/images/error-page.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ErrorPage