import React, { useEffect } from 'react';
import HomepageBG from '../assets/homepageBG.png';
import Card from '../components/Card/Card';
import photo from '../assets/Monsters-University-Logo.png';
import 'animate.css'
 

const Homepage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    }, { threshold: 0.5 });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(element => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen justify-center items-center z-40">

      {/* Welcome Section */}
      <section className="relative h-screen bg-blue-950">
        <img
          src={HomepageBG}
          alt="Monsters University"
          className="w-full h-full object-contain object-right px-[70px]" />

        <div className="absolute inset-0 z-50 sm:col-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl justify-start text-center ml-[45px] mt-[120px] font-bold text-white w-1 opacity-0 scroll-animate"
            style={{
              textShadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          >
            Welcome To Monsters University Portal
          </h1>
          <div className="flex flex-auto justify-start">
            <div className="text-[18px] text-white px-10 py-10">
              <button
                onClick={() => window.location.href = '#'}
                className="  button-glowing bg-[#448FA3] text-white p-2 rounded-[15px] 
                 hover:bg-[#00c8ff66] focus:outline-none"
              >
                Enroll now!
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* Features Section */}
      <section className="min-h-screen flex justify-center items-center bg-gray-800 ">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-300 scroll-animate ">Our Features</h2>
          <div className="flex flex-col sm:flex-col justify-center md:flex-row justify-center  gap-8 sm:gap-10 md:gap-12">
            <div className="bg-gray-200 text-gray-900 p-6 rounded-lg shadow-md w-full sm:w-96 md:w-80 lg:w-96 transition-all transform hover:scale-105 hover:shadow-xl scroll-animate">
              <h3 className="text-xl font-bold text-center">Explore</h3>
              <p className="text-center text-gray-700 mt-4">Discover the world of Monsters University and all it has to offer!</p>
            </div>
            <div className="bg-gray-200 text-gray-900 p-6 rounded-lg shadow-md w-full sm:w-96 md:w-80 lg:w-96 transition-all transform hover:scale-105 hover:shadow-xl scroll-animate">
              <h3 className="text-xl font-bold text-center">Learn</h3>
              <p className="text-center text-gray-700 mt-4">Gain knowledge and experience the legacy of Monsters University.</p>
            </div>
            <div className="bg-gray-200 text-gray-900 p-6 rounded-lg shadow-md w-full sm:w-96 md:w-80 lg:w-96 transition-all transform hover:scale-105 hover:shadow-xl scroll-animate">
              <h3 className="text-xl font-bold text-center">Connect</h3>
              <p className="text-center text-gray-700 mt-4">Join a community of monsters and collaborate with peers and mentors!</p>
            </div>
          </div>
         </div>
      </section>


      {/* Card Section */}
      <section className="h-screen bg-gray-900 flex justify-center items-center">
        <div className='text-center'>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-300 scroll-animate">Featured</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-10 md:gap-12">
            <Card
              photo={photo}
              title="Monsters University"
              description="Explore the world of Monsters University!"
              className="transition-transform transform hover:scale-105 hover:shadow-xl bg-white p-6 rounded-lg shadow-md w-full sm:w-96 md:w-80 lg:w-96 scroll-animate"
            />
            <Card
              photo={photo}
              title="Monsters University"
              description="Learn about the legacy and the future of Monsters University!"
              className="transition-transform transform hover:scale-105 hover:shadow-xl bg-white p-6 rounded-lg shadow-md w-full sm:w-96 md:w-80 lg:w-96 scroll-animate"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="h-32 bg-gray-800 text-white flex justify-center items-center">
        <p className="scroll-animate opacity-0">© 2025 Monsters University Portal. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Homepage;
