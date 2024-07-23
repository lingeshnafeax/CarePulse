"use server";
import { ID, Query } from "node-appwrite";
import { parseStringify } from "../utils";
import { database, storage, users } from "../appwrite.config";
import { InputFile } from "node-appwrite/file";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    return parseStringify(newUser);
  } catch (err: any) {
    console.log("Error creating user", err?.code);
    if (err && err?.code === 409) {
      // const documents = await users.list([Query.equal("email", user.email)]);
      // return documents?.users[0];
      return { errMessage: "User already found. Try to login" };
    }
  }
};

export const loginUser = async (user: CreateUserParams) => {
  try {
    const documents = await users.list([Query.equal("email", user.email)]);
    return documents?.users[0];
  } catch (err) {
    console.log("Failed to login", err);
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);
    return parseStringify(user);
  } catch (err) {
    console.log(err);
  }
};
export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
    let file;
    if (identificationDocument) {
      const inputFile =
        identificationDocument &&
        InputFile.fromBuffer(
          identificationDocument?.get("blobFile") as Blob,
          identificationDocument?.get("fileName") as string
        );

      file = await storage.createFile(
        process.env.NEXT_PUBLIC_BUCKET_ID!,
        ID.unique(),
        inputFile
      );
    }
    // Create new patient document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
    const newPatient = await database.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id ? file.$id : null,
        identificationDocumentUrl: `${process.env.NEXT_PUBLIC_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_BUCKET_ID}/files/${file?.$id}/view??project=${process.env.NEXT_PUBLIC_PROJECT_ID}`,
        ...patient,
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};
export const getPatient = async (userId: string) => {
  try {
    const patients = await database.listDocuments(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_PATIENT_COLLECTION_ID!,
      [Query.equal("userId", userId)]
    );
    return parseStringify(patients.documents[0]);
    // const patient = await database.getDocument(
    //   process.env.NEXT_PUBLIC_DATABASE_ID!,
    //   process.env.NEXT_PUBLIC_PATIENT_COLLECTION_ID!,
    //   userId
    // );
    // return parseStringify(patient);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
};
