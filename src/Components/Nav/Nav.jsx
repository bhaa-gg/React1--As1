import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <>
            <nav id="navbarz" className="navbar  w-100 position-fixed z-3 navbar-expand-lg py-4 ">
                <div className="container">
                    <NavLink className="navbar-brand fs-2  text-white  fw-bolder" to="/">START FRAMEWORK</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto gap-5 mb-2 mb-lg-0" role="tablist">
                            <li className="nav-item">
                                <NavLink className={"nav-link  text-white fw-bold  "} aria-current="page" to="ABOUT">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"nav-link  text-white fw-bold " }to="PORTFOLIO">PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={"nav-link  text-white fw-bold " }to="CONTACT">CONTACT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
