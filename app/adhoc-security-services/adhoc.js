'use client';
import Layout from "@/components/layout/Layout"

export default function AdhocSecurityPage() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ADHOC SECURITY SERVICES">
                <div>
                  {/*===== Hero Section =====*/}
<div className="about-inner bg-28 section-padding">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="mr50">
                    <div className="heading2 no-margin-heading">
                        <small className="heading-top inner-heading-top">
                            <img src="/assets/img/icons/hands.svg" alt="" />
                            Your Trusted Protection Partner
                        </small>
                        <h2>ADHOC SECURITY SERVICES</h2>
                        <p>
                            In today's unpredictable world, it's more important than ever to prioritize the safety and security of your people and assets. That's where our adhoc security services come in. Our team of highly trained professionals provides reliable, efficient, and effective security solutions for businesses, organizations, and individuals alike.
                        </p>
                        <p>
                            We understand that every client has unique needs and concerns. That's why we offer a range of customizable Adhoc Security Guard services that can be tailored to your specific requirements.
                        </p>
                        <div className="btn-area mt-4">
                            <a 
                                href="/get-quotation" 
                                className="btn text-white px-4 py-3 me-3"
                                style={{
                                    backgroundColor: '#1E2247',
                                    border: 'none',
                                    borderRadius: '5px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    textTransform: 'uppercase'
                                }}
                            >
                                GET QUOTATION <span><i className="bi bi-arrow-right"></i></span>
                            </a>
                            <a 
                                href="tel:1300731173" 
                                className="btn text-dark px-4 py-3"
                                style={{
                                    backgroundColor: '#FDC24C',
                                    border: 'none',
                                    borderRadius: '5px',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    textTransform: 'uppercase'
                                }}
                            >
                                CALL US NOW <span><i className="bi bi-telephone"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="about-bg-main-img position-relative ml50">
                    <img src="/assets/img/bg/security img.webp" alt="Adhoc Security Services" />
                    {/* <div className="corner-right-bottom-shape2 position-absolute">
                        <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</div>
{/*===== Three Service Cards Section =====*/}
<div className="service-section-three bg-29 section-padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="heading2">
                    <small className="heading-top icon-wrapper">
                        <img src="/assets/img/icons/hands.svg" alt="" className="header-icon" />
                        Your Comprehensive Security Solution
                    </small>
                    <h2>OUR ADHOC SECURITY SERVICES</h2>
                    <p>When it comes to protecting your people and assets, you need a security partner you can trust.</p>
                </div>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-box text-center p-4 glass-card-navy rounded">
                    <div className="service-icon mb-3">
                        <div className="icon-container">
                            <img src="/assets/img/icons/patrol.png" alt="Security Patrols" />
                        </div>
                    </div>
                    <h4 className="mb-3">Security Patrols</h4>
                    <p>Our trained security guards will conduct regular patrols of your property to deter criminal activity and ensure that your assets are protected at all times.</p>
                    <a href="/mobile-patrol-security" className="theme-btn3 mt-3">Learn More</a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-box text-center p-4 glass-card-navy rounded">
                    <div className="service-icon mb-3">
                        <div className="icon-container">
                            <img src="/assets/img/icons/policeman.png" alt="Access Control" />
                        </div>
                    </div>
                    <h4 className="mb-3">Access Control</h4>
                    <p>We help you control who has access to your property or event, using various methods including ID checks and biometric scanning systems.</p>
                    <a href="/retail-security-guard" className="theme-btn3 mt-3">Learn More</a>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-box text-center p-4 glass-card-navy rounded">
                    <div className="service-icon mb-3">
                        <div className="icon-container">
                            <img src="/assets/img/icons/red-carpet.png" alt="Event Security" />
                        </div>
                    </div>
                    <h4 className="mb-3">Event Security</h4>
                    <p>From concerts and festivals to corporate events and private parties, our experienced personnel ensure your events run smoothly and safely.</p>
                    <a href="/event-security-guards" className="theme-btn3 mt-3">Learn More</a>
                </div>
            </div>
        </div>
    </div>
</div>

