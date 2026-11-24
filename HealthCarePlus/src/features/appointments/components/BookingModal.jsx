import React, { useState } from 'react';
import { X, CalendarCheck } from 'lucide-react';

export default function BookingModal({ doctor, onClose, onConfirm }) {
  const [patientName, setPatientName] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('10:00 AM');
  const [reason, setReason] = useState('');

  if (!doctor) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({
      id: Date.now(),
      doctorName: doctor.name,
      specialty: doctor.specialty,
      patientName,
      date,
      timeSlot,
      reason,
      status: 'Confirmed',
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h3>Book Appointment with {doctor.name}</h3>
          <button className="icon-btn" onClick={onClose}><X size={20} /></button>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <label>
            Patient Full Name
            <input
              type="text"
              required
              placeholder="e.g. Aarav Kumar"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </label>

          <label>
            Preferred Date
            <input
              type="date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>

          <label>
            Time Slot
            <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
              <option>10:00 AM</option>
              <option>12:30 PM</option>
              <option>04:00 PM</option>
              <option>06:30 PM</option>
            </select>
          </label>

          <label>
            Symptoms / Reason for Visit
            <textarea
              rows="2"
              placeholder="Briefly describe your concern..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </label>

          <button type="submit" className="btn-primary full-width">
            <CalendarCheck size={18} /> Confirm Appointment ({doctor.fee})
          </button>
        </form>
      </div>
    </div>
  );
}
