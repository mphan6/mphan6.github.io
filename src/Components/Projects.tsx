import React, { useEffect } from 'react';
import { Project } from '../assets/resumeClasses';

interface ProjectsProps {
    projects: Project[];
    setProjects: any; // Replace 'any' with the appropriate type
    pSlideIn: boolean;
}
const Projects: React.FC<ProjectsProps> = ({projects, setProjects, pSlideIn}) => 
{
    const p1 = {projectId: "Project1", projectName: "Financial and Communication Integration Solutions"}
    const p2 = {projectId: "Project2", projectName: "Customizable Client Portal Development"}
    useEffect (() => {
        setProjects([...projects, p1,p2]);
    }, []);

    return (
        <div>
            <h4 id="Project1" className='italic'>End-to-End Integration Solutions for Financial and Communication Platforms</h4>
                <div className={`${!pSlideIn ? 'hidden' : 'slide-in'} `}>
                    <h5>Integrations with AMI | Cisco Finesse | FIS / Invoice Cloud / Paymentus</h5>
                    <ul>
                        <li>Designed an AMI interface leveraged with multiple vendors (Smartworks, Honeywell, Sentryx) leveraging REST and Multispeak specifications for communication.</li>
                        <li>Integrated with Cisco Finesse using XMPP protocols to improve CSR's information gathering and communication with clients.</li>
                        <li>Updated and optimized integration with payment providers for handling pre-authorized payments and saving payment methods.</li>
                    </ul>
                </div>
                <hr className='light'></hr>
                <h4 id="Project2" className='italic'>Customizable Client Portal Development: Link V3/V4</h4>
                <ul className={`${!pSlideIn ? 'hidden' : 'slide-in'} `}>
                    <li>Created an inhouse WCAG standard scanning tool using Cypress-Axe replacing deprecated tools like Compliance Sheriff.</li>
                    <li>Implemented and Retrofitted payment solutions ensuring PCI compliance.</li>
                    <li>Improved performance and security implementing caching, OWASP standards and DNN compatibility</li>
                </ul>
        </div>
    );
};

export default Projects;