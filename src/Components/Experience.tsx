import React, {  useState } from 'react';

const Projects: React.FC = () => 
{
    const [eSlideIn, setESlideIn] = useState(false);
    const [fSlideIn, setfSlideIn] = useState(false);
    const [xSlideIn, setxSlideIn] = useState(false);

    return (
        <div>
            <h3>Senior Software Developer</h3>
            <p className='italic'><a style={{color:'black'}}href="https://harriscomputer.com/">@Harris Computer Corporation</a></p>
            <button className={`btn btn-primary button ${eSlideIn ? 'hidden' : ''} `} onClick={() => setESlideIn(true)} >Show Experience</button>
            <div className={`${!eSlideIn ? 'hidden' : 'slide-in'} `}>
                <ul >
                    <li>Designed and deployed a stateless micro-service using .NET Framework with REST API for generating and exporting reports, supporting scalability and ease of monitoring in both on-premise and cloud environments.</li>
                    <li>Rewrote the scheduling service software, enhancing robustness and reliability by 100%, leading to increased system stability and performance.</li>
                    <li>Led the development of WCAG-compliant features for the customer portal, achieving a 90% accessibility rating and improving digital accessibility for all users.</li>
                    <li>Led the integration of third-party systems such as FIS payments, Cisco Finesse, and several AMI Interfaces, ensuring seamless data flow for mission-critical transactions.</li>
                    <li>Worked on full-stack development of reactive web applications using VueJS, TypeScript, and Node.js, contributing to both front-end and back-end improvements</li>
                    <li>Rewrote the scheduling service software, doubling robustness and reliability by leading to increased system stability and performance.</li>
                </ul>
            </div>
            <div className={`${!eSlideIn ? 'hidden' : 'slide-in'} `}>
            <h3>Software Developer</h3>
            <p className='italic'><a style={{color:'black'}}href="https://harriscomputer.com/">@Harris Computer Corporation</a></p>
            <button className={`btn btn-primary button ${fSlideIn ? 'hidden' : ''} `} onClick={() => setfSlideIn(true)} >More Details</button>
                <div className={`${!fSlideIn ? 'hidden' : 'slide-in'} `}>
                    <ul >
                        <li>Conducted monthly R&D code review and knowledge share sessions improving efficiency and quality of the code base.</li>
                        <li>Enhanced the existing REST API security: OWASP standards, Veracode SAST/DAST, and PII compliance.</li>
                        <li>Mentored five junior developers promoting best practices, code quality, and documentation standards, fostering a culture of learning and growth.</li>
                    </ul>
                </div>
            </div>
            <div className={`${!eSlideIn ? 'hidden' : 'slide-in'} `}>
            <h3>General Manager</h3>
            <p className='italic'><a style={{color:'black'}}href="https://www.fiveguys.ca/">@Five Guys</a></p>
            <button className={`btn btn-primary button ${xSlideIn ? 'hidden' : ''} `} onClick={() => setxSlideIn(true)} >More Details</button>
                <div className={`${!xSlideIn ? 'hidden' : 'slide-in'} `}>
                    <ul >
                        <li>Maintained impeccable health, safety, and brand standards, earning recognition within the top 1% of Five Guys locations in North America for operational excellence and customer satisfaction.</li>
                        <li>Created and executed training programs that enhanced employees' skills and promoted growth, resulting in 5 employees being promoted to supervisory positions.</li>
                        <li>Streamlined day-to-day operations, reducing average service time by 15%, while maintaining Five Guys high standards for food quality and customer experience.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;