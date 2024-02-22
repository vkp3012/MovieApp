import React from 'react'
import Logo from './Logo'

const header = () => {
    return (
        <div className='container-xxl bg-body-secondary'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 mt-2'>
                        <Logo/>
                    </div>
                    <div className='col-8'>
                        <ul className='d-flex list-unstyled mt-2 gap-3 justify-content-end'> 
                            <li>Home</li>
                            <li>Movie</li>
                            <li>Series</li>
                            <li>Favorites</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default header
