import React, { useState, useRef, useEffect } from 'react';
import { Carousel, Container, Col, Row, Button, Image } from 'react-bootstrap';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import '../Home.css';

function Home() {
  const [activeTab, setActiveTab] = useState('');
  const sectionRefs = {
    'stk-donor': useRef(null),
    'std-volunteer': useRef(null),
    'std-organization': useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.7 } // Adjust this value as needed
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {

      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      observer.disconnect();
    };
  }, []);

  function handleClick(e, id) {
    e.preventDefault();
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  const cards = [
    {
      id: 1,
      title: 'User 1',
      description: 'The interface design looks really clean and user-friendly',
      commenterName: 'John Doe',
      commenterRole: 'Donor',
    },
    {
      id: 2,
      title: 'User 2',
      description: 'Im impressed by how smoothly the donation process works.',
      commenterName: 'Jane Smith',
      commenterRole: 'Organization',
    },
    {
      id: 3,
      title: 'User 3',
      description: 'I like how the donation tracker shows real-time progress.',
      commenterName: 'Mike Johnson',
      commenterRole: 'Volunteer',
    },
    {
      id: 4,
      title: 'User 4',
      description: 'Overall, a great initiative and a well-executed platform',
      commenterName: 'Sara Brown',
      commenterRole: 'Donor',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.next();
    setCurrentIndex(currentIndex + 1 >= cards.length ? 0 : currentIndex + 1);
  };

  const handlePrev = () => {
    sliderRef.current.prev();
    setCurrentIndex(currentIndex - 1 < 0 ? cards.length - 1 : currentIndex - 1);
  };
    const scrollDown = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }

  function handleSelect(index) {
    setCurrentIndex(index);
  }
  
  useEffect(() => {

	

    const timer = setInterval(() => {

	

      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);

	

    }, 3000); 

	

    return () => clearInterval(timer);

	

  }, [cards.length])

  return (
    <div>
      <header className="hero bg-primary text-white text-center text-body-emphasis  p-5" style={{ backgroundImage: `url(https://deijobs.in/blog/wp-content/uploads/2023/09/Mitigating-Unconscious-Bias.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <h1>Welcome to Donation System </h1>
        <p>Connecting donors, volunteers, and organizations to make a difference.</p>
      </header>

      <Container>
        <div className='d-flex justify-content-center'>
          <div className='shadow p-2 rounded-5 mt-5 inner-card'>
            <a className={`card-alt ${activeTab === 'stk-donor' ? 'active-tab' : ''}`} href='/#' onClick={(e) => handleClick(e, 'stk-donor')}>
              <img src="https://bloomerang.co/wp-content/uploads/2023/08/ico-donor.png.webp" alt="Donor Management Icon" />
              <h4>Donors</h4>
            </a>
            <a className={`card-alt ${activeTab === 'std-volunteer' ? 'active-tab' : ''}`} href='/#' onClick={(e) => handleClick(e, 'std-volunteer')}>
              <img src="https://bloomerang.co/wp-content/uploads/2023/08/ico-volunteer.png.webp" alt="Volunteer Management Icon" />
              <h4>Volunteers</h4>
            </a>
            <a className={`card-alt ${activeTab === 'std-organization' ? 'active-tab' : ''}`} href='/#' onClick={(e) => handleClick(e, 'std-organization')}>
              <img src="https://bloomerang.co/wp-content/uploads/2023/08/ico-fundraising.png.webp" alt="Organization Management Icon" />
              <h4>Organizations</h4>
            </a>
          </div>
        </div>
      </Container>

      <div className='locker'>
        <div className='locker_image'>
          <div className='locker_container'>
            <img src='https://deijobs.in/blog/wp-content/uploads/2023/09/Mitigating-Unconscious-Bias.jpg' className='rounded-5 w-75' alt=''></img>
          </div>
        </div>
        <div className='locker_content'>
          <div ref={sectionRefs['stk-donor']} className='locker_section' id='stk-donor'>
            <h2 className='p-2'>
              Make a Difference with Every Donation
            </h2>
            <ul>
              <li>Highlight the impact of donations on the causes they care about.
                Use statistics or stories to showcase real-world results.</li>
              <li>Emphasize the ease and security of donating through your platform.</li>
              <li>Offer options for recurring donations for sustained impact.</li>
              <li>Include testimonials from satisfied donors about their experience.</li>
            </ul>
          </div>
          <div ref={sectionRefs['std-volunteer']} className='locker_section' id='std-volunteer'>
            <h2 className='p-2'>
              Give Your Time and Skills.
              Change Lives.
            </h2>
            <ul>
              <li>Showcase the variety of volunteering opportunities available on your platform.</li>
              <li>Make it easy for volunteers to find opportunities that match their interests and skills.</li>
              <li>Emphasize the flexibility of volunteering and highlight time commitment options.</li>
              <li>Share stories of volunteers who have made a positive impact.</li>
              <li>Include testimonials from volunteers about their rewarding experiences.</li>
            </ul>
          </div>
          <div ref={sectionRefs['std-organization']} className='locker_section' id='std-organization'>
            <h2 className='p-2'>
              Expand Your Reach and Achieve Your Goals
            </h2>
            <ul>
              <li>Explain how your platform connects them with a wider pool of potential donors and volunteers.</li>
              <li>Highlight the benefits of using your platform, such as streamlined donation management and volunteer recruitment tools.</li>
              <li>Showcase success stories of organizations that have achieved their goals through your platform.</li>
              <li>Provide clear instructions on how to sign up and get started.</li>
            </ul>
          </div>
        </div>
      </div>
      <div id='test' className='comments'>
        <div className='row col-container'>
          <Col md={3} className='headline'>
            <h2>Comments from users of the system</h2>
            <div className='d-flex'>
              <Button variant='home' className='rounded-5' onClick={scrollDown}>Check about us</Button>
            </div>
          </Col>
          <Col>
            <div>
              <Row className='carousel-arrows-container'>
                <Col md="auto" className='carousel-arrow arrow-prev' onClick={handlePrev}>
                  <FaAngleLeft />
                </Col>
                <Col md="auto" className='carousel-arrow arrow-next' onClick={handleNext}>
                  <FaAngleRight />
                </Col>
              </Row>
            </div>

            <Carousel ref={sliderRef} activeIndex={currentIndex} onSelect={handleSelect} indicators={false} controls={false} slide={false}>
              {cards.map((card, index) => (
                <Carousel.Item key={card.id}>
                  <div key={card.id} className={`card ${index === currentIndex ? 'active' : ''} rounded-0 shadow border-0`}>
                    <div className='card-body comment'>
                      {/* Render card content here */}
                      <h2>{card.title}</h2>
                      <p>{card.description}</p>
                      <Col className='commenter mt-3'>
                        <Image src="https://i.pinimg.com/564x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg" roundedCircle width="40" height="40" className='d-flex' />
                        <p>{card.commenterName}
                          <span>{card.commenterRole}</span>
                        </p>
                      </Col>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </div>
      </div>
      {/*       
      <section id="donors" className="p-5">
        <Container>
          <Row>
            <Col>
              <h2>Donors</h2>
              <p>Make a difference by donating to your favorite organizations.</p>
              <Button variant="primary">Donate Now</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="volunteers" className="p-5 bg-light">
        <Container>
          <Row>
            <Col>
              <h2>Volunteers</h2>
              <p>Join our community of volunteers and help organizations in need.</p>
              <Button variant="primary">Join Now</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="organizations" className="p-5">
        <Container>
          <Row>
            <Col>
              <h2>Organizations</h2>
              <p>Register your organization and start receiving donations and volunteers.</p>
              <Button variant="primary">Register Now</Button>
            </Col>
          </Row>
        </Container>
      </section> */}
      <section id="about-us" className="bg-light p-5 text-center">
        <Container>
          <Row>
            <Col>
              <h2>About Us</h2>
              <p>
                We are committed to connecting donors, volunteers, and organizations to make a positive impact on society. Our platform strives to facilitate seamless interactions and collaborations for the betterment of communities worldwide.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="bg-light p-3 text-center">
        <p>&copy; 2022 Donation System. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default Home;