import React from 'react'

import AboutLayout from '../PageTemplate/AboutLayout';

function AlumniPage({children}) {
    return(
        <AboutLayout>
            <div className="container mx-auto">
                <h1 className="py-10 text-center text-7xl font-bold">
                    Alumni Kami
                </h1>
                {children}
            </div>
        </AboutLayout>
    )
}

export default AlumniPage