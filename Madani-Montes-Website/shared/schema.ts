import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

// Inquiries/Contact Form Submissions
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  parentName: text("parent_name").notNull(),
  childName: text("child_name").notNull(),
  childAge: integer("child_age"), // Can be null if generic inquiry, but form requires it
  program: text("program").notNull(), // KB, TK A, TK B, TK C, Bimbel, Training
  whatsapp: text("whatsapp").notNull(),
  message: text("message"), // Optional notes
  createdAt: timestamp("created_at").defaultNow(),
  status: text("status").default("new"), // new, contacted, closed
});

// Gallery Items (for dynamic gallery if needed, though requirements mostly imply static/placeholder)
// We'll keep it simple for now, maybe just hardcode in frontend or use a simple schema if dynamic.
// Let's make it dynamic to allow filtering easily from a "database" source if we want,
// or just stick to frontend constants. Given the "placeholder" requirement, frontend constants might be easier.
// But a schema is good practice.
export const galleryItems = pgTable("gallery_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(), // Sekolah, Bimbel, Event
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Programs (to allow easier updates later, though mostly static text in requirements)
export const programs = pgTable("programs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(), // for urls if needed
  description: text("description").notNull(),
  category: text("category").notNull(), // School, Unggulan, Bimbel
  createdAt: timestamp("created_at").defaultNow(),
});


// === SCHEMAS ===

export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true, status: true });
export const insertGalleryItemSchema = createInsertSchema(galleryItems).omit({ id: true, createdAt: true });
export const insertProgramSchema = createInsertSchema(programs).omit({ id: true, createdAt: true });

// === TYPES ===

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type GalleryItem = typeof galleryItems.$inferSelect;
export type InsertGalleryItem = z.infer<typeof insertGalleryItemSchema>;

export type Program = typeof programs.$inferSelect;
export type InsertProgram = z.infer<typeof insertProgramSchema>;

// Request types
export type CreateInquiryRequest = InsertInquiry;

// Response types
export type InquiryResponse = Inquiry;
export type GalleryItemResponse = GalleryItem;
export type ProgramResponse = Program;
