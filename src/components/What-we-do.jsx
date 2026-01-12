import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

import placeHolder from '../assets/images/logo_placeholder.png';
import page2_bg from '../assets/images/page2_bg.png';
import heroBg from '../assets/images/hero_bg.png'; // Using as fallback hero image
import introSprout from '../assets/images/intro_sprout.png'; // Using for hero illustration
import recycleItAssets from '../assets/images/recycle_it_assets.png';
import recycleHomeAppliances from '../assets/images/recycle_home_appliances.png';
import recycleIndustrial from '../assets/images/recycle_industrial.png';
import service1 from '../assets/images/service_1.png'; // Extra service image
import blue1 from '../assets/images/blue1.png';
import blue2 from '../assets/images/blue2.png';
import blue3 from '../assets/images/blue3.png';
import blue4 from '../assets/images/blue4.png';
import blue5 from '../assets/images/blue5.png';
import green1 from '../assets/images/green1.png';
import green2 from '../assets/images/green2.png';
import green3 from '../assets/images/green3.png';
import green4 from '../assets/images/green4.png';
import benefitBg from '../assets/images/benefit_bg.png';
import iconCarbon from '../assets/images/icon_carbon.png';
import iconPrecious from '../assets/images/icon_precious.png';
// Icons for "Who We Serve" - using generic client/icon placeholders or recycling icons
import client1 from '../assets/images/client1.png';
import whoWeServeDiagram from '../assets/images/who_we_serve_diagram.png';
import client2 from '../assets/images/client2.png';
import iconUpcycle from '../assets/images/icon_upcycle.png';
import navSearch from '../assets/images/nav_search.png';
import navMenu from '../assets/images/nav_menu.png';
import fullProcessDiagram from '../assets/images/process_diagram_full.png';
import bulletArrow from '../assets/images/bullet_arrow.png';
import tableBgWave from '../assets/images/table_bg_wave.png';
import footerSocials from '../assets/images/footer_socials.png';

