import { z } from "zod";

const evenOraganizerZod = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export default evenOraganizerZod;
