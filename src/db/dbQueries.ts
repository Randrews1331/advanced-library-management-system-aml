// import { database } from "./database";
// import { pg } from "./database";
// import { libaryItem, reservations, user } from "@/db/schema";
// import bcrypt from 'bcryptjs';
// import {
//   pgTable,
//   serial,
//   numeric,
//   timestamp,
//   varchar,
//   boolean,
//   pgEnum,
//   integer,
//   PgDelete,
// } from "drizzle-orm/pg-core";
// import { eq } from 'drizzle-orm/expressions';

// export const userLogin = async (email: string, password: string) => {
//   try {
//     const existingUser = await database
//       .select()
//       .from(user)
//       .where(eq(user.email, email))
//       .limit(1)
//       .execute();

//     if (existingUser.length === 0) {
//       throw new Error("User not found");
//     }

//     const userRecord = existingUser[0];
//     const isPasswordValid = await bcrypt.compare(password, userRecord.password);

//     if (isPasswordValid) {
//       console.log("Login successful!");
//     } else {
//       console.log("Invalid credentials");
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//   }
// };

// export const userSignUp = async (firstName: string, lastName: string, email: string, userName: string, password: string) => {
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await database.insert(user).values({
//       firstName,
//       lastName,
//       email,
//       userName,
//       password: hashedPassword,
//     });
//     console.log("User registered successfully!");
//   } catch (error) {
//     console.error("Error during signup:", error);
//   }
// };

// export const getAllUsers = async () => {
//   try {
//     const allUsers = await database
//       .select()
//       .from(user)
//       .execute();

//     if (allUsers.length === 0) {
//       console.log("No users found.");
//     } else {
//       console.log("All users:", allUsers);
//     }
//   } catch (error) {
//     console.error("Error fetching users:", error);
//   }
// };

// export const getCertainUser = async (email: string) => {
//   try {
//     const allUsers = await database
//       .select()
//       .from(user)
//       .where(eq(user.email, email))
//       .execute();

//     if (allUsers.length === 0) {
//       console.log("No users found.");
//     } else {
//       console.log("All users:", allUsers);
//     }
//   } catch (error) {
//     console.error("Error fetching users:", error);
//   }
// };

// export const addReservation = async (userID: number, itemID: number, startDate: string, endDate: string) => {
//   try {
//     await database.insert(reservations).values({
//       userID,
//       itemID,
//       startDate,
//       endDate,
//     });

//     console.log("Reservation added successfully!");
//   } catch (error) {
//     console.error("Error during reservation:", error);
//   }
// };

// export const updateReservation = async (
//   reservationID: number,
//   startDate?: string,
//   endDate?: string,
//   status?: string,
// ) => {
//   try {
//     const updatedFields: { [key: string]: any } = {};

//     if (startDate) updatedFields.startDate = startDate;
//     if (endDate) updatedFields.endDate = endDate;
//     if (status) updatedFields.status = status;

//     if (Object.keys(updatedFields).length === 0) {
//       console.log("No fields to update.");
//       return;
//     }

//     // Ensure 'reservations.id' is compared correctly with reservationID using eq
//     const result = await database
//       .update(reservations)
//       .set(updatedFields)
//       .where(eq(reservations.id, reservationID))  // Correctly use eq
//       .execute();

//     console.log("Reservation updated successfully!");
//     return result;
//   } catch (error) {
//     console.error("Error updating reservation:", error);
//   }
// };

// export const getUserReservations = async (userID: number) => {
//   try {
//     const userReservations = await database
//       .select()
//       .from(reservations)
//       .where(eq(reservations.userID, userID))  // Filter by the userID in the reservations table
//       .execute();

//     if (userReservations.length === 0) {
//       console.log("No reservations found for this user.");
//       return [];
//     }

//     console.log("Reservations fetched successfully!");
//     return userReservations;
//   } catch (error) {
//     console.error("Error fetching reservations:", error);
//   }
// };


// export const deleteReservation = async (reservationID: number) => {
//   try {
//     // Deleting reservation by reservation ID
//     const result = await database
//       .delete()
//       .from(reservations)
//       .where(eq(reservations.id, reservationID))  // Ensure we are using the correct column and value
//       .execute();

//     if (result.count === 0) {
//       console.log("Reservation not found.");
//     } else {
//       console.log("Reservation deleted successfully!");
//     }
//   } catch (error) {
//     console.error("Error deleting reservation:", error);
//   }
// };

// export const checkUserType = async (userID: number) => {
//   try {
//     const existingUser = await database
//       .select()
//       .from(user)
//       .where(user.id.eq(userID))
//       .limit(1)
//       .execute();

//     if (existingUser.length === 0) {
//       throw new Error("User not found");
//     }

//     const userRecord = existingUser[0];
//     const userType = userRecord.userType;

//     console.log(`UserType: ${userType}`);
//     return userType;
//   } catch (error) {
//     console.error("Error fetching user type:", error);
//   }
// };

// export const getAllLibraryItems = async () => {
//   try {
//     const items = await database.select().from(libaryItem).execute();
//     console.log("Library Items:", items);
//     return items;
//   } catch (error) {
//     console.error("Error fetching library items:", error);
//   }
// };
