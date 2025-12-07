function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <img 
              src="/profile.jpg" 
              alt="Muhammad Hammad ur Rehman"
              className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-secondary hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Muhammad Hammad ur Rehman
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Software Engineering Student @ FAST-NUCES
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mt-8 text-left">
            <h3 className="text-2xl font-bold text-primary mb-4">About Me</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                👋 Hi! I'm a passionate Software Engineering student from Islamabad, Pakistan, 
                with a keen interest in full-stack development, AI/ML, and building innovative software solutions.
              </p>
              <p>
                💡 <strong>Honest Background:</strong> I'm currently studying at FAST-NUCES and haven't worked 
                in a production environment yet. My technical skills come from university coursework, semester projects, 
                and personal exploration. I'm eager to learn industry best practices and transition from academic 
                projects to real-world applications.
              </p>
              <p>
                🚀 <strong>What Drives Me:</strong> I love the challenge of solving complex problems through code. 
                Whether it's implementing end-to-end encryption, building interactive web applications, or exploring 
                data structures, I approach each project as an opportunity to learn something new.
              </p>
              <p>
                🎯 <strong>Currently:</strong> Working with React, Node.js, Django, PostgreSQL, and MongoDB through 
                university assignments and side projects. Always exploring new technologies and frameworks to expand my toolkit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
