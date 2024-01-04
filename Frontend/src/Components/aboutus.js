import React from 'react';

function AboutUs() {
  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Welcome to Our Hospital</h2>
          <p>
            We are a dedicated team of healthcare professionals committed to providing exceptional medical care and services to our patients. With a focus on compassion, expertise, and innovation, we strive to improve the health and well-being of our community.
          </p>
          <p>
            At our hospital, we believe in a patient-centered approach, where each individual's needs and preferences are prioritized. Our team consists of highly skilled doctors, nurses, and support staff who work collaboratively to deliver personalized and comprehensive care to our patients.
          </p>
          <p>
            We are equipped with state-of-the-art facilities and advanced medical technologies to ensure accurate diagnoses, effective treatments, and successful outcomes. Our commitment to continuous learning and staying at the forefront of medical advancements enables us to provide the highest quality of care to our patients.
          </p>
          <p>
            Beyond our medical expertise, we are dedicated to creating a warm and supportive environment for our patients. We understand that a hospital visit can be challenging, and we strive to provide comfort, empathy, and respect to all individuals who walk through our doors.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Specialized Programs and Clinics</h2>
          <ul className="list-group">
            <li className="list-group-item">Cardiology Clinic: Dedicated to diagnosing and treating heart conditions</li>
            <li className="list-group-item">Oncology Department: Providing comprehensive cancer care and support</li>
            <li className="list-group-item">Orthopedic Center: Specializing in bone and joint treatments and surgeries</li>
            <li className="list-group-item">Women's Health Services: Offering a wide range of services for women's health and wellness</li>
            <li className="list-group-item">Pediatric Unit: Focused on the health and well-being of children</li>
            <li className="list-group-item">Mental Health Services: Providing support and treatment for mental health conditions</li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <h2>Community Engagement</h2>
          <p>
            Our hospital is actively engaged in community outreach programs, health education initiatives, and partnerships with other healthcare organizations to promote wellness and improve access to healthcare services for all. We are proud to be an integral part of the community we serve.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Our Commitment</h2>
          <p>
            In addition to our medical services, we prioritize the following aspects:
          </p>
          <ul className="list-group">
            <li className="list-group-item">Patient Safety and Care Quality</li>
            <li className="list-group-item">Continuous Professional Development</li>
            <li className="list-group-item">Technology and Innovation</li>
            <li className="list-group-item">Patient and Family Engagement</li>
            <li className="list-group-item">Ethical and Transparent Practices</li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h2>Our Vision</h2>
          <p>
            Our vision is to be a trusted healthcare institution that provides exceptional medical care, promotes wellness, and advances healthcare practices through innovation and community collaboration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
