function Skills() {
  // Component data: Array of objects containing skill information
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Django', 'Express.js', 'Python']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL']
    },
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Java', 'C/C++']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git/GitHub', 'MERN Stack', 'REST APIs', 'Data Analysis']
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Technical Skills
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Skills acquired through university coursework, assignments, and semester projects at FAST-NUCES
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map function: Iterates over array and returns JSX for each item */}
          {skillCategories.map((category, index) => (
            // Key prop: Unique identifier for React to track list items efficiently
            <div 
              key={index} 
              className="bg-gradient-to-br from-primary to-secondary p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="text-white/90 flex items-center"
                  >
                    <span className="mr-2">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
