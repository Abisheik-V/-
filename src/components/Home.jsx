import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';
import heroBg from '../assets/images/hero_bg.png';
import footerNewsletterIcon from '../assets/images/footer_newsletter_icon.png';
import footerCallIcon from '../assets/images/footer_call_icon.png';
import service1 from '../assets/images/service_1.png';
import service2 from '../assets/images/service_2.png';
import service3 from '../assets/images/service_3.png';
import service4 from '../assets/images/service_4.png';
import why1 from '../assets/images/why_1.png';
import why2 from '../assets/images/why_2.png';
import why3 from '../assets/images/why_3.png';
import why4 from '../assets/images/why_4.png';
import drive2 from '../assets/images/drive_2.png';
import drive3 from '../assets/images/drive_3.png';
import awareness1 from '../assets/images/awareness_1.png';
import plant1 from '../assets/images/plant_1.png';
import plant2 from '../assets/images/plant_2.png';
import plant3 from '../assets/images/plant_3.png';
import plant4 from '../assets/images/plant_4.png';
import plant5 from '../assets/images/plant_5.png';
import plant6 from '../assets/images/plant_6.png';
import placeHolder from '../assets/images/logo_placeholder.png';
import whoWeAreBg from '../assets/images/who_we_are_bg.png';
import whoWeAreDiagramV2 from '../assets/images/who_we_are_diagram_v2.png';
import iconRefurb from '../assets/images/icon_refurb.png';
import iconprecious from '../assets/images/icon_precious.png';
import iconcarbon from '../assets/images/icon_carbon.png';
import iconrepair from '../assets/images/icon_repair.png';
import iconupcycle from '../assets/images/icon_upcycle.png';
import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';
import client3 from '../assets/images/client3.png';
import client4 from '../assets/images/client4.png';
import client5 from '../assets/images/client5.png';
import navSearch from '../assets/images/nav_search.png';
import navMenu from '../assets/images/nav_menu.png';
import mediaPress from '../assets/images/media_press.png';
import mediaPodcast from '../assets/images/media_podcast.png';
import mediaFeatured from '../assets/images/media_featured.png';
import footerSocials from '../assets/images/footer_socials.png';

