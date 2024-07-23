// "use client";

// import { DataTable } from "@/components/table/DataTable";
// import StatCard from "@/components/StatCard";
// import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";
// import Image from "next/image";
// import Link from "next/link";

// import { columns } from "@/components/table/columns";
// import { useEffect, useState } from "react";

// interface AdminProps {
//   scheduledCount: number;
//   pendingCount: number;
//   cancelledCount: number;
//   documents: any[];
// }
// const Admin = () => {
//   const [appointments, setAppointments] = useState({
//     scheduledCount: 0,
//     pendingCount: 0,
//     cancelledCount: 0,
//     documents: [],
//   });

//   useEffect(() => {
//     const getAppointments = async () => {
//       const data = await getRecentAppointmentList();
//       setAppointments(data);
//     };
//     getAppointments();
//   }, []);

//   return (
//     <div className="mx-auto flex max-w-7xl flex-col space-y-14">
//       <header className="admin-header">
//         <Link href="/" className="cursor-pointer">
//           <Image
//             src="/assets/icons/logo-full.svg"
//             height={32}
//             width={162}
//             alt="logo"
//             className="h-8 w-fit"
//           ></Image>
//         </Link>
//         <p className="text-16-semibold  ">Admin Dashboard</p>
//       </header>
//       <main className="admin-main">
//         <section className="w-full space-y-4">
//           <h1 className="header">Welcome 👋</h1>
//           <p className="text-dark-700 ">
//             Start managing the appointments easily
//           </p>
//         </section>
//         <section className="admin-stat">
//           <StatCard
//             type="appointments"
//             count={appointments.scheduledCount}
//             label="Scheduled appointments"
//             icon="/assets/icons/appointments.svg"
//           ></StatCard>
//           <StatCard
//             type="pending"
//             count={appointments.pendingCount}
//             label="Pending appointments"
//             icon="/assets/icons/pending.svg"
//           ></StatCard>
//           <StatCard
//             type="cancelled"
//             count={appointments.cancelledCount}
//             label="Cancelled appointments"
//             icon="/assets/icons/cancelled.svg"
//           ></StatCard>
//         </section>
//         <DataTable data={appointments.documents} columns={columns}></DataTable>
//       </main>
//     </div>
//   );
// };
// export default Admin;

import Image from "next/image";
import Link from "next/link";
import { revalidatePath } from "next/cache";

import StatCard from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

export interface AdminProps {
  scheduledCount: number;
  pendingCount: number;
  cancelledCount: number;
  documents: any[];
}

const AdminPage = async () => {
  revalidatePath("/admin");
  const appointments = (await getRecentAppointmentList()) as AdminProps;

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/logo-full.svg"
            height={32}
            width={162}
            alt="logo"
            className="h-8 w-fit"
          />
        </Link>

        <p className="text-16-semibold">Admin Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new appointments
          </p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;
