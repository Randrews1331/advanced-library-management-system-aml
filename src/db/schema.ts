import { pgTable, serial, varchar, integer, date, foreignKey, enumType } from "drizzle-orm/pg-core";

// Assuming you have a media table with an 'id' column
export const reservations = pgTable("aml_reservations", {
  id: serial("id").primaryKey(),
  mediaName: varchar("media_name", { length: 255 }).notNull(),  // Name of the media
  mediaId: integer("media_id").notNull(),  // ID linking to the media table
  startDate: date("start_date").notNull(),  // Start date of the reservation
  endDate: date("end_date").notNull(),  // End date of the reservation
});

// Define a foreign key relationship to a media table
export const media = pgTable("media", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
});
reservations.mediaId.addConstraint(foreignKey({ columns: [reservations.mediaId], references: [media.id] }));

enum Role {
  USER = "user",
  ADMIN = "admin",
}

export const usersAndAdmins = pgTable("users_and_admins", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  role: enumType("role", Role).notNull(), // Define user role (user/admin)
});