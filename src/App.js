import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import React from 'react';
import logo from './Logo1.png';

const images = [
  '/newhome.jpg',
  '/3.jpg',
  '/2.jpg',
  '/five.jpg',
];

const movingTexts = [
  'The Company Is Currently engaging in design, supply, installation and construction works related to Electromechanical sector',
  'We deliver innovative solutions for renewable energy and infrastructure projects across the region.',
  'Your trusted partner for electromechanical design, supply, and installation.',
  'Empowering communities with sustainable technology and expert engineering.'
];

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const imagesCount = images.length;
  const altTexts = [
    'High voltage power lines at sunset',
    'Solar panels on a roof',
    'Electrical engineer working on a panel',
    'Electric power substation',
  ];
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % imagesCount);
  };
  return (
    <div className="slideshow">
      <img src={images[index]} alt={altTexts[index]} className="slide-image" />
      <div className="advertising-marquee">
        <span className="moving-text-desktop">{movingTexts[index]}</span>
        {index !== 0 && (
          <span className="moving-text-mobile">{movingTexts[index].split('.')[0]}</span>
        )}
      </div>
      <div className="slide-marquee-text">
        <div style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '2rem', color: 'black', marginBottom: '0.5rem' }}>Blue Engineering and Trade</div>
        <span style={{ color: 'black', fontSize: '72px', fontWeight: 'bold', display: 'block', lineHeight: '1.1' }}>We build something new and consistent</span>
      </div>
      <button className="slide-prev-btn" onClick={() => setIndex((prev) => (prev - 1 + imagesCount) % imagesCount)} aria-label="Previous slide">
        &#8592;
      </button>
      <button className="slide-next-btn" onClick={handleNext} aria-label="Next slide">
        &#8594;
      </button>
      <div className="slide-dots">
        {images.map((_, i) => (
          <span key={i} className={i === index ? 'dot active' : 'dot'}></span>
        ))}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Slideshow />
      <div className="home-main-flex">
        <div className="home-services">
          <h2>Our Major SERVICES are:</h2>
          <ul>
            <li><span className="service-icon">🔧</span> Supply Installation of Affordable and Efficient Productive Use Technologies</li>
            <li><span className="service-icon">🔋</span> Supply of Standalone Renewable Energy Solutions and Power Systems</li>
            <li><span className="service-icon">💡</span> Business Development for Productive Use of Electricity</li>
            <li><span className="service-icon">💰</span> Finance mobilization and Financial Service Arrangements</li>
            <li><span className="service-icon">📊</span> Feasibility Studies on Different Business Cases</li>
            <li><span className="service-icon">🛠️</span> After Sales Services Including Maintenance and Spare Parts</li>
            <li><span className="service-icon">🎓</span> Training on Technology Utilization and Basic Business Operations</li>
          </ul>
        </div>
        <div id="number-talks-section">
          <NumberTalks />
        </div>
      </div>
      <ServicesSection />
      <AboutSection />
      <ProductSection />
    </div>
  );
}

