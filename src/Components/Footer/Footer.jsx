import React from 'react'

export default function Footer() {
    return (
        <>
            <section id='foote' className=' p-5'>
                <div className="container text-center py-5 ">
                    <div className="row">
                        <div className="col-md-4 text-white">
                            <div>
                                <h2>LOCATION</h2>
                                <p>2215 John Daniel Drive</p>
                                <span>Clark, MO 65243</span>
                            </div>
                        </div>
                        <div className="col-md-4 text-white">
                            <div>
                                <h2>AROUND THE WEB</h2>
                                <ul className="list-unstyled fitCon d-flex gap-4 m-auto " >
                                    <li ><i className='p-2 border border-2 rounded-circle  fa-brands fa-facebook' ></i></li>
                                    <li ><i className='p-2 border border-2 rounded-circle  fa-brands fa-twitter' ></i></li>
                                    <li ><i className="p-2 border border-2 rounded-circle  fa-brands fa-linkedin"></i></li>
                                    <li ><i className='p-2 border border-2 rounded-circle  fa-solid fa-globe' ></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 text-white">
                            <div>
                                <h2>AROUND THE WEB</h2>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <footer className=' footer p-4'>
                <p className='text-center text-white' >Copyright © Your Website 2021</p>
            </footer>
        </>
    )
}
