"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Appointment } from "@/types/appwrite.types";
import StatusBadge from "../StatusBadge";
import { formatDateTime } from "@/lib/utils";
import { Doctors } from "@/constants";
import Image from "next/image";
import AppointmentModel from "../AppointmentModel";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<Appointment>[] = [
  {
    header: "ID",
    cell: ({ row }) => {
      return <p className="text-14-medium">{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "patient",
    cell: ({ row }) => {
      return <p className="test-14-medium">{row.original.patient?.name}</p>;
    },
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="min-w-[115px] ">
          <StatusBadge status={row.original.status} />
        </div>
      );
    },
  },
  {
    accessorKey: "schedule",
    header: "Appointment",
    cell: ({ row }) => {
      return (
        <p className="text-14-regular text-white min-w-[100px]">
          {formatDateTime(row.original.schedule).dateTime}
        </p>
      );
    },
  },
  {
    accessorKey: "primaryPhysician",
    header: () => "Doctor",
    cell: ({ row }) => {
      const doctor = Doctors.find(
        (doc) => doc.name === row.original.primaryPhysician
      );
      return (
        <div className="flex items-center gap-3 ">
          <Image
            src={doctor?.image!}
            alt={doctor?.name!}
            height={100}
            width={100}
            className="size-8"
          ></Image>
          <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row: { original: data } }) => {
      return (
        <div className="flex gap-1">
          <AppointmentModel
            type="schedule"
            patientId={data.patient.$id}
            userId={data.userId}
            appointment={data}
          ></AppointmentModel>
          <AppointmentModel
            type="cancel"
            patientId={data.patient.$id}
            userId={data.userId}
            appointment={data}
          ></AppointmentModel>
        </div>
      );
    },
  },
];