function Services() {
  // Updated images and 4 services only
  const serviceData = [
    {
      title: 'All Coffee Processing Machineries',
      icon: '☕',
      img: '/coffe_processing.jpg',
    },
    {
      title: 'Grain Mills',
      icon: '🌾',
      img: '/grain_mills.jpg',
    },
    {
      title: 'Small Scale Fresh Coffee Bean Pulping/Shelling/Peeling/Pulper Machines',
      icon: '🥥',
      img: '/coffe_grain.jpg',
    },
    {
      title: 'ICT Appliances',
      icon: '💻',
      img: '/it1.jpg',
    },
  ];
  return (
    <div>
      <h2>Services</h2>
      <h3 className="services-subheading">Our Services Categories</h3>
      <div className="services-grid">
        {serviceData.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-img-wrap">
              <img src={service.img} alt={service.title} className="service-img" />
              <span className="service-icon-large">{service.icon}</span>
            </div>
            <div className="service-title">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const handleContactButton = () => {
    // Scroll to this section or focus it
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id="contact-section">
      <h2>Contact</h2>
      <div style={{ marginBottom: '1.5rem' }}>
        <h3>Office address</h3>
        <div>Near Kelifa Bldg<br />Addis Ababa, Ethiopia</div>
        <h3 style={{ marginTop: '1rem' }}>Email us</h3>
        <div>info@blueethio.com</div>
        <h3 style={{ marginTop: '1rem' }}>Call us</h3>
        <div>+251 91 305 2170<br />+251 91 141 6595</div>
      </div>
      <button className="contact-now-btn" onClick={handleContactButton}>Contact</button>
    </div>
  );
}

function ServicesSection() {
  // Updated images and 4 services only
  const serviceData = [
    {
      title: 'All Coffee Processing Machineries',
      icon: '☕',
      img: '/coffe_processing.jpg',
    },
    {
      title: 'Grain Mills',
      icon: '🌾',
      img: '/grain_mills.jpg',
    },
    {
      title: 'Small Scale Fresh Coffee Bean Pulping/Shelling/Peeling/Pulper Machines',
      icon: '🥥',
      img: '/coffe_grain.jpg',
    },
    {
      title: 'ICT Appliances',
      icon: '��',
      img: '/it1.jpg',
    },
  ];
  return (
    <div id="services-section">
      <h2>Services</h2>
      <h3 className="services-subheading">Our Services Categories</h3>
      <div className="services-grid">
        {serviceData.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-img-wrap">
              <img src={service.img} alt={service.title} className="service-img" />
              <span className="service-icon-large">{service.icon}</span>
            </div>
            <div className="service-title">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div id="about-section">
      <div className="about-bg-banner">
        <h2>Who We Are</h2>
        <p>
          <span style={{ color: 'black' }}>We Build Something New and Consistent</span><br />
          The company is currently engaged in design, supply, installation and construction works related to electromechanical sector. The core business of the company is centered at erection of MV and LV electric lines, Energy development from various sources (Solar, Wind, etc), Distribution System Automation to various customers demanding its service. The company has been providing the as main & subcontractor
        </p>
      </div>
      <div className="about-sections">
        <section className="about-mission">
          <h3>Mission</h3>
          <p>The company has a long-term mission to be capable of executing works to the highest quality by thoroughly working to establish an international standard of quality and constant learning process to compete at the highest level in the electromechanical industry both at the national and international level.</p>
        </section>
        <section className="about-vision">
          <h3>Vision</h3>
          <p>To be the leading Electromechanical service provider in Ethiopia and East Africa</p>
        </section>
        <section className="about-values">
          <h3>Values</h3>
          <p>Our work philosophy is built on three core values of our company. We always strive and consciously apply these values in a systematic fashion in each and every work we undertake.
          This is because we believe that we can provision of our clients with best value for money solution by improved efficiency in resource utilization and reducing overheads. Which can only be achieved through executing of
          contracts timely and after all it wouldn’t ensure customers satisfaction unless it exceeds their quality expectations which we strive for to ensure constantly. Thus, our core values include but not limited to:</p>
          <ul>
            <li><strong>Professionalism:</strong> Our commitment is top priority to deliver as per the client’s requirement and above the level of their satisfaction.</li>
            <li><strong>Excellence:</strong> We set high standards, apply advanced technologies, accept challenges, utilize best methodologies and thrive for accomplishment.</li>
            <li><strong>Ethics:</strong> Honesty, integrity and mutual respect in each and every piece of our activities.</li>
            <li><strong>Quality:</strong> Aspiration and commitment to meet highest level of national quality standards.</li>
            <li><strong>Safety:</strong> Every project is planned and executed in no harm no accident manner.</li>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer Focus</li>
            <li>Sustainability</li>
            <li>Teamwork</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function ProductSection() {
  const products = [
    { icon: '🚜', title: 'Agricultural Machineries' },
    { icon: '⚡', title: 'Off-grid Power System Solutions' },
    { icon: '💧', title: 'Solar Water Pumps' },
    { icon: '🏭', title: 'Manufacturing Equipment' },
    { icon: '🔌', title: 'Rural Electrification Accessories' },
  ];
  return (
    <div className="product-section">
      <h2>Our Product</h2>
      <p>Rural technologies for the productive use of electricity can significantly enhance the quality of life and economic opportunities in underserved communities. Here are several key technologies and applications that our company provides. By integrating these technologies into rural settings, communities can harness the power of electricity not just for basic needs, but as a catalyst for economic development and improved quality of life. List of our productive equipment and machineries include:</p>
      <ul className="product-list">
        {products.map((product, idx) => (
          <li key={idx}><span className="product-icon">{product.icon}</span> {product.title}</li>
        ))}
      </ul>
      <div className="product-card-grid" style={{marginTop: '2.5rem'}}>
        {[...Array(9)].map((_, idx) => (
          idx === 0 ? (
            <div className="product-card" key={idx}>
              <img src="/itappliance.png" alt="ICT Appliances" className="product-card-img" />
              <div className="product-card-title">ICT Appliances</div>
              <div className="product-card-desc">Empower communication, education, and data services with solar energy and keep your ICT systems running smoothly and sustainably. Whether for remote schools, rural health centers, or isolated...</div>
              <button className="product-readmore-btn">Read More</button>
            </div>
          ) : idx === 1 ? (
            <div className="product-card" key={idx}>
              <img src="/maria.jpg" alt="Off-grid Solar Power Solutions" className="product-card-img" />
              <div className="product-card-title">Off-grid Solar Power Solutions</div>
              <div className="product-card-desc">Experience the future of energy with our Solar Power Systems, designed to provide sustainable, reliable, and cost-effective energy solutions for homes, businesses, and off-grid locations. Embrace the...</div>
              <button className="product-readmore-btn">Read More</button>
            </div>
          ) : idx === 2 ? (
            <div className="product-card" key={idx}>
              <img src="/horizontalplate.png" alt="Horizontal Plate" className="product-card-img" />
              <div className="product-card-title">Horizontal Plate</div>
              <div className="product-card-desc">These are common mills used for milling whole grains including maize, wheat, barley, sorghum, beans etc without polishing or dehulling to produce whole grain mill. Comes in different sizes and...</div>
              <button className="product-readmore-btn">Read More</button>
            </div>
          ) : idx === 3 ? (
            <div className="product-card" key={idx}>
              <img src="/verticalplate.png" alt="Vertical Plate" className="product-card-img" />
              <div className="product-card-title">Vertical Plate</div>
              <div className="product-card-desc">Introducing our 12-inch Flour Mill with Third Pedestal, a cutting-edge stone-type milling solution that combines tradition with innovation. Crafted for those who appreciate the authentic taste and...</div>
              <button className="product-readmore-btn">Read More</button>
            </div>
          ) : idx === 4 ? (
            <div className="product-card" key={idx}>
              <img src="/compact.png" alt="Compact Design" className="product-card-img" />
              <div className="product-card-title">Compact Design</div>
              <div className="product-card-desc">Engineered for small spaces, our milling machine is lightweight and easy to store, making it ideal for farms, bakeries, or small businesses. Durable & Safe Materials: Built from high-quality...</div>
              <button className="product-readmore-btn">Read More</button>
            </div>
          ) : idx === 5 ? (
            <div className="product-card" key={idx}>
              <img src="/compact.png" alt="Vertical Plate Mill" className="product-card-img" />
              <div className="product-card-title">Vertical Plate Mill</div>
              <div className="product-card-desc">Compact Design: Engineered for small spaces, our milling machine is lightweight and easy to store, making it ideal for farms, bakeries, or small businesses. Durable & Safe Materials: Built from...</div>
              <button className="product-readmore-btn">Read More</button>
            </div>
          ) : idx === 6 ? (
            <div className="product-card" key={idx}>
              <img src="/Adjustable.png" alt="Adjustable Grain Fineness" className="product-card-img" />
              <div className="product-card-title">Adjustable Grain Fineness</div>
              <div className="product-card-desc">Easily adjust settings to achieve the desired texture, from fine flour for baking to coarser grits...</div>
              <button className="product-readmore-btn">Read More</button>
            </div>
          ) : idx === 7 ? (
            <div className="product-card" key={idx}>
              <img src="/grain.png" alt="Grain Mills" className="product-card-img" />
              <div className="product-card-title">Grain Mills</div>
              <div className="product-card-desc">Discover the efficiency and convenience of our Small-Scale Grain Milling Machine, designed for farmers, small businesses, and home-based operations. Perfect for milling a variety of grains, this...</div>
              <button className="product-readmore-btn">Read More</button>
            </div>
          ) : idx === 8 ? (
            <div className="product-card" key={idx}>
              <img src="/cofee.png" alt="Coffee Processing Machineries" className="product-card-img" />
              <div className="product-card-title">Coffee Processing Machineries</div>
              <div className="product-card-desc">Our Coffee Pulping (Peeling) Machine* is the ultimate solution for coffee producers seeking efficient, high-quality processing. Designed to carefully remove the coffee cherry pulp, this machine...</div>
              <button className="product-readmore-btn">Read More</button>
            </div>
          ) : (
            <div className="product-card" key={idx}>
              <div className="product-card-title">Content coming soon</div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

function NumberTalks() {
  return (
    <div className="number-talks">
      <h2>Number Talks</h2>
      <p>BLUE Engineering will help you get things complete reality.<br />Konstruk will help you get things complete reality.</p>
      <button className="contact-now-btn">Contact Now</button>
      <div className="stats-cards">
        <div className="stat-card"><span className="stat-number">22 +</span><br />Completed Projects</div>
        <div className="stat-card"><span className="stat-number">20 +</span><br />Happy Clients</div>
        <div className="stat-card"><span className="stat-number">22 +</span><br />Qualified Engineers</div>
        <div className="stat-card"><span className="stat-number">9 +</span><br />Years Experience</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col">
          <h3 style={{ color: 'black' }}>We Build Something New and Consistent</h3>
          <p>BLUE ENGINEERING &amp; Trading PLC is highly committed and gave practical and conceptual activities especially in electrical installation works thereby satisfying our respected customers. In our company customers are our primary concern.</p>
          <p><strong>Opening Hours:</strong> Monday – Sat: 8:30am to 6pm</p>
        </div>
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>Arada, Somale Tera Beto Bldg - F320<br />Addis Ababa, Ethiopia</p>
          <p>+251-911416595</p>
          <p>engineering@blueethio.com<br />info@blueethio.com</p>
          <p>www.blueethio.com</p>
        </div>
        <div className="footer-col">
          <h4>Our Services</h4>
          <ul className="footer-services">
            <li>Power Line</li>
            <li>Building &amp; Industrial Electric</li>
            <li>Electromechanical Equipment</li>
            <li>Medium voltage line equipment</li>
            <li>Substation equipment</li>
            <li>Switch Gear</li>
            <li>Telecom Infrastructure</li>
            <li>Energy Development works</li>
            <li>System automation and control</li>
            <li>System Feasibility Assessments</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Please subscribe below to receive daily updates from BLUE Engineering.</p>
          <form className="footer-newsletter">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright©2025-now, Blue Engineering. All rights reserved. Powered and Maintained by: Roba Temesgen</p>
      </div>
    </footer>
  );
}

function App() {
  const location = useLocation();
  const handleServicesClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const section = document.getElementById('services-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  const handleAboutClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const section = document.getElementById('about-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  const handleProjectsClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const section = document.getElementById('number-talks-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <div className="App">
      <div className="header-bar">
        <div className="header-left">
          info@blueethio.com &nbsp; | &nbsp; +251-911416595 &nbsp; | &nbsp; A.A, Ethiopia
        </div>
        <div className="header-right">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">{/* Facebook SVG */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" aria-label="Google" className="social-icon">{/* Google SVG */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M21.805 10.023h-9.765v3.977h5.627c-.243 1.243-1.486 3.651-5.627 3.651-3.386 0-6.146-2.805-6.146-6.251s2.76-6.251 6.146-6.251c1.927 0 3.222.822 3.963 1.527l2.707-2.633C17.01 2.527 14.805 1.5 12.04 1.5 6.477 1.5 2 5.977 2 11.5s4.477 10 10.04 10c5.77 0 9.577-4.045 9.577-9.75 0-.654-.072-1.145-.162-1.727z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">{/* LinkedIn SVG */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433c-1.144 0-2.07-.926-2.07-2.07 0-1.143.926-2.07 2.07-2.07 1.143 0 2.07.927 2.07 2.07 0 1.144-.927 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452z"/></svg>
          </a>
        </div>
      </div>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="Company Logo" className="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="#about-section" onClick={handleAboutClick}>About Us</Link>
          <Link to="#number-talks-section" onClick={handleProjectsClick}>Projects</Link>
          <Link to="#services-section" onClick={handleServicesClick}>Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
