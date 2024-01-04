using DoctorPatients.Models;

namespace DoctorPatients.Repository
{
    public interface IDoctorRepository
    {
        IEnumerable<Doctor> GetDoctor();
        Doctor GetDoctor(int id);
        void AddDoctor(Doctor stu);

        void UpdateDoctor(int id, Doctor stu);
        void DeleteDoctor(int id);
    }
}
