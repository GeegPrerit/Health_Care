using DoctorPatients.Models;
using DoctorPatients.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace DoctorPatients.Controllers
{
    //[Authorize(Roles = "Admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorRepository _context;

        public DoctorController(IDoctorRepository context)
        {
            _context = context;
        }

        //[Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<Doctor>> PostCour( Doctor d)
        {
            _context.AddDoctor(d);
            return Ok(d);
        }

        [HttpGet]
        public ActionResult<ICollection<Doctor>> GetCour()
        {
            var res = _context.GetDoctor();
            return Ok(res);
        }

        [HttpGet("{id}")]
        public ActionResult<ICollection<Doctor>> GetCour(int id)
        {
            var res = _context.GetDoctor(id);
            return Ok(res);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _context.DeleteDoctor(id);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Doctor doctor)
        {
            _context.UpdateDoctor(id, doctor);
            return NoContent();
        }
    }
}
