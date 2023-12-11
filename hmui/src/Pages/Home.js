import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">RecruitFlow</div>
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-blue-500 hover:underline">Features</a></li>
            <li><a href="#about" className="text-blue-500 hover:underline">About Us</a></li>
            <li><a href="#contact" className="text-blue-500 hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-extrabold">Welcome to RecruitFlow</h1>
          <p className="mt-4 text-lg">Your one-stop solution for recruiting top talent.</p>
          <a href="register" className="inline-block mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-md text-blue-900 text-xl font-semibold">Get Started</a>
        </div>
      </section>

      <section id="features" className="py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Job Posting */}
          <div className="text-center">
            <h1 className="text-4xl text-blue-500">📌</h1>
            <h2 className="text-2xl font-semibold mt-4">Job Posting</h2>
            <p className="mt-2">Effortlessly post job openings, specify job titles, descriptions, and requirements.</p>
          </div>

          {/* Feature 2: Candidate Management */}
          <div className="text-center">
            <h1 className="text-4xl text-blue-500">👤</h1>
            <h2 className="text-2xl font-semibold mt-4">Candidate Management</h2>
            <p className="mt-2">Manage and track job applicants with sorting, filtering, and communication tools.</p>
          </div>

          {/* Feature 3: Customizable Workflows */}
          <div className="text-center">
            <h1 className="text-4xl text-blue-500">🔄</h1>
            <h2 className="text-2xl font-semibold mt-4">Customizable Workflows</h2>
            <p className="mt-2">Create custom recruitment workflows to match your unique hiring process.</p>
          </div>
          {/* Feature 4: Collaborative Hiring */}
          <div className="text-center">
            <h1 className="text-4xl text-blue-500">🤝</h1>
            <h2 className="text-2xl font-semibold mt-4">Collaborative Hiring</h2>
            <p className="mt-2">Facilitate teamwork in the hiring process, allowing multiple stakeholders to evaluate candidates.</p>
          </div>

          {/* Feature 5: Mobile-Friendly */}
          <div className="text-center">
            <h1 className="text-4xl text-blue-500">📱</h1>
            <h2 className="text-2xl font-semibold mt-4">Mobile-Friendly</h2>
            <p className="mt-2">Access and manage your recruitment process on the go with a responsive, mobile-friendly design.</p>
          </div>

          {/* Feature 6: Applicant Database */}
          <div className="text-center">
            <h1 className="text-4xl text-blue-500">📁</h1>
            <h2 className="text-2xl font-semibold mt-4">Applicant Database</h2>
            <p className="mt-2">Store and organize applicant data in a centralized database for easy retrieval and analysis.</p>
          </div>
        </div>
      </section>
      <section id="about" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="mt-4 text-lg">We are a passionate team dedicated to helping you find the best talent.</p>
        </div>
        
      </section>
      

      <section id="contact" className="bg-blue-500 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Contact Us</h2>
          <p className="mt-4 text-lg">If you have any questions, feel free to get in touch with us.</p>
          <a href="#contact" className="inline-block mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-md text-blue-900 text-xl font-semibold">Contact Us</a>
        </div>
      </section>

      <footer className="bg-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
