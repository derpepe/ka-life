import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Minimal schema — data is stored in TypeScript files, not DB
export const visitors = sqliteTable("visitors", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  page: text("page").notNull(),
  visitedAt: text("visited_at").notNull(),
});

export const insertVisitorSchema = createInsertSchema(visitors).omit({ id: true });
export type InsertVisitor = z.infer<typeof insertVisitorSchema>;
export type Visitor = typeof visitors.$inferSelect;
