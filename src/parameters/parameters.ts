import { SessionData } from "express-session";

export const user = {
    name: "morteza",
    password: "gholami",
    session: {} as Session & Partial<SessionData>
}

interface Session {
    user?: string
}