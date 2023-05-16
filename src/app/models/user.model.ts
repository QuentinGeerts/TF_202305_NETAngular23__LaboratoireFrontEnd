export interface User {
    id: number,
    firstname: string,
    lastname: string,
    pseudo: string,
    email: string,
    phoneNumber: string,
    role: number;

    token?: string;
}
