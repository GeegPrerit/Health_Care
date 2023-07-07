using DoctorPatients.Models;
using DoctorPatients.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace DoctorPatients.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private readonly IAppointmentRepository _repository;

        public AppointmentController(IAppointmentRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public ActionResult<Appointment> CreateAppointment(Appointment appointment)
        {
            // Perform any validation or business logic if required

            _repository.CreateAppointment(appointment);
            return Ok(appointment);
        }

        [HttpGet]
        public ActionResult<IEnumerable<Appointment>> GetAllAppointments()
        {
            var appointments = _repository.GetAllAppointments();
            return Ok(appointments);
        }

        [HttpGet("patient/{patientId}")]
        public ActionResult<IEnumerable<Appointment>> GetAppointmentsByPatientId(int patientId)
        {
            var appointments = _repository.GetAppointmentsByPatientId(patientId);
            return Ok(appointments);
        }

        [HttpGet("doctor/{doctorId}")]
        public ActionResult<IEnumerable<Appointment>> GetAppointmentsByDoctorId(int doctorId)
        {
            var appointments = _repository.GetAppointmentsByDoctorId(doctorId);
            return Ok(appointments);
        }

        [HttpGet("{id}")]
        public ActionResult<Appointment> GetAppointmentById(int id)
        {
            var appointment = _repository.GetAppointmentById(id);
            if (appointment == null)
            {
                return NotFound();
            }
            return Ok(appointment);
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteAppointment(int id)
        {
            var appointment = _repository.GetAppointmentById(id);
            if (appointment == null)
            {
                return NotFound();
            }
            _repository.DeleteAppointment(id);
            return NoContent();
        }
    }
}
