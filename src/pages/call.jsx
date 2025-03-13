import '../styles/call.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faPaperPlane,
  faBell,
  faCamera,
  faCalendarCheck,
  faShareNodes,
  faDownload,
  faFilePdf,
  faFileWord,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Call() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <div className="callForPapers">
        <div className="callForPapers-content">
          <div className="callForPapers-header">
            <h1>Call for Papers</h1>
            <p>
              Authors are invited to submit high-quality research papers aligned with the conference
              topics, including but not limited to:
            </p>
          </div>
          <div className="callForPapers-topics">
            {/* Topic 1 */}
            <div className="topic-card">
              <div className="topic-image">
                <img src="/Asset/IMAGES/img1.png" alt="Artificial Intelligence & Machine Learning" />
              </div>
              <div className="topic-content">
                <h2>1. Artificial Intelligence & Machine Learning</h2>
                <ul>
                  <li>Deep Learning and Neural Networks</li>
                  <li>AI for Edge Computing and IoT</li>
                  <li>Reinforcement Learning and Robotics</li>
                  <li>Natural Language Processing and Speech Recognition</li>
                  <li>AI for Smart Cities and Sustainable Development</li>
                  <li>AI Ethics, Fairness, and Explainability</li>
                </ul>
              </div>
            </div>

            {/* Topic 2 */}
            <div className="topic-card">
              <div className="topic-image">
                <img src="/Asset/IMAGES/img2.png" alt="Embedded Systems & Internet of Things (IoT)" />
              </div>
              <div className="topic-content">
                <h2>2. Embedded Systems & Internet of Things (IoT)</h2>
                <ul>
                  <li>Embedded AI and TinyML</li>
                  <li>IoT for Smart Healthcare and Industry 4.0</li>
                  <li>Wireless Sensor Networks and Edge Computing</li>
                  <li>Secure and Energy-Efficient IoT Systems</li>
                  <li>Digital Twins for Industrial Automation</li>
                </ul>
              </div>
            </div>

            {/* Topic 3 */}
            <div className="topic-card">
              <div className="topic-image">
                <img src="/Asset/IMAGES/img3.png" alt="Electronics & VLSI" />
              </div>
              <div className="topic-content">
                <h2>3. Electronics & VLSI</h2>
                <ul>
                  <li>Low-Power VLSI and Nanoelectronics</li>
                  <li>FPGA-Based System Design</li>
                  <li>MEMS and Sensors for Smart Applications</li>
                  <li>5G and 6G Communication Circuits</li>
                  <li>Neuromorphic and Quantum Computing Circuits</li>
                </ul>
              </div>
            </div>

            {/* Topic 4 */}
            <div className="topic-card">
              <div className="topic-image">
                <img src="/Asset/IMAGES/img4.png" alt="Computer Science & Cybersecurity" />
              </div>
              <div className="topic-content">
                <h2>4. Computer Science & Cybersecurity</h2>
                <ul>
                  <li>Cloud and Edge Computing Architectures</li>
                  <li>Blockchain for Secure Transactions</li>
                  <li>Quantum Computing and Cryptography</li>
                  <li>Cybersecurity and Privacy in AI Systems</li>
                  <li>Software Engineering and DevOps</li>
                </ul>
              </div>
            </div>

            {/* Topic 5 */}
            <div className="topic-card">
              <div className="topic-image">
                <img src="/Asset/IMAGES/img5.png" alt="Power Systems & Renewable Energy" />
              </div>
              <div className="topic-content">
                <h2>5. Power Systems & Renewable Energy</h2>
                <ul>
                  <li>Smart Grids and Energy Storage Technologies</li>
                  <li>AI for Renewable Energy Optimization</li>
                  <li>Electric Vehicles and Charging Infrastructure</li>
                  <li>Energy-Efficient Computing and Green Electronics</li>
                  <li>Power Electronics for Sustainable Energy</li>
                </ul>
              </div>
            </div>

            {/* Topic 6 */}
            <div className="topic-card">
              <div className="topic-image">
                <img src="/Asset/IMAGES/img6.png" alt="Signal Processing & Communication Technologies" />
              </div>
              <div className="topic-content">
                <h2>6. Signal Processing & Communication Technologies</h2>
                <ul>
                  <li>5G, 6G, and Beyond: Emerging Technologies</li>
                  <li>AI-Enabled Wireless Communication</li>
                  <li>Image and Video Processing Applications</li>
                  <li>Satellite and Optical Communication Networks</li>
                  <li>Software-Defined Radio and Cognitive Networks</li>
                </ul>
              </div>
            </div>

            {/* Topic 7 */}
            <div className="topic-card">
              <div className="topic-image">
                <img src="/Asset/IMAGES/img7.png" alt="Control Systems & Robotics" />
              </div>
              <div className="topic-content">
                <h2>7. Control Systems & Robotics</h2>
                <ul>
                  <li>Autonomous Systems and Drones</li>
                  <li>AI-Based Industrial Automation</li>
                  <li>Human-Robot Interaction and Assistive Robotics</li>
                  <li>Digital Twins for Predictive Maintenance</li>
                  <li>Smart Manufacturing and Industry 4.0</li>
                </ul>
              </div>
            </div>

            {/* Topic 8 */}
            <div className="topic-card">
              <div className="topic-image">
                <img src="/Asset/IMAGES/img8.png" alt="Smart and Sustainable Technologies" />
              </div>
              <div className="topic-content">
                <h2>8. Smart and Sustainable Technologies</h2>
                <ul>
                  <li>AI for Climate Change Mitigation</li>
                  <li>Digital Transformation for Sustainable Development</li>
                  <li>Smart Agriculture and Precision Farming</li>
                  <li>Green AI and Sustainable Computing</li>
                  <li>Smart Transportation and Urban Planning</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="callForPapers-cta">
            <a href="#" className="cta-button">
              Register Here
            </a>
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar-section">
            <h3>
              <FontAwesomeIcon icon={faCalendarDays} /> Important Dates
            </h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </div>
                <div className="timeline-content">
                  <strong>Paper Submission Deadline</strong>
                  <p>June 15, 2025</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="timeline-content">
                  <strong>Paper Acceptance</strong>
                  <p>June 30, 2025</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <FontAwesomeIcon icon={faCamera} />
                </div>
                <div className="timeline-content">
                  <strong>Paper Submission</strong>
                  <p>July 20, 2025</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                </div>
                <div className="timeline-content">
                  <strong>Conference Dates</strong>
                  <p>August 20-22, 2025</p>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-section">
            <h3>
              <FontAwesomeIcon icon={faShareNodes} /> Follow Us
            </h3>
            <div className="social-links">
              <a href="#" className="download-link">
                <FontAwesomeIcon icon={faLinkedinIn} /> Linked In
              </a>
              <a href="#" className="download-link">
                <FontAwesomeIcon icon={faXTwitter} /> Twitter
              </a>
              <a href="#" className="download-link">
                <FontAwesomeIcon icon={faPhone} /> Phone
              </a>
            </div>
          </div>
          <div className="sidebar-section">
            <h3>
              <FontAwesomeIcon icon={faDownload} /> More Details
            </h3>
            <div className="download-links">
              <a href="#" className="download-link">
                <FontAwesomeIcon icon={faFilePdf} /> Brochure
              </a>
              <a href="#" className="download-link">
                <FontAwesomeIcon icon={faFileWord} /> Submission Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Call;