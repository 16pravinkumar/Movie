import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">About Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Welcome to MovieVerse – your ultimate destination for discovering,
            exploring, and falling in love with movies from every genre. Our
            mission is to connect people with the stories they love.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-6">Our Story</h3>
          <p className="text-gray-400 leading-relaxed">
            Founded in 2024, MovieVerse began as a passion project by movie
            enthusiasts who wanted to create a platform for movie lovers
            worldwide. We aim to provide detailed information, ratings, and
            recommendations while fostering a community of cinema fans.
          </p>
          <div className="mt-8">
            <img
              src='https://i.pinimg.com/originals/83/cb/b2/83cbb2b10e4cd2fb81e20d53538ea068.gif'
              alt="Our Story Image"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-gray-800 py-12 text-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8">Meet the Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team Member */}
            <div className="flex flex-col items-center">
              <img
                src="https://media.gettyimages.com/id/646928694/photo/mumbai-india-dibakar-banerjee-film-director-holding-a-flycam-on-which-he-shot-his-new-film-lsd.jpg?s=612x612&w=gi&k=20&c=ZD83Ie-kTsh1v7_tOKRKJ5-cBOZ_Fn7BhKeW1U8fMBg="
                alt="Team Member"
                className="rounded-full w-24 h-24 shadow-md"
              />
              <h4 className="mt-4 font-bold">John Doe</h4>
              <p className="text-sm text-gray-400">Founder & CEO</p>
            </div>
            {/* Add more team members */}
            <div className="flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaSEOuHe-hJBJZJ6fSM9iEfQe5vb-DNxcSA&s"
                alt="Team Member"
                className="rounded-full w-24 h-24 shadow-md"
              />
              <h4 className="mt-4 font-bold">Jane Smith</h4>
              <p className="text-sm text-gray-400">Lead Developer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://media.istockphoto.com/id/1070379186/photo/photographer-directing-his-shoot-team.jpg?s=612x612&w=0&k=20&c=2-IOa1iUkbD2mPFp34KXIzIaBaYt3DnjQR_5xfoVBLc="
                alt="Team Member"
                className="rounded-full w-24 h-24 shadow-md"
              />
              <h4 className="mt-4 font-bold">Alice Johnson</h4>
              <p className="text-sm text-gray-400">UI/UX Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Join Our Journey into Movies
          </h3>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            Become a part of the MovieVerse community. Sign up now to receive
            the latest updates, movie recommendations, and exclusive content.
          </p>
          <NavLink to="/contact">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-500">
            Connect with us
          </button>
          </NavLink>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
