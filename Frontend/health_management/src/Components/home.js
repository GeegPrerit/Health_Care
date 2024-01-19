import React from 'react';
import hospitalImage1 from '../img/hospital.webp';
import hospitalImage2 from '../img/hospital2.jpeg';
import physician from '../img/physician.jpg'
import cardio from '../img/cardio.jpeg'


function Home() {
    const products = [
        {
            id: 1,
            name: 'Cardiology',
            price: 19.99,
            image: hospitalImage1,
        },
        {
            id: 2,
            name: 'Radiology',
            price: 29.99,
            image: hospitalImage1,
        },
        {
            id: 3,
            name: 'Dermatology',
            price: 39.99,
            image: hospitalImage1,
        },
        {
            id: 4,
            name: 'Physician',
            price: 39.99,
            image: hospitalImage1,
        },
        {
            id: 5,
            name: 'Neurology',
            price: 39.99,
            image: hospitalImage1,
        },
        {
            id: 6,
            name: 'Dermatology',
            price: 39.99,
            image: hospitalImage1,
        },
    ];

    return (
        <div>
            <h1>Welcome to Our Hospital</h1>
            <h3>Providing Quality Healthcare Services</h3>
            <img src={hospitalImage1} alt="Hospital" />
            <p>
                At our hospital, we are committed to providing exceptional healthcare services to our patients. We prioritize the well-being and recovery of each individual, offering a wide range of medical treatments and personalized care.

                Our team of dedicated healthcare professionals includes experienced doctors, nurses, and support staff who are passionate about delivering the highest standard of care. We strive to create a comforting and safe environment for our patients, ensuring their comfort and peace of mind throughout their stay.

                Our hospital is equipped with state-of-the-art facilities and advanced medical technology to support accurate diagnoses and effective treatments. We offer a comprehensive range of services, including general medicine, surgery, pediatrics, obstetrics, emergency care, and more.
                In addition to our medical expertise, we believe in the importance of patient education and preventive healthcare. We work closely with our patients to provide them with the necessary information and resources to make informed decisions about their health.

                At our hospital, we understand that each patient is unique, and we strive to provide individualized care tailored to their specific needs. Our compassionate and skilled healthcare professionals are here to listen, support, and guide you through your healthcare journey.

                We are dedicated to continuous improvement and staying at the forefront of medical advancements. Our hospital regularly invests in research, training, and technology to ensure that we offer the best possible care to our patients.

                <br />
                <br />
                <strong>Visit our hospital today and experience the difference in healthcare!</strong>
            </p>

            <h2>Our Services</h2>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <img src={product.image} alt={product.name} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
