import Navbar from "../Navbar";

const About = () => {
  return (
    <div>
        <Navbar></Navbar>
     <div  className="bg-teal-700 text-center text-white p-20">
     <h2 className="text-5xl font-bold my-5">About the Developer</h2>
      <p className="font-normal text-base p-10">
        This project was crafted by <span className="font-bold">Abir</span>, a dedicated software developer with a
        strong passion for creating intuitive and impactful applications.
        Skilled in both front-end and back-end development,  <span className="font-bold">Abir</span> is committed to
        delivering user-centric solutions that elevate experiences and provide
        real value.
      </p>
     </div>
    </div>
  );
};

export default About;
