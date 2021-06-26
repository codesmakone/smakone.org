import React from 'react'
import MainContainer from '../components/page_template/MainContainer'
import HomeCard from '../components/home/homeCard'

import Banner from '../images/banner2.jpg'

import KehidupanSMUKIERZ from '../images/homePage/kehidupanSMUKIERZ.jpg'
import Kegiatan from '../images/homePage/Kegiatan.jpg'
import Osis from '../images/homePage/OSIS.jpg'

const IndexPage = () => {
  return (
    <MainContainer>
      <div>
        <div>
          <img src={Banner} />
          <div className="container mx-auto my-6 px-3">
            <div className="grid grid-cols-1 bg-blue-400 rounded-2xl">
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
        
        <div className="container mx-auto py-12">
          <h1 className="justify-center text-5xl text-center font-bold mb-5">
            Berita Terkini
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

        <div className="bg-purple-800 lg:px-12 px-3 py-12">
          <div className="container mx-auto">
            <h1 className="justify-center text-white text-5xl text-center font-bold mb-12">
              Kegiatan
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 rounded-lg">
              <div className="rounded-lg">
                <img src={Kegiatan} className="object-fill w-full h-auto rounded-2xl"/>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 bg-white lg:mx-5 p-3 rounded-2xl">
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

        <div className="container mx-auto py-12">
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

        <div className="bg-gray-500 lg:px-12 px-3 py-12">
          <div className="container mx-auto">
            <h1 className="justify-center text-white text-5xl text-center font-bold mb-12">
              Kenal Kami Lebih Jauh
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 rounded-lg">
              <div className="rounded-lg">
                <img src={Osis} className="object-fill w-full h-auto rounded-2xl"/>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 bg-white lg:mx-5 p-3 rounded-2xl">
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
