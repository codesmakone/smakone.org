import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import AlumniCard from '../components/Alumni/AlumniCard'

import BillyStevanus from '../images/Card/BillyStevanus.jpg'
import BryantWillyRans from '../images/Card/BryantWillyRans.jpg'
import ChristopherMarcPrajogo from '../images/Card/ChristopherMarcPrajogo.jpg'

const IndexPage = () => {
  return (
    <div className="font-sans">
      <Header></Header>
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
      <Footer />
    </div>
  )
}

export default IndexPage
