import { z } from "zod";

const eventInitZod = z.object({
  eventName: z.string().min(1, "Event name is required"), // Ensure non-empty event name
  ticketNo: z.number().int().positive(), // Ensure ticket number is a positive integer
  about: z.string().min(1, "About field cannot be empty"), // Ensure non-empty about field
  eventOrganiserId: z.string(),
  price: z.number(),
  image: z.string(),
});

export default eventInitZod;
