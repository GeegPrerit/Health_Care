import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hospitalImage1 from '../img/hospital.webp';
import '../css/patient.css'

export const Student = () => {
  const [doctors, setDoctors] = useState([]);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: "",
    patientName: "",
    description: "",
  });

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      let jwttoken = sessionStorage.getItem("jwttoken");
      const response = await fetch("https://localhost:7037/api/Doctor", {
        headers: {
          Authorization: "bearer " + jwttoken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        // Filter doctors with active status
        const activeDoctors = data.filter(
          (doctor) => doctor.status === "Active"
        );
        setDoctors(activeDoctors);
      } else {
        console.error("Error fetching doctors:", response.statusText);
        window.alert("Unauthorized");
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const handleAppointment = (doctorId) => {
    // Open the appointment pop-up and reset the appointment details
    setIsAppointmentOpen(true);
    setAppointmentDetails({
      date: "",
      patientName: "",
      description: "",
    });
  };

  const handleSubmitAppointment = () => {
    // Handle the submission of appointment details
    // You can perform any necessary validation or API calls here
    // Update the status of the button after submitting the details
    setIsAppointmentOpen(false);
    // Set the button status to "Pending" or update the doctor object with the status
  };

  const handleCancelAppointment = () => {
    // Close the appointment pop-up without submitting the details
    setIsAppointmentOpen(false);
  };

  const services = [
    {
      title: "Medical Consultation",
      description: "Get expert medical advice and treatment plans.",
      image: hospitalImage1,
    },
    {
      title: "Diagnostic Tests",
      description: "Access a wide range of diagnostic tests for accurate diagnoses.",
      image: hospitalImage1,
    },
    {
      title: "Medication and Prescriptions",
      description: "Receive prescribed medications and dosage instructions.",
      image: hospitalImage1,
    },
    {
      title: "Preventive Care",
      description: "Benefit from vaccinations, screenings, and lifestyle counseling.",
      image: hospitalImage1,
    },
    {
      title: "Surgical Procedures",
      description: "Undergo necessary surgical interventions by skilled surgeons.",
      image: hospitalImage1,
    },
    {
      title: "Rehabilitation Services",
      description: "Receive rehabilitative therapy for optimal recovery.",
      image: hospitalImage1,
    },
    {
      title: "Emergency Care",
      description: "Access urgent medical care in critical situations.",
      image: hospitalImage1,
    },
    {
      title: "Specialty Care",
      description: "Receive specialized care from expert healthcare providers.",
      image: hospitalImage1,
    },
    {
      title: "Home Health Care",
      description: "Get healthcare services at home for convenience and comfort.",
      image: hospitalImage1,
    },
  ];

  return (
    <div>
      <h1>Doctor List</h1>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Department</th>
            <th>Phone Number</th>
            <th>Status</th>
            <th>Doctor Image</th>
            <th>Appointment</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor.Id}>
              <td>{index + 1}</td>
              <td>{doctor.doctorName}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.phone}</td>
              <td>{doctor.status}</td>
              <td>
                {doctor.doctorImage && (
                  <img
                    src={`data:image/jpeg;base64,${doctor.doctorImage}`}
                    alt="Doctor"
                    className="doctor-image"
                  />
                )}
              </td>
              <td>
                {doctor.status !== "Pending" ? (
                  <button
                    onClick={() => handleAppointment(doctor.Id)}
                    className="btn btn-primary"
                  >
                    Take Appointment
                  </button>
                ) : (
                  <span>Pending</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isAppointmentOpen && (
        <div className="appointment-popup">
          <div className="appointment-form">
            <h2>Appointment Details</h2>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <input
                type="text"
                id="date"
                className="form-control"
                value={appointmentDetails.date}
                onChange={(e) =>
                  setAppointmentDetails({
                    ...appointmentDetails,
                    date: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="patientName">Patient Name:</label>
              <input
                type="text"
                id="patientName"
                className="form-control"
                value={appointmentDetails.patientName}
                onChange={(e) =>
                  setAppointmentDetails({
                    ...appointmentDetails,
                    patientName: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                className="form-control"
                value={appointmentDetails.description}
                onChange={(e) =>
                  setAppointmentDetails({
                    ...appointmentDetails,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className="buttons">
              <button onClick={handleSubmitAppointment} className="btn btn-primary">
                Submit
              </button>
              <button onClick={handleCancelAppointment} className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <hr />

      <h2>Services for Patients</h2>

      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <img src={service.image} className="card-img-top" alt={service.title} />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <Link to={service.link} className="btn btn-primary">
                  Avail Service
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Student;
