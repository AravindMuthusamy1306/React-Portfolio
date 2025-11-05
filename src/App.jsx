import { styled } from '@mui/material/styles';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import SkillCard from './SkillCard.jsx'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProjectCard from './ProjectCard.jsx';
import ExperienceCard from './ExperienceCard.jsx';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NoteIcon from '@mui/icons-material/Note';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import ContactForm from './ContactForm.jsx';

const WorkButtonStyle = styled(Button)({
  backgroundColor: '#1d4ed8',
  fontFamily:'Sora'
})
const CustomAppBar = styled(AppBar)({
  backgroundColor : "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 40px",
  flexWrap: "nowrap"
})

/*skills*/
const frontEnd = ['HTML5', 'CSS3', 'JavaScript(ES6+)', 'ReactJS*'];
const backEnd = ['Node.js', 'Express.js', 'SQL(PostgreSQL)*', 'Authentication & Security*' ];
const toolsPlatform = ['Git & Github', 'VS Code', 'Postman', 'Blender', 'Adobe Suite', 'DaVinci Resolve', 'Figma*'];

/*Project Details*/
const projectData = [
  {
    icon: <AudiotrackIcon style={{fontSize: '80px', color:'#2563eb'}}/>,
    title: "Interactive Drum Kit",
    description: 'A browser-based drum kit that responds to keyboard input. Created with vanilla JavaScript and DOM manipulation.',
    items :['JavaScript', 'DOM', 'CSS3'],
    projectURL: 'https://github.com/AravindMuthusamy1306/Drum-Kit',
    demoURL: 'https://aravindmuthusamy1306.github.io/Drum-Kit/'
  },
  {
    icon: <YouTubeIcon style={{fontSize: '80px', color:'#2563eb'}}/>,
    title: "Youtube Clone",
    description: 'As part of my Full Stack Learning journey, I have developed a responsive and functional YouTube Clone Page.',
    items :['HTML5', 'CSS3'],
    projectURL: 'https://github.com/AravindMuthusamy1306/Youtube_Clone',
    demoURL: 'https://aravindmuthusamy1306.github.io/Youtube_Clone/'
  },
  {
    icon: <FormatListBulletedIcon style={{fontSize: '80px', color:'#2563eb'}}/>,
    title: "To-Do List App (with jQuery)",
    description: 'An interactive to-do list built using jQuery with features to add, mark, and delete tasks. It includes smooth fadeIn and fadeOut animations for better user experience. Focused on DOM manipulation, event handling, and creating a responsive, visually appealing interface that enhances productivity through seamless task management.',
    items :['HTML5', 'CSS3', 'JQuery'],
    projectURL: 'https://github.com/AravindMuthusamy1306/todo-list-jQuery',
    demoURL: 'https://aravindmuthusamy1306.github.io/Dynamic-notes-app/'
  },
  {
    icon: <NoteIcon style={{fontSize: '80px', color:'#2563eb'}}/>,
    title: "Dynamic Notes App (with jQuery)",
    description: 'The Dynamic Notes App is a simple, responsive web app built during my learning phase. It lets users add and delete notes dynamically with automatic timestamps. Smooth animations are handled using jQuery. This project showcases my foundational skills in JavaScript, DOM manipulation, event handling, and responsive design.',
    items :['JavaScript', 'HTML5', 'CSS3', 'JQuery'],
    projectURL: 'https://github.com/AravindMuthusamy1306/Dynamic-notes-app',
    demoURL: 'https://aravindmuthusamy1306.github.io/Dynamic-notes-app/'
  }
]

const workDescription = [
  "Worked with real-world datasets to extract meaningful insights and trends.",
  "Strengthened analytical thinking through data-driven decision-making",
  "Applied problem-solving skills from data analysis to web development projects."
]

const currentYear = new Date().getFullYear();

