import React from 'react';

interface Slide {
  src: string;
  alt: string;
  captionTitle?: string;
  captionText?: string;
}

const slides: Slide[] = [
  {
    src: '/images/slide1.jpg',
    alt: 'First slide',
    captionTitle: 'Big Summer Sale',
    captionText: 'Up to 50% off on select items!',
  },
  {
    src: '/images/slide2.jpg',
    alt: 'Second slide',
    captionTitle: 'New Arrivals',
    captionText: 'Check out the latest collection.',
  },
  {
    src: '/images/slide3.jpg',
    alt: 'Third slide',
    captionTitle: 'Exclusive Deals',
    captionText: 'Members get extra benefits.',
  },
];

const HeroSlider: React.FC = () => (
  <div id="heroCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
    <div className="carousel-indicators">
      {slides.map((_, idx) => (
        <button
          key={idx}
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to={`${idx}`}
          className={idx === 0 ? 'active' : ''}
          aria-current={idx === 0 ? 'true' : undefined}
          aria-label={`Slide ${idx + 1}`}
        />
      ))}
    </div>

    <div className="carousel-inner rounded">
      {slides.map((slide, idx) => (
        <div key={idx} className={`carousel-item${idx === 0 ? ' active' : ''}`}>
          <img
            src={slide.src}
            className="d-block w-100"
            alt={slide.alt}
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          {(slide.captionTitle || slide.captionText) && (
            <div className="carousel-caption d-none d-md-block text-start">
              {slide.captionTitle && <h5>{slide.captionTitle}</h5>}
              {slide.captionText && <p>{slide.captionText}</p>}
            </div>
          )}
        </div>
      ))}
    </div>

    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#heroCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#heroCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
);

export default HeroSlider;
