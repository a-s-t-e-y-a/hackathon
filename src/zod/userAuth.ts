import { z } from "zod";

const userAuthZod = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

const userLogin = z.object({
  email: z.string(),
  password: z.string(),
});

export { userAuthZod, userLogin };