function App() {
  return (
    <>
      <CustomAppBar position='fixed'>
        <a href = "#hero-section" className = "myName">Aravind Muthusamy</a>
          <ul className ="nav-links">
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
          </ul>
      </CustomAppBar>
      <div id='hero-section'>
        <div className = 'container'>
          <h1>Hey, I'm Aravind👋</h1>
          <h2>A Passionate Full Stack Developer</h2>
          <a href="#projects"><WorkButtonStyle variant='contained' disableTouchRipple>View my work</WorkButtonStyle></a>
        </div>
      </div>
      <div id='about-me'>
        <div className = 'container'>
          <h2>About Me</h2>
          <div className ='about-container'>
            <div className = 'about-content'>
              <p>I'm a motivated and detail-oriented BCA graduate with a strong foundation in full stack web development and a professional background as a Data Analyst at Tata Consultancy Services (TCS). My experience in handling real-world datasets and delivering data-driven insights has strengthened my analytical thinking and problem-solving abilities — skills I now apply to web development. My passion lies in building responsive, interactive web applications that blend clean design with functional logic. I work with JavaScript, Java, HTML, and CSS, and I'm actively expanding my full stack capabilities with ReactJS, Node.js, Express.js, and SQL.</p>
              <p>My recent projects include a YouTube Clone and an Interactive Drum Kit, both showcasing my frontend development skills and attention to user experience. In addition to coding, I have creative experience with Photoshop, Blender, and DaVinci Resolve, which adds a visual edge to my projects. I bring a balanced mix of creativity, technical skill, and a growth mindset — always eager to learn new technologies and build scalable, user-focused applications.</p>
              <p>💡 Currently open to full stack development opportunities, collaborations, and projects that challenge me to grow.</p>
              <p>"Building solutions at the intersection of logic and creativity"</p>
            </div>
          </div>
        </div>
      </div>
      <div id='skills'>
        <div className = 'container'>
          <h2>Skills</h2>
          <div className='skills-container'>
            <SkillCard title="Frontend" items={frontEnd}></SkillCard>
            <SkillCard title="Backend" items={backEnd}></SkillCard>
            <SkillCard title="Tools & Platforms" items={toolsPlatform}></SkillCard>
          </div>
        </div>
      </div>
      <div id='projects'>
        <div className = 'container'>
          <h2>Projects</h2>
          <div className = 'projects-container'>
            {projectData.map((project, index) =>(
              <ProjectCard key={index}{...project}/>
            ))}
          </div>
        </div>
      </div>
      <div id='experience'>
        <div className='container'>
            <h2>Experience</h2>
            <div className='work-container'>
              <ExperienceCard 
                year = '2024-2025' 
                workTitle = 'Data Analyst'
                company="Tata Consultancy Service" 
                description = {workDescription}
              />
            </div>
        </div>
      </div>
      <div id='contact-me'>
        <div className = 'container'>
          <div className = 'contacts-container'>
            <h2>Get in touch</h2>
            <h3>Let's Work Together</h3>
            <div className = 'form-container'>
              <p>I'm currently open to new opportunities and collaborations. Whether you have a project in mind, want to discuss potential work, or just want to connect - feel free to reach out!</p>
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
      <footer className ='footer-section'>
            <a href='#hero-section' className = 'myName'>Aravind Muthusamy</a>
            <p>©️{currentYear} Aravind Muthusamy. All Rights Reserved</p>
            <div className = "icon-container">
              <a href="https://www.linkedin.com/in/aravind-muthusamy03/" target='_blank'><LinkedInIcon className = 'contact-icon' style={{fontSize:'40px'}}></LinkedInIcon></a>
              <a href="https://github.com/AravindMuthusamy1306" target = '_blank'><GitHubIcon className = 'contact-icon' style={{fontSize:'40px'}}></GitHubIcon></a>
              <a href="https://www.instagram.com/aravindmuthusamy_/" target='_blank'><InstagramIcon className = 'contact-icon' style = {{fontSize: '40px'}}></InstagramIcon></a>
              <a href="https://x.com/aravindms03" target='_blank'><XIcon className='contact-icon' style={{fontSize:'40px'}}></XIcon></a>
            </div>
      </footer>
    </>
  )
}

export default App
