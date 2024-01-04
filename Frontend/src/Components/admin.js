import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctor();
  }, []);

  const fetchDoctor = () => {
    fetch('https://localhost:7037/api/Doctor')
      .then((response) => response.json())
      .then((data) => {
        setDoctors(data);
      })
      .catch((error) => {
        console.log('Error fetching doctors:', error);
      });
  };

  const updateDoctor = async (id, updatedData) => {
    try {
      const response = await fetch(`https://localhost:7037/api/Doctor/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        console.log('Doctor updated successfully');
        fetchDoctor();
      } else {
        console.error('Error updating docotr:', response.statusText);
        window.alert('Failed to update doctor');
      }
    } catch (error) {
      console.error('Error updating doctor:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-3">Admin Panel</h2>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Doctor Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor.id}>
              <td>{index + 1}</td>
              <td>{doctor.doctorName}</td>
              <td>
                <button
                  className={`btn btn-${
                    doctor.status === "Active" ? "success" : "warning"
                  }`}
                  onClick={() =>
                    updateDoctor(doctor.id, {
                      ...doctor,
                      Status:
                      doctor.status === "Active" ? "Inactive" : "Active",
                    })
                  }
                >
                  {doctor.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
