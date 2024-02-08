import React from 'react'

export default function Portfolio() {
    return (
        <section id="portfolio">
            <div className=" portfolioContent container">
                <h1 className="text-center py-2">PORTFOLIO COMPONENT</h1>
                <div className="iconss p-0 w-25  m-auto text-center position-relative ">
                    <i className="  mx-2 fs-5 star-icon fa-solid fa-star" />
                </div>
                <div className="row py-4 row-gap-3">
                    <div className="col-md-4">
                        <div type="button" className="btn position-relative p-0 m-0  w-100" data-bs-toggle="modal" data-bs-target="#exampleModal0">
                            <img src="imgs/f3.png" className="w-100 mt-5" alt=''  />
                            <div className="layout position-absolute d-flex justify-content-center  align-items-center">
                                <i className="fa-solid text-white fa-plus" />
                            </div>
                        </div>
                        <div className="modal fade position-fixed" id="exampleModal0" tabIndex="{-1}" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <img src="imgs/f3.png" className="w-100 mt-5" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div type="button" className="btn position-relative p-0 m-0  w-100" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            <img src="imgs/f2.png" className="w-100 mt-5" alt=''  />
                            <div className="layout position-absolute d-flex justify-content-center  align-items-center">
                                <i className="fa-solid text-white fa-plus" />
                            </div>
                        </div>
                        <div className="modal fade position-fixed" id="exampleModal1" tabIndex="{-1}" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <img src="imgs/f2.png" className="w-100 mt-5" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div type="button" className="btn position-relative p-0 m-0  w-100" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <img src="imgs/f1.png" className="w-100 mt-5" alt=''  />
                            <div className="layout position-absolute d-flex justify-content-center  align-items-center">
                                <i className="fa-solid text-white fa-plus" />
                            </div>
                        </div>
                        <div className="modal fade position-fixed" id="exampleModal2" tabIndex="{-1}" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <img src="imgs/f1.png" className="w-100 mt-5" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div type="button" className="btn position-relative p-0 m-0  w-100" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                            <img src="imgs/f3.png" className="w-100 mt-5" alt=''  />
                            <div className="layout position-absolute d-flex justify-content-center  align-items-center">
                                <i className="fa-solid text-white fa-plus" />
                            </div>
                        </div>
                        <div className="modal fade position-fixed" id="exampleModal3" tabIndex="{-1}" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <img src="imgs/f3.png" className="w-100 mt-5" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div type="button" className="btn position-relative p-0 m-0  w-100" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                            <img src="imgs/f2.png" className="w-100 mt-5" alt=''  />
                            <div className="layout position-absolute d-flex justify-content-center  align-items-center">
                                <i className="fa-solid text-white fa-plus" />
                            </div>
                        </div>
                        <div className="modal fade position-fixed" id="exampleModal4" tabIndex="{-1}" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <img src="imgs/f2.png" className="w-100 mt-5" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div type="button" className="btn position-relative p-0 m-0  w-100" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                            <img src="imgs/f1.png" className="w-100 mt-5" alt=''  />
                            <div className="layout position-absolute d-flex justify-content-center  align-items-center">
                                <i className="fa-solid text-white fa-plus" />
                            </div>
                        </div>
                        <div className="modal fade position-fixed" id="exampleModal5" tabIndex="{-1}" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <img src="imgs/f1.png" className="w-100 mt-5" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
