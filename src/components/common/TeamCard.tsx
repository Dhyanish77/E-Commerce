import React from 'react';

interface TeamCardProps {
  image: string;
  name: string;
  position: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, position, twitter, instagram, linkedin }) => (
  <div className="card border-0 shadow-sm text-center p-3 h-100">
    <img
      src={image}
      alt={name}
      className="rounded mb-3 mx-auto"
      style={{ width: 270, height: 340, objectFit: 'cover', borderRadius: '50%' }}
    />
    <h5 className="fw-bold mb-1">{name}</h5>
    <div className="text-muted mb-2" style={{ fontSize: 14 }}>{position}</div>
    <div className="d-flex justify-content-center gap-3 mt-2">
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-dark">
          <i className="bi bi-twitter fs-5"></i>
        </a>
      )}
      {instagram && (
        <a href={instagram} target="_blank" rel="noopener noreferrer" className="text-dark">
          <i className="bi bi-instagram fs-5"></i>
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-dark">
          <i className="bi bi-linkedin fs-5"></i>
        </a>
      )}
    </div>
  </div>
);

export default TeamCard; 