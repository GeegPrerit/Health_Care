using DoctorPatients.Models;
using System.Collections.Generic;

namespace DoctorPatients.Repository
{
    public interface IAppointmentRepository
    {
        void CreateAppointment(Appointment appointment);
        IEnumerable<Appointment> GetAllAppointments();
        IEnumerable<Appointment> GetAppointmentsByPatientId(int patientId);
        IEnumerable<Appointment> GetAppointmentsByDoctorId(int doctorId);
        Appointment GetAppointmentById(int id);
        void DeleteAppointment(int id);
    }
}
