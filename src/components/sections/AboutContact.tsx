import { Row, Col } from 'antd';
import About from './About';
import Contact from './Contact';
import './AboutContact.css';

const AboutContact = () => {
  return (
    <section id="about-contact" className="about-contact-section">
      <div className="about-contact-container">
        <Row gutter={[48, 48]}>
          <Col xs={24} lg={12}>
            <About />
          </Col>
          <Col xs={24} lg={12}>
            <Contact />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutContact;
