import React, { useState } from 'react';
import TeamCard from './common/TeamCard';

const teamMembers = [
  {
    image: '/images/Team/tomCruise.jpg',
    name: 'Tom Cruise',
    position: 'Founder & Chairman',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  {
    image: '/images/Team/angelinaJolie.jpg',
    name: 'Angelina Jolie',
    position: 'Managing Director',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  {
    image: '/images/Team/willSmith.jpg',
    name: 'Will Smith',
    position: 'Product Designer',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  {
    image: '/images/Team/emmaWatson.jpg',
    name: 'Emma Watson',
    position: 'Marketing Lead',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  {
    image: '/images/Team/vinDiesel.jpg',
    name: 'Vin Diesel',
    position: 'Developer',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  {
    image: '/images/Team/cristianoRonaldo.jpg',
    name: 'Cristiano Ronaldo',
    position: 'Brand Ambassador',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  {
    image: '/images/Team/shakira.jpg',
    name: 'Shakira',
    position: 'Creative Director',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
];

const VISIBLE_CARDS = 3;

const TeamSection: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);

  const visibleMembers = teamMembers.slice(startIdx, startIdx + VISIBLE_CARDS);

  return (
    <section className="my-5 py-5">
      <div className="d-flex justify-content-center align-items-center gap-5 mb-3">
        <div className="row w-100" style={{ maxWidth: 1000 }}>
          {visibleMembers.map((member, idx) => (
            <div className="col-12 col-md-4 mb-4 mb-md-0" key={idx}>
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
      {/* Carousel dots */}
      <div className="d-flex justify-content-center gap-2 mt-2">
        {Array.from({ length: teamMembers.length - VISIBLE_CARDS + 1 }).map((_, idx) => (
          <button
            key={idx}
            className={`rounded-circle border-0 ${startIdx === idx ? 'bg-danger' : 'bg-secondary'} `}
            style={{ width: 10, height: 11, opacity: 0.7 }}
            onClick={() => setStartIdx(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection; 