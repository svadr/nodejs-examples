import { UUID } from "crypto"

interface User {
    ID: UUID,
    Username: string,
    Email: string,
    Password: string,
    CreatedAt: Date
}

export default User