<style jsx>{`
    .service-section-three {
        background: linear-gradient(135deg, #e6e9f0 0%, #eef1f5 100%);
    }
    
    .glass-card-navy {
        background: rgba(30, 34, 71, 0.15);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-radius: 12px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.18);
        transition: all 0.3s ease;
        color: #fff;
    }
    
    .glass-card-navy:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.25);
        background: rgba(30, 34, 71, 0.25);
    }
    
    .glass-card-navy h4 {
        color: #000;
    }
    
    .glass-card-navy p {
        color: #000;
    }
    
    .icon-container {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        padding: 15px;
        border: 1px solid rgba(255, 255, 255, 0.3);
    }
    
    .icon-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
    
    .heading-top.icon-wrapper {
        display: inline-flex;
        align-items: center;
        gap: 10px;
    }
    
    .header-icon {
        width: 24px;
        height: 24px;
    }
    
    .theme-btn3 {
        display: inline-block;
        padding: 8px 20px;
        background: rgba(255, 255, 255, 0.2);
        color: #000;
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 30px;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    
    .theme-btn3:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
    }
`}</style>

                    {/*===== Four Reasons Grid Section =====*/}
                    <div className="reasons-section bg-28 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mb-5">
                                    <div className="heading2">
                                        <small className="heading-top">
                                            <img src="/assets/img/icons/hands.svg" alt="" />
                                            Adhoc Security Services in Melbourne
                                        </small>
                                        <h2>REGULAR REASONS FOR IMPLEMENTING ADHOC SECURITY</h2>
                                        <p>Adhoc security guard service is implemented in a short period when external factors increase site vulnerability.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            {/* <div className="icon-circle bg-primary text-white d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', borderRadius: '50%'}}>
                                                <i className="bi bi-shield-exclamation" style={{fontSize: '24px'}}></i>
                                            </div> */}
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">Damaged Barriers/Gates</h5>
                                            <p className="mb-0">Temporary cover to keep the site resilient while repairs are made. We help organizations deal with broken fences, barriers or gates by controlling entry and exit points.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        {/* <div className="reason-icon mr-3 flex-shrink-0"> */}
                                            {/* <div className="icon-circle bg-warning text-white d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', borderRadius: '50%'}}>
                                                <i className="bi bi-person-exclamation" style={{fontSize: '24px'}}></i>
                                            </div> */}
                                        {/* </div> */}
                                        <div className="reason-content">
                                            <h5 className="mb-2">Antisocial Behavior</h5>
                                            <p className="mb-0">Implementing Ad Hoc security helps prevent violence and property damage by offering a visible deterrent in areas with higher crime rates or public exposure.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            {/* <div className="icon-circle bg-danger text-white d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', borderRadius: '50%'}}>
                                                <i className="bi bi-house-exclamation" style={{fontSize: '24px'}}></i>
                                            </div> */}
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">Unauthorized Campsite</h5>
                                            <p className="mb-0">This intrusion problem occurs on decommissioned or underutilized sites. Unauthorised campsites are often accompanied by theft or damage threats.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4">
                                    <div className="reason-block d-flex align-items-start p-4 bg-white rounded shadow">
                                        <div className="reason-icon mr-3 flex-shrink-0">
                                            {/* <div className="icon-circle bg-success text-white d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', borderRadius: '50%'}}>
                                                <i className="bi bi-tools" style={{fontSize: '24px'}}></i>
                                            </div> */}
                                        </div>
                                        <div className="reason-content">
                                            <h5 className="mb-2">Security Systems Installation</h5>
                                            <p className="mb-0">Request temporary coverage while setting up new security systems like CCTV or alarm systems, ensuring continuous protection during upgrades.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*===== Statistics & Advantages Section =====*/}
                    <div className="stats-section bg-29 section-padding">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="mr50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top">
                                                <img src="/assets/img/icons/hands.svg" alt="" />
                                                Fast Response & Quality Service
                                            </small>
                                            <h2>ADVANTAGES OF ADHOC SECURITY GUARDS</h2>
                                            <p>
                                                We pride ourselves on the speed and efficiency of our Adhoc coverage, with officers often deployed in less than 2 hours. Our Critical Review Helpdesk ensures seamless coverage.
                                            </p>
                                            <div className="advantages-list mt-4">
                                                <div className="advantage-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Reduces accidents and long-term costs</span>
                                                </div>
                                                <div className="advantage-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Convenient and simple mobilization</span>
                                                </div>
                                                <div className="advantage-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Fights temporary vulnerability effectively</span>
                                                </div>
                                                <div className="advantage-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Identifies additional security needs</span>
                                                </div>
                                                <div className="advantage-item d-flex align-items-center mb-3">
                                                    <div className="check-icon mr-3">
                                                        <i className="bi bi-check-circle-fill text-success" style={{fontSize: '20px'}}></i>
                                                    </div>
                                                    <span>Great value for money with right provider</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="stats-grid ml50">
                                        <div className="row">
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                     <div className="stat-number text-navy" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
    less than 2
