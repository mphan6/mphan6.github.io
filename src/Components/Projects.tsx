import React, { useEffect } from 'react';
import { Project } from '../assets/resumeClasses';

interface ProjectsProps {
    projects: Project[];
    setProjects: any; // Replace 'any' with the appropriate type
    pSlideIn: boolean;
}
const Projects: React.FC<ProjectsProps> = ({projects, setProjects, pSlideIn}) => 
{
    const p2 = {projectId: "Project2", projectName: "Financial and Communication Integration Solutions"}
    const p3 = {projectId: "Project3", projectName: "Customizable Client Portal Development"}
    const p1 = {projectId: "Project1", projectName: "Crystal Reports Micro-Service"}
    useEffect (() => {
        setProjects([...projects, p1,p2,p3]);
    }, []);

    return (
        <div>
            <h4 id="Project2" className='italic'>Crystal Reports Micro-Service</h4>
            <div className={`${!pSlideIn ? 'hidden' : 'slide-in'} `}>
                <h5></h5>
                <ul>
                    <li>Designed and implemented a stateless Crystal Reports Micro-Service using .NET Framework with REST API for generating, running, and exporting reports, supporting on-premise and cloud environments.</li>
                    <li>Enabled scalability through containerizing the micro-service allowing horizontal scaling and flexible deployment.</li>
                    <li>Implemented comprehensive logging to track API interactions and system performance, facilitating easier monitoring, debugging and continuous optimizations.</li>
                </ul>
            </div>
            <hr className='light'></hr>
            <h4 id="Project2" className='italic'>End-to-End Integration Solutions for Financial and Communication Platforms</h4>
            <div className={`${!pSlideIn ? 'hidden' : 'slide-in'} `}>
                <h5>Integrations with AMI | Cisco Finesse | FIS / Invoice Cloud / Paymentus</h5>
                <ul>
                    <li>Updated and optimized integration with payment providers (Paymentus, FIS, Invoice Cloud) for handling preauthorized payments and saving payment methods.</li>
                    <li>Designed an AMI interface leveraged with multiple vendors (Smartworks, Honeywell, Sentryx) leveraging REST and Multispeak specifications for communication.</li>
                    <li>Integrated with Cisco Finesse using XMPP protocols to improve CSR's information gathering and communication with clients.</li>
                </ul>
            </div>
            <hr className='light'></hr>
            <h4 id="Project3" className='italic'>Customizable Client Portal Development: Link V3/V4</h4>
            <ul className={`${!pSlideIn ? 'hidden' : 'slide-in'} `}>
                <li>Created an inhouse WCAG standard scanning tool using Cypress-Axe replacing deprecated tools like Compliance Sheriff.</li>
                <li>Implemented and Retrofitted payment solutions ensuring PCI compliance.</li>
                <li>Improved performance and security implementing caching, OWASP standards and DNN compatibility.</li>
            </ul>
        </div>
    );
};

export default Projects;