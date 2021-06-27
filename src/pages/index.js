import React from 'react'
import { Parallax, Background } from 'react-parallax';
import MainContainer from '../components/page_template/MainContainer'
import HomeCard from '../components/home/homeCard'

import HeroImage from '../images/home/HeroImage.jpg'

import KehidupanSMUKIERZ from '../images/home/kehidupanSMUKIERZ.jpg'
import Kegiatan from '../images/home/Kegiatan.jpg'
import Osis from '../images/home/OSIS.jpg'

const IndexPage = () => {
  return (
    <MainContainer>
      <div>
        <div>
          <div className="relative z-20">
          <Parallax strength={100} className="mt-20 min-h-700 w-full" bgClassName="w-full" bgStyle={{width:"100%"}}>
            <Background className="w-full">
            <div className="grid grid-cols-12 min-h-700">
              <div className="col-span-6 bg-gray-100 flex flex-col justify-center" >
                <h1 className="text-6xl font-bold ml-16">Selamat Datang</h1>
                <h1 className="text-3xl font-serif mt-3 ml-16">Di Website OSIS SMAK 1 BPK Penabur Jakarta</h1>
             </div>
            <div className="col-span-6">
              <img src={HeroImage} className="object-cover min-h-700"/>
            </div>
          </div>

            </Background>
          </Parallax>
          <div class="absolute z-20 -bottom-10 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path style={{fill:"rgb(254,254,255)"}}  fill-opacity="1" d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </div>
          </div>


          <div className="container relative block mx-auto mb-12 px-3 z-50">
            <div className="grid grid-cols-1 bg-blue-900 bg-opacity-90 rounded-2xl z-50">
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