</div>
                                                    <div className="stat-label">Hours Response Time</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                     <div className="stat-number text-dark" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
    24/7
</div>
                                                    <div className="stat-label">Available Service</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-warning" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                                                        100%
                                                    </div>
                                                    <div className="stat-label">Professional Guards</div>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-4">
                                                <div className="stat-box text-center p-4 bg-white rounded shadow">
                                                    <div className="stat-number text-navy" style={{fontSize: '2.5rem', fontWeight: 'bold'}}>
    50+
</div>
                                                    <div className="stat-label">Years Experience</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
{/*===== Security Guard Types - Tab Style Section =====*/}
<div className="guard-types-section bg-28 section-padding">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center mb-5">
                <div className="heading2">
                    <small className="heading-top">
                        <img src="/assets/img/icons/hands.svg" alt="" />
                        Professional Security Solutions
                    </small>
                    <h2>OUR SECURITY GUARD TYPES</h2>
                    <p>Comprehensive security solutions tailored to every situation and requirement.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="guard-type-card h-100">
                    <div className="card glass-card border-0 h-100">
                        <div className="card-header text-white text-center py-3 glass-header">
                            <h5 className="mb-0">Ad Hoc Security Guards</h5>
                        </div>
                        <div className="card-body p-4">
                            <p>Trained professionals who provide security services on a temporary or as-needed basis, skilled in handling a wide range of security situations and can be called upon at short notice.</p>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-arrow-right text-primary mr-2"></i>Temporary deployment</li>
                                <li><i className="bi bi-arrow-right text-primary mr-2"></i>Quick response</li>
                                <li><i className="bi bi-arrow-right text-primary mr-2"></i>Versatile skills</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="guard-type-card h-100">
                    <div className="card glass-card border-0 h-100">
                        <div className="card-header text-white text-center py-3 glass-header">
                            <h5 className="mb-0">Event Security Guards</h5>
                        </div>
                        <div className="card-body p-4">
                            <p>Specialize in providing security at gatherings, from small private parties to large public events. They help create a safe environment for attendees and ensure events run smoothly.</p>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-arrow-right text-success mr-2"></i>Event expertise</li>
                                <li><i className="bi bi-arrow-right text-success mr-2"></i>Crowd management</li>
                                <li><i className="bi bi-arrow-right text-success mr-2"></i>Safety protocols</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="guard-type-card h-100">
                    <div className="card glass-card border-0 h-100">
                        <div className="card-header text-white text-center py-3 glass-header">
                            <h5 className="mb-0">Emergency Security Guards</h5>
                        </div>
                        <div className="card-body p-4">
                            <p>In times of crisis or emergencies, they are the first line of defense. Their rapid deployment and expert training make them crucial in safeguarding people and property.</p>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-arrow-right text-danger mr-2"></i>Crisis response</li>
                                <li><i className="bi bi-arrow-right text-danger mr-2"></i>Expert training</li>
                                <li><i className="bi bi-arrow-right text-danger mr-2"></i>Rapid deployment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="guard-type-card h-100">
                    <div className="card glass-card border-0 h-100">
                        <div className="card-header text-white text-center py-3 glass-header">
                            <h5 className="mb-0">On-Demand Security Guards</h5>
                        </div>
                        <div className="card-body p-4">
                            <p>Readily available to respond to security threats as they arise. This quick response time is vital for maintaining safety and protecting assets in unpredictable situations.</p>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-arrow-right text-warning mr-2"></i>Immediate availability</li>
                                <li><i className="bi bi-arrow-right text-warning mr-2"></i>Threat response</li>
                                <li><i className="bi bi-arrow-right text-warning mr-2"></i>Asset protection</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="guard-type-card h-100">
                    <div className="card glass-card border-0 h-100">
                        <div className="card-header text-white text-center py-3 glass-header">
                            <h5 className="mb-0">Temporary Security Guards</h5>
                        </div>
                        <div className="card-body p-4">
                            <p>Employed for a finite period, such as during events, construction projects, or other short-term security needs without the need for long-term commitments.</p>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-arrow-right text-info mr-2"></i>Short-term coverage</li>
                                <li><i className="bi bi-arrow-right text-info mr-2"></i>Project-based</li>
                                <li><i className="bi bi-arrow-right text-info mr-2"></i>Flexible duration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="guard-type-card h-100">
                    <div className="card glass-card border-0 h-100">
                        <div className="card-header text-white text-center py-3 glass-header">
                            <h5 className="mb-0">Professional Security Guards</h5>
                        </div>
                        <div className="card-body p-4">
                            <p>Trained and experienced individuals who maintain a high level of expertise in security practices. Their professionalism instills confidence in clients and deters potential threats.</p>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-arrow-right text-secondary mr-2"></i>Expert training</li>
                                <li><i className="bi bi-arrow-right text-secondary mr-2"></i>Professional conduct</li>
                                <li><i className="bi bi-arrow-right text-secondary mr-2"></i>Threat deterrence</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style jsx>{`
    .glass-card {
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border-radius: 10px;
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.18);
        transition: all 0.3s ease;
    }
    
    .glass-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.25);
    }
    
    .glass-header {
        background: rgba(30, 34, 71, 0.7) !important;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border-top-left-radius: 10px !important;
        border-top-right-radius: 10px !important;
        border-bottom: 1px solid rgba(255, 255, 255, 0.18);
    }
    
    .card-body {
        color: #333;
    }
    
    .guard-types-section {
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }
`}</style>
                    {/*===== Contact CTA Section - Full Width Banner Style =====*/}
                    <div className="cta-section bg-29 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cta-banner text-white p-5 rounded text-center position-relative overflow-hidden" style={{backgroundColor: '#1E2247'}}>
                                        <div className="cta-bg-shape position-absolute" style={{top: '0', right: '0', opacity: '0.1'}}>
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                        <div className="row align-items-center" >
                                            <div className="col-lg-8 text-left">
                                                <div className="cta-content">
                                                    <h3 className="text-white mb-3">Need Security With Immediate Effect?</h3>
                                                    <p className="text-white mb-0">
                                                        Contact us to find out how we can implement Adhoc security solutions tailored to your specific requirements. Our team is ready to provide rapid response and professional security coverage.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 text-right">
                                                <div className="cta-buttons">
                                                    <a href="/get-quotation" className="btn btn-light btn-lg mb-2 d-block">
                                                        <i className="bi bi-file-earmark-text mr-2"></i>GET QUOTATION
                                                    </a>
                                                    <a href="tel:1300731173" className="btn btn-outline-light btn-lg d-block">
                                                        <i className="bi bi-telephone mr-2"></i>CALL US NOW
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="row mt-4">
                                            <div className="col-lg-12">
                                                <div className="contact-info-row d-flex justify-content-around text-center">
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-clock" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Quick Response</h6>
                                                        <small className="text-white-50">Less than 2 hours</small>
                                                    </div>
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-shield-check" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Professional Guards</h6>
                                                        <small className="text-white-50">Fully trained & licensed</small>
                                                    </div>
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-headset" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">24/7 Support</h6>
                                                        <small className="text-white-50">Always available</small>
                                                    </div>
                                                    <div className="contact-info-item">
                                                        <div className="contact-icon mb-2">
                                                            <i className="bi bi-geo-alt" style={{fontSize: '2rem'}}></i>
                                                        </div>
                                                        <h6 className="text-white mb-1">Melbourne Wide</h6>
                                                        <small className="text-white-50">Complete coverage</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}