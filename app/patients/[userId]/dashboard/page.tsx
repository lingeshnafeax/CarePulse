import { getPatient, getUser } from "@/lib/actions/patient.actions";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SubCard from "@/components/ui/SubCard";
import { getAppointmentsByPatientId } from "@/lib/actions/appointment.actions";
import { AdminProps } from "@/app/admin/page";

import { PatientAppointments } from "@/components/table/RecentAppointmentsTable";
import { PatientColumns } from "@/components/table/PatientColumns";
import { revalidatePath } from "next/cache";

const Dashboard = async ({ params: { userId } }: SearchParamProps) => {
  
  revalidatePath(`/patients/${userId}/dashboard`, "page");
  const user = await getUser(userId);
  const patient = await getPatient(userId);
  const fetchedAppointments: AdminProps = await getAppointmentsByPatientId(
    userId
  );

  return (
    <>
      <div className="mx-12 mt-12 min-h-screen">
        <div className="flex justify-between  ">
          <h1 className="text-5xl font-bold">
            Hello{" "}
            <span className="bg-gradient-to-r from-teal-400 to-yellow-200 text-transparent bg-clip-text">
              {user.name}
            </span>
            👋
          </h1>
          <Button variant="link" className="bg-green-500 text-black">
            <Link href={`/patients/${userId}/new-appointment`}>
              New Appointment
            </Link>
          </Button>
        </div>
        <Card className="border-none">
          <CardHeader className="text-24-bold px-0 my-3">
            Personal Details
          </CardHeader>
          <div className="flex lg:flex-row flex-wrap gap-12 sm:flex-col justify-around">
            <SubCard header="Email" description={patient.email}></SubCard>
            <SubCard header="Phone" description={patient.phone}></SubCard>
            <SubCard header="Gender" description={patient.gender}></SubCard>
            <SubCard
              header="Birthdate"
              description={patient.birthDate}
            ></SubCard>
            <SubCard header="Address" description={patient.address}></SubCard>
            <SubCard
              header="Occupation"
              description={patient.occupation}
            ></SubCard>
            <SubCard
              header="Emergency Contact Name"
              description={patient.emergencyContactName}
            ></SubCard>
            <SubCard
              header="Emergency Contact Number"
              description={patient.emergencyContactNumber}
            ></SubCard>
            <SubCard
              header="Insurance Provider"
              description={patient.insuranceProvider}
            ></SubCard>
            <SubCard
              header="Insurance Policy Number"
              description={patient.insurancePolicyNumber}
            ></SubCard>
            <SubCard
              header="Allergies"
              description={patient.allergies}
            ></SubCard>
            <SubCard
              header="Current Medication"
              description={patient.currentMedication}
            ></SubCard>
            <SubCard
              header="Family Medical History"
              description={patient.familyMedicalHistory}
            ></SubCard>
            <SubCard
              header="Past Medical History"
              description={patient.pastMedicalHistory}
            ></SubCard>
            <SubCard
              header="Identification Type"
              description={patient.identificationType}
            ></SubCard>
            <SubCard
              header="Identification Number"
              description={patient.identificationNumber}
            ></SubCard>
            <SubCard
              header="Primary Physician"
              description={patient.primaryPhysician}
            ></SubCard>
          </div>
        </Card>
      </div>
      <div className="mx-12">
        <h1 className="my-10 text-24-bold ">Recent appointments</h1>
        <PatientAppointments
          columns={PatientColumns}
          data={fetchedAppointments?.documents}
        />
      </div>
    </>
  );
};

export default Dashboard;
