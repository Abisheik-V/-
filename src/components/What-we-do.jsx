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
import client2 from '../assets/images/client2.png';
import iconUpcycle from '../assets/images/icon_upcycle.png';
import bulletArrow from '../assets/images/bullet_arrow.png';

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
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 position-relative">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={placeHolder} alt="BluePlanet" height="60" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center gap-4 fw-bolder">
                            <li className="nav-item"><Link className="nav-link text-dark" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-dark" to="/who-we-are">Who we are</Link></li>
                            <li className="nav-item position-relative">
                                <Link className="nav-link text-dark" to="/what-we-do">Services</Link>
                                <div className="services-dropdown d-flex flex-column align-items-center position-absolute start-50 translate-middle-x">
                                    <div className="dropdown-line"></div>
                                    <div className="bg-white border text-center p-2 rounded-1 shadow-sm lh-sm text-muted dropdown-content">
                                        <span className="fw-bold text-dark">What We Do,</span> E-Waste Recycling,<br />Refurbishment, precious metal Recovery
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item"><Link className="nav-link text-dark" to="/#sustainability">Sustainability</Link></li>
                            <li className="nav-item"><Link className="nav-link text-dark" to="/#features">Feature</Link></li>
                            <li className="nav-item"><Link className="nav-link text-dark" to="/#contact">Contact</Link></li>
                        </ul>
                        <div className="d-flex align-items-center gap-3 ms-lg-5">
                            <i className="bi bi-search fs-4 cursor-pointer"></i>
                            <i className="bi bi-list fs-2 cursor-pointer fw-bold"></i>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            {/* Hero Section */}
            <header className="py-4">
                <div className="container">
                    <div className="overflow-hidden position-relative rounded-5" style={{ minHeight: '600px' }}>
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: `url(${page2_bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </div>
                </div>
            </header>

            {/* Sustainability Section */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="row align-items-center mb-3 mb-lg-5">
                        <div className="col-lg-5 text-center mb-4 mb-lg-0 pe-lg-5">
                            <img src={introSprout} alt="Sustainability" className="img-fluid" style={{ maxHeight: '350px' }} />
                        </div>
                        <div className="col-lg-7 ps-lg-5 border-start border-2 border-secondary border-opacity-25">
                            <h2 className="fw-bold text-success mb-3 display-6">Sustainability at<br />Blue Planet E-Waste<br />Solutions—</h2>
                            <h5 className="text-secondary fw-normal lh-base display-6" style={{ fontSize: '1.75rem' }}>
                                Driving Circular Transformation Through <span className="fw-bold text-dark">Refurbishment</span>,<br />
                                <span className="fw-bold text-dark">Responsible Recycling</span> and <span className="fw-bold text-dark">Carbon Reduction</span>
                            </h5>
                        </div>
                    </div>

                    <div className="text-center mx-auto mt-3 mt-lg-5" style={{ maxWidth: '900px' }}>
                        <h2 className="mb-0 text-dark display-5" style={{ fontWeight: '400' }}>Technology evolves fast.</h2>
                        <h2 className="mb-4 text-dark display-5 fw-bold">Waste should not.</h2>
                        <p className="text-muted lh-lg px-lg-5" style={{ fontSize: '1.1rem' }}>
                            At Blue Planet E-Waste Solutions, we are building one of India's most advanced and transparent circular ecosystems for electronic waste — enabling organizations to securely recycle, refurbish, and recover value from end-of-life electronic assets while protecting the planet and future generations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Comprehensive Solutions */}
            <section className="section-padding" style={{ backgroundColor: '#5c9c44' }}>
                <div className="container">
                    <h2 className="text-center text-white mb-3 mb-lg-5 display-5"><span className="fw-light">Our</span> <span className="fw-bold">Comprehensive</span> <span className="fw-light">Solutions</span></h2>

                    <div className="d-flex flex-column gap-5">
                        {/* Solution 1 */}
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-5 mb-4 mb-md-0">
                                <div className="rounded-5 overflow-hidden border border-4 border-white border-opacity-25" style={{ height: '280px' }}>
                                    <img src={recycleIndustrial} className="w-100 h-100 object-fit-cover" alt="Recycling" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 text-white text-start ps-md-4">
                                <h3 className="fw-bold mb-3">E-Waste Recycling &<br />Material Recovery</h3>
                                <p className="small opacity-75 mb-0 lh-lg" style={{ textAlign: 'justify' }}>
                                    We manage the complete recycling lifecycle from safe collection to segregation, dismantling, extraction of precious metals, and environmentally responsible treatment of hazardous materials.<br />
                                    This process protects natural resources, prevents landfill pollution, and returns materials back into manufacturing.<br />
                                    Key streams handled include: IT equipment, industrial electronics, home appliances, batteries, PCBs and more.
                                </p>
                            </div>
                        </div>

                        {/* Solution 2 */}
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-5 mb-4 mb-md-0">
                                <div className="rounded-5 overflow-hidden border border-4 border-white border-opacity-25" style={{ height: '280px' }}>
                                    <img src={recycleHomeAppliances} className="w-100 h-100 object-fit-cover" alt="Home Assets" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 text-white text-start ps-md-4">
                                <h3 className="fw-bold mb-3">Refurbishment of<br />Home Assets</h3>
                                <p className="small opacity-75 mb-0 lh-lg" style={{ textAlign: 'justify' }}>
                                    Through OEM-authorized refurbishment, diagnostics, restoration, cosmetic renewal, and secure data sanitization, we extend the useful life of devices by 24-36 months — without compromising performance or user experience.<br />
                                    70% cost savings vs. buying new hardware with measurable environmental impact and carbon credit generation.
                                </p>
                            </div>
                        </div>

                        {/* Solution 3 */}
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-5 mb-4 mb-md-0">
                                <div className="rounded-5 overflow-hidden border border-4 border-white border-opacity-25" style={{ height: '280px' }}>
                                    <img src={recycleItAssets} className="w-100 h-100 object-fit-cover" alt="IT Repair" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 text-white text-start ps-md-4">
                                <h3 className="fw-bold mb-3">IT Repair &<br />Refurbishment</h3>
                                <p className="small opacity-75 mb-0 lh-lg" style={{ textAlign: 'justify' }}>
                                    World-class data security infrastructure including:<br />
                                    - On-site & Off-site data wiping<br />
                                    - Degaussing & 3X sanitisation<br />
                                    - Complete physical hard disk shredding (&lt;5mm size)<br /><br />
                                    Compliant with industry standards including GDPR, HIPAA & ISO, NIST etc.<br />
                                    (Ideal for enterprises, BFSI, healthcare, and government sectors.)
                                </p>
                            </div>
                        </div>

                        {/* Solution 4 */}
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-5 mb-4 mb-md-0">
                                <div className="rounded-5 overflow-hidden border border-4 border-white border-opacity-25" style={{ height: '280px' }}>
                                    <img src={service1} className="w-100 h-100 object-fit-cover" alt="Consumer Appliance" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 text-white text-start ps-md-4">
                                <h3 className="fw-bold mb-3">Consumer Appliance<br />Return D1 D2 D3</h3>
                                <p className="small opacity-75 mb-0 lh-lg" style={{ textAlign: 'justify' }}>
                                    01: Collection and Verification<br />
                                    - Pick up from homes, retailers, and partner locations<br />
                                    - Tagging and documentation of returned appliances<br />
                                    <br />
                                    02: Sorting and Assessment<br />
                                    - Categorisation into functional, repairable, and end-of-life<br />
                                    - Quick technical checks for reuse potential
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="section-padding bg-white overflow-hidden">
                <div className="container text-center">
                    {/* Desktop View (Circular Layout) */}
                    <div className="d-none d-lg-flex position-relative mx-auto align-items-center justify-content-center" style={{ width: '800px', height: '600px' }}>

                        {/* Main Green Shape */}
                        <div className="position-absolute border border-5 border-white"
                            style={{
                                width: '500px',
                                height: '480px',
                                backgroundColor: '#5c9c44',
                                borderRadius: '45%',
                                zIndex: 1
                            }}>
                        </div>

                        {/* Separator Lines (Creating 6 sectors) */}
                        <div className="position-absolute bg-white" style={{ width: '4px', height: '500px', transform: 'rotate(0deg)', zIndex: 1 }}></div>
                        <div className="position-absolute bg-white" style={{ width: '4px', height: '500px', transform: 'rotate(60deg)', zIndex: 1 }}></div>
                        <div className="position-absolute bg-white" style={{ width: '4px', height: '500px', transform: 'rotate(120deg)', zIndex: 1 }}></div>

                        {/* Central Circle */}
                        <div className="position-absolute rounded-circle bg-white d-flex align-items-center justify-content-center shadow-sm"
                            style={{ width: '160px', height: '160px', zIndex: 10 }}>
                            <h4 className="fw-bold text-dark m-0 lh-base">Who we<br />serve</h4>
                        </div>

                        {/* --- SECTOR 1: Government (Top Right / 1 o'clock) --- */}
                        {/* Text */}
                        <div className="position-absolute text-white fw-bold lh-sm text-center" style={{ top: '120px', left: '440px', zIndex: 5, width: '140px' }}>
                            Government bodies<br />& public institutions
                        </div>
                        {/* Icon & Line */}
                        <div className="position-absolute" style={{ top: '40px', right: '180px', zIndex: 5 }}>
                            <i className="bi bi-bank fs-1" style={{ color: '#2e496a' }}></i>
                            <div className="bg-secondary opacity-50 position-absolute" style={{ width: '2px', height: '50px', bottom: '-40px', left: '0', transform: 'rotate(30deg)' }}></div>
                        </div>

                        {/* --- SECTOR 2: Large Enterprises (Right / 3 o'clock) --- */}
                        {/* Text */}
                        <div className="position-absolute text-white fw-bold lh-sm text-center" style={{ top: '240px', left: '520px', zIndex: 5, width: '140px' }}>
                            Large enterprises<br />& multinationals
                        </div>
                        {/* Icon & Line */}
                        <div className="position-absolute" style={{ top: '240px', right: '50px', zIndex: 5 }}>
                            <i className="bi bi-building fs-1" style={{ color: '#2e496a' }}></i>
                            <div className="bg-secondary opacity-50 position-absolute" style={{ width: '50px', height: '2px', top: '50%', right: '50px', transform: 'translateY(-50%)' }}></div>
                        </div>

                        {/* --- SECTOR 3: OEMs (Bottom Right / 5 o'clock) --- */}
                        {/* Text */}
                        <div className="position-absolute text-white fw-bold lh-sm text-center" style={{ top: '380px', left: '440px', zIndex: 5, width: '150px' }}>
                            OEMs, IT distributors<br />& channel partners
                        </div>
                        {/* Icon & Line */}
                        <div className="position-absolute" style={{ bottom: '60px', right: '180px', zIndex: 5 }}>
                            <i className="bi bi-pc-display fs-1" style={{ color: '#e6655c' }}></i>
                            <div className="bg-secondary opacity-50 position-absolute" style={{ width: '2px', height: '50px', top: '-40px', left: '0', transform: 'rotate(-30deg)' }}></div>
                        </div>

                        {/* --- SECTOR 4: Retailers (Bottom Left / 7 o'clock) --- */}
                        {/* Text */}
                        <div className="position-absolute text-white fw-bold lh-sm text-center" style={{ top: '380px', left: '220px', zIndex: 5, width: '140px' }}>
                            Retailers & consumer<br />electronics brands
                        </div>
                        {/* Icon & Line */}
                        <div className="position-absolute" style={{ bottom: '60px', left: '200px', zIndex: 5 }}>
                            <i className="bi bi-shop fs-1" style={{ color: '#2e496a' }}></i>
                            <div className="bg-secondary opacity-50 position-absolute" style={{ width: '2px', height: '50px', top: '-40px', right: '0', transform: 'rotate(30deg)' }}></div>
                        </div>

                        {/* --- SECTOR 5: Education (Left / 9 o'clock) --- */}
                        {/* Text */}
                        <div className="position-absolute text-white fw-bold lh-sm text-center" style={{ top: '280px', left: '160px', zIndex: 5, width: '140px' }}>
                            Education<br />networks &<br />universities
                        </div>
                        {/* Icon & Line */}
                        <div className="position-absolute" style={{ top: '300px', left: '60px', zIndex: 5 }}>
                            <i className="bi bi-mortarboard fs-1" style={{ color: '#e6655c' }}></i>
                            <div className="bg-secondary opacity-50 position-absolute" style={{ width: '50px', height: '2px', top: '50%', left: '50px', transform: 'translateY(-50%)' }}></div>
                        </div>

                        {/* --- SECTOR 6: Individual Consumers (Top Left / 11 o'clock) --- */}
                        {/* Text */}
                        <div className="position-absolute text-white fw-bold lh-sm text-center" style={{ top: '150px', left: '220px', zIndex: 5, width: '120px' }}>
                            Individual<br />consumers
                        </div>
                        {/* Icon & Line */}
                        <div className="position-absolute" style={{ top: '60px', left: '200px', zIndex: 5 }}>
                            <i className="bi bi-person fs-1" style={{ color: '#2e496a' }}></i>
                            <div className="bg-secondary opacity-50 position-absolute" style={{ width: '2px', height: '50px', bottom: '-40px', right: '0', transform: 'rotate(-30deg)' }}></div>
                        </div>

                    </div>

                    {/* Mobile View (Grid Layout) */}
                    <div className="d-block d-lg-none">
                        <div className="row g-4 justify-content-center">
                            <div className="col-12 mb-4">
                                <h2 className="fw-bold text-dark">Who We Serve</h2>
                            </div>

                            {/* Card 1 */}
                            <div className="col-md-6">
                                <div className="p-4 rounded-4 text-white d-flex align-items-center gap-3" style={{ backgroundColor: '#5c9c44' }}>
                                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '60px', height: '60px' }}>
                                        <i className="bi bi-bank fs-3" style={{ color: '#2e496a' }}></i>
                                    </div>
                                    <h5 className="mb-0 text-start fw-bold">Government bodies & public institutions</h5>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="col-md-6">
                                <div className="p-4 rounded-4 text-white d-flex align-items-center gap-3" style={{ backgroundColor: '#5c9c44' }}>
                                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '60px', height: '60px' }}>
                                        <i className="bi bi-building fs-3" style={{ color: '#2e496a' }}></i>
                                    </div>
                                    <h5 className="mb-0 text-start fw-bold">Large enterprises & multinationals</h5>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="col-md-6">
                                <div className="p-4 rounded-4 text-white d-flex align-items-center gap-3" style={{ backgroundColor: '#5c9c44' }}>
                                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '60px', height: '60px' }}>
                                        <i className="bi bi-pc-display fs-3" style={{ color: '#e6655c' }}></i>
                                    </div>
                                    <h5 className="mb-0 text-start fw-bold">OEMs, IT distributors & channel partners</h5>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="col-md-6">
                                <div className="p-4 rounded-4 text-white d-flex align-items-center gap-3" style={{ backgroundColor: '#5c9c44' }}>
                                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '60px', height: '60px' }}>
                                        <i className="bi bi-shop fs-3" style={{ color: '#2e496a' }}></i>
                                    </div>
                                    <h5 className="mb-0 text-start fw-bold">Retailers & consumer electronics brands</h5>
                                </div>
                            </div>

                            {/* Card 5 */}
                            <div className="col-md-6">
                                <div className="p-4 rounded-4 text-white d-flex align-items-center gap-3" style={{ backgroundColor: '#5c9c44' }}>
                                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '60px', height: '60px' }}>
                                        <i className="bi bi-mortarboard fs-3" style={{ color: '#e6655c' }}></i>
                                    </div>
                                    <h5 className="mb-0 text-start fw-bold">Education networks & universities</h5>
                                </div>
                            </div>

                            {/* Card 6 */}
                            <div className="col-md-6">
                                <div className="p-4 rounded-4 text-white d-flex align-items-center gap-3" style={{ backgroundColor: '#5c9c44' }}>
                                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '60px', height: '60px' }}>
                                        <i className="bi bi-person fs-3" style={{ color: '#2e496a' }}></i>
                                    </div>
                                    <h5 className="mb-0 text-start fw-bold">Individual consumers</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Differentatiors & Deliverables */}
            <section className="section-padding position-relative overflow-hidden">
                <div className="position-absolute top-50 start-50 translate-middle w-100 h-100" style={{ backgroundImage: `url(${benefitBg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', zIndex: -1 }}></div>
                <div className="container position-relative z-1">
                    <h2 className="text-center fw-bold mb-3 mb-lg-5">Why Blue Planet <span className="fw-bolder">E-Waste Solutions</span></h2>

                    <div className="row g-4 justify-content-center">
                        {/* Our Differentiators */}
                        <div className="col-lg-5">
                            <div className="h-100 rounded-4 overflow-hidden border shadow-sm">
                                <div className="p-4 text-center text-white" style={{ backgroundColor: '#003366' }}>
                                    <h4 className="fw-bold mb-0">Our Differentiators</h4>
                                </div>
                                <div className="p-4 bg-white">
                                    <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue1} className="w-100" alt="Certified" /></div>
                                            <div className="fw-medium text-dark">OEM-certified refurbishment & recycling</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue2} className="w-100" alt="Transparency" /></div>
                                            <div className="fw-medium text-dark">Transparency & full traceability</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue3} className="w-100" alt="Efficiency" /></div>
                                            <div className="fw-medium text-dark">Zero-landfill & zero-leakage operations</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue4} className="w-100" alt="Secure data" /></div>
                                            <div className="fw-medium text-dark">Secure, certified data protection</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue5} className="w-100" alt="Circular economy" /></div>
                                            <div className="fw-medium text-dark">Circular economy model</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={iconCarbon} className="w-100" alt="Carbon credit" /></div>
                                            <div className="fw-medium text-dark">Carbon credit generation</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* What They Deliver */}
                        <div className="col-lg-5">
                            <div className="h-100 rounded-4 overflow-hidden border shadow-sm">
                                <div className="p-4 text-center text-white" style={{ backgroundColor: '#5CB85C' }}>
                                    <h4 className="fw-bold mb-0">What They Deliver</h4>
                                </div>
                                <div className="p-4 bg-white">
                                    <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={green1} className="w-100" alt="Reliability" /></div>
                                            <div className="fw-medium text-dark">Guaranteed reliability & performance</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={green2} className="w-100" alt="Accountability" /></div>
                                            <div className="fw-medium text-dark">100% accountability from source-to-disposal</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={green3} className="w-100" alt="Ethical" /></div>
                                            <div className="fw-medium text-dark">Sustainable, ethical waste handling</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={green4} className="w-100" alt="Risk" /></div>
                                            <div className="fw-medium text-dark">Eliminates corporate risk & liability</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={iconUpcycle} className="w-100" alt="Value" /></div>
                                            <div className="fw-medium text-dark">Waste converted into enterprise value</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={iconPrecious} className="w-100" alt="Monetizable" /></div>
                                            <div className="fw-medium text-dark">Monetizable sustainability impact</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Impact */}
            <section className="section-padding" style={{ backgroundColor: '#003366' }}>
                <div className="container text-white">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-4 mb-lg-0 text-center">
                            {/* Diagram Placeholder */}
                            <div className="bg-white bg-opacity-10 rounded-circle d-inline-block p-5 border border-white border-opacity-25" style={{ width: '300px', height: '300px' }}>
                                <i className="bi bi-bullseye display-1 text-white"></i>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <h2 className="fw-bold mb-4">Our <span className="fw-light">Impact</span></h2>
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
                                    <span>Protects earth's natural resources through recovery & reuse</span>
                                </li>
                                <li className="d-flex align-items-start gap-3">
                                    <div className="mt-1" style={{ width: '25px', flexShrink: 0 }}>
                                        <img src={bulletArrow} alt="Bullet" className="w-100" />
                                    </div>
                                    <span>Creates skilled employment in circular economy sectors</span>
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
            <section className="section-padding bg-white text-center">
                <div className="container">
                    <h4 className="text-muted fw-bold">Together, We Can Build a</h4>
                    <h2 className="display-6 fw-bold">Regenerative Future</h2>
                    <p className="text-muted small mt-3 mx-auto" style={{ maxWidth: '600px' }}>Every device recycled through Blue Planet E-Waste Solutions is a step toward a cleaner world, a stronger circular economy, and a more resilient earth.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-wrapper p-4">
                <div className="container-fluid bg-success text-white rounded-5 p-5 position-relative overflow-hidden footer-container">
                    <div className="row g-5">
                        {/* Footer contents same as before */}
                        <div className="col-lg-4 pe-lg-5 border-end border-white border-opacity-25">
                            <img src={placeHolder} height="60" alt="BluePlanet" className="mb-4" />
                            <h3 className="fw-bold mb-4">Turning Waste to<br />Treasure</h3>
                            <p className="small text-white opacity-75 mb-5 lh-lg" style={{ textAlign: 'justify' }}>Blue Planet E-Waste Solutions is a leading integrated technology-driven platform for responsible e-waste recycling, refurbishment, and resource recovery. We transform discarded electronics into valuable materials through ethical, compliant, and circular economy practices.</p>
                            <div className="d-flex gap-3">
                                <Link to="#" className="social-icon-circle"><i className="bi bi-linkedin"></i></Link>
                                <Link to="#" className="social-icon-circle"><i className="bi bi-facebook"></i></Link>
                                <Link to="#" className="social-icon-circle"><i className="bi bi-instagram"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex flex-column">
                            <div className="row mb-4">
                                <div className="col-sm-6">
                                    <h5 className="fw-bold mb-4">About</h5>
                                    <ul className="list-unstyled footer-links d-flex flex-column gap-2">
                                        <li><Link to="/about" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>About</Link></li>
                                        <li><Link to="/who-we-are" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>Who we are</Link></li>
                                        <li><Link to="/what-we-do" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>What we do</Link></li>
                                        <li><Link to="/impact" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>Impact</Link></li>
                                        <li><Link to="/contact-us" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>Contact us</Link></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <h5 className="fw-bold mb-4">Services</h5>
                                    <ul className="list-unstyled footer-links d-flex flex-column gap-2">
                                        <li><Link to="/e-waste-recycling" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>E-Waste Recyling</Link></li>
                                        <li><Link to="/refurbishment" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>Refurbishment</Link></li>
                                        <li><Link to="/precious-metals" className="text-white text-decoration-none d-flex align-items-center"><i className="bi bi-arrow-right-short me-2"></i>Precious metals</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="newsletter-box mt-auto pt-3">
                                <h4 className="fw-light mb-4">Newsletters</h4>
                                <div className="position-relative w-100">
                                    <i className="bi bi-envelope position-absolute top-50 translate-middle-y ms-4 fs-5" style={{ zIndex: 5, color: '#2e5a27' }}></i>
                                    <input type="email" className="form-control rounded-pill border-0 py-3 ps-5 pe-5 custom-newsletter-input" placeholder="Email Address" style={{ paddingLeft: '3.5rem !important' }} />
                                    <button className="btn rounded-pill position-absolute end-0 top-50 translate-middle-y me-2 px-4 py-2 fw-bold text-white shadow-none" style={{ backgroundColor: '#000', fontSize: '0.9rem' }}>Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h6 className="fw-bold mb-3 opacity-75">Corporate Office</h6>
                            <p className="small text-white opacity-75 mb-4">202, 2nd floor, SAS Tower<br />Sector 38, Gurugram,<br />Haryana 122001</p>
                            <h6 className="fw-bold mb-3 opacity-75">Recycling Facility @ Binola</h6>
                            <p className="small text-white opacity-75 mb-4">Khewat No. 654/617 Min,<br />Khata No. 781, Rect No. 125,<br />Kill Binola Industrial Area<br />Main road, Binola Industrial<br />Area, Gurugram - 122413,<br />Haryana, India</p>
                            <h5 className="fw-bold mb-2">Call Us</h5>
                            <div className="d-flex align-items-center gap-2">
                                <i className="bi bi-telephone-fill"></i>
                                <span className="fw-bold fs-5">18003090950</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center small text-white opacity-75 mt-5">
                        <p className="mb-0">© Copyright 2025 by Blue Planet Environmental Solutions Pte. Ltd.</p>
                    </div>
                </div>
            </footer>
        </div >
    );
};

export default WhatWeDo;
