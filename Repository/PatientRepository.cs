using DoctorPatients.Models;

namespace DoctorPatients.Repository
{
    public class PatientRepository:IPatientRepository
    {
        private readonly HealthcareDbContext _context;
        public PatientRepository(HealthcareDbContext context)
        {
            _context = context;
        }
        //all details going to be fetched
        public IEnumerable<Patient> GetPatient()
        {
            return _context.Patients.ToList();
        }
        public Patient GetPatient(int id)
        {
            var userobj = _context.Patients.Find(id);
            return userobj;
        }
        public void AddPatient(Patient co)
        {
            _context.Patients.Add(co);
            _context.SaveChanges();
        }



        public void UpdatePatient(int id, Patient stu)
        {
            var res1 = _context.Patients.Find(id);
            res1.FirstName = stu.FirstName;
            res1.LastName = stu.LastName;
            res1.Email = stu.Email;
            res1.Phone = stu.Phone;

            _context.Patients.Update(res1);
            _context.SaveChanges();
        }

        public void DeletePatient(int id)
        {
            throw new NotImplementedException();
        }
    }
}
