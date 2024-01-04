using DoctorPatients.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace DoctorPatients.Repository
{
    public class AppointmentRepository : IAppointmentRepository
    {
        private readonly HealthcareDbContext _context;

        public AppointmentRepository(HealthcareDbContext context)
        {
            _context = context;
        }

        public void CreateAppointment(Appointment appointment)
        {
            _context.Appointments.Add(appointment);
            _context.SaveChanges();
        }

        public IEnumerable<Appointment> GetAllAppointments()
        {
            return _context.Appointments.ToList();
        }

        public IEnumerable<Appointment> GetAppointmentsByPatientId(int patientId)
        {
            return _context.Appointments.Where(a => a.Id == patientId).ToList();
        }

        public IEnumerable<Appointment> GetAppointmentsByDoctorId(int doctorId)
        {
            return _context.Appointments.Where(a => a.Id == doctorId).ToList();
        }

        public Appointment GetAppointmentById(int id)
        {
            return _context.Appointments.FirstOrDefault(a => a.Id == id);
        }

        public void DeleteAppointment(int id)
        {
            var appointment = _context.Appointments.Find(id);
            if (appointment != null)
            {
                _context.Appointments.Remove(appointment);
                _context.SaveChanges();
            }
        }
    }
}
