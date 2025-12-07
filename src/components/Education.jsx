function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'National University of Computer and Emerging Sciences (FAST-NUCES)',
      location: 'Islamabad, Pakistan',
      period: '2022 - 2026 (Expected)',
      highlights: [
        'Relevant Coursework: Data Structures, Algorithms, Database Systems, Web Engineering, Information Security',
        'Hands-on experience with MERN stack, Django, and mobile app development',
        'Team projects in OOP, Software Design, and Distributed Systems'
      ]
    },
    {
      degree: 'Python for Everybody Specialization',
      institution: 'Coursera',
      location: 'Online',
      period: '2023',
      highlights: [
        'Completed comprehensive Python programming course',
        'Covered data structures, web scraping, databases, and data visualization',
        'Applied Python skills in academic and personal projects'
      ]
    }
  ]

  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Education & Certifications
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border-l-4 border-secondary rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-gray-700 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600">
                    📍 {edu.location}
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                    {edu.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-2 mt-4">
                {edu.highlights.map((highlight, idx) => (
                  <li 
                    key={idx}
                    className="text-gray-700 flex items-start"
                  >
                    <span className="text-secondary mr-2 mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Academic Approach</h3>
          <p className="text-lg leading-relaxed">
            My education at FAST-NUCES emphasizes practical, hands-on learning. Every course includes 
            substantial project work where we implement real-world applications. While I don't have 
            professional work experience yet, I've completed numerous semester projects that mirror 
            industry scenarios - from building secure chat applications with end-to-end encryption to 
            developing full-stack web platforms with authentication systems.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            I'm now looking to bridge the gap between academic learning and production environments, 
            bringing strong fundamentals and a genuine enthusiasm for learning industry best practices.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Education
