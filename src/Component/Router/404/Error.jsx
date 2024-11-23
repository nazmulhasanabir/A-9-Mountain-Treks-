import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../About/Footer";

const Error = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="h-screen px-44">
        <h2 className="text-5xl text-center font-bold my-10">We lost this page</h2>
        <p className="text-center text-2xl font-semibold ">
          We searched high and low but couldn’t find what you’re looking for.
          Let’s find a better place for you to go,Home
        </p>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Error;
