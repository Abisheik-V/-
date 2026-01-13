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
import fullProcessDiagram from '../assets/images/process_diagram_full.png';
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
import tableBgWave from '../assets/images/table_bg_wave.png';
import navSearch from '../assets/images/nav_search.png';
import navMenu from '../assets/images/nav_menu.png';

import footerSocials from '../assets/images/footer_socials.png';
import footerNewsletterIcon from '../assets/images/footer_newsletter_icon.png';
import footerCallIcon from '../assets/images/footer_call_icon.png';

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
            <header className="what-we-do-hero-section py-2">
                <div className="container">
                    <div className="overflow-hidden position-relative" style={{ minHeight: '650px', borderRadius: '40px' }}>
                        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: `url(${page2_bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-10"></div> {/* Subtle overlay for text readability if needed */}
                        <div className="position-relative z-1 h-100 d-flex flex-column justify-content-center align-items-center text-center">
                            <h4 className="fw-bold text-white mb-0" style={{ fontSize: '2.5rem', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif", textShadow: '0 2px 20px rgba(0,0,0,0.5)', lineHeight: '1.2', marginTop: '330px', marginLeft: '-75px' }}>E-Waste<br />Recycling</h4>
                        </div>
                    </div>
                </div>
            </header>

            {/* Intro Quote Section */}
            <section className="bg-white section-padding pt-0 pb-0">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center mb-3 gap-5">
                        <div className="me-2">
                            <img src={recycleIcon} alt="Recycle" style={{ height: '180px', width: 'auto' }} />
                        </div>
                        <div>
                            <div className="text-start">
                                <h3 className="fw-bold mb-0 text-dark" style={{ fontSize: '2.5rem', lineHeight: '1.1', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>
                                    Reimagining <span style={{ color: '#5bd330ff' }}>Waste</span>. Restoring <span style={{ color: '#5bd330ff' }}>Value</span>.
                                </h3>
                                <h1 className="fw-bold mb-0 text-dark mt-1" style={{ fontSize: '4rem', lineHeight: '1.1', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>
                                    Regenerating the <span style={{ color: '#5bd330ff' }}>Planet</span>.
                                </h1>
                                <div className="mt-4" style={{ width: '80%', height: '2px', backgroundColor: '#e0e0e0' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center position-relative mt-3 pb-3">
                        <div className="col-lg-10 text-center position-relative">
                            <p className="text-secondary mb-0" style={{ lineHeight: '1.6', fontSize: '1.3rem', textAlign: 'center' }}>Electronic waste is one of the fastest-growing waste streams in the world — and one of the most dangerous when mishandled. Toxic materials, lost resources, and informal recycling practices threaten environmental health, public safety, and future resource security.</p>
                            <div className="position-absolute end-0 bottom-0 translate-middle-y d-none d-lg-block" style={{ right: '-40px', marginBottom: '-40px' }}>
                                <img src={introSprout} alt="" style={{ width: '100px', height: 'auto', marginRight: '-70px', marginBottom: '-30px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Green Banner Info */}
            <section className="text-white section-padding pt-3 text-center position-relative overflow-hidden" style={{ backgroundColor: '#5CB85C' }}>
                <div className="container position-relative z-1">
                    <h4 className="fw-normal mb-4" style={{ fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>At <span className="fw-bold" style={{ fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>Blue Planet E-Waste Solutions</span>, we transform the way e-waste is managed.</h4>
                    <p className="opacity-90 mx-auto" style={{ lineHeight: '1.8', textAlign: 'center', fontSize: '1.1rem', maxWidth: '900px', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>We provide scientifically engineered and fully certified recycling solutions that ensure safe processing, maximum material recovery, full traceability, and measurable sustainability impact. Our ecosystem helps enterprises, government agencies, institutions, and individuals reduce their environmental footprint while recovering value from discarded electronic assets.</p>
                </div>
            </section>

            {/* What is E-Waste Recycling? */}
            <section className="section-padding text-white position-relative overflow-hidden" style={{ backgroundColor: '#003366' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-3 mb-lg-0 text-start">
                            <h2 className="mb-4 text-white">
                                <span className="d-block fw-normal" style={{ fontSize: '2.5rem', lineHeight: '1.2', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>What is</span>
                                <span className="d-block fw-bold" style={{ fontSize: '2.6rem', lineHeight: '1', whiteSpace: 'nowrap', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>E-Waste Recycling?</span>
                            </h2>
                            <p className="opacity-90 mb-4" style={{ lineHeight: '1.5', fontSize: '1.2rem', textAlign: 'left', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>
                                E-waste recycling is the structured process<br />
                                of recovering usable components, extracting<br />
                                precious materials, upcycling resources, and<br />
                                safely treating hazardous elements from<br />
                                end-of-life electronic products. Instead of<br />
                                discarding equipment into landfills, recycling<br />
                                enables:
                            </p>
                            <ul className="list-unstyled d-flex flex-column gap-3 opacity-100 mt-3">
                                <li className="d-flex align-items-start gap-3">
                                    <img src={bulletArrow} alt="" style={{ width: '22px', marginTop: '6px' }} />
                                    <span style={{ fontSize: '1.2rem', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Reduction in mining and resource extraction</span>
                                </li>
                                <li className="d-flex align-items-start gap-3">
                                    <img src={bulletArrow} alt="" style={{ width: '22px', marginTop: '6px' }} />
                                    <span style={{ fontSize: '1.2rem', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Conservation of metals, minerals, plastics<br />and energy</span>
                                </li>
                                <li className="d-flex align-items-start gap-3">
                                    <img src={bulletArrow} alt="" style={{ width: '22px', marginTop: '6px' }} />
                                    <span style={{ fontSize: '1.2rem', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Prevention of environmental contamination</span>
                                </li>
                                <li className="d-flex align-items-start gap-3">
                                    <img src={bulletArrow} alt="" style={{ width: '22px', marginTop: '6px' }} />
                                    <span style={{ fontSize: '1.2rem', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Increased circularity and sustainable growth</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-7 ps-lg-5 position-relative">
                            <div className="h-100 position-relative" style={{ minHeight: '400px' }}>
                                <div className="bg-white position-absolute top-0 start-0 h-100 shadow-sm" style={{ width: '200%', borderRadius: '50px 0 0 50px' }}></div>
                                <div className="position-relative z-1 h-100 d-flex align-items-center justify-content-center p-4">
                                    <img src={whatIsEwaste} className="img-fluid" alt="Recycling process illustration" style={{ maxHeight: '700px', height: '350px', marginRight: '-100px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Recycle */}
            <section className="section-padding pb-0 pl-1 pr-1">
                <div className="container text-center">
                    <h2 className="mb-2" style={{ fontSize: '3rem', color: '#000' }}>
                        <span className="fw-normal" style={{ fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>What</span> <span style={{ fontWeight: '900', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>We</span> <span className="fw-bold" style={{ fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>Recycle</span>
                    </h2>
                    <p className="text-secondary mb-5" style={{ fontSize: '1.3rem', fontWeight: '400', opacity: '0.7', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>We provide comprehensive recycling for:</p>

                    <div className="row justify-content-center position-relative">
                        {/* IT Assets */}
                        <div className="col-lg-4 mb-5 mb-lg-0 position-relative">
                            <div className="h-100 px-3">
                                <div className="mb-4 d-flex justify-content-center" style={{ height: '140px' }}>
                                    <img src={recycleItAssets} className="h-100 object-fit-contain" alt="IT Assets" />
                                </div>
                                <h4 className="fw-bold mb-3" style={{ fontSize: '1.5rem', color: '#000', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>IT Assets</h4>
                                <p className="text-dark mb-0 lh-base" style={{ maxWidth: '280px', margin: '0 auto', fontSize: '1.15rem', fontWeight: '500', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>laptops, desktops,<br />servers, tablets,<br />networking equipment</p>
                            </div>
                            {/* Vertical Divider */}
                            <div className="d-none d-lg-block position-absolute" style={{ top: '10%', right: '0', width: '1px', height: '100%', backgroundColor: '#dee2e6' }}></div>
                        </div>

                        {/* Home Appliances */}
                        <div className="col-lg-4 mb-5 mb-lg-0 position-relative">
                            <div className="h-100 px-3">
                                <div className="mb-4 d-flex justify-content-center" style={{ height: '140px' }}>
                                    <img src={recycleHomeAppliances} className="h-100 object-fit-contain" alt="Home and Consumer Appliances" />
                                </div>
                                <h4 className="fw-bold mb-3" style={{ fontSize: '1.5rem', color: '#000', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>Home and Consumer<br />Appliances</h4>
                                <p className="text-dark mb-0 lh-base" style={{ maxWidth: '280px', margin: '0 auto', fontSize: '1.15rem', fontWeight: '500', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>refrigerators, ACs,<br />washing machines</p>
                            </div>
                            {/* Vertical Divider */}
                            <div className="d-none d-lg-block position-absolute" style={{ top: '10%', right: '0', width: '1px', height: '100%', backgroundColor: '#dee2e6' }}></div>
                        </div>

                        {/* Industrial */}
                        <div className="col-lg-4">
                            <div className="h-100 px-3">
                                <div className="mb-4 d-flex justify-content-center" style={{ height: '140px' }}>
                                    <img src={recycleIndustrial} className="h-100 object-fit-contain" alt="Industrial Electronics" />
                                </div>
                                <h4 className="fw-bold mb-3" style={{ fontSize: '1.5rem', color: '#000', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>Industrial<br />Electronics</h4>
                                <p className="text-dark mb-0 lh-base" style={{ maxWidth: '280px', margin: '0 auto', fontSize: '1.15rem', fontWeight: '500', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>PCB boards, industrial<br />controllers, machinery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Process Diagram Section */}
            <section className="section-padding pt-5 pb-3 bg-white">
                <div className="container d-flex justify-content-center align-items-center">
                    <img src={fullProcessDiagram} alt="E-waste Process Flow" className="img-fluid" style={{ maxWidth: '1000px', width: '100%' }} />
                </div>
            </section>

            <section className="section-padding pt-0 pb-4 bg-white">
                <div className="container" style={{ fontFamily: '"Outfit", sans-serif' }}>
                    <h2 className="text-center mb-5" style={{ fontSize: '2.5rem', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Key <span className="fw-bold" style={{ fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>Benefits</span></h2>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex flex-column h-100">
                                <div className="rounded-4 overflow-hidden mb-3" style={{ height: '240px' }}>
                                    <img src={key1} className="w-100 h-100 object-fit-cover" alt="Environmental" />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark" style={{ textAlign: 'left', fontSize: '1.25rem', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>Environmental<br />Protection</h5>
                                    <p className="text-dark mb-0" style={{ lineHeight: '1.5', fontSize: '1rem', textAlign: 'left', fontWeight: '400', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Reduces landfill burden,<br />prevents hazardous leakage,<br />and protects ecosystems.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex flex-column h-100">
                                <div className="rounded-4 overflow-hidden mb-3" style={{ height: '240px' }}>
                                    <img src={key2} className="w-100 h-100 object-fit-cover" alt="Recovery" />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark" style={{ textAlign: 'left', fontSize: '1.25rem', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>Resource & Material<br />Recovery</h5>
                                    <p className="text-dark mb-0" style={{ lineHeight: '1.5', fontSize: '1rem', textAlign: 'left', fontWeight: '400', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Turns discarded electronics<br />into reusable metals, plastics,<br />and critical minerals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex flex-column h-100">
                                <div className="rounded-4 overflow-hidden mb-3" style={{ height: '240px' }}>
                                    <img src={key3} className="w-100 h-100 object-fit-cover" alt="Security" />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark" style={{ textAlign: 'left', fontSize: '1.25rem', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>Enterprise-grade Data<br />Security</h5>
                                    <p className="text-dark mb-0" style={{ lineHeight: '1.5', fontSize: '1rem', textAlign: 'left', fontWeight: '400', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Certified destruction eliminates<br />data and compliance risk.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex flex-column h-100">
                                <div className="rounded-4 overflow-hidden mb-3" style={{ height: '240px' }}>
                                    <img src={key4} className="w-100 h-100 object-fit-cover" alt="Compliance" />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark" style={{ textAlign: 'left', fontSize: '1.25rem', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>Regulatory<br />Compliance</h5>
                                    <p className="text-dark mb-0" style={{ lineHeight: '1.5', fontSize: '1rem', textAlign: 'left', fontWeight: '400', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Meets EPR, ESG, waste<br />management, and CSR<br />reporting requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex flex-column h-100">
                                <div className="rounded-4 overflow-hidden mb-3" style={{ height: '240px' }}>
                                    <img src={key5} className="w-100 h-100 object-fit-cover" alt="Sustainability" />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark" style={{ textAlign: 'left', fontSize: '1.25rem', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>Sustainability & Carbon<br />Impact</h5>
                                    <p className="text-dark mb-0" style={{ lineHeight: '1.5', fontSize: '1rem', textAlign: 'left', fontWeight: '400', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Contributes to net-zero targets<br />through waste reduction and<br />carbon credit pathways.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="d-flex flex-column h-100">
                                <div className="rounded-4 overflow-hidden mb-3" style={{ height: '240px' }}>
                                    <img src={plant1} className="w-100 h-100 object-fit-cover" alt="Traceability" />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2 text-dark" style={{ textAlign: 'left', fontSize: '1.25rem', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>Traceability of<br />EPR Credits</h5>
                                    <p className="text-dark mb-0" style={{ lineHeight: '1.5', fontSize: '1rem', textAlign: 'left', fontWeight: '400', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Certified destruction eliminates<br />data and compliance risk.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blue Planet Advantage Table */}
            <section className="section-padding pt-0 pb-4 bg-white position-relative">
                <img src={tableBgWave} alt="" className="position-absolute w-100" style={{ top: '55%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 0, height: 'auto' }} />
                <div className="container position-relative z-1" style={{ fontFamily: '"Outfit", sans-serif' }}>
                    <h2 className="text-center mb-5" style={{ fontSize: '2.5rem' }}>
                        <span className="fw-normal" style={{ fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Why Blue Planet</span> <span className="fw-bold" style={{ fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>E-Waste Solutions</span>
                    </h2>

                    <div className="row justify-content-center g-5">
                        {/* Blue Planet Advantage Card */}
                        <div className="col-lg-4 col-md-6">
                            <div className="h-100 overflow-hidden border border-2 border-dark" style={{ borderRadius: '40px', borderColor: '#003366' }}>
                                <div className="p-4 text-center text-white position-relative" style={{ backgroundColor: '#003366' }}>
                                    <h4 className="fw-bold mb-0 fs-4" style={{ fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>Blue Planet Advantage</h4>
                                </div>
                                <div className="p-4 bg-white h-100">
                                    <ul className="list-unstyled d-flex flex-column gap-4 mb-0 pt-2">
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue1} className="w-100" alt="Certified" /></div>
                                            <div className="fw-medium text-dark text-start lh-sm fs-5" style={{ fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Certified, compliant,<br />world-class recycling</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue2} className="w-100" alt="Transparency" /></div>
                                            <div className="fw-medium text-dark text-start lh-sm fs-5" style={{ fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>End-to-end<br />transparency &<br />traceability</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue3} className="w-100" alt="Efficiency" /></div>
                                            <div className="fw-medium text-dark text-start lh-sm fs-5" style={{ fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>High-efficiency<br />resource extraction</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue4} className="w-100" alt="Secure data" /></div>
                                            <div className="fw-medium text-dark text-start lh-sm fs-5" style={{ fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Secure data<br />destruction</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={blue5} className="w-100" alt="Circular economy" /></div>
                                            <div className="fw-medium text-dark text-start lh-sm fs-5" style={{ fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Circular economy &<br />carbon impact<br />reporting</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* What It Means Card */}
                        <div className="col-lg-4 col-md-6">
                            <div className="h-100 overflow-hidden border border-2 border-dark" style={{ borderRadius: '40px', borderColor: '#58a065' }}>
                                <div className="p-4 text-center text-white position-relative" style={{ backgroundColor: '#58a065' }}>
                                    <h4 className="fw-bold mb-0 fs-4" style={{ fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>What It Means</h4>
                                </div>
                                <div className="p-4 bg-white h-100">
                                    <ul className="list-unstyled d-flex flex-column gap-4 mb-0 pt-2">
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={green1} className="w-100" alt="ISO" /></div>
                                            <div className="fw-medium text-dark text-start lh-sm fs-5" style={{ fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>ISO 9001, ISO 14001,<br />ISO 45001</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={green2} className="w-100" alt="Precious metal" /></div>
                                            <div className="fw-medium text-dark text-start lh-sm fs-5" style={{ fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Advanced recycling &<br />precious metal<br />recovery</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={green3} className="w-100" alt="Zero-risk" /></div>
                                            <div className="fw-medium text-dark text-start lh-sm fs-5" style={{ fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Zero-risk disposal for<br />sensitive assets</div>
                                        </li>
                                        <li className="d-flex align-items-center gap-3">
                                            <div style={{ width: '50px', flexShrink: 0 }}><img src={green4} className="w-100" alt="Sustainability metrics" /></div>
                                            <div className="fw-medium text-dark text-start lh-sm fs-5" style={{ fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Sustainability metrics<br />for ESG & board<br />reporting</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding pt-4 pb-0 text-center">
                <div className="container" style={{ fontFamily: '"Outfit", sans-serif' }}>
                    <h3 className="fw-normal text-dark mb-0" style={{ fontSize: '2.5rem', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Start your E-waste</h3>
                    <h2 className="fw-bold text-dark mb-3" style={{ fontSize: '2.5rem', fontFamily: "'RalewayW', 'Segoe UI', Arial, sans-serif" }}>Recycling, Refurbishment & IT Service Journey</h2>
                    <p className="text-secondary" style={{ fontSize: '1.2rem', opacity: '0.8', fontFamily: "'RalewayW-Paragraph', 'Segoe UI', Arial, sans-serif" }}>Together, we can turn waste into opportunity and build a cleaner future.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-wrapper p-4">
                <div className="container-fluid bg-success text-white rounded-5 p-5 position-relative overflow-hidden footer-container">
                    <div className="row g-5 text-start">
                        {/* Left Column */}
                        <div className="col-lg-4 pe-lg-5 border-end border-white border-opacity-25">
                            <img src={placeHolder} style={{ width: '220px', height: 'auto' }} alt="BluePlanet" className="mb-4" />
                            <h2 className="fw-bold mb-3">Turning Waste to<br />Treasure</h2>
                            <p className="text-white opacity-75 mb-5 lh-base" style={{ fontSize: '0.95rem' }}>Blue Planet E-Waste Solutions is a leading integrated technology-driven platform for responsible e-waste recycling, refurbishment, and resource recovery. We transform discarded electronics into valuable materials through ethical, compliant, and circular economy practices.</p>
                            <div className="d-flex gap-3 pt-0">
                                <img src={footerSocials} alt="Social Media" style={{ height: '30px', width: 'auto' }} />
                            </div>
                        </div>

                        {/* Middle Content */}
                        <div className="col-lg-5 d-flex flex-column ps-lg-5">
                            <div className="row mb-5">
                                <div className="col-sm-6">
                                    <h4 className="fw-bold mb-4">About</h4>
                                    <ul className="list-unstyled footer-links d-flex flex-column gap-1">
                                        <li><Link to="/about" className="text-white-50 text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short fs-5 fw-bold text-white"></i>About</Link></li>
                                        <li><Link to="/who-we-are" className="text-white-50 text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short fs-5 fw-bold text-white"></i>Who we are</Link></li>
                                        <li><Link to="/what-we-do" className="text-white-50 text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short fs-5 fw-bold text-white"></i>What we do</Link></li>
                                        <li><Link to="/impact" className="text-white-50 text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short fs-5 fw-bold text-white"></i>Impact</Link></li>
                                        <li><Link to="/contact-us" className="text-white-50 text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short fs-5 fw-bold text-white"></i>Contact us</Link></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <h4 className="fw-bold mb-4">Services</h4>
                                    <ul className="list-unstyled footer-links d-flex flex-column gap-1">
                                        <li><Link to="/e-waste-recycling" className="text-white-50 text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short fs-5 fw-bold text-white"></i>E-Waste Recycling</Link></li>
                                        <li><Link to="/refurbishment" className="text-white-50 text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short fs-5 fw-bold text-white"></i>Refurbishment</Link></li>
                                        <li><Link to="/precious-metals" className="text-white-50 text-decoration-none d-flex align-items-center gap-2"><i className="bi bi-arrow-right-short fs-5 fw-bold text-white"></i>Precious Metals Recovery</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="newsletter-box mt-auto">
                                <h3 className="fw-normal mb-4">Newsletters</h3>
                                <div className="position-relative w-100">
                                    <img src={footerNewsletterIcon} className="position-absolute top-50 translate-middle-y ms-4" style={{ zIndex: 5, width: '24px', height: 'auto' }} alt="Newsletter" />
                                    <input type="email" className="form-control rounded-pill border-0 py-3 ps-5 pe-5 custom-newsletter-input" placeholder="Email Address" style={{ paddingLeft: '3.5rem !important' }} />
                                    <button className="btn rounded-pill position-absolute end-0 top-50 translate-middle-y me-2 px-4 py-2 text-white shadow-none" style={{ backgroundColor: '#000', fontSize: '0.9rem' }}>Submit</button>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-lg-3 ps-lg-4">
                            <h6 className="fw-bold mb-3 text-white">Corporate Office</h6>
                            <p className="text-white-50 opacity-75 mb-4 lh-base" style={{ fontSize: '0.9rem' }}>202, 2nd floor, SAS Tower<br />Sector 38, Gurugram,<br />Haryana 122001</p>

                            <h6 className="fw-bold mb-3 text-white">Recycling Facility @ Binola</h6>
                            <p className="text-white-50 opacity-75 mb-4 lh-base" style={{ fontSize: '0.9rem' }}>Khewat No. 654/617 Min,<br />Khata No. 781, Rect No. 125,<br />Kill Binola Industrial Area<br />Main road, Binola Industrial<br />Area, Gurugram - 122413,<br />Haryana, India</p>

                            <h5 className="fw-bold mb-2">Call Us</h5>
                            <div className="d-flex align-items-center gap-2">
                                <img src={footerCallIcon} alt="Call Us" style={{ width: '24px', height: 'auto' }} />
                                <span className="fw-bold fs-5">18003090950</span>
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
