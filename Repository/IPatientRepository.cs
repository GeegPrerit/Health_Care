using DoctorPatients.Models;

namespace DoctorPatients.Repository
{
    public interface IPatientRepository
    {
        IEnumerable<Patient> GetPatient();
        Patient GetPatient(int id);
        void AddPatient(Patient stu);

        void UpdatePatient(int id, Patient stu);
        void DeletePatient(int id);
    }
}
