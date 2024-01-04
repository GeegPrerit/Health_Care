using System.ComponentModel.DataAnnotations;

namespace DoctorPatients.Models
{
    public class Patient
    {

        [Key]
        public int Id { get; set; }
        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public string? Email { get; set; }
        public string? Phone { get; set; }

        public int PatientId { get; set; }


        public ICollection<Appointment>? Appointments { get; set; }

    }
}
