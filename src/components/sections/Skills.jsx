import React from 'react';
import arrowIcon from '../../assets/arrow.png';
import checkmarkIcon from '../../assets/checkmark.png';

const SkillCard = ({ title, skills }) => {
  return (
    <div className="transform transition-all duration-300 hover:scale-105">
      <div className="details-container bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3">
          {skills.map((skill, index) => (
            <article 
              key={index} 
              className="flex items-start gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300"
            >
              <img 
                src={checkmarkIcon} 
                alt="checkmark" 
                className="w-3.5 sm:w-4 h-3.5 sm:h-4 mt-0.5 sm:mt-1 text-blue-500 dark:invert" 
              />
              <div>
                <h3 className="font-semibold text-xs sm:text-sm text-gray-800 dark:text-gray-200">{skill.name}</h3>
                <p className={`text-[10px] sm:text-xs font-medium ${
                  skill.level === 'Advanced' 
                    ? 'text-green-600 dark:text-green-400' 
                    : skill.level === 'Intermediate' 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-orange-600 dark:text-orange-400'
                }`}>
                  {skill.level}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = {
    "Programming Languages": [
      { name: "Python", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "C", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "R", level: "Beginner" },
      { name: "C++", level: "Advanced" }
    ],
    "Web & Frontend": [
      { name: "React (Vite)", level: "Advanced" },
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Java Servlet", level: "Intermediate" },
      { name: "JSP", level: "Intermediate" }
    ],
    "Backend & DevOps": [
      { name: "FastAPI", level: "Advanced" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "GCP", level: "Intermediate" },
      { name: "AWS", level: "Intermediate" },
      { name: "CI/CD Pipelines", level: "Intermediate" },
    ],
    "Database Systems": [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "Apache Hive", level: "Intermediate" },
      { name: "Hadoop", level: "Intermediate" },
      { name: "Qdrant", level: "Intermediate" }
    ],
    "Artificial Intelligence": [
      { name: "Machine Learning", level: "Advanced" },
      { name: "Neural Networks", level: "Advanced" },
      { name: "NLP", level: "Advanced" },
      { name: "Generative AI", level: "Advanced" },
      { name: "RAG Pipelines", level: "Advanced" },
      { name: "Reinforcement Learning", level: "Intermediate" },
      { name: "ML Algorithms", level: "Intermediate" },
      { name: "DL (PyTorch)", level: "Intermediate" },
      { name: "Computer Vision", level: "Beginner" }
    ],
    "Big Data & Analytics": [
      { name: "Apache Spark", level: "Intermediate" },
      { name: "Tableau", level: "Advanced" },
      { name: "D3.js", level: "Intermediate" },
      { name: "Apache Pig", level: "Beginner" },
      { name: "Pandas", level: "Intermediate" },
      { name: "Numpy", level: "Intermediate" }
    ],

  };

  return (
    <section id="skills" className="py-8 sm:py-12 relative bg-gradient-to-b from-white to-blue-50 dark:from-gray-800 dark:to-gray-900">
      {/* Navigation Arrow Up */}
      <div className="absolute top-4 sm:top-6 left-1/2 transform -translate-x-1/2">
        <img 
          src={arrowIcon}
          alt="Navigate Up"
          className="w-6 sm:w-7 h-6 sm:h-7 cursor-pointer rotate-180 hover:opacity-80 transition-opacity dark:invert"
          onClick={() => location.href = '#about'}
        />
      </div>
      
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-8 mt-8 sm:mt-4">
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1 sm:mb-2 uppercase tracking-wider text-xs sm:text-sm">
          Explore My
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">Skills</h1>
      </div>
      
      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCard key={category} title={category} skills={skills} />
          ))}
        </div>

        {/* Navigation Arrow Down */}
        <div className="text-center mt-8 sm:mt-12 mb-4">
          <img 
            src={arrowIcon}
            alt="Navigate Down"
            className="w-6 sm:w-7 h-6 sm:h-7 cursor-pointer hover:opacity-80 transition-opacity animate-bounce inline-block dark:invert"
            onClick={() => location.href = '#qualification'}
          />
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-blue-200 dark:bg-blue-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-purple-200 dark:bg-purple-400/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20"></div>
    </section>
  );
};

export default Skills; 