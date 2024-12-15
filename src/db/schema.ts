import {
  pgTable,
  serial,
  numeric,
  timestamp,
  varchar,
  boolean,
  pgEnum,
  integer,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { pg } from "./database";


// Assuming you have a media table with an 'id' column
export const reservations = pgTable("aml_reservations", {
  id: serial("id").primaryKey(),
  userID: integer("userID").notNull().references(() => user.id, { onDelete: "cascade" }),
  itemID: integer('itemID').notNull().references(() => libaryItem.id, { onDelete: "cascade" }),
  startDate: timestamp("startDate", { mode: "string" }).notNull().defaultNow(),
  endDate: timestamp("endDate", { mode: "string" }).notNull().defaultNow(),

});

//const userTypeEnum = pgEnum("itemType", ["LibaryMember","Libarian","BranchManager","AmlAdministrator","CallCenterOperator","Accountant","PurchaseManager","Admin","BranchLibrarian"])

export const user = pgTable("aml_user",{
  id: serial("id").primaryKey(),
  //userType: userTypeEnum("userType").default("LibaryMember").notNull(),
  userType: varchar("userType").default("LibaryMember").notNull(),
  firstName: varchar("firstName", { length: 255 }).notNull(),
  lastName: varchar("lastName", { length: 255 }).notNull(),
  dob: timestamp("dob", { mode: "string" }).notNull().defaultNow(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  userName: varchar("firstName", { length: 255 }).notNull(),
  password: varchar("firstName", { length: 255 }).notNull(),
});

//const itemTypeEnum = pgEnum("itemType", ["game","book","dvd","cd"])

export const libaryItem = pgTable("aml_libaryItems",{
  id: serial("id").primaryKey(),
  itemName: varchar("itemName", {length: 255}).notNull(),
  itemPrice: integer("itemPrice").notNull(),
  //type: itemTypeEnum("type").notNull(),
  type: varchar("type").notNull(),
  gameAgeRating: integer("game_age_rating"),
  dvdAgeRating: integer("dvd_age_rating"),
  cdExplicitContent: boolean("cd_explicit_content"),
  bookAuthor: varchar("book_author", { length: 100 }),
  itemAvailability: boolean("itemAvailability").default(true).notNull(),
});



