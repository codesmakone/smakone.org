import React from 'react'
import AlumniCard from '../components/Alumni/AlumniCard'

import BillyStevanus from '../images/Card/BillyStevanus.jpg'
import BryantWillyRans from '../images/Card/BryantWillyRans.jpg'
import ChristopherMarcPrajogo from '../images/Card/ChristopherMarcPrajogo.jpg'
import MainContainer from '../components/PageTemplate/MainContainer'

const IndexPage = () => {
  return (
    <MainContainer>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div></div>
          <div>
            <AlumniCard 
              img={ BillyStevanus } 
              title="Billy Stevanus" 
              desc="Billy Stevanus merupakan salah seorang alumni SMAK 1 Penabur yang lulus pada tahun ...."
            />
          </div>
          <div>
            <AlumniCard 
              img={ BryantWillyRans } 
              title="Bryant Willy Rans" 
              desc="Bryant Willy Rans, atau biasa dipanggil Bryant adalah salah satu alumnus Smukie angkatan ...."
            />
          </div>
          <div>
            <AlumniCard 
              img={ ChristopherMarcPrajogo } 
              title="Christopher Marc Prajogo" 
              desc="Hai Smukiers ! kenalin salah satu alumni kita yang jago banget main badminton, Christopher Marc ..."
            />
          </div>
        </div>
    </div>
    </MainContainer>
    
  )
}

export default IndexPage
