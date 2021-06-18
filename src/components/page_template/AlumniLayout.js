import React from 'react'
import MainContainer from './MainContainer';

function AlumniLayout({children}) {
    return(
        <MainContainer>
            <div className="container mx-auto mt-8">
                <h1 className="py-10 text-center text-7xl font-bold">
                    Alumni Kami
                </h1>
                {children}
            </div>
        </MainContainer>
    )
}

export default AlumniLayout