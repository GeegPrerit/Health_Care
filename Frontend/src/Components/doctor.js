import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const Teacher = () => {
  const [doctor, setDoctor] = useState(null);
  const [patients, setPatients] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [doctorName, setDoctorName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [doctorImage, setDoctorImage] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      let jwttoken = sessionStorage.getItem("jwttoken");
      const response = await fetch("https://localhost:7037/api/Patient", {
        headers: {
          Authorization: "bearer " + jwttoken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setPatients(data);
      } else {
        console.error("Error fetching patients:", response.statusText);
        window.alert("Unauthorized");
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const handleAddDetails = () => {
    setShowForm((prevState) => !prevState);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (doctorName && phoneNumber && doctorImage) {
      try {
        const formData = new FormData();
        formData.append("doctorName", doctorName);
        formData.append("specialization", specialization);
        formData.append("phoneNumber", phoneNumber);
        formData.append("status", "Inactive");
        formData.append("doctorImage", doctorImage);

        let jwttoken = sessionStorage.getItem("jwttoken");
        const response = await fetch("https://localhost:7037/api/Doctor", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + jwttoken,
          },
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Response:", data);
          fetchPatients();
        } else {
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }

    setDoctorName("");
    setSpecialization("");
    setPhoneNumber("");
    setDoctorImage(null);
    setShowForm(false);
  };

  const handleImageChange = (e) => {
    setDoctorImage(e.target.files[0]);
  };

  return (
    <div>
      <h1>Patient List</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient, index) => (
            <tr key={patient.id}>
              <td>{index + 1}</td>
              <td>{patient.firstName}</td>
              <td>{patient.lastName}</td>
              <td>{patient.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleAddDetails} className="btn btn-primary">
        {showForm ? "Hide Form" : "Add Details"}
      </button>

      {showForm && (
        <form onSubmit={handleFormSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="name">Doctor Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={doctorName}
              onChange={(e) => setDoctorName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="specialization">Specialization</label>
            <input
              type="text"
              id="specialization"
              className="form-control"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              className="form-control"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="doctorImage">Doctor Image</label>
            <input
              type="file"
              id="doctorImage"
              className="form-control"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Teacher;
