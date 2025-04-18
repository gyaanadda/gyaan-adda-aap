import React from "react";

const LandingPage = () => {
  return (
    <div>
      <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-700">Gyan Adda</h1>
          <ul className="flex gap-6 text-gray-800 font-medium">
            <li>
              <a href="#home" className="hover:text-indigo-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#why" className="hover:text-indigo-600 transition">
                Why
              </a>
            </li>
            <li>
              <a
                href="#categories"
                className="hover:text-indigo-600 transition"
              >
                Categories
              </a>
            </li>
            <li>
              <a href="#mentors" className="hover:text-indigo-600 transition">
                Mentors
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-indigo-600 transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-indigo-600 transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <section
          id="home"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-16 md:py-24"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Welcome to <span className="text-yellow-300">Gyan Adda</span>
              </h1>
              <p className="text-lg md:text-2xl mt-4 mb-6">
                Join a community of curious minds. Learn, share, and grow with
                mentors and peers across India.
              </p>
              <button className="bg-yellow-300 text-indigo-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">
                Get Started for Free
              </button>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 relative">
              <img
                src="https://www.istockphoto.com/resources/images/IllustrationsLanding/SignatureTile-1318319153.jpg"
                alt="Gyan Adda Community"
                className="w-full rounded-xl shadow-lg"
              />
              {/* Optional: Add floating avatars or icons */}
              <img
                src="https://media.istockphoto.com/id/1380542864/vector/landing-page-template-with-bearded-woman-sitting-at-desk-with-laptop-computer-concept-of.jpg?s=612x612&w=0&k=20&c=zWiWBRdi4SpXO9kf0Bn_M0QvyscsXYqyQKIux_9-wtc="
                alt="Student"
                className="w-12 h-12 rounded-full absolute top-[-20px] left-[-20px] border-4 border-white shadow-md"
              />
              <img
                src="https://media.istockphoto.com/id/1075374750/vector/a-woman-is-sitting-on-the-floor-and-typing-on-laptop.jpg?s=612x612&w=0&k=20&c=YSijOS47Bfot1Thxa5TTurZBo1YO9nUcFjIlgPsqQX4="
                alt="Mentor"
                className="w-14 h-14 rounded-full absolute bottom-[-20px] right-[-20px] border-4 border-white shadow-md"
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="py-16 px-6 text-center bg-white text-gray-800"
        >
          <h2 className="text-3xl font-bold mb-4">What is Gyan Adda?</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Gyan Adda is a collaborative space for learners, mentors, and
            creators to exchange ideas, insights, and knowledge across a wide
            range of topics — from tech and career to wellness and more.
          </p>
        </section>

        <section id="why" className="py-20 bg-gray-100 px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Gyan Adda?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Live Sessions</h3>
              <p>Join live discussions with experts and peers in real-time.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Video Courses</h3>
              <p>Access exclusive learning content anytime, anywhere.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
              <p>Engage in topic-wise threads and Q&A with fellow learners.</p>
            </div>
          </div>
        </section>

        <section id="categories" className="bg-white py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Explore Our Top Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-6xl mx-auto">
            <div className="p-4 bg-indigo-50 rounded-lg">Technology</div>
            <div className="p-4 bg-pink-50 rounded-lg">Career & Jobs</div>
            <div className="p-4 bg-purple-50 rounded-lg">Entrepreneurship</div>
            <div className="p-4 bg-yellow-50 rounded-lg">Personal Finance</div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16 text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Share and Learn?</h2>
          <p className="text-lg mb-6">
            Join thousands of curious minds at Gyan Adda today.
          </p>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl hover:bg-yellow-500 transition">
            Sign Up Now
          </button>
        </section>

        <section className="bg-gray-50 py-20 px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            How Gyan Adda Works
          </h2>
          <div className="flex flex-col md:flex-row gap-10 justify-center max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1</div>
              <p className="text-lg font-medium">Sign Up</p>
              <p>Create your free account in seconds.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2</div>
              <p className="text-lg font-medium">Join a Session</p>
              <p>Choose from live or recorded learning.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3</div>
              <p className="text-lg font-medium">Share & Grow</p>
              <p>Engage in discussions, post your learnings.</p>
            </div>
          </div>
        </section>

        <section id="mentors" className="bg-white py-20 px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Top Mentors on Gyan Adda
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-xl text-center shadow-md">
              <img
                src="/mentor1.jpg"
                alt="Mentor"
                className="rounded-full w-20 h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Anjali Sharma</h3>
              <p className="text-sm">Product Manager at Google</p>
            </div>
          </div>
        </section>

        <section id="blog" className="bg-gray-50 py-20 px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            From the Knowledge Blog
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Blog 1 */}
            <div className="bg-white shadow-md p-4 rounded-xl hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">
                Top 5 Skills You Need in 2025
              </h3>
              <p className="text-sm mt-2">
                Stay ahead of the curve with these in-demand skills...
              </p>
              <a
                href="#"
                className="text-indigo-600 text-sm font-medium mt-4 inline-block"
              >
                Read More →
              </a>
            </div>

            {/* Blog 2 */}
            <div className="bg-white shadow-md p-4 rounded-xl hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">
                How to Build a Learning Routine That Sticks
              </h3>
              <p className="text-sm mt-2">
                Discover actionable strategies to make consistent learning a
                habit...
              </p>
              <a
                href="#"
                className="text-indigo-600 text-sm font-medium mt-4 inline-block"
              >
                Read More →
              </a>
            </div>

            {/* Blog 3 */}
            <div className="bg-white shadow-md p-4 rounded-xl hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">
                AI & You: Career Paths of the Future
              </h3>
              <p className="text-sm mt-2">
                Understand how artificial intelligence is shaping new-age
                careers...
              </p>
              <a
                href="#"
                className="text-indigo-600 text-sm font-medium mt-4 inline-block"
              >
                Read More →
              </a>
            </div>
          </div>
        </section>

        <section className="bg-indigo-700 text-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="mb-6">
            Get exclusive content, session invites, and growth tips in your
            inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-black w-full"
            />
            <button className="bg-yellow-300 text-indigo-900 px-6 py-2 rounded-md font-semibold">
              Subscribe
            </button>
          </form>
        </section>

        <section id="faq" className="py-20 px-6 bg-white">
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="font-semibold">Is Gyan Adda free to use?</h3>
              <p className="text-sm text-gray-600">
                Yes! You can access tons of free content and join community
                discussions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                Can I contribute my own content?
              </h3>
              <p className="text-sm text-gray-600">
                Absolutely! Apply as a mentor or post your knowledge bites to
                help others.
              </p>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-gray-300 text-center py-6 text-sm">
          &copy; 2025 Gyan Adda. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
