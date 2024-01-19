using DoctorPatients.Models;

namespace DoctorPatients.Repository
{
    public class DoctorRepository : IDoctorRepository
    {
        private readonly HealthcareDbContext _context;

        public DoctorRepository(HealthcareDbContext context)
        {
            _context = context;
        }

        public void AddDoctor(Doctor doc)
        {

            _context.Doctors.Add(doc);
            _context.SaveChanges();
        }


        public void DeleteDoctor(int id)
        {
            var doctor = _context.Doctors.Find(id);
            if (doctor != null)
            {
                _context.Doctors.Remove(doctor);
                _context.SaveChanges();
            }
        }

        public IEnumerable<Doctor> GetDoctor()
        {
            return _context.Doctors.ToList();
        }

        public Doctor GetDoctor(int id)
        {
            var doctor = _context.Doctors.Find(id);
            return doctor;
        }

        public void UpdateDoctor(int id, Doctor doc)
        {
            var existingDoctor = _context.Doctors.Find(id);
            if (existingDoctor != null)
            {
                existingDoctor.Status = doc.Status;
                _context.Doctors.Update(existingDoctor);
                _context.SaveChanges();
            }
        }
    }
}
