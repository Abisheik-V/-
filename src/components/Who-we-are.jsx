import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';

import heroBg from '../assets/images/hero_bg.png';
import placeHolder from '../assets/images/logo_placeholder.png';
import plant1 from '../assets/images/plant_1.png';
import plant2 from '../assets/images/plant_2.png';
import plant3 from '../assets/images/plant_3.png';
import plant4 from '../assets/images/plant_4.png';
import plant5 from '../assets/images/plant_5.png';
import plant6 from '../assets/images/plant_6.png';
import awareness1 from '../assets/images/awareness_1.png';
import service1 from '../assets/images/service_1.png';
import service2 from '../assets/images/service_2.png';
import service3 from '../assets/images/service_3.png';
import introSprout from '../assets/images/intro_sprout.png';
import recycleIcon from '../assets/images/recycle_icon.png';
import whatIsEwaste from '../assets/images/what_is_ewaste.png';
import bulletArrow from '../assets/images/bullet_arrow.png';
import recycleItAssets from '../assets/images/recycle_it_assets.png';
import recycleHomeAppliances from '../assets/images/recycle_home_appliances.png';
import recycleIndustrial from '../assets/images/recycle_industrial.png';
import processFrame from '../assets/images/process_frame.png';
import processCollect from '../assets/images/process_collect.png';
import iconRefurb from '../assets/images/icon_refurb.png';
import iconRepair from '../assets/images/icon_repair.png';
import iconUpcycle from '../assets/images/icon_upcycle.png';
import key1 from '../assets/images/key1.png';
import key2 from '../assets/images/key2.png';
import key3 from '../assets/images/key3.png';
import key4 from '../assets/images/key4.png';
import key5 from '../assets/images/key5.png';
import key6 from '../assets/images/key6.png';
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
import page2_bg from '../assets/images/page2_bg.png';

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
            <header className="what-we-do-hero-section py-4">
                <div className="container">
                    <div className="overflow-hidden position-relative" style={{ minHeight: '650px', borderRadius: '40px' }}>
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: `url(${page2_bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-10"></div> {/* Subtle overlay for text readability if needed */}
                        <div className="position-relative z-1 h-100 d-flex flex-column justify-content-center align-items-center text-center">
                            <h1 className="display-3 fw-bold text-white mb-0" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)', lineHeight: '1.2' }}>E-Waste<br />Recycling</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* Intro Quote Section */}
            <section className="bg-white section-padding">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center mb-4 gap-4">
                        <div className="me-2">
                            <img src={recycleIcon} alt="Recycle" style={{ height: '120px', width: 'auto' }} />
                        </div>
                        <div>
                            <h2 className="fw-bold mb-0 display-6 lh-sm text-dark">
                                Reimagining <span className="text-success">Waste</span>. Restoring <span className="text-success">Value</span>.<br />
                                Regenerating the <span className="text-success">Planet</span>.
                            </h2>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mb-3 mb-lg-5">
                        <div style={{ width: '400px', height: '1px', backgroundColor: '#e0e0e0' }}></div>
                    </div>

                    <div className="row justify-content-center position-relative">
                        <div className="col-lg-8 text-center position-relative">
                            <p className="text-muted mb-0" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>Electronic waste is one of the fastest-growing waste streams in the world — and one of the most dangerous when mishandled. Toxic materials, lost resources, and informal recycling practices threaten environmental health, public safety, and future resource security.</p>
                            <div className="position-absolute end-0 bottom-0 translate-middle-y d-none d-lg-block" style={{ right: '-60px' }}>
                                <img src={introSprout} alt="" style={{ width: '80px', height: 'auto', marginBottom: '-20px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Green Banner Info */}
            <section className="text-white section-padding text-center position-relative overflow-hidden" style={{ backgroundColor: '#5CB85C' }}>
                <div className="container position-relative z-1">
                    <h4 className="fw-normal mb-4">At <span className="fw-bold">Blue Planet E-Waste Solutions</span>, we transform the way e-waste is managed.</h4>
                    <p className="small opacity-90 mx-auto w-75" style={{ lineHeight: '1.8', textAlign: 'justify' }}>We provide scientifically engineered and fully certified recycling solutions that ensure safe processing, maximum material recovery, full traceability, and measurable sustainability impact. Our ecosystem helps enterprises, government agencies, institutions, and individuals reduce their environmental footprint while recovering value from discarded electronic assets.</p>
                </div>
            </section>

            {/* What is E-Waste Recycling? */}
            <section className="section-padding text-white" style={{ backgroundColor: '#003366' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-3 mb-lg-0">
                            <h2 className="fw-light mb-0 h3">What is</h2>
                            <h2 className="fw-bold display-4 mb-4">E-Waste Recycling?</h2>
                            <p className="opacity-90 mb-4 me-lg-4" style={{ lineHeight: '1.7', fontSize: '0.95rem', textAlign: 'justify' }}>E-waste recycling is the structured process of recovering usable components, extracting precious materials, upcycling resources, and safely treating hazardous elements from end-of-life electronic products. Instead of discarding equipment into landfills, recycling enables:</p>
                            <ul className="list-unstyled d-flex flex-column gap-3 opacity-100 mt-4">
                                <li className="d-flex align-items-start gap-3">
                                    <img src={bulletArrow} alt="" style={{ width: '20px', marginTop: '4px' }} />
                                    <span style={{ fontSize: '0.95rem' }}>Reduction in mining and resource extraction</span>
                                </li>
                                <li className="d-flex align-items-start gap-3">
                                    <img src={bulletArrow} alt="" style={{ width: '20px', marginTop: '4px' }} />
                                    <span style={{ fontSize: '0.95rem' }}>Conservation of metals, minerals, plastics and energy</span>
                                </li>
                                <li className="d-flex align-items-start gap-3">
                                    <img src={bulletArrow} alt="" style={{ width: '20px', marginTop: '4px' }} />
                                    <span style={{ fontSize: '0.95rem' }}>Prevention of environmental contamination</span>
                                </li>
                                <li className="d-flex align-items-start gap-3">
                                    <img src={bulletArrow} alt="" style={{ width: '20px', marginTop: '4px' }} />
                                    <span style={{ fontSize: '0.95rem' }}>Increased circularity and sustainable growth</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-7 ps-lg-5">
                            <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100 position-relative shadow-sm" style={{ borderRadius: '40px', minHeight: '400px' }}>
                                <img src={whatIsEwaste} className="img-fluid" alt="Recycling process illustration" style={{ maxHeight: '450px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Recycle */}
            <section className="section-padding">
                <div className="container text-center">
                    <h2 className="mb-2 display-5" style={{ fontWeight: '500' }}>What <span className="fw-bolder">We Recycle</span></h2>
                    <p className="text-muted mb-3 mb-lg-5" style={{ fontSize: '1.2rem', opacity: 0.6 }}>We provide comprehensive recycling for:</p>

                    <div className="row justify-content-center">
                        {/* IT Assets */}
                        <div className="col-md-4 mb-4 mb-md-0 position-relative">
                            <div className="h-100 p-3">
                                <div className="mb-4 d-flex justify-content-center" style={{ height: '120px' }}>
                                    <img src={recycleItAssets} className="h-100 object-fit-contain" alt="IT Assets" />
                                </div>
                                <h4 className="fw-bold mb-3">IT Assets</h4>
                                <p className="text-dark mb-0 lh-sm" style={{ maxWidth: '250px', margin: '0 auto', fontSize: '1.1rem' }}>laptops, desktops,<br />servers, tablets,<br />networking equipment</p>
                            </div>
                            {/* Custom Green Divider */}
                            <div className="d-none d-md-block position-absolute top-50 end-0 translate-middle-y" style={{ width: '2px', height: '80%', backgroundColor: '#b7e4c7' }}></div>
                        </div>
                        {/* Home Appliances */}
                        <div className="col-md-4 mb-4 mb-md-0 position-relative">
                            <div className="h-100 p-3">
                                <div className="mb-4 d-flex justify-content-center" style={{ height: '120px' }}>
                                    <img src={recycleHomeAppliances} className="h-100 object-fit-contain" alt="Home and Consumer Appliances" />
                                </div>
                                <h4 className="fw-bold mb-3">Home and Consumer<br />Appliances</h4>
                                <p className="text-dark mb-0 lh-sm" style={{ maxWidth: '250px', margin: '0 auto', fontSize: '1.1rem' }}>refrigerators, ACs,<br />washing machines</p>
                            </div>
                            {/* Custom Green Divider */}
                            <div className="d-none d-md-block position-absolute top-50 end-0 translate-middle-y" style={{ width: '2px', height: '80%', backgroundColor: '#b7e4c7' }}></div>
                        </div>
                        {/* Industrial */}
                        <div className="col-md-4">
                            <div className="h-100 p-3">
                                <div className="mb-4 d-flex justify-content-center" style={{ height: '120px' }}>
                                    <img src={recycleIndustrial} className="h-100 object-fit-contain" alt="Industrial Electronics" />
                                </div>
                                <h4 className="fw-bold mb-3">Industrial<br />Electronics</h4>
                                <p className="text-dark mb-0 lh-sm" style={{ maxWidth: '250px', margin: '0 auto', fontSize: '1.1rem' }}>PCB boards, industrial<br />controllers, machinery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Process Diagram Section */}
            <section className="section-padding bg-white pt-5">
                <div className="container position-relative d-flex justify-content-center align-items-center process-diagram-wrapper" style={{ minHeight: '900px' }}>

                    {/* Main Frame Image */}
                    <div className="position-relative process-frame-wrapper" style={{ width: '800px', height: '800px' }}>
                        <img src={processFrame} alt="Process Frame" className="w-100 h-100 object-fit-contain opacity-50" style={{ transform: 'scale(1.1)' }} />

                        {/* Center Text */}
                        <div className="position-absolute top-50 translate-middle text-start process-center-title" style={{ left: '35%' }}>
                            <h2 className="display-4 fw-bold mb-0 text-dark">Process</h2>
                        </div>

                        {/* Step 1: Collect (Top Left) */}
                        <div className="position-absolute text-center process-step process-step-1" style={{ top: '15%', left: '32%', width: '220px', transform: 'translate(-50%, -50%)' }}>
                            <p className="small text-muted mb-2 fw-medium lh-sm" style={{ fontSize: '0.8rem' }}>We collect e-waste from businesses, individuals, and organizations across India</p>
                            <div className="mb-1 d-flex justify-content-center">
                                <img src={processCollect} alt="Collect" style={{ width: '60px' }} />
                            </div>
                            <h6 className="fw-bold mt-1">COLLECT</h6>
                        </div>

                        {/* Step 2: Sort (Top Right) */}
                        <div className="position-absolute text-center process-step process-step-2" style={{ top: '25%', left: '60%', width: '220px', transform: 'translate(-50%, -50%)' }}>
                            <p className="small text-muted mb-2 fw-medium lh-sm" style={{ fontSize: '0.8rem' }}>We sort collected e-waste to identify reusable, recyclable, and hazardous materials</p>
                            <div className="mb-1 d-flex justify-content-center">
                                {/* Placeholder icon for Sort - reusing introSprout or a specific bin if available, currently generic */}
                                <div className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                                    <i className="bi bi-recycle fs-2 text-success"></i>
                                </div>
                            </div>
                            <h6 className="fw-bold mt-1">SORT</h6>
                        </div>

                        {/* Step 3: Refurbish (Right Middle) */}
                        <div className="position-absolute text-center process-step process-step-3" style={{ top: '45%', right: '10%', width: '240px', transform: 'translate(0, -50%)' }}>
                            <p className="small text-muted mb-2 fw-medium lh-sm" style={{ fontSize: '0.8rem', textAlign: 'left' }}>We refurbish devices to extend their lifespan & provide affordable alternatives to new products</p>
                            <div className="d-flex align-items-center gap-2">
                                <h6 className="fw-bold mb-0">REFURBISH</h6>
                                <img src={iconRefurb} alt="Refurbish" style={{ width: '40px' }} />
                            </div>
                        </div>

                        {/* Step 4: Parts Salvage (Bottom Right) */}
                        <div className="position-absolute text-start process-step process-step-4" style={{ top: '65%', right: '10%', width: '240px', transform: 'translate(0, -50%)' }}>
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <h6 className="fw-bold mb-0">PARTS SALVAGE</h6>
                                <img src={iconRepair} alt="Parts Salvage" style={{ width: '40px' }} />
                            </div>
                            <p className="small text-muted mb-0 fw-medium lh-sm" style={{ fontSize: '0.8rem' }}>We extract parts from assets which are beyond economic repair to support out of warranty service market</p>
                        </div>

                        {/* Step 5: Recycle (Bottom Middle) */}
                        <div className="position-absolute text-center process-step process-step-5" style={{ bottom: '15%', left: '60%', width: '220px', transform: 'translate(-50%, 0)' }}>
                            <div className="mb-2 d-flex justify-content-center">
                                <img src={recycleIcon} alt="Recycle" style={{ width: '50px' }} />
                            </div>
                            <h6 className="fw-bold mb-2">RECYCLE</h6>
                            <p className="small text-muted mb-0 fw-medium lh-sm" style={{ fontSize: '0.8rem' }}>We recycle non-refurbishable devices, responsibly extracting hazardous waste, metals and plastics</p>
                        </div>

                        {/* Step 6: Upcycle (Bottom Left) */}
                        <div className="position-absolute text-center process-step process-step-6" style={{ bottom: '15%', left: '32%', width: '240px', transform: 'translate(-50%, 0)' }}>
                            <div className="mb-2 d-flex justify-content-center">
                                <img src={iconUpcycle} alt="Upcycle" style={{ width: '50px' }} />
                            </div>
                            <h6 className="fw-bold mb-2">UPCYCLE</h6>
                            <p className="small text-muted mb-0 fw-medium lh-sm" style={{ fontSize: '0.8rem' }}>We upcycle salvaged materials after dismantling the end-of-life assets, returning them to the manufacturing process to create new products</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container">
                    <h2 className="text-center fw-bold mb-3 mb-lg-5">Key <span className="fw-bolder">Benefits</span></h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="bg-white rounded-4 h-100 shadow-sm overflow-hidden">
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={key1} className="w-100 h-100 object-fit-cover" alt="Environmental" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-2">Environmental Protection</h5>
                                    <p className="small text-muted mb-0" style={{ textAlign: 'justify' }}>Reduces landfill burden, prevents toxic leakage, and protects ecosystems.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white rounded-4 h-100 shadow-sm overflow-hidden">
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={key2} className="w-100 h-100 object-fit-cover" alt="Recovery" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-2">Research & Material Recovery</h5>
                                    <p className="small text-muted mb-0" style={{ textAlign: 'justify' }}>Turns discarded electronics into usable metals, plastics, and critical minerals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white rounded-4 h-100 shadow-sm overflow-hidden">
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={key3} className="w-100 h-100 object-fit-cover" alt="Security" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-2">Enterprise-grade Data Security</h5>
                                    <p className="small text-muted mb-0" style={{ textAlign: 'justify' }}>Certified destruction eliminates data and compliance risk.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white rounded-4 h-100 shadow-sm overflow-hidden">
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={key4} className="w-100 h-100 object-fit-cover" alt="Compliance" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-2">Regulatory Compliance</h5>
                                    <p className="small text-muted mb-0" style={{ textAlign: 'justify' }}>Meets EPA, CPCB, waste management, and CSR reporting requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white rounded-4 h-100 shadow-sm overflow-hidden">
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={key5} className="w-100 h-100 object-fit-cover" alt="Sustainability" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-2">Sustainability & Carbon Impact</h5>
                                    <p className="small text-muted mb-0" style={{ textAlign: 'justify' }}>Contributes to net-zero targets through waste reduction and carbon credit pathways.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white rounded-4 h-100 shadow-sm overflow-hidden">
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img src={plant1} className="w-100 h-100 object-fit-cover" alt="Traceability" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-2">Traceability of EPR Credits</h5>
                                    <p className="small text-muted mb-0" style={{ textAlign: 'justify' }}>Full digital tracking for EPR fulfillment and audits.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blue Planet Advantage Table */}
            <section className="section-padding position-relative overflow-hidden">
                <div className="position-absolute top-50 start-50 translate-middle w-100 h-100" style={{ backgroundImage: `url(${benefitBg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', zIndex: -1 }}></div>
                <div className="container position-relative z-1">
                    <h2 className="text-center fw-bold mb-3 mb-lg-5">Why Blue Planet <span className="fw-bolder">E-Waste Solutions</span></h2>

                    <div className="row g-4 justify-content-center">
                        {/* Blue Planet Advantage Card */}
                        <div className="col-lg-5">
                            <div className="h-100 rounded-4 overflow-hidden border shadow-sm">
                                <div className="p-4 text-center text-white" style={{ backgroundColor: '#003366' }}>
                                    <h4 className="fw-bold mb-0">Blue Planet Advantage</h4>
                                </div>
                                <div className="p-4 bg-white">
                                    <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue1} className="w-100" alt="Certified" /></div>
                                            <div className="fw-medium text-dark">Certified, compliant, world-class recycling</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue2} className="w-100" alt="Transparency" /></div>
                                            <div className="fw-medium text-dark">End-to-end transparency & traceability</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue3} className="w-100" alt="Efficiency" /></div>
                                            <div className="fw-medium text-dark">High-efficiency resource extraction</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue4} className="w-100" alt="Secure data" /></div>
                                            <div className="fw-medium text-dark">Secure data destruction</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue5} className="w-100" alt="Circular economy" /></div>
                                            <div className="fw-medium text-dark">Circular economy & carbon impact reporting</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* What It Means Card */}
                        <div className="col-lg-5">
                            <div className="h-100 rounded-4 overflow-hidden border shadow-sm">
                                <div className="p-4 text-center text-white" style={{ backgroundColor: '#5CB85C' }}>
                                    <h4 className="fw-bold mb-0">What It Means</h4>
                                </div>
                                <div className="p-4 bg-white">
                                    <ul className="list-unstyled d-flex flex-column gap-4 mb-0">
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={green1} className="w-100" alt="ISO" /></div>
                                            <div className="fw-medium text-dark">ISO 9001, ISO 14001, ISO 45001</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={green2} className="w-100" alt="Precious metal" /></div>
                                            <div className="fw-medium text-dark">Advanced recycling & precious metal recovery</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={green3} className="w-100" alt="Zero-risk" /></div>
                                            <div className="fw-medium text-dark">Zero-risk disposal for sensitive assets</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={green4} className="w-100" alt="Sustainability metrics" /></div>
                                            <div className="fw-medium text-dark">Sustainability metrics for ESG & board reporting</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding text-center">
                <div className="container">
                    <h3 className="fw-bold text-muted mb-2">Start your E-waste</h3>
                    <h2 className="fw-bold mb-4 display-6">Recycling, Refurbishment & IT Service Journey</h2>
                    <p className="text-muted small">Together, we can turn waste into opportunity and build a cleaner future.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-wrapper p-4">
                <div className="container-fluid bg-success text-white rounded-5 p-5 position-relative overflow-hidden footer-container">
                    <div className="row g-5">
                        {/* Left Column */}
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

                        {/* Middle Content */}
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

                        {/* Right Column */}
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
