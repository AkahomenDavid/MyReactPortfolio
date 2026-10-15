
import { Code2, Palette, Wrench, BookOpen } from 'lucide-react';

const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  {
    title: 'Design',
    icon: Palette,
    skills: ['Responsive UI', 'Flexbox', 'CSS Grid', 'Figma'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Vite'],
  },
  {
    title: 'Currently learning',
    icon: BookOpen,
    skills: ['React patterns', 'API integration', 'Accessibility', 'Best practices'],
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span>03.</span> MY TOOLKIT</p>
            <h2>Skills & <span className="accent">technologies.</span></h2>
            <p className="section-description">
              The tools I use and the skills I'm developing to build better
              web experiences.
            </p>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-heading">
                  <span className="skill-icon"><Icon size={22} /></span>
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="learning-banner">
          <div className="learning-indicator">
            <span className="status-dot"></span>
            <span>In progress</span>
          </div>
          <div>
            <h3>Always building. Always learning.</h3>
            <p>Every project is another opportunity to improve my craft.</p>
          </div>
          <span className="learning-symbol">↗</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
