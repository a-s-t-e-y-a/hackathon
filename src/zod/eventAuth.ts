import { z } from "zod";

const evenOraganizerZod = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

const eventLoginZod = z.object({
  email: z.string(),
  password: z.string(),
});

export { evenOraganizerZod, eventLoginZod };
