import React from 'react';
import { Star, Clock, MapPin, Stethoscope } from 'lucide-react';

export default function DoctorCard({ doctor, onBook }) {
  return (
    <div className="card doctor-card">
      <div className="card-header">
        <div>
          <h3>{doctor.name}</h3>
          <span className="badge">{doctor.specialty}</span>
        </div>
        <div className="rating">
          <Star size={16} fill="#f59e0b" color="#f59e0b" />
          <span>{doctor.rating}</span>
        </div>
      </div>

      <div className="card-details">
        <p><Stethoscope size={15} /> {doctor.experience} experience</p>
        <p><MapPin size={15} /> {doctor.hospital}</p>
        <p><Clock size={15} /> Next slot: <strong>{doctor.available}</strong></p>
      </div>

      <div className="card-footer">
        <span className="fee">Consultation: <strong>{doctor.fee}</strong></span>
        <button className="btn-primary" onClick={() => onBook(doctor)}>
          Book Visit
        </button>
      </div>
    </div>
  );
}
