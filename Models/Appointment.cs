using System;

namespace DoctorPatients.Models
{
    public class Appointment
    {
        public int Id { get; set; }
        public DateTime? Date { get; set; }
        public string? PatientName { get; set; }
        public string? DoctorName { get; set; }
        public string? Description { get; set; }
        public string? Status { get; set; }

        public int? PatientId { get; set; }
        public Patient? Patient { get; set; }

        public int? DoctorId { get; set; }
        public Doctor? Doctor { get; set; }
    }
}
