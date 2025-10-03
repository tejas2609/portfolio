import React, { useEffect, useRef, useState } from "react";
import './home.scss';
import Navbar from "../navbar/navbar";
import devImage from "../assests/dev3.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FrontHandIcon from '@mui/icons-material/FrontHand';
import { Send } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import LinkedIn from '@mui/icons-material/LinkedIn'
import { experience, projectDetails, techStackIcons, techStack } from "../details";
import { KeyboardArrowRightRounded } from "@mui/icons-material";
import { KeyboardArrowLeftOutlined } from "@mui/icons-material";

type TypingTextProps = {
    text: string;
    speed?: number;
    onComplete: () => void;
};

const TypingText: React.FC<TypingTextProps> = ({ text, speed, onComplete }) => {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i >= text.length){
                clearInterval(interval);
                if(onComplete) onComplete();
            } else{
                setDisplayed((prev) => prev + text.charAt(i));
                i++;
            } 
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, onComplete]);

    return <>
            <h1>"{displayed}" <br></br> <span style={{textAlign: 'right', fontSize: '1rem', color: 'grey'}}>Tejas Murkya</span></h1>
        </>
    
};

function Home() {
    
    const mastersRef = useRef<HTMLDivElement | null>(null);
    const bachelorsRef = useRef<HTMLDivElement | null>(null);
    const alevelsRef = useRef<HTMLDivElement | null>(null);
    const experienceCardsRef = useRef<HTMLDivElement | null>(null);

    const [visible, setVisible] = useState({
        masters: false,
        bachelors: false,
        alevels: false,
        experienceCards: false
    });
    const [visibleProject, setVisibleProject] = useState(3);
    const [introScreen, setIntroScreen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        emailjs.send(
            "service_9ctt4yd",    // Gmail service ID
            "template_47flsyj",   // Template ID
            formData,             // { name, email, message }
            "wZO4iWnRY733vJPoq"     // Public key
        ).then(
            () => setSubmitted(true),
            (err) => console.error(err)
        );
        setFormData({ name: "", email: "", message: "" });
    };

    const onIntroScreenComplete = () => {
        setIntroScreen(false);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === mastersRef.current) {
                        setVisible((prev) => ({ ...prev, masters: true }));
                    }
                    if (entry.target === bachelorsRef.current) {
                        setVisible((prev) => ({ ...prev, bachelors: true }));
                    }
                    if (entry.target === alevelsRef.current) {
                        setVisible((prev) => ({ ...prev, alevels: true }));
                    }
                    if (entry.target === experienceCardsRef.current) {
                        setVisible((prev) => ({ ...prev, experienceCards: true }));
                    }
                }
            });
        },
        { threshold: 1 } // show when 30% in view
        );

        if (mastersRef.current) observer.observe(mastersRef.current);
        if (bachelorsRef.current) observer.observe(bachelorsRef.current);
        if (alevelsRef.current) observer.observe(alevelsRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>  
            <div className={`intro-screen ${introScreen ? '' : 'circle-out'}`}>
                <div className="intro-text">
                    <TypingText text="  Code is fun, exciting and full of adventures, only if you don't miss a semicolon." speed={80} onComplete={onIntroScreenComplete}/>
                </div>
            </div>
            {
                !introScreen &&
                <div className="main-screen">
                    <Navbar />
                    <main className="home-container">
                        <section className="basic-info global-padding">
                            <div className="basic-info-bg">
                                    <p>

                                    {
                                        Array.from({length: 10}, (_, i) => (
                                            <>
                                                <span>Code.Coffee.Innovate.Relax.Repeat.</span>
                                            </>
                                        ))
                                    }
                                </p>
                            </div>
                            <div className="flex-container">
                                <div className="details">
                                    <div className="name">
                                        <div>
                                            {/* <span><FrontHandIcon className="wave-hand"/></span> I'm */}
                                            <span className="name-span">Tejas Murkya</span><br></br> 
                                        </div>
                                    </div>
                                    <div className="tagline">
                                        <p>
                                            I’m a Software Engineer with experience across the full stack — from designing responsive frontends in React, Angular, and TypeScript to building scalable backend services with Python, Node.js, and REST APIs. I recently completed my MSc in Computer Science at the University of Southampton, where I studied cloud development, advanced databases, security, cryptography, and AI.
                                            <br></br>My work has spanned real-time data platforms, cloud-native applications, and AI-driven systems, often delivered through CI/CD pipelines, Dockerized services, and AWS/Azure deployments. At Itanta Analytics, I contributed to enterprise-grade solutions by optimising performance, automating deployments, and applying TDD to maintain reliability. Earlier, at DC Ikigai, I developed React-based features that improved usability and accessibility.
                                            <br></br>I’m motivated by solving complex problems, collaborating in diverse teams, and continuously learning to stay at the cutting edge of technology.
                                        </p>
                                    </div>
                                    <div className="contact-button">
                                        <button className="button">Let's Connect &rarr;</button>
                                    </div>
                                </div>
                                <div className="image">
                                    <div className="layover-bg"></div>
                                    <div style={{zIndex: 0, position: 'relative'}}>
                                        <div className="circle-square">
                                            {
                                                Array.from({length: 25}, (_, i) => (
                                                    <div className="circle"></div>
                                                ))
                                            }
                                        </div>
                                        <div className="image-holder">
                                            <img src={devImage} alt="Developer" />
                                        </div>
                                    </div>
                                    <p className="disclamier">Open for new opportunities</p>
                                </div>
                            </div>
                        </section>
                        <section className="experience-section experience global-padding">
                            <div className="basic-info-bg">
                                    <p>

                                    {
                                        Array.from({length: 10}, (_, i) => (
                                            <>
                                                <span>Code.Coffee.Innovate.Relax.Repeat.</span>
                                            </>
                                        ))
                                    }
                                </p>
                            </div>
                            <div className="external-padding-container" ref={experienceCardsRef}>
                                <div className="experience-header">
                                    <h1 className="headline">Professional Experience</h1>
                                </div>
                                <div className="experience-cards">
                                    {
                                        experience.map((exp, idx) => (
                                            <div className={`experience-card ${visible.experienceCards ? 'animateDown' : ''}`}>
                                                <div className="details">
                                                    <div>
                                                        <h2>{exp.role}</h2>
                                                        <p>{exp.duration}</p>
                                                    </div>
                                                    <p>{exp.company}</p>
                                                    <ul>
                                                        {
                                                            exp.description.map((point, index) => (
                                                                <li>{point}</li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        ))
                                    }                        
                                </div>
                            </div>
                        </section>
                        <section className="technical-skills">
                            <div className="basic-info-bg">
                                    <p>
                                    {
                                        Array.from({length: 10}, (_, i) => (
                                            <>
                                                <span>Code.Coffee.Innovate.Relax.Repeat.</span>
                                            </>
                                        ))
                                    }
                                </p>
                            </div>
                            <div className="skills-header global-padding">
                                <h1 className="headline">Technical Stack</h1>
                                <div className="skills-list stack">
                                    {
                                        Object.entries(techStack).map(([key, values], idx) => (
                                            <div className="stack-divider" id={`stack${idx}`}>
                                                <div className="previous-key">
                                                    {
                                                        idx > 0 &&
                                                        <span className="rounded"><KeyboardArrowLeftOutlined/></span>
                                                    } 
                                                    {Object.keys(techStack)[idx - 1]}
                                                </div>
                                                <div className="flex-container">
                                                    <h3 className="stack-heading">{key}</h3>
                                                    <ul>
                                                        {
                                                            values.map((value, index) => (
                                                                <li>
                                                                    <div className="layover-bg"></div>
                                                                    <p>{value}</p>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                                <div className="next-key">
                                                    {Object.keys(techStack)[idx + 1]}
                                                    {   
                                                        idx < Object.entries(techStack).length &&
                                                        <span className="rounded"><KeyboardArrowRightRounded/></span>
                                                    }
                                                    </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </section>
                        <section className="projects-container global-padding">
                            <div className="basic-info-bg">
                                    <p>
                                    {
                                        Array.from({length: 10}, (_, i) => (
                                            <>
                                                <span>Code.Coffee.Innovate.Relax.Repeat.</span>
                                            </>
                                        ))
                                    }
                                </p>
                            </div>
                            <div className="projects-header">
                                <h1 className="headline">Projects</h1>
                            </div>
                            <div className="projects-list ">
                                {
                                    projectDetails.map((project, index) => (
                                        index < visibleProject &&
                                        <div className="project-card">
                                            <div className="project-image"
                                                style={{
                                                    backgroundImage: `url(${project.image})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                            </div>
                                            <div className="project-details">
                                                <div className="tech-stack stack">
                                                    {
                                                        project.techstack.map((tech, idx) => (
                                                            <div key={idx} className="stack-item">{tech}</div>
                                                        ))
                                                    }
                                                </div>
                                                <div className="project-title">
                                                    <h3>{project.title}</h3>
                                                </div>
                                                <div className="project-description">
                                                    <p>{project.description}</p>
                                                </div>
                                                <div className="link-stack stack">
                                                    {
                                                        Object.entries(project.links).map(([key, value], idx) => (
                                                            <a key={idx} href={value} target="_blank" rel="noopener noreferrer" className="stack-item">{key}</a>
                                                        ))
                                                    }
                                                    <a href="#" rel='noreferrer' className="stack-item">See details</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="expand-collapse-projects">
                                {
                                    visibleProject < projectDetails.length &&
                                    <div className="expand option" onClick={() => setVisibleProject(visibleProject + 3)}>
                                        <KeyboardArrowDownIcon/> View More...
                                    </div>
                                }
                                {
                                    visibleProject > 3 &&
                                    <div className="collapse option" onClick={() => setVisibleProject(visibleProject - 3)}>
                                        <KeyboardArrowUpIcon/> View Less...
                                    </div>
                                }
                            </div>
                        </section>
                        <section className="education-section global-padding">
                            <div className="basic-info-bg">
                                    <p>
                                    {
                                        Array.from({length: 10}, (_, i) => (
                                            <>
                                                <span>Code.Coffee.Innovate.Relax.Repeat.</span>
                                            </>
                                        ))
                                    }
                                </p>
                            </div>
                            <div className="education-header">
                                <h1 className="headline">Education</h1>
                            </div>
                            <div className="education-cards">                        
                                <div
                                    ref={mastersRef}
                                    className={`edu-card ${visible.masters ? "show" : "hide"}`}
                                >
                                    <div className="timeline-indicator">
                                        <div className="line"></div>
                                        <div className="dot"></div>
                                    </div>
                                    <div className="details">
                                        <h2>Masters in Computer Science</h2>
                                        <p>University of Southampton (United Kingdom)</p>
                                        <p>Sept 2024 - Sept 2025</p>
                                        <p>2:1 Grade (Predicted)</p>
                                        <p>Modules Studied :- Web and Cloud Development, Advanced Databases, Network Security, Cryptography, Artifical Intelligence</p>
                                    </div>
                                </div>

                                <div
                                    ref={bachelorsRef}
                                    className={`edu-card ${visible.bachelors ? "show" : "hide"}`}
                                    style={{marginTop: '2%'}}
                                >
                                    <div className="timeline-indicator">
                                        <div className="line"></div>
                                        <div className="dot"></div>
                                    </div>
                                    <div className="details">
                                        <h2>Bachelors in Electronics and Telecommunications</h2>
                                        <p>Vishwakarma Institute of Technology (India)</p>
                                        <p>Aug 2019 - May 2023</p>
                                        <p>9.03 CGPA (achieved)</p>
                                        <p>Modules Studied :- Data Structures and Algorithms, Object-oriented Programming, Python Programming, Computer Vision, Web and Cloud Development</p>
                                    </div>
                                </div>
                            </div>
                            <section className="contact-form global-padding">
                                <div className="headline">
                                    <h3>Let's connect</h3>
                                </div>
                                <div className="form-container">
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex-container">
                                            <div className="input-container">
                                                <p>Your Name:</p>
                                                <input name="name" onChange={handleChange} value={formData.name} type="text"></input>
                                            </div>
                                            <div className="input-container">
                                                <p>Your Email:</p>
                                                <input name="email" onChange={handleChange} value={formData.email} type="email"></input>
                                            </div>
                                        </div>
                                        <div className="input-container">
                                            <p>What's on your mind?</p>
                                            <textarea name="message" onChange={handleChange} value={formData.message}></textarea>
                                        </div>
                                        <div className="input-container">
                                            <button type="submit">Send <Send/></button>
                                        </div>
                                    </form>
                                    <div className="options">
                                        You Can reach me out either on <span style={{marginRight: '1%'}}><a href="tel:+447586543806">+447586543806</a></span> / 
                                        <span style={{marginRight: '1%'}}><a href="tel:+918888107180">+918888107180 </a></span> or <span><a href="https://www.linkedin.com/in/tejas-murkya-191a291ba/" target="_blank" rel='noreferrer'><LinkedIn/></a></span>.
                                    </div>
                                </div>

                            </section>
                        </section>
                    </main>
                    <footer>
                        <p>@2025 Tejas Murkya Portfolio. All Rights Reserved. <br></br> Email:- murkyatejasjobs@gmail.com</p>
                    </footer>
                </div> 
            }
        </>
    )
}

export default Home;