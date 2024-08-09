import React from 'react';
import Projects from './Projects';
import Experience from './Experience';
import { Project } from '../assets/resumeClasses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
type ContentDetailsProps = {
    projects: Project[];
    setProjects: any; 
    pSlideIn: boolean;
    setPSlideIn: any;
};

const ContentDetails: React.FC<ContentDetailsProps> = ({
    projects,
    setProjects,
    pSlideIn,
    setPSlideIn
}) => {
    
    return (
        <>
            <div className={`col-7`} >
                <section>
                    <h3>About Me</h3>
                    <h2>
                    Seamless Integration Specialist
                    </h2>
                    <p>
                    I unify systems from disparate technologies. My expertise lies in integrating diverse software through sophisticated interfaces, ensuring flawless communication and enhanced performance. I've led successful integration projects that streamlined operations and boosted efficiency.
                    </p>
                </section>
                <hr></hr>
                <div>
                    <section >
                        <h3>Skills</h3>
                        <h4 className='italic'>Languages:</h4>
                        <ul className='no-bullets'>
                            <li>C#, JavaScript, TypeScript, Python, SQL, PowerShell, C/C++</li>
                        </ul>
                        <h4 className='italic'>Technologies:</h4>
                        <ul className='no-bullets'>
                            <li>REST, GraphQL, gRPC, Git, SVN, .NET Core, .NET, ASP.NET, Vue.js, React, Docker, RDBMS, MongoDB,
                            redis, OpenAPI</li>
                        </ul>
                        <h4 className='italic'>IDEs:</h4>
                        <ul className='no-bullets'>
                            <li>MS Visual Studio, VSCode, SSMS</li>
                        </ul>
                    </section>
                    <hr></hr>
                </div>
                <div>
                    <section >
                        <Experience />
                    </section>
                    <hr></hr>
                </div>
                <div>
                    <section >
                        <h3>Projects</h3>
                        <Projects projects={projects} setProjects={setProjects} pSlideIn={pSlideIn}/>
                        <button className={`btn btn-primary button ${pSlideIn ? 'hidden' : ''} `} onClick={() => setPSlideIn(true)}>More Details</button>
                    </section>
                    <hr></hr>
                </div>
                <div>
                    <section >
                        <h3>Education</h3>
                        <div className='row'>
                            <div className='col-1 icon'><FontAwesomeIcon icon={faGraduationCap} style={{color:"#000000"}}/></div>
                            <div className='col-11'>
                                <p>Honours Bachelor of Technology in<br/><i>Software Development</i></p>
                                <p>Seneca College of Applied Arts and Technology</p>
                            </div>
                        </div>
                    </section>
                    <hr></hr>
                </div>
            </div>
        </>
    );
};

export default ContentDetails;