const WhatWeDo = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="what-we-do-container">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 position-relative">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={placeHolder} alt="BluePlanet" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center gap-4">
                            <li className="nav-item"><Link className="nav-link text-dark fw-bold-50" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-dark fw-bold-50" to="/who-we-are">Who We Are</Link></li>
                            <li className="nav-item position-relative">
                                <Link className="nav-link text-dark fw-bold-50" to="/what-we-do">Services</Link>
                                <div className="services-dropdown position-absolute start-50 translate-middle-x">
                                    <ul className="dropdown-menu-custom">
                                        <li><Link className="dropdown-item-custom" to="/what-we-do">What We Do</Link></li>
                                        <li><Link className="dropdown-item-custom" to="/e-waste-recycling">E-Waste Recycling</Link></li>
                                        <li><Link className="dropdown-item-custom" to="/refurbishment">Refurbishment</Link></li>
                                        <li><Link className="dropdown-item-custom" to="/precious-metals">Precious Metal Recovery</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item"><Link className="nav-link text-dark fw-bold-50" to="/#sustainability">Sustainability</Link></li>
                            <li className="nav-item"><Link className="nav-link text-dark fw-bold-50" to="/#features">Feature</Link></li>
                            <li className="nav-item"><Link className="nav-link text-dark fw-bold-50" to="/#contact">Contact</Link></li>
                        </ul>
                        <div className="d-flex align-items-center gap-3 ms-lg-5">
                            <img src={navSearch} alt="Search" className="cursor-pointer" style={{ height: '30px', width: 'auto' }} />
                            <img src={navMenu} alt="Menu" className="cursor-pointer" style={{ height: '30px', width: 'auto' }} />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            {/* Hero Section */}
            <header className="py-2">
                <div className="container">
                    <div className="overflow-hidden position-relative" style={{ minHeight: '650px', borderRadius: '40px' }}>
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: `url(${page2_bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </div>
                </div>
            </header>

            {/* Sustainability Section */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-5 text-center mb-4 mb-lg-0 pe-lg-5">
                            <img src={introSprout} alt="Sustainability" className="img-fluid" style={{ maxHeight: '350px' }} />
                        </div>
                        <div className="col-lg-7 ps-lg-5 border-start border-2 border-secondary border-opacity-25" style={{ textAlign: 'left' }}>
                            <h2 className="fw-bold mb-3 display-6" style={{ color: '#2e7d32' }}>Sustainability at<br />Blue Planet E-Waste<br />Solutions<span className="fw-bold text-dark">—</span></h2>
                            <h5 className="text-dark fw-normal lh-base display-6" style={{ fontSize: '1.75rem' }}>
                                Driving Circular Transformation<br />
                                Through <span className="fw-bold text-dark">Refurbishment</span>,<br />
                                <span className="fw-bold text-dark">Responsible Recycling</span> and <span className="fw-bold text-dark">Carbon<br />Reduction</span>
                            </h5>
                        </div>
                    </div>

                    <div className="text-center mx-auto mt-5" style={{ maxWidth: '900px' }}>
                        <h2 className="mb-0 text-dark display-4" style={{ fontWeight: '400' }}>Technology evolves fast.</h2>
                        <h2 className="mb-4 text-dark display-4 fw-bold">Waste should not.</h2>
                        <div className="d-flex justify-content-center">
                            <p className="text-secondary mb-0" style={{ fontSize: '1.1rem', textAlign: 'center', lineHeight: '1.5' }}>
                                At Blue Planet E-Waste Solutions, we are building one of India's most advanced and transparent circular ecosystems for electronic waste — enabling organizations to securely recycle, refurbish, and recover value from end-of-life electronic assets while protecting the planet and future generations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comprehensive Solutions */}
            <section className="section-padding" style={{ backgroundColor: '#579d5e' }}>
                <div className="container">
                    <h2 className="text-center text-white mb-5 display-5"><span className="fw-light">Our</span> <span className="fw-bold">Comprehensive</span> <span className="fw-light">Solutions</span></h2>

                    <div className="d-flex flex-column gap-5">
                        {/* Solution 1 */}
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-5 col-md-6 mb-4 mb-md-0 position-relative">
                                <div className="position-absolute w-100 h-100 rounded-5" style={{ top: '15px', left: '15px', backgroundColor: 'rgba(255, 255, 255, 0.15)', zIndex: 0 }}></div>
                                <div className="rounded-5 overflow-hidden position-relative shadow-lg" style={{ height: '320px', zIndex: 1 }}>
                                    <img src={recycleIndustrial} className="w-100 h-100 object-fit-cover" alt="Recycling" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 text-white text-start ps-lg-5">
                                <h3 className="fw-bold mb-3">E-Waste Recycling &<br />Material Recovery</h3>
                                <p className="opacity-75 mb-0 lh-lg" style={{ fontSize: '0.95rem' }}>
                                    We manage the complete recycling lifecycle from safe<br />
                                    collection to segregation, dismantling, extraction of<br />
                                    precious metals, and environmentally responsible<br />
                                    treatment of hazardous materials.<br />
                                    This process protects natural resources, prevents<br />
                                    landfill pollution, and returns materials back into<br />
                                    manufacturing.<br />
                                    Key streams handled include: IT equipment, industrial<br />
                                    electronics, home appliances, batteries, PCBs and<br />
                                    more.
                                </p>
                            </div>
                        </div>

                        {/* Solution 2 */}
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-5 col-md-6 mb-4 mb-md-0 position-relative">
                                <div className="position-absolute w-100 h-100 rounded-5" style={{ top: '15px', left: '15px', backgroundColor: 'rgba(255, 255, 255, 0.15)', zIndex: 0 }}></div>
                                <div className="rounded-5 overflow-hidden position-relative shadow-lg" style={{ height: '320px', zIndex: 1 }}>
                                    <img src={recycleHomeAppliances} className="w-100 h-100 object-fit-cover" alt="Home Assets" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 text-white text-start ps-lg-5">
                                <h3 className="fw-bold mb-3">Refurbishment of<br />Home Assets</h3>
                                <p className="opacity-75 mb-0 lh-lg" style={{ fontSize: '0.95rem' }}>
                                    Through OEM-authorized refurbishment, diagnostics,<br />
                                    restoration, cosmetic renewal, and secure data<br />
                                    sanitization, we extend the useful life of devices by<br />
                                    24-36 months — without compromising performance<br />
                                    or user experience.<br />
                                    70% cost savings vs. buying new hardware with<br />
                                    measurable environmental impact and carbon credit<br />
                                    generation.
                                </p>
                            </div>
                        </div>

                        {/* Solution 3 */}
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-5 col-md-6 mb-4 mb-md-0 position-relative">
                                <div className="position-absolute w-100 h-100 rounded-5" style={{ top: '15px', left: '15px', backgroundColor: 'rgba(255, 255, 255, 0.15)', zIndex: 0 }}></div>
                                <div className="rounded-5 overflow-hidden position-relative shadow-lg" style={{ height: '320px', zIndex: 1 }}>
                                    <img src={recycleItAssets} className="w-100 h-100 object-fit-cover" alt="IT Repair" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 text-white text-start ps-lg-5">
                                <h3 className="fw-bold mb-3">IT Repair &<br />Refurbishment</h3>
                                <p className="opacity-75 mb-0 lh-lg" style={{ fontSize: '0.95rem' }}>
                                    World-class data security infrastructure including:<br />
                                    - On-site & Off-site data wiping<br />
                                    - Degaussing & 3X sanitisation<br />
                                    - Complete physical hard disk shredding (&lt;5mm size)<br /><br />
                                    Compliant with industry standards including GDPR,<br />
                                    HIPAA & ISO frameworks.<br />
                                    (Ideal for enterprises, BFSI, healthcare, and<br />
                                    government sectors.)
                                </p>
                            </div>
                        </div>

                        {/* Solution 4 */}
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-5 col-md-6 mb-4 mb-md-0 position-relative">
                                <div className="position-absolute w-100 h-100 rounded-5" style={{ top: '15px', left: '15px', backgroundColor: 'rgba(255, 255, 255, 0.15)', zIndex: 0 }}></div>
                                <div className="rounded-5 overflow-hidden position-relative shadow-lg" style={{ height: '320px', zIndex: 1 }}>
                                    <img src={service1} className="w-100 h-100 object-fit-cover" alt="Consumer Appliance" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 text-white text-start ps-lg-5">
                                <h3 className="fw-bold mb-3">Consumer Appliance<br />Return D1 D2 D3</h3>
                                <p className="opacity-75 mb-0 lh-lg" style={{ fontSize: '0.95rem' }}>
                                    01: Collection and Verification<br />
                                    - Pick up from homes, retailers, and partner locations<br />
                                    - Tagging and documentation of returned appliances<br />
                                    <br />
                                    02: Sorting and Assessment<br />
                                    - Categorisation into functional, repairable, and end-of-life<br />
                                    - Quick technical checks for reuse potential<br />
                                    <br />
                                    03: Refurbishment, Recycling and Redeployment<br />
                                    - Basic repairs and part replacement for refurbishable<br />
                                    units<br />
                                    - Responsible recycling for non-repairable items<br />
                                    - Redeployment of refurbished appliances into secondary<br />
                                    markets
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="section-padding pb-0 bg-white overflow-hidden">
                <div className="container text-center">
                    <h2 className="fw-bold text-dark mb-3">Who We Serve</h2>
                    <div className="d-flex justify-content-center">
                        <img src={whoWeServeDiagram} alt="Who We Serve" className="img-fluid" style={{ maxWidth: '800px', width: '100%' }} />
                    </div>
                </div>
            </section>

            {/* Differentatiors & Deliverables */}
            <section className="section-padding pt-0 position-relative overflow-hidden">
                <div className="position-absolute top-50 start-50 translate-middle w-100 h-100" style={{ backgroundImage: `url(${benefitBg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', zIndex: -1 }}></div>
                <div className="container position-relative z-1">
                    <h2 className="text-center fw-bold mb-3">Why Blue Planet <span className="fw-bolder">E-Waste Solutions</span></h2>

                    <div className="row g-3 justify-content-center">
                        {/* Our Differentiators */}
                        <div className="col-lg-5">
                            <div className="h-100 overflow-hidden border shadow-sm border-dark border-2" style={{ borderRadius: '40px' }}>
                                <div className="p-4 text-center text-white" style={{ backgroundColor: '#003366' }}>
                                    <h4 className="fw-bold mb-0">Our Differentiators</h4>
                                </div>
                                <div className="p-4 bg-white" style={{ minHeight: '500px' }}>
                                    <ul className="list-unstyled d-flex flex-column gap-4 mb-0 justify-content-center h-100">
                                        <li className="d-flex align-items-center gap-3 w-100">
                                            <div style={{ width: '60px', flexShrink: 0 }}><img src={blue1} className="w-100" alt="Certified" /></div>
                                            <div className="fw-bold text-dark fs-5 text-start">OEM-certified refurbishment & recycling</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3 w-100">
                                            <div style={{ width: '60px', flexShrink: 0 }}><img src={blue2} className="w-100" alt="Transparency" /></div>
                                            <div className="fw-bold text-dark fs-5 text-start">Transparency & full traceability</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3 w-100">
                                            <div style={{ width: '60px', flexShrink: 0 }}><img src={blue3} className="w-100" alt="Efficiency" /></div>
                                            <div className="fw-bold text-dark fs-5 text-start">Zero-landfill & zero-leakage operations</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3 w-100">
                                            <div style={{ width: '60px', flexShrink: 0 }}><img src={blue4} className="w-100" alt="Secure data" /></div>
                                            <div className="fw-bold text-dark fs-5 text-start">Secure, certified data protection</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3 w-100">
                                            <div style={{ width: '60px', flexShrink: 0 }}><img src={blue5} className="w-100" alt="Circular economy" /></div>
                                            <div className="fw-bold text-dark fs-5 text-start">Circular economy model</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3 w-100">
                                            <div style={{ width: '60px', flexShrink: 0 }}><img src={iconCarbon} className="w-100" alt="Carbon credit" /></div>
                                            <div className="fw-bold text-dark fs-5 text-start">Carbon credit generation</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* What They Deliver */}
                        <div className="col-lg-5">
                            <div className="h-100 overflow-hidden border shadow-sm border-dark border-2" style={{ borderRadius: '40px' }}>
                                <div className="p-4 text-center text-white" style={{ backgroundColor: '#579d5e' }}>
                                    <h4 className="fw-bold mb-0">What They Deliver</h4>
                                </div>
                                <div className="p-4 bg-white" style={{ minHeight: '500px' }}>
                                    <ul className="list-unstyled d-flex flex-column gap-4 mb-0 justify-content-center h-100">
                                        <li className="d-flex align-items-center gap-3 w-100">
                                            <div style={{ width: '60px', flexShrink: 0 }}><img src={green1} className="w-100" alt="Reliability" /></div>
                                            <div className="fw-bold text-dark fs-5 text-start">Guaranteed reliability & performance</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3 w-100">
                                            <div style={{ width: '60px', flexShrink: 0 }}><img src={green2} className="w-100" alt="Accountability" /></div>
                                            <div className="fw-bold text-dark fs-5 text-start">100% accountability from source to disposal</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3 w-100">
                                            <div style={{ width: '60px', flexShrink: 0 }}><img src={green3} className="w-100" alt="Ethical" /></div>
                                            <div className="fw-bold text-dark fs-5 text-start">Sustainable, ethical waste handling</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3 w-100">
                                            <div style={{ width: '60px', flexShrink: 0 }}><img src={green4} className="w-100" alt="Risk" /></div>
                                            <div className="fw-bold text-dark fs-5 text-start">Eliminates corporate risk & liability</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3 w-100">
                                            <div style={{ width: '60px', flexShrink: 0 }}><img src={iconUpcycle} className="w-100" alt="Value" /></div>
                                            <div className="fw-bold text-dark fs-5 text-start">Waste converted into enterprise value</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3 w-100">
                                            <div style={{ width: '60px', flexShrink: 0 }}><img src={iconPrecious} className="w-100" alt="Monetizable" /></div>
                                            <div className="fw-bold text-dark fs-5 text-start">Monetizable sustainability impact</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Impact */}
            {/* Our Impact */}
            <section className="section-padding overflow-hidden" style={{ backgroundColor: '#003366' }}>
                <div className="container text-white">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0 position-relative p-0 pe-lg-5">
                            {/* Diagram Container */}
                            <div className="position-relative py-5">
                                <div className="bg-white position-absolute top-0 end-0 h-100 shadow-sm" style={{ width: '200%', borderRadius: '0 50px 50px 0', zIndex: 0 }}></div>
                                <div className="position-relative z-1 pe-4 text-end">
                                    <img src={fullProcessDiagram} alt="Our Impact" className="img-fluid" style={{ maxWidth: '90%' }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5 text-start">
                            <h2 className="mb-4 display-5"><span className="fw-light">Our</span> <span className="fw-bold">Impact</span></h2>
                            <ul className="list-unstyled d-flex flex-column gap-3 fs-5 fw-light">
                                <li className="d-flex align-items-start gap-3">
                                    <div className="mt-1" style={{ width: '25px', flexShrink: 0 }}>
                                        <img src={bulletArrow} alt="Bullet" className="w-100" />
                                    </div>
                                    <span>Diverts thousands of tonnes of e-waste away from landfills annually</span>
                                </li>
                                <li className="d-flex align-items-start gap-3">
                                    <div className="mt-1" style={{ width: '25px', flexShrink: 0 }}>
                                        <img src={bulletArrow} alt="Bullet" className="w-100" />
                                    </div>
                                    <span>Reduces carbon emissions and harmful pollutants</span>
                                </li>
                                <li className="d-flex align-items-start gap-3">
                                    <div className="mt-1" style={{ width: '25px', flexShrink: 0 }}>
                                        <img src={bulletArrow} alt="Bullet" className="w-100" />
                                    </div>
                                    <span>Protects earth's mineral resources through recovery & reuse</span>
                                </li>
                                <li className="d-flex align-items-start gap-3">
                                    <div className="mt-1" style={{ width: '25px', flexShrink: 0 }}>
                                        <img src={bulletArrow} alt="Bullet" className="w-100" />
                                    </div>
                                    <span>Creates skill employment in circular economy sectors</span>
                                </li>
                                <li className="d-flex align-items-start gap-3">
                                    <div className="mt-1" style={{ width: '25px', flexShrink: 0 }}>
                                        <img src={bulletArrow} alt="Bullet" className="w-100" />
                                    </div>
                                    <span>Supports national sustainability and EPR compliance goals</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom Contact/Footer Banner */}
            <section className="section-padding pt-5 pb-5 bg-white text-center position-relative overflow-hidden">
                <img src={tableBgWave} alt="" className="position-absolute w-100" style={{ top: '60%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, opacity: 0.6 }} />
                <div className="container position-relative z-1" style={{ fontFamily: '"Outfit", sans-serif' }}>
                    <h2 className="mb-0 display-6" style={{ fontWeight: '400', color: '#000' }}>Together, We Can Build a</h2>
                    <h2 className="display-4 fw-bold mb-4" style={{ color: '#000' }}>Regenerative Future</h2>
                    <p className="text-secondary mx-auto fs-5" style={{ maxWidth: '950px', lineHeight: '1.6', textAlign: 'center' }}>
                        Every device recycled through Blue Planet E-Waste Solutions is a step toward a cleaner planet,<br />
                        a stronger circular economy, and a more resilient world.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-wrapper p-4">
                <div className="container-fluid bg-success text-white rounded-5 p-5 position-relative overflow-hidden footer-container">
                    <div className="row g-5">
                        {/* Left Column */}
                        <div className="col-lg-4 pe-lg-5 border-end border-white border-opacity-25">
                            <img src={placeHolder} style={{ width: '220px', height: 'auto' }} alt="BluePlanet" className="mb-4" />
                            <h2 className="fw-bold mb-3">Turning Waste to<br />Treasure</h2>
                            <p className="text-white opacity-75 mb-5 lh-base" style={{ fontSize: '0.95rem',textAlign:'left' }}>Blue Planet E-Waste Solutions is a leading integrated technology-driven platform for responsible e-waste recycling, refurbishment, and resource recovery. We transform discarded electronics into valuable materials through ethical, compliant, and circular economy practices.</p>
                            <div className="d-flex gap-3 pt-0">
                                <img src={footerSocials} alt="Social Media" style={{ height: '30px', width: 'auto' }} />
                            </div>
                        </div>

                        {/* Middle Content */}
                        <div className="col-lg-5 d-flex flex-column ps-lg-5">
                            <div className="row mb-5">
                                <div className="col-sm-6">
                                    <h4 className="fw-bold mb-4" style={{textAlign:'left'}}>About</h4>
                                    <ul className="list-unstyled footer-links d-flex flex-column gap-1">
                                        <li><Link to="/about" className="text-white text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short "></i>About</Link></li>
                                        <li><Link to="/who-we-are" className="text-white text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short"></i>Who we are</Link></li>
                                        <li><Link to="/what-we-do" className="text-white text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short"></i>What we do</Link></li>
                                        <li><Link to="/impact" className="text-white text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short"></i>Impact</Link></li>
                                        <li><Link to="/contact-us" className="text-white text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short"></i>Contact us</Link></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <h4 className="fw-bold mb-4" style={{textAlign:'left'}}>Services</h4>
                                    <ul className="list-unstyled footer-links d-flex flex-column gap-1">
                                        <li><Link to="/e-waste-recycling" className="text-white text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short"></i>E-Waste Recycling</Link></li>
                                        <li><Link to="/refurbishment" className="text-white text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short"></i>Refurbishment</Link></li>
                                        <li><Link to="/precious-metals" className="text-white text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short"></i>Precious Metals Recovery</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="newsletter-box mt-auto">
                                <h3 className="fw-normal mb-4" style={{textAlign:'left'}}>Newsletters</h3>
                                <div className="position-relative w-100">
                                    <i className="bi bi-envelope position-absolute top-50 translate-middle-y ms-4 fs-5 text-dark" style={{ zIndex: 5, color: '#2e5a27' }}></i>
                                    <input type="email" className="form-control rounded-pill border-0 py-3 ps-5 pe-5 custom-newsletter-input" placeholder="Email Address" style={{ paddingLeft: '3.5rem !important' }} />
                                    <button className="btn rounded-pill position-absolute end-0 top-50 translate-middle-y me-2 px-4 py-2 fw-bold text-white shadow-none" style={{ backgroundColor: '#000', fontSize: '0.9rem' }}>Submit</button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-3 ps-lg-4">
                            <h6 className="fw-bold mb-3 text-white" style={{textAlign:'left'}}>Corporate Office</h6>
                            <p className="text-white opacity-75 mb-4 lh-base" style={{ fontSize: '0.9rem' ,textAlign:'left'}}>202, 2nd floor, SAS Tower<br />Sector 38, Gurugram,<br />Haryana 122001</p>

                            <h6 className="fw-bold mb-3 text-white" style={{textAlign:'left'}}>Recycling Facility @ Binola</h6>
                            <p className="text-white opacity-75 mb-4 lh-base" style={{ fontSize: '0.9rem' ,textAlign:'left'}}>Khewat No. 654/617 Min,<br />Khata No. 781, Rect No. 125,<br />Kill Binola Industrial Area<br />Main road, Binola Industrial<br />Area, Gurugram - 122413,<br />Haryana, India</p>

                            <h5 className="fw-bold mb-2" style={{textAlign:'left'}}>Call Us</h5>
                            <div className="d-flex align-items-center gap-2">
                                <i className="bi bi-telephone-fill"></i>
                                <span className="fw-bold fs-5" style={{textAlign:'left'}}>18003090950</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center small text-white opacity-75 mt-5 pt-4">
                        <p className="mb-0">© Copyright 2025 by Blue Planet Environmental Soultion Pte. Ltd.</p>
                    </div>
                </div>
            </footer>
        </div >
    );
};

export default WhatWeDo;
