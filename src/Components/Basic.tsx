import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {  faC, faV, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import ContentDetails from './ContentDetails';
import { Project } from '../assets/resumeClasses';

const Basic: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [pSlideIn, setPSlideIn] = useState(false);

    return (
        <div className='container-fluid bg-img-color min-height'>
            <div className='row'>
                <div className='row justify-content-end main-content'>
                    <ContentDetails  projects={projects} setProjects={setProjects} pSlideIn={pSlideIn} setPSlideIn={setPSlideIn}/>
                </div>
                <div className='d-flex col-4 row basic-color fixed'>
                    <div className=''></div>
                    <div className='col-12 text-center '>
                        <img className='pic' src="/tempPic.jpg" alt="Picture of Matt" />
                        <h1 className='name'>Matthew Phan</h1>
                        <h3 className='italic'>Senior Software Developer</h3>

                        <h2 className='dm-serif-display-regular side-summary'>Projects</h2>
                        <ul className='no-bullets' style={{ textAlign: 'center' }} onClick={() => setPSlideIn(true)}>
                            {
                            projects.map((project) => (
                                <li key={project.projectId}><a className="short" href={"#" + project.projectId}>{project.projectName}</a></li>
                            ))}
                        </ul>
                        <h2 className='dm-serif-display-regular side-summary'>Education</h2>
                        <ul className='no-bullets'>
                            <li><FontAwesomeIcon icon={faGraduationCap} style={{color:"#96AAFE"}}/> B.Tech Software Development</li>
                        </ul>
                        <div className='icons'>
                            <a href='./src/assets/Matts_resume_LaTeX.pdf' target="_blank" aria-label="Download Matthew's Resume">
                                <FontAwesomeIcon icon={faC} size="lg" style={{color: "#96AAFE"}} />
                                <FontAwesomeIcon icon={faV} size="lg" style={{color: "#96AAFE", marginRight:"1rem"}} />
                            </a>                        
                            <a href="https://github.com/mphan6" target="_blank" aria-label="Link to Matthew's GitHub">
                                <FontAwesomeIcon icon={faGithubSquare} size="2xl" style={{color:"#96AAFE", marginRight:"1rem"}}/>
                            </a>
                            <a href="https://www.linkedin.com/in/matt-t-phan/" target="_blank" aria-label="Link to Matthew's LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color:"#96AAFE"}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basic;