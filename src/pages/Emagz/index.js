import React from "react";
import EmagzLayout from "../../components/page_template/EmgazLayout";

import Banner from "../../images/banner2.jpg";

export default function KegiatanPage() {
  const title = "E-Magazine";
  const content = (
    <div className="container mx-auto">
      <h1 className="justify-center text-center p-2 font-medium text-5xl mb-5">
        Apa itu E-Magazine?
      </h1>
      <p className=" text-justify p-2 pb-5">
        E-magazine, seperti namanya, adalah program OSIS SMAK 1 PENABUR Jakarta
        yang berkolaborasi dengan ONE Journal Untuk menerbitkan majalah digital
        tiap bulannya. Nama dari e-magazine kami adalah "1NSPIRATION" yang
        memiliki arti "ONE Inspiration, ONE Aspiration for ONE Universe" dimana
        konten 1NSPIRATION adalah hasil dari kumpulan karya dan aspirasi
        Smukiers. Tidak hanya itu, 1NSPIRATION juga merupakan wadah informatif
        yang menyediakan informasi-informasi yang akan menambah pengetahuan umum
        dan tentunya akan menginspirasi, menambah wawasan, dan meningkatakn
        tingkat literasi dalam membaca.
      </p>
      <p className=" text-justify p-2 pb-5">
        Untuk mulai membaca, bisa klik seri majalah yang diinginkan pada bagian
        kiri layar atau pilih pada dropdown menu jika menggunakan HP. Selamat
        membaca!
      </p>
    </div>
  );
  return <EmagzLayout hero={Banner} title={title} content={content} />;
}
