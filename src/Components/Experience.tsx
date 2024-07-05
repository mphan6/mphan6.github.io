import React, {  useState } from 'react';

const Projects: React.FC = () => 
{
    const [eSlideIn, setESlideIn] = useState(false);
    const [fSlideIn, setfSlideIn] = useState(false);

    return (
        <div>
            <h3>Senior Software Developer</h3>
            <p className='italic'><a style={{color:'black'}}href="https://harriscomputer.com/">@Harris Computer Corporation</a></p>
            <button className={`btn btn-primary button ${eSlideIn ? 'hidden' : ''} `} onClick={() => setESlideIn(true)} >Show Experience</button>
            <div className={`${!eSlideIn ? 'hidden' : 'slide-in'} `}>
                <ul >
                    <li>Spearheaded a successful accessibility initiative for the LinkV4 customer portal, ensuring WCAG compliance and achieving a 90% accessibility rating, improving user experience.</li>
                    <li>Rewrote the scheduling service software, enhancing robustness and reliability by 100%, leading to increased system stability and performance.</li>
                    <li>Led the integration of third-party systems (FIS, Cisco Finesse, AMI Interfaces) into company products, collaborating with project managers and technical consultants to ensure seamless data flow</li>
                    <li>Conducted monthly R&D code review and knowledge share sessions improving efficiency and quality of the code base.</li>
                    <li>Enhanced the existing REST API security: OWASP standards, Veracode SAST/DAST, and PII compliance.</li>
                    <li>Mentored five junior developers promoting best practices, code quality, and documentation standards, fostering a culture of learning and growth.</li>
                </ul>
            </div>
            <div className={`${!eSlideIn ? 'hidden' : 'slide-in'} `}>
            <h3>General Manager</h3>
            <p className='italic'><a style={{color:'black'}}href="https://www.fiveguys.ca/">@Five Guys</a></p>
            <button className={`btn btn-primary button ${fSlideIn ? 'hidden' : ''} `} onClick={() => setfSlideIn(true)} >More Details</button>
                <div className={`${!fSlideIn ? 'hidden' : 'slide-in'} `}>
                    <ul >
                        <li>Spearheaded a successful accessibility initiative for the LinkV4 customer portal, ensuring WCAG compliance and achieving a 90% accessibility rating, improving user experience.</li>
                        <li>Rewrote the scheduling service software, enhancing robustness and reliability by 100%, leading to increased system stability and performance.</li>
                        <li>Led the integration of third-party systems (FIS, Cisco Finesse, AMI Interfaces) into company products, collaborating with project managers and technical consultants to ensure seamless data flow</li>
                        <li>Conducted monthly R&D code review and knowledge share sessions improving efficiency and quality of the code base.</li>
                        <li>Enhanced the existing REST API security: OWASP standards, Veracode SAST/DAST, and PII compliance.</li>
                        <li>Mentored five junior developers promoting best practices, code quality, and documentation standards, fostering a culture of learning and growth.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;