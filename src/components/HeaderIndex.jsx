import { useState } from 'react'
import caja from '../assets/img/logo.png';

const HeaderIndex = () => {
    return (
        <header className="bg-orange py-3">
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="display-5 fw-bolder text-white mb-2">InstaYa</h1>
                            <p className="lead fw-normal text-white-50 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dignissimos repellendus error esse natus iure voluptatem? Quisquam velit vitae odit!</p>
                        </div>
                    </div>
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={caja} alt="logo" height="20px" /></div>
                </div>
            </div>
        </header>
    )
}


export default HeaderIndex

