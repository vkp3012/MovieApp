import React from 'react'

const Logo = () => {
    return (
        <div className='d-flex justify-content-center'>
            <img src='https://icon-library.com/images/movie-png-icon/movie-png-icon-1.jpg' alt="movie logo" className='movieLogo'/>
            <div>
                <span
                    style={{
                        alignItems:"center",
                        fontSize:"25px",
                        padding:"5px",
                        fontWeight:700,
                    }}
                >
                    Movie
                    <span style={{color:"red"}}>Flex</span>
                </span>
            </div>
        </div>
    )
}

export default Logo
