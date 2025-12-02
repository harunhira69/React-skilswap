const About = () => {
  return (
    <div className="px-6 lg:px-20 py-12 text-gray-800">

      {/* Intro Section */}
      <section className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-indigo-600 mb-4">About SkillSwap</h1>
        <p className="text-lg leading-relaxed text-gray-700">
          SkillSwap is a local skill-sharing platform where neighbors, hobbyists, and professionals connect to learn, teach, and grow together.
        </p>
      </section>

      {/* Mission & Vision with Icons */}
      <section className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-indigo-500 mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            To empower individuals to exchange skills directly, creating a community-driven approach to learning and growth.
          </p>
          <h2 className="text-3xl font-semibold text-indigo-500 mb-6">Our Vision</h2>
          <p className="text-gray-700">
            To make skill-sharing seamless, interactive, and meaningful — bridging gaps between learners and real people in their local communities.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/1GtgSrgz/Pix-Verse-Image-Effect-prompt-Abstract-futuris.jpg"
            alt="Mission Image"
            className="rounded-xl shadow-lg w-full h-80 object-cover"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="mb-20 text-center">
        <h2 className="text-3xl font-semibold text-indigo-500 mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🔍</div>
            <h4 className="font-semibold text-lg mb-2">Discover Skills</h4>
            <p className="text-gray-600">Browse a variety of local skills offered by real people.</p>
          </div>
          <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🤝</div>
            <h4 className="font-semibold text-lg mb-2">Connect</h4>
            <p className="text-gray-600">Reach out to providers, book sessions, and communicate seamlessly.</p>
          </div>
          <div className="p-6 rounded-xl shadow-md border bg-white hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🌟</div>
            <h4 className="font-semibold text-lg mb-2">Learn & Grow</h4>
            <p className="text-gray-600">Engage in learning, track progress, and share your own skills.</p>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="mb-20 text-center">
        <h2 className="text-3xl font-semibold text-indigo-500 mb-10">Community Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-indigo-50 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-indigo-600 mb-2">500+</h3>
            <p className="text-gray-700">Skills Shared</p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-indigo-600 mb-2">1,200+</h3>
            <p className="text-gray-700">Learners Engaged</p>
          </div>
          <div className="p-6 bg-indigo-50 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-indigo-600 mb-2">300+</h3>
            <p className="text-gray-700">Local Providers</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-indigo-500 mb-6">Ready to Get Started?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Join SkillSwap today to teach, learn, and connect with your local community.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
          Explore Skills
        </button>
      </section>
    </div>
  );
};

export default About;
