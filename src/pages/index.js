import React from 'react'
import MainContainer from '../components/page_template/MainContainer'
import HomeCard from '../components/home/homeCard'

import Banner from '../images/banner2.jpg'
import STN from '../images/kegiatan/STN.jpg'

import KehidupanSMUKIERZ from '../images/homePage/kehidupanSMUKIERZ.jpg'
import Kegiatan from '../images/homePage/Kegiatan.jpg'
import Osis from '../images/homePage/OSIS.jpg'

const IndexPage = () => {
  return (
    <MainContainer>
      <div>
        <div>
          <img src={STN} />
          <div className="container mx-auto mb-6 px-3 py-5">
            <div className="grid grid-cols-1 bg-blue-400 rounded-2xl shadow-xl">
              <div className="flex justify-center align-middle">
                <h2 className="font-extrabold text-xl text-white">
                  Sekolah Swasta 
                </h2>
              </div>
              <div className="flex justify-center">
                <h1 className="font-extrabold text-9xl text-white">
                  #1
                </h1>
              </div>
              <div className="flex justify-center">
                <h2 className="font-extrabold text-xl text-white text-center">
                  Berdasarkan Rerata TPS UTBK 2020
                </h2>
              </div>
            </div>
          </div>
        </div>
        
        <div className="shadow-xl">
          <div className="container mx-auto py-40">
            <h1 className="justify-center text-5xl text-center font-bold mb-5">
              Berita Terkini
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
              <div>
                <HomeCard
                      img={ KehidupanSMUKIERZ } 
                      title="Bertemu Dengan SMUKIERZ" 
                      dir="./scott"
                  />
              </div>
              <div>
                <HomeCard
                      img={ KehidupanSMUKIERZ } 
                      title="Bertemu Dengan SMUKIERZ" 
                      dir="./scott"
                  />
              </div>
              <div>
                <HomeCard
                      img={ KehidupanSMUKIERZ } 
                      title="Bertemu Dengan SMUKIERZ" 
                      dir="./scott"
                  />
              </div>
              <div>
                <HomeCard
                      img={ KehidupanSMUKIERZ } 
                      title="Bertemu Dengan SMUKIERZ" 
                      dir="./scott"
                  />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-400 lg:px-12 px-3 py-40 shadow-xl">
          <div className="container mx-auto">
            <h1 className="justify-center text-white text-5xl text-center font-bold mb-12">
              Kegiatan
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 rounded-lg">
              <div className="rounded-lg">
                <img src={Kegiatan} className="object-fill w-full h-auto rounded-2xl"/>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:mx-5 rounded-2xl">
                  <HomeCard
                      img={ KehidupanSMUKIERZ } 
                      title="Ada Apa Aja Sih di SMUKI?" 
                      dir="./scott"
                  />
                  <HomeCard
                      img={ KehidupanSMUKIERZ } 
                      title="Smakonecup" 
                      dir="./scott"
                  />
                  <HomeCard
                      img={ KehidupanSMUKIERZ } 
                      title="Soundscape" 
                      dir="./scott"
                  />
                  <HomeCard
                      img={ KehidupanSMUKIERZ } 
                      title="SMUKIEZ Theater Night" 
                      dir="./scott"
                  />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-40">
          <h1 className="justify-center text-5xl text-center font-bold mb-5">
            Kehidupan SMUKIERZ
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4">
            <div>
              <HomeCard
                    img={ KehidupanSMUKIERZ } 
                    title="Bertemu Dengan SMUKIERZ" 
                    dir="./scott"
                />
            </div>
            <div>
              <HomeCard
                    img={ KehidupanSMUKIERZ } 
                    title="Bertemu Dengan SMUKIERZ" 
                    dir="./scott"
                />
            </div>
            <div>
              <HomeCard
                    img={ KehidupanSMUKIERZ } 
                    title="Bertemu Dengan SMUKIERZ" 
                    dir="./scott"
                />
            </div>
            <div>
              <HomeCard
                    img={ KehidupanSMUKIERZ } 
                    title="Bertemu Dengan SMUKIERZ" 
                    dir="./scott"
                />
            </div>
          </div>
        </div>

        <div className="bg-red-300 lg:px-12 px-3 py-40 shadow-xl">
          <div className="container mx-auto">
            <h1 className="justify-center text-white text-5xl text-center font-bold mb-12">
              Kenal Kami Lebih Jauh
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 rounded-lg">
              <div className="rounded-lg">
                <img src={Osis} className="object-fill w-full h-auto rounded-2xl"/>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:mx-5 rounded-2xl">
                  <HomeCard
                      img={ KehidupanSMUKIERZ } 
                      title="Ada Apa Aja Sih di SMUKI?" 
                      dir="./scott"
                  />
                  <HomeCard
                      img={ KehidupanSMUKIERZ } 
                      title="Smakonecup" 
                      dir="./scott"
                  />
                  <HomeCard
                      img={ KehidupanSMUKIERZ } 
                      title="Soundscape" 
                      dir="./scott"
                  />
                  <HomeCard
                      img={ KehidupanSMUKIERZ } 
                      title="SMUKIEZ Theater Night" 
                      dir="./scott"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
    
  )
}

export default IndexPage
