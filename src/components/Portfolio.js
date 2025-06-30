import React, { useState, useEffect } from 'react';
import { Github, Mail, ChevronDown, Code, Brain, Network, GraduationCap, Award, BookOpen } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'education', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      id: 1,
      title: "NNOAH",
      subtitle: "Neural Network for Flood Prediction",
      description: "Localized flood prediction system using neural networks to help communities prepare for potential flooding",
      tech: ["Python", "Machine Learning", "Neural Networks"],
      icon: <Brain className="project-icon-svg" />,
      color: "#3B82F6",
      category: "AI/ML",
      image: "/images/projects/nnoah.png" // Add project image
    },
    {
      id: 2,
      title: "Lost Item Tracker",
      subtitle: "Campus Object Detection System",
      description: "Object detection system designed to help track and identify lost valuables around campus",
      tech: ["Computer Vision", "Python", "Object Detection"],
      icon: <Network className="project-icon-svg" />,
      color: "#10B981",
      category: "Computer Vision",
      image: "/images/projects/lost-item-tracker.png" // Add project image
    },
    {
      id: 3,
      title: "BASTA Dessert",
      subtitle: "Full-Stack Recipe App",
      description: "Complete CRUD web application for managing and sharing dessert recipes with user authentication",
      tech: ["Django", "React", "Database", "Full-Stack"],
      icon: <Code className="project-icon-svg" />,
      color: "#F59E0B",
      category: "Web Development",
      image: "/images/projects/basta-dessert.png" // Add project image
    }
  ];

  const skills = [
    { name: "React.js", level: "Currently Learning", category: "Frontend", color: "#61DAFB" },
    { name: "Django", level: "Currently Learning", category: "Backend", color: "#092E20" },
    { name: "Machine Learning", level: "Beginner", category: "AI/ML", color: "#FF6B6B" },
    { name: "Packet Tracer", level: "Intermediate", category: "Networking", color: "#00BCF2" },
    { name: "Python", level: "Intermediate", category: "Programming", color: "#3776AB" },
    { name: "C", level: "Intermediate", category: "Programming", color: "#A8B9CC" },
    { name: "Assembly", level: "Intermediate", category: "Programming", color: "#654FF0" },
    { name: "Git & GitHub", level: "Beginner", category: "Tools", color: "#F05032" }
  ];

  const education = [
    {
      level: "College",
      school: "Technological Institute of the Philippines",
      status: "Currently 3rd year BS Computer Engineering Student",
      icon: "🎓",
      color: "#8B5CF6"
    },
    {
      level: "High School",
      school: "Mansalay Catholic High School",
      status: "Graduated",
      icon: "🏫",
      color: "#3B82F6"
    },
    {
      level: "Elementary",
      school: "Mansalay Central School",
      status: "Graduated",
      icon: "📚",
      color: "#10B981"
    }
  ];

  const achievements = [
    {
      title: "Appointment Scheduler for Eye Medical Clinic",
      subject: "Database Management System (DBMS)",
      description: "Developed a comprehensive appointment scheduling system with patient management features",
      icon: "🏥",
      color: "#EC4899"
    },
    {
      title: "Court Booking System",
      subject: "Software Design",
      description: "Created a full-featured booking system for sports court reservations with conflict management",
      icon: "🏸",
      color: "#F59E0B"
    },
    {
      title: "NNOAH Topic Defense",
      subject: "Methods of Research (MOR)",
      description: "Successfully defended research proposal for neural network-based flood prediction system",
      icon: "🎤",
      color: "#3B82F6"
    }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <h1 className="logo">JMV</h1>
          <div className="nav-links">
            {['home', 'about', 'projects', 'education', 'achievements', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section}
              </button>
            ))}
          </div>
          <button className="mobile-menu-btn">☰</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            🚀 Future Engineer in the Making
          </div>
          
          {/* Profile Image */}
          <div className="profile-image-container">
            <img 
              src=".\Villarosa_2X2.jpg" 
              alt="John Michael D. Villarosa" 
              className="profile-image"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          <h1 className="hero-title">
            John Michael D. Villarosa
          </h1>
          <p className="hero-subtitle">
            Data Science | CPE Student
          </p>
          <p className="hero-description">
            3rd year BS Computer Engineering student exploring web development, 
            machine learning, and smart systems. Inspired by innovation and driven by ambition.
          </p>
          <div className="social-links">
            <a 
              href="https://github.com/B4RB4T0S" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:mjmvvillarosa@tip.edu.ph"
              className="social-link"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          <button 
            onClick={() => scrollToSection('projects')}
            className="cta-button"
          >
            Explore My Journey
          </button>
        </div>
        
        <ChevronDown 
          className="scroll-indicator"
          size={32}
          onClick={() => scrollToSection('about')}
        />
      </section>

      {/* Skills Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">
            Skills & Technologies
          </h2>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  borderColor: hoveredSkill === skill.name ? skill.color : '',
                  boxShadow: hoveredSkill === skill.name ? `0 0 20px ${skill.color}33` : ''
                }}
              >
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-level">{skill.level}</p>
                <div 
                  className="skill-dot"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">
            Featured Projects
          </h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                {project.image && (
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                      onError={(e) => {
                        e.target.parentElement.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                
                <div 
                  className="project-icon"
                  style={{
                    backgroundColor: `${project.color}22`,
                    color: project.color,
                    transform: hoveredProject === project.id ? 'rotate(12deg) scale(1.1)' : ''
                  }}
                >
                  {project.icon}
                </div>
                
                <div className="project-content">
                  <span 
                    className="project-category"
                    style={{
                      backgroundColor: `${project.color}15`,
                      color: project.color
                    }}
                  >
                    {project.category}
                  </span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                </div>
                
                <div className="tech-tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">
            My Education
          </h2>
          
          <div className="education-list">
            {education.map((edu, index) => (
              <div
                key={edu.level}
                className="education-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="education-icon"
                  style={{ backgroundColor: `${edu.color}22` }}
                >
                  {edu.icon}
                </div>
                <div className="education-content">
                  <h3 className="education-school">
                    {edu.school}
                    <GraduationCap size={20} style={{ color: edu.color }} />
                  </h3>
                  <p className="education-level">{edu.level}</p>
                  <p className="education-status">{edu.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section">
        <div className="container">
          <h2 className="section-title">
            My Achievements
          </h2>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="achievement-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="achievement-header">
                  <div 
                    className="achievement-icon"
                    style={{ backgroundColor: `${achievement.color}22` }}
                  >
                    {achievement.icon}
                  </div>
                  <div className="achievement-info">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-subject">{achievement.subject}</p>
                  </div>
                </div>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="contact-content">
          <h2 className="section-title">
            Let's Connect
          </h2>
          <p className="contact-description">
            I'm always eager to learn, collaborate, and take on new challenges. 
            Feel free to reach out!
          </p>
          
          <div className="contact-buttons">
            <a 
              href="mailto:mjmvvillarosa@tip.edu.ph"
              className="contact-button contact-button-primary"
            >
              <Mail size={20} />
              mjmvvillarosa@tip.edu.ph
            </a>
            <a 
              href="https://github.com/B4RB4T0S"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button contact-button-secondary"
            >
              <Github size={20} />
              B4RB4T0S
            </a>
          </div>
          
          <div className="footer">
            <p>© 2025 John Michael D. Villarosa. Built with React & Passion.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;