const Home = () => {
    const [activeVideo, setActiveVideo] = useState(null);
    const [isFastScroll, setIsFastScroll] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="home-container">
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
            <section className="hero-wrapper pb-3 px-3">
                <div className="container hero-rounded-container position-relative overflow-visible text-white d-flex align-items-center bg-dark" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '650px', borderRadius: '40px' }}>

                    <div className="row w-100 position-relative z-2 ps-lg-4 align-items-center">
                        <div className="col-lg-7">
                            <h1 className="fw-bold mb-4 lh-sm text-start" style={{ fontSize: '3rem', marginTop: '-190px', marginLeft: '100px' }}>Leading the Charge<br />in Sustainable<br />E-Waste Solutions</h1>
                            <button className="btn btn-light rounded-4 px-5 py-3 text-dark mt-4 hero-demo-btn" style={{ fontSize: '1.25rem', marginLeft: '-160px' }}>Request a Demo</button>
                        </div>

                        {/* Visual marker "Hidden Materials" */}
                        <div className="col-lg-5 d-none d-lg-block position-relative" style={{ height: '300px' }}>
                            {/* Simulating the pointer in the image */}
                            <div className="position-absolute" style={{ right: '25%', top: '40%' }}>
                                <div className="d-flex align-items-center text-white small">
                                    <div className="border border-white p-2 rounded bg-black bg-opacity-75" style={{ fontSize: '0.7rem' }}>Hidden Materials</div>
                                    <div className="border-top border-white border-2" style={{ width: '40px' }}></div>
                                    <div className="border border-white border-2 rounded-circle bg-white" style={{ width: '10px', height: '10px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Stats Cards */}
                    <div className="container position-absolute start-50 top-100 translate-middle hero-stats-container" style={{ zIndex: 10 }}>
                        <div className="row g-4 justify-content-center px-lg-5">
                            <div className="col-lg-3 col-md-6">
                                <div className="bg-white text-center p-3 rounded-4 shadow-lg h-100" style={{ borderRadius: '30px' }}>
                                    <h2 className="fw-bold mb-2" style={{ color: '#5c9c44' }}>15+</h2>
                                    <p className="fw-bold text-secondary lh-sm mb-0">Metal Variant<br />Recovery</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="bg-white text-center p-3 rounded-4 shadow-lg h-100" style={{ borderRadius: '30px' }}>
                                    <h2 className="fw-bold mb-2" style={{ color: '#5c9c44' }}>40,000 MT</h2>
                                    <p className="fw-bold text-secondary lh-sm mb-0">Scalable Landfill<br />to Recycling</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="bg-white text-center p-3 rounded-4 shadow-lg h-100" style={{ borderRadius: '30px' }}>
                                    <h2 className="fw-bold mb-2" style={{ color: '#5c9c44' }}>120 MT</h2>
                                    <p className="fw-bold text-secondary lh-sm mb-0">Hazardous Waste<br />Disposal</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="bg-white text-center p-3 rounded-4 shadow-lg h-100" style={{ borderRadius: '30px' }}>
                                    <h2 className="fw-bold mb-2" style={{ color: '#5c9c44' }}>100%</h2>
                                    <p className="fw-bold text-secondary lh-sm mb-0">Environment<br />Protection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spacer for the overlapping cards */}
            <div style={{ height: '60px' }} className="d-none d-md-block"></div>
            {/* Mobile spacer removed */}

            {/* Who We Are */}
            <section className="section-padding pb-3 text-center overflow-hidden" id="who-we-are">
                <div className="container">
                    <h1 className="fw-bold mb-2 display-5 text-dark">Who We Are</h1>
                    <p className="text-secondary fs-3 fw-light mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>Leading Integrated Electronic Waste Management Company</p>

                    <div className="d-flex justify-content-center">
                        <img src={whoWeAreDiagramV2} alt="Who We Are Diagram" className="img-fluid" style={{ maxWidth: '1000px', width: '100%' }} />
                    </div>
                </div>
            </section>

            {/* Service Highlights */}
            <section className="section-padding pt-0 pb-4" id="services">
                <div className="container">
                    <div className="text-center mb-3">
                        <h2 className="fw-bold display-6 mb-2">Service Highlights</h2>
                        <p className="text-muted fs-5 mb-0">Try variety of benefits when using our Service</p>
                    </div>

                    <div className="row text-center mb-4 justify-content-center">
                        <div className="col-lg-2 col-md-4 col-6 mb-4">
                            <div className="service-icon-box mb-2">
                                <img src={iconRefurb} alt="" className="img-fluid" style={{ height: 'auto', maxWidth: '100%', maxHeight: '60px', width: 'auto' }} />
                            </div>
                            <h6 className="fw-bold">Refurbishment and<br />Recycling</h6>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 mb-4">
                            <div className="service-icon-box mb-2">
                                <img src={iconrepair} alt="" className="img-fluid" style={{ height: 'auto', maxWidth: '100%', maxHeight: '60px', width: 'auto' }} />
                            </div>
                            <h6 className="fw-bold">Repair as a<br />Service</h6>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 mb-4">
                            <div className="service-icon-box mb-2">
                                <img src={iconprecious} alt="" className="img-fluid" style={{ height: 'auto', maxWidth: '100%', maxHeight: '60px', width: 'auto' }} />
                            </div>
                            <h6 className="fw-bold">Precious Metals<br />Recovery</h6>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 mb-4">
                            <div className="service-icon-box mb-2">
                                <img src={iconcarbon} alt="" className="img-fluid" style={{ height: 'auto', maxWidth: '100%', maxHeight: '60px', width: 'auto' }} />
                            </div>
                            <h6 className="fw-bold">Carbon<br />Credits</h6>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 mb-4">
                            <div className="service-icon-box mb-2">
                                <img src={iconupcycle} alt="" className="img-fluid" style={{ height: 'auto', maxWidth: '100%', maxHeight: '60px', width: 'auto' }} />
                            </div>
                            <h6 className="fw-bold">Upcycling</h6>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="service-img-card rounded-4 overflow-hidden position-relative">
                                <img src={service1} className="w-100 object-fit-cover" height="300" alt="Service 1" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-img-card rounded-4 overflow-hidden position-relative">
                                <img src={service2} className="w-100 object-fit-cover" height="300" alt="Service 2" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-img-card rounded-4 overflow-hidden position-relative">
                                <img src={service3} className="w-100 object-fit-cover" height="300" alt="Service 3" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="service-img-card rounded-4 overflow-hidden position-relative">
                                <img src={service4} className="w-100 object-fit-cover" height="300" alt="Service 4" />
                                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding pt-0">
                <div className="container">
                    <h2 id="why-choose-us" className="mb-3 text-center" style={{ fontSize: '3.2rem' }}>Why Choose <span className="fw-bold">Blue Planet E-Waste Solutions?</span></h2>
                    <h1 className="text-muted mb-5 text-center w-100 mx-auto" style={{ fontSize: '1.5rem' }}>At Blue Planet, we are committed to leading the transition towards a sustainable future through:</h1>

                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6">
                            <div className="choice-card rounded-5 shadow-sm hover-shadow h-100 bg-white text-start overflow-hidden">
                                <div className="mb-0">
                                    <img src={why1} className="w-100 object-fit-cover" height="250" alt="Circular Economy Approach" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-1">Circular Economy Approach</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="choice-card rounded-5 shadow-sm hover-shadow h-100 bg-white text-start overflow-hidden">
                                <div className="mb-0">
                                    <img src={why2} className="w-100 object-fit-cover" height="250" alt="Compliance and Transparency" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-1">Compliance and Transparency</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="choice-card rounded-5 shadow-sm hover-shadow h-100 bg-white text-start overflow-hidden">
                                <div className="mb-0">
                                    <img src={why3} className="w-100 object-fit-cover" height="250" alt="Traceability" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-1">Traceability</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="choice-card rounded-5 shadow-sm hover-shadow h-100 bg-white text-start overflow-hidden">
                                <div className="mb-0">
                                    <img src={why4} className="w-100 object-fit-cover" height="250" alt="Secure and Ethical Solutions" />
                                </div>
                                <div className="p-4">
                                    <h5 className="fw-bold mb-1">Secure and Ethical Solutions</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awareness Drive */}
            <section className="section-padding bg-cream" style={{ backgroundColor: '#f9f7f0' }}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="row g-4">
                                {/* Column 1 */}
                                <div className="col-6 d-flex flex-column gap-4">
                                    <div className="overflow-hidden rounded-4 shadow-sm" style={{ height: '220px' }}>
                                        <img src={awareness1} className="img-fluid w-100 h-100 object-fit-cover" alt="Recycle Sign" />
                                    </div>
                                    <div className="overflow-hidden rounded-4 shadow-sm" style={{ height: '300px' }}>
                                        <img src={drive2} className="img-fluid w-100 h-100 object-fit-cover" alt="Event Booth" />
                                    </div>
                                </div>
                                {/* Column 2 */}
                                <div className="col-6 d-flex flex-column gap-4">
                                    <div className="overflow-hidden rounded-4 shadow-sm" style={{ height: '300px' }}>
                                        <img src={drive3} className="img-fluid w-100 h-100 object-fit-cover" alt="Award Handover" />
                                    </div>
                                    <div className="rounded-4 p-4 d-flex flex-column justify-content-center align-items-center text-center text-white shadow-sm" style={{ height: '220px', backgroundColor: '#5c9c44' }}>
                                        <h2 className="fw-bold display-4 mb-2">10000k</h2>
                                        <p className="small lh-sm mb-0">Kids and families now have access to technology because of our joint efforts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5">
                            <h2 className="display-5 mb-3" style={{ fontWeight: '500', color: '#000', textAlign: 'left' }}>
                                Join us in making<br />
                                the world a <span className="fw-bold">better</span><br />
                                <span className="fw-bold">place</span>
                            </h2>
                            <div className="bg-secondary mb-4 opacity-50" style={{ width: '250px', height: '3px' }}></div>

                            <h4 className="awareness-title mb-3" style={{ textAlign: 'left' }}>E-Waste Awareness Drive</h4>

                            <p className="awareness-text lh-base" style={{ textAlign: 'left' }}>
                                The Zero Waste Day E-Waste Drive at Prestige Lakeside Habitat, jointly led by Flipkart Reset and Blue Planet, enabled residents to responsibly dispose of their unused electronics while raising awareness about sustainable recycling. The initiative received an encouraging response and reinforced the importance of community participation in reducing e-waste.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="section-padding">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <h2 className="display-4 text-dark" style={{ fontWeight: '600', color: '#000', fontFamily: "'RalewayW', \"Segoe UI\", Arial, sans-serif" }}>Discover the<br />eSmart way</h2>
                        </div>
                        <div className="col-lg-7">
                            <div className="d-flex align-items-center gap-4">
                                <button className="btn p-0 border-0 bg-transparent" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                                    <i className="bi bi-chevron-left text-dark" style={{ fontSize: '3rem', WebkitTextStroke: '2px black' }}></i>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <div id="testimonialCarousel" className="carousel slide flex-grow-1" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active" data-bs-interval="4000">
                                            <div className="testimonial-content text-center">
                                                <p className="fs-5 text-dark lh-base mb-4" style={{ fontFamily: "'RalewayW-Paragraph', \"Segoe UI\", Arial, sans-serif" }}>"Blue Planet’s solutions have been an integral part of our sustainability strategy. Their transparency and commitment to ethical recycling ensure that we stay compliant with global e-waste regulations."</p>
                                                <h6 className="fw-bold text-dark mb-0">— Client Name 1, Position, Company</h6>
                                            </div>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="4000">
                                            <div className="testimonial-content text-center">
                                                <p className="fs-5 text-dark lh-base mb-4" style={{ fontFamily: "'RalewayW-Paragraph', \"Segoe UI\", Arial, sans-serif" }}>"Blue Planet’s solutions have been an integral part of our sustainability strategy. Their transparency and commitment to ethical recycling ensure that we stay compliant with global e-waste regulations."</p>
                                                <h6 className="fw-bold text-dark mb-0">— Client Name 2, Position, Company</h6>
                                            </div>
                                        </div>
                                        <div className="carousel-item" data-bs-interval="4000">
                                            <div className="testimonial-content text-center">
                                                <p className="fs-5 text-dark lh-base mb-4" style={{ fontFamily: "'RalewayW-Paragraph', \"Segoe UI\", Arial, sans-serif" }}>"Blue Planet’s solutions have been an integral part of our sustainability strategy. Their transparency and commitment to ethical recycling ensure that we stay compliant with global e-waste regulations."</p>
                                                <h6 className="fw-bold text-dark mb-0">— Client Name 3, Position, Company</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="btn p-0 border-0 bg-transparent" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                                    <i className="bi bi-chevron-right text-dark" style={{ fontSize: '3rem', WebkitTextStroke: '2px black' }}></i>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Glimpses */}
            <section className="section-padding pt-0">
                <div className="container text-center">
                    <h3 className="fw-normal text-dark mb-1">Glimpses from</h3>
                    <h2 className="display-5 fw-bold text-dark mb-3">Our Plant & Facilities</h2>
                    <p className="text-secondary fs-4 fw-light mb-3">Perfect Technology For The Sustainable Processes</p>

                    <div className="row g-4 row-cols-1 row-cols-md-3">
                        <div className="col">
                            <div className="overflow-hidden rounded-4">
                                <img src={plant1} className="img-fluid w-100" style={{ height: '300px', objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="overflow-hidden rounded-4">
                                <img src={plant2} className="img-fluid w-100" style={{ height: '300px', objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="overflow-hidden rounded-4">
                                <img src={plant3} className="img-fluid w-100" style={{ height: '300px', objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="overflow-hidden rounded-4">
                                <img src={plant4} className="img-fluid w-100" style={{ height: '300px', objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="overflow-hidden rounded-4">
                                <img src={plant5} className="img-fluid w-100" style={{ height: '300px', objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="overflow-hidden rounded-4">
                                <img src={plant6} className="img-fluid w-100" style={{ height: '300px', objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Relations */}
            <section className="section-padding pt-0 text-center">
                <div className="container">
                    <h2 className="display-5 fw-bold mb-3 text-dark">Business relations</h2>
                    <p className="text-secondary fs-4 fw-light mb-3">Trusted by the Industry’s best</p>
                    <div className="d-flex align-items-center gap-4">
                        <button
                            className="btn p-0 border-0 bg-transparent"
                            type="button"
                            onMouseDown={() => setIsFastScroll(true)}
                            onMouseUp={() => setIsFastScroll(false)}
                            onMouseLeave={() => setIsFastScroll(false)}
                        >
                            <i className="bi bi-chevron-left" style={{ fontSize: '3rem', color: '#5c9c44', WebkitTextStroke: '2px #5c9c44' }}></i>
                        </button>

                        <div className="logo-slider flex-grow-1">
                            <div className={`logo-slide-track ${isFastScroll ? 'fast-scroll' : ''}`}>
                                {/* First Set */}
                                <div className="slide"><img src={client5} alt="Landbell" /></div>
                                <div className="slide"><img src={client3} alt="Havells" /></div>
                                <div className="slide"><img src={client1} alt="Croma" /></div>
                                <div className="slide"><img src={client2} alt="Maruti Suzuki" /></div>
                                <div className="slide"><img src={client4} alt="Reliance Digital" /></div>

                                {/* Duplicate Set 1 */}
                                <div className="slide"><img src={client5} alt="Landbell" /></div>
                                <div className="slide"><img src={client3} alt="Havells" /></div>
                                <div className="slide"><img src={client1} alt="Croma" /></div>
                                <div className="slide"><img src={client2} alt="Maruti Suzuki" /></div>
                                <div className="slide"><img src={client4} alt="Reliance Digital" /></div>

                                {/* Duplicate Set 2 */}
                                <div className="slide"><img src={client5} alt="Landbell" /></div>
                                <div className="slide"><img src={client3} alt="Havells" /></div>
                                <div className="slide"><img src={client1} alt="Croma" /></div>
                                <div className="slide"><img src={client2} alt="Maruti Suzuki" /></div>
                                <div className="slide"><img src={client4} alt="Reliance Digital" /></div>
                            </div>
                        </div>

                        <button
                            className="btn p-0 border-0 bg-transparent"
                            type="button"
                            onMouseDown={() => setIsFastScroll(true)}
                            onMouseUp={() => setIsFastScroll(false)}
                            onMouseLeave={() => setIsFastScroll(false)}
                        >
                            <i className="bi bi-chevron-right" style={{ fontSize: '3rem', color: '#5c9c44', WebkitTextStroke: '2px #5c9c44' }}></i>
                        </button>
                    </div>
                </div>
            </section>

            {/* Media Section */}
            <section className="section-padding pt-0 pb-3">
                <div className="container">
                    <div className="row g-4 text-center">
                        <div className="col-md-4">
                            <h2 className="display-5 fw-semibold mb-4 text-dark">Press Release</h2>
                            <div className="rounded-5 overflow-hidden position-relative shadow" style={{ height: '350px' }}>
                                {activeVideo === 'press' ? (
                                    <iframe
                                        className="w-100 h-100"
                                        src="https://www.youtube.com/embed/1YZK6Gzq5d0?autoplay=1"
                                        title="Press Release"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <div className="w-100 h-100 position-relative cursor-pointer" onClick={() => setActiveVideo('press')}>
                                        <img src={mediaPress} className="w-100 h-100 object-fit-cover" alt="Press Release" />
                                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
                                        <div className="position-absolute top-50 start-50 translate-middle">
                                            <div className="bg-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
                                                <i className="bi bi-play-fill" style={{ fontSize: '3rem', color: '#fd7e14' }}></i>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2 className="display-5 fw-semibold mb-4 text-dark">Featured By</h2>
                            <div className="rounded-5 overflow-hidden position-relative shadow" style={{ height: '350px' }}>
                                {activeVideo === 'featured' ? (
                                    <iframe
                                        className="w-100 h-100"
                                        src="https://www.youtube.com/embed/VlTa6uFP9cM?autoplay=1"
                                        title="Featured By"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <div className="w-100 h-100 position-relative cursor-pointer" onClick={() => setActiveVideo('featured')}>
                                        <img src={mediaFeatured} className="w-100 h-100 object-fit-cover" alt="Featured By" />
                                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
                                        <div className="position-absolute top-50 start-50 translate-middle">
                                            <div className="bg-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
                                                <i className="bi bi-play-fill" style={{ fontSize: '3rem', color: '#fd7e14' }}></i>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2 className="display-5 fw-semibold mb-4 text-dark">Podcast</h2>
                            <div className="rounded-5 overflow-hidden position-relative shadow" style={{ height: '350px' }}>
                                {activeVideo === 'podcast' ? (
                                    <iframe
                                        className="w-100 h-100"
                                        src="https://www.youtube.com/embed/-NkZJn5PZyo?autoplay=1"
                                        title="Podcast"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <div className="w-100 h-100 position-relative cursor-pointer" onClick={() => setActiveVideo('podcast')}>
                                        <img src={mediaPodcast} className="w-100 h-100 object-fit-cover" alt="Podcast" />
                                        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
                                        <div className="position-absolute top-50 start-50 translate-middle">
                                            <div className="bg-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '80px', height: '80px' }}>
                                                <i className="bi bi-play-fill" style={{ fontSize: '3rem', color: '#fd7e14' }}></i>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
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
        </div>
    );
}

export default Home;
