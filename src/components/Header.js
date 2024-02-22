import React from 'react'
import Logo from './Logo'

const header = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='\home'>
                        <Logo />
                    </a>
                    <button className='navbar-toggler' type='button'
                        data-bs-toggle="offcanvas"
                        data-bs-target="#navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label='Toggle navigation'
                        aria-controls='navbarToggleExternalContent'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id="navbarToggleExternalContent">
                        <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll fw-bold'>
                            <li className='nav-item'>
                                <a className='nav-link active' href='\home' aria-current="page">Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='\movie'>Movie</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='\series'>Series</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='\favorites'>Favorites</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='\Login'>Login</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <!-- Offcanvas content --> */}
            </nav>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarToggleExternalContent">
                <div class="offcanvas-header">
                    <Logo />
                </div>
                <div class="offcanvas-body">
                    {/* <!-- Add your left-side content here --> */}
                    <ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll fw-bold'>
                        <li className='nav-item'>
                            <a className='nav-link active' href='\home' aria-current="page">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='\movie'>Movie</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='\series'>Series</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='\favorites'>Favorites</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='\Login'>Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default header
