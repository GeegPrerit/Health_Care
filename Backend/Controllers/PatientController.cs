using DoctorPatients.Models;
using DoctorPatients.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DoctorPatients.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly IPatientRepository _context;

        public PatientController(IPatientRepository context)
        {
            _context = context;
        }



        [HttpPost]
        public ActionResult<ICollection<Patient>> PostCour(Patient d)
        {
            _context.AddPatient(d);
            return Ok(d);
        }

        [HttpGet]

        public ActionResult<ICollection<Patient>> GetCour()
        {
            var res = _context.GetPatient();
            return Ok(res);
        }

        [HttpGet("{id}")]

        public ActionResult<ICollection<Patient>> GetCour(int id)
        {
            var res = _context.GetPatient(id);
            return Ok(res);
        }


        [HttpDelete("{id}")]

        public void Delete(int id)
        {
            _context.DeletePatient(id);
        }

        [HttpPut]

        public void Put(Patient d)
        {
            _context.AddPatient(d);
        }
    }
}
