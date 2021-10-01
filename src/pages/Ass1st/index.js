import React from "react";
import Ass1stLayout from "../../components/page_template/Ass1stLayout";

import Banner from "../../images/bannerKegiatan.jpg";

export default function Ass1stPage() {
  const title = "Ass1st";
  const content = (
    <div className="container mx-auto">
      <h1 className="justify-center text-center p-2 font-medium text-5xl mb-5">
        Ass1st
      </h1>
      <p className="justify-center text-justify p-2">
        Hello Smukierz , sebentar lagi kita akan segera menapaki perjalanan kita
        di tingkat perkuliahan. Tapi , masih banyak dari kita yang ragu akan
        memilih jurusan kuliah. Tapi jangan khawatir karena kami hadir dengan
        program ASS1ST. Apa itu ASS1ST? ASS1ST ini adalah program OSIS bidang 4
        yang isinya merupakan penjelasan mengenai jurusan kuliah serta nama -
        nama universitas yang mengusai di jurusan tersebut . Jadi , harapannya
        dengan adanya ASS1ST ini maka akan mempermudah kalian dalam menentukan
        jurusan kuliah yang kalian inginkan.
      </p>
    </div>
  );
  return <Ass1stLayout hero={Banner} title={title} content={content} />;
}
