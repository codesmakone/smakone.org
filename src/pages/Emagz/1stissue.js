import React from "react";
import EmagzLayout from "../../components/page_template/EmgazLayout";

import Banner from "../../images/banner2.jpg";

export default function NovemberPage() {
  const title = "E-Magazine";
  const content = (
    <div className="container mx-auto">
      <h1 className="justify-center text-center p-2 font-medium text-5xl mb-5">
        November's Youth
      </h1>
      <div className="mb-8 iframe-container">
        <iframe
          src="https://www.flipbookpdf.net/web/site/26dca515e81cc0654f5d4dda43a7d5a5ff713edc202111.pdf.html"
          width="1000"
          height="700"
          frameborder="0"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          sandbox="allow-forms allow-scripts allow-same-origin allow-top-navigation"
        ></iframe>
      </div>
    </div>
  );
  return <EmagzLayout hero={Banner} title={title} content={content} />;
}
