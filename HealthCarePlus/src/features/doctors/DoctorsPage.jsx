import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { DOCTORS_DATA } from './data/mockDoctors';
import DoctorCard from './components/DoctorCard';

export default function DoctorsPage({ onSelectDoctor }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const specialties = ['All', ...new Set(DOCTORS_DATA.map((d) => d.specialty))];

  const filteredDoctors = DOCTORS_DATA.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === 'All' || doc.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="page-container">
      <div className="page-header">
        <h2>Find a Specialist</h2>
        <p>Search verified doctors across departments and book instant consultations.</p>
      </div>

      {/* Filter & Search Bar */}
      <div className="filter-bar">
        <div className="search-box">
          <Search size={18} color="#64748b" />
          <input
            type="text"
            placeholder="Search doctor by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
        >
          {specialties.map((spec) => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>
      </div>

      {/* Doctors Grid */}
      <div className="grid">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBook={onSelectDoctor}
            />
          ))
        ) : (
          <p className="empty-state">No doctors found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}
