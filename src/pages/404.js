import React from "react"
import { Link } from "gatsby"

import MainContainer from '../components/page_template/MainContainer'

// markup
const NotFoundPage = () => {
  return (
    <MainContainer>
      <div className="container mx-auto h-full my-64 justify-center text-center">
        <h1 className="text-9xl font-semibold">404</h1>
        <p className="mt-5">
          Menyimpan rasa terlalu dalam<br/>
          Ujungnya sakit sendiri kan?<br/>
          Mohon maaf{" "}dari hati terdalam
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          <br />
          halaman tidak berhasil ditemukan.
        </p>
        <p className="mt-12">
          <Link to="/" className="bg-red-700 p-3 rounded-lg text-white">Kembali ke halaman utama</Link>
        </p>
      </div>
    </MainContainer>
  )
}

export default NotFoundPage