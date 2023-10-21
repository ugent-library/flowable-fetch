import 'dotenv/config'
import { z } from 'zod'

const envVariables = z.object({
  FLOWABLE_HOST: z.string(),
  FLOWABLE_USER: z.string(),
  FLOWABLE_PASSWORD: z.string(),
})

envVariables.parse(process.env)

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
