import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeartPulse } from 'lucide-react';

export default function Navbar({ appointmentCount }) {
  const location = useLocation();

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <HeartPulse size={28} color="#0284c7" />
        <h1>HealthCare<span>Plus</span></h1>
      </Link>

      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Find Doctors
        </Link>
        <Link
          to="/appointments"
          className={location.pathname === '/appointments' ? 'active' : ''}
        >
          My Appointments ({appointmentCount})
        </Link>
      </nav>
    </header>
  );
}
