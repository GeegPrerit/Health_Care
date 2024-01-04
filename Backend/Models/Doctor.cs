using System.ComponentModel.DataAnnotations;

namespace DoctorPatients.Models
{
    public class Doctor
    {
        [Key]
        public int Id { get; set; }
        public string? DoctorName { get; set; }
        public string? Specialization { get; set; }
        public string? Status { get; set; }

        public string? Phone { get; set; }
        public byte[]? DoctorImage { get; set; }


        public ICollection<Appointment>? Appointments { get; set; }

    }
}
