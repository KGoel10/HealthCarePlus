import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DoctorsPage from './features/doctors/DoctorsPage';
import AppointmentsPage from './features/appointments/AppointmentsPage';
import BookingModal from './features/appointments/components/BookingModal';
import './App.css';

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);

  const handleConfirmBooking = (newAppointment) => {
    setAppointments((prev) => [newAppointment, ...prev]);
  };

  const handleCancelAppointment = (id) => {
    setAppointments((prev) => prev.filter((apt) => apt.id !== id));
  };

  return (
    <Router>
      <Navbar appointmentCount={appointments.length} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<DoctorsPage onSelectDoctor={setSelectedDoctor} />}
          />
          <Route
            path="/appointments"
            element={
              <AppointmentsPage
                appointments={appointments}
                onCancel={handleCancelAppointment}
              />
            }
          />
        </Routes>
      </main>

      <BookingModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onConfirm={handleConfirmBooking}
      />
    </Router>
  );
}

export default App;
