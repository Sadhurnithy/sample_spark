import { useEffect, useRef } from "react";
import "../styles/home.css";

function Home() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!sliderRef.current) return; // Prevents running when ref is null

    let currentSlide = 0;
    const slides = sliderRef.current;
    const slideItems = slides.querySelectorAll(".slide");
    const totalSlides = slideItems.length;
    const slideWidth = 760; // Adjust based on slide width

    if (totalSlides === 0) return; // Avoid errors if no slides exist

    // Clone first slide and append it
    const firstClone = slideItems[0].cloneNode(true);
    slides.appendChild(firstClone);

    function showNextSlide() {
      currentSlide++;

      slides.style.transition = "transform 0.7s ease-in-out";
      slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;

      if (currentSlide === totalSlides) {
        setTimeout(() => {
          slides.style.transition = "none";
          slides.style.transform = "translateX(0px)";
          currentSlide = 0;
        }, 700);
      }
    }

    // Auto-slide every 3 seconds
    intervalRef.current = setInterval(showNextSlide, 3000);

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  return (
    <div className="container">
      <div className="container-text">
        <p>Date : 15 July 2025 and 16 July 2025</p>
        <h1>
          International Conference on Smart Systems, Power Electronics, Artificial Intelligence, Robotics, and Knowledge Engineering
        </h1>
        <p>
          Department of Electrical and Electronics Engineering [EEE] and Electronics and Communication Engineering [ECE]
        </p>
      </div>

      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          <div className="slide">
            <img src="/conf-1.jpg" alt="Image 1" />
          </div>
          <div className="slide">
            <img src="/conf-2.jpg" alt="Image 2" />
          </div>
          <div className="slide">
            <img src="/conf-3.jpg" alt="Image 3" />
          </div>
          <div className="slide">
            <img src="/conf-4.jpg" alt="Image 4" />
          </div>
          <div className="slide">
            <img src="/conf-1.jpg" alt="Image 1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
