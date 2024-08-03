# Carepluse - Patient Management System

Welcome to **Carepluse**, a comprehensive patient management system designed to be used by hospitals and patients. Carepluse simplifies the process of managing patient information, scheduling appointments, and communicating effectively.

## Features

### For Patients:
- **Registration and Login:** Patients can easily register and log in to their accounts.
- **Dashboard:** Patients have their own dashboard to view and manage their information.
- **Book Appointments:** Patients can book appointments with doctors.
- **Appointment History:** Patients can view their past appointments and their statuses.
- **Appointment Status:** Patients can check the status of their scheduled appointments.

### For Admin:
- **Admin Panel:** Admins can view all the appointments.
- **Schedule Appointments:** Admins can schedule and manage patient appointments.
- **Messaging Service:** Integration with Twilio to send SMS notifications when appointments are scheduled or cancelled.

## Technologies Used

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=appwrite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Twilio](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=twilio&logoColor=white)
![Shadcn](https://img.shields.io/badge/Shadcn-000000?style=for-the-badge&logo=shadcn&logoColor=white)

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- Appwrite setup
- Twilio account

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/lingeshnafeax/carepluse.git
    cd carepluse
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Setup environment variables:
    Create a `.env` file in the root directory and add your Appwrite and Twilio credentials.
    ```plaintext
    NEXT_PUBLIC_APPWRITE_ENDPOINT=<Your Appwrite Endpoint>
    NEXT_PUBLIC_APPWRITE_PROJECT=<Your Appwrite Project ID>
    NEXT_PUBLIC_APPWRITE_API_KEY=<Your Appwrite API Key>
    TWILIO_ACCOUNT_SID=<Your Twilio Account SID>
    TWILIO_AUTH_TOKEN=<Your Twilio Auth Token>
    TWILIO_PHONE_NUMBER=<Your Twilio Phone Number>
    ```

4. Run the application:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Patient Dashboard
- Register or log in to access your dashboard.
- Book appointments by selecting the available slots.
- View the history of your appointments and their statuses.

### Admin Panel
- Log in as an admin to access the admin panel.
- View all the appointments scheduled.
- Schedule new appointments or cancel existing ones.
- Patients will receive SMS notifications when appointments are scheduled or cancelled.

## Screenshots

### Patient Dashboard
![Patient Dashboard](https://github.com/user-attachments/assets/0708a045-0ef9-407d-bc4c-d5f409eaff9e)
![Patient Appointment History](https://github.com/user-attachments/assets/e272d894-de43-4d44-97a3-3856c5cc72f6)


### Admin Panel
![Admin Panel](https://github.com/user-attachments/assets/08fc8223-3d30-45ad-badb-23fa395edc06)



## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, please contact:
- Email: [wlingesh260@gmail.com](mailto:wlingesh260@gmail.com)
- LinkedIn: [Lingesh Patturaj](https://www.linkedin.com/in/lingeshpatturaj)

---

Thank you for using Carepluse! Let's build a healthier future together.
