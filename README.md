# Our Hospital React Website

This is a README file for the Our Hospital React website project. The project aims to create a website for a hospital called "Our Hospital" using React. The website includes various components such as a navbar, home, footer, contact us, about us, doctor, patient, admin, login, and signup.

## Project Structure

src/components: Contains the various components used in the website.
src/api: Includes the API controllers for interacting with the backend.
src/App.js: The main entry point of the application.
src/index.js: Renders the root component and mounts it into the DOM

### Functionality

Signup and Login: Users can create an account using the signup component. During signup, users can select their role, either doctor or patient. The user's data is inserted into the database using API controller calls. Users can then log in using their username and password, which generates a token.

Role-Based Access: Upon login, the user's role is fetched from the token. Based on the role, specific components become visible, and the user is restricted from accessing other components. For example, doctors can only access doctor-specific features, and patients can only access patient-specific features.

Patient Services: Patients can avail the available services provided by the hospital. They can schedule appointments with doctors.

Appointment Approval: Doctors can approve or reject appointments made by patients.

Admin Role: The admin role is responsible for activating doctor accounts.

Online Active Doctors: The patient component displays a list of online and active doctors available for consultation.

### Getting Started
To run the Our Hospital React website locally, follow these steps:

### Clone the repository:
git clone https://github.com/your-username/our-hospital.git

### Install the dependencies:
cd our-hospital
npm install

### Configure the backend API:
Update the API endpoints in the src/api files to point to your backend server.
Set up the necessary backend endpoints for user authentication, role-based access, patient services, appointment management, and admin functions.


### Start the development server:
npm start

Open your browser and visit http://localhost:3000 to access the Our Hospital React website.


## Contributing

Contributions to the Our Hospital React website project are welcome. If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

### License

This project was developed as a sample website for an imaginary hospital. We acknowledge the efforts of all contributors who made this project possible.

Note: This README file is a template and should be updated with relevant information specific to your Our Hospital React website.

### Screenshots
![Screenshot 2023-07-05 142553](https://github.com/GeegPrerit/Health_Care/assets/127297823/7ef34ee9-4cea-47c1-b6c9-903401aab727)

![Screenshot 2023-07-05 142611](https://github.com/GeegPrerit/Health_Care/assets/127297823/2eb24a80-8f89-4a12-9771-3928e299a233)

![image](https://github.com/GeegPrerit/Health_Care/assets/127297823/33932ff5-0e00-4dee-9409-2332b98201b9)

![Screenshot 2023-07-05 142643](https://github.com/GeegPrerit/Health_Care/assets/127297823/79dc4656-53a4-45a5-9fb2-0acc1dc103f4)


![Screenshot 2023-07-05 142716](https://github.com/GeegPrerit/Health_Care/assets/127297823/4f01e221-54a3-496d-8922-af71db9c387f)

![image](https://github.com/GeegPrerit/Health_Care/assets/127297823/e4903c3d-69b8-44ae-8c60-4d5599221209)

![image](https://github.com/GeegPrerit/Health_Care/assets/127297823/8fd12461-1d1e-49a4-aa69-412be6f8c811)

![image](https://github.com/GeegPrerit/Health_Care/assets/127297823/e62d3c48-cf98-4a8f-9dc3-baa4fd78cfd1)



