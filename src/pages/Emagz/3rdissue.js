import React from "react";
import EmagzLayout from "../../components/page_template/EmgazLayout";

import Banner from "../../images/banner2.jpg";

export default function NovemberPage() {
  const title = "E-Magazine";
  const content = (
    <div className="container mx-auto">
      <h1 className="justify-center text-center p-2 font-medium text-5xl mb-5">
        Square One
      </h1>
      <div className="mb-8 iframe-container hidden lg:block">
        <iframe
          src="https://heyzine.com/flip-book/6b4815b101.html"
          title="Square One"
          width="1000"
          height="700"
          frameborder="0"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          sandbox="allow-forms allow-scripts allow-same-origin allow-top-navigation"
        ></iframe>
      </div>
      <div className="lg:hidden">
      <p className="justify-center text-center p-2 text-2xl">
        You are viewing this in your phone/tablet. For better readability, please kindly visit this 
        <a className="text-blue-500 underline-offset-4" href="https://heyzine.com/flip-book/6b4815b101.html" target="_blank"> link</a>.
      </p>
      </div>
    </div>
  );
  return <EmagzLayout hero={Banner} title={title} content={content} />;
}
