import React from 'react';
import { Calendar, Clock, User, Trash2 } from 'lucide-react';

export default function AppointmentsPage({ appointments, onCancel }) {
  return (
    <div className="page-container">
      <div className="page-header">
        <h2>My Appointments</h2>
        <p>Manage your upcoming consultations and visit details.</p>
      </div>

      {appointments.length === 0 ? (
        <div className="empty-card">
          <p>You have no scheduled appointments yet.</p>
        </div>
      ) : (
        <div className="appointments-list">
          {appointments.map((apt) => (
            <div key={apt.id} className="card appointment-item">
              <div>
                <span className="status-pill">{apt.status}</span>
                <h3>{apt.doctorName} <small>({apt.specialty})</small></h3>
                <p><User size={15} /> Patient: <strong>{apt.patientName}</strong></p>
                <p><Calendar size={15} /> {apt.date} &nbsp; <Clock size={15} /> {apt.timeSlot}</p>
                {apt.reason && <p className="reason">Note: {apt.reason}</p>}
              </div>
              <button
                className="btn-danger"
                onClick={() => onCancel(apt.id)}
                title="Cancel Appointment"
              >
                <Trash2 size={16} /> Cancel
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
