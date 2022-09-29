export interface Employee {
    eid: number,
    password ?: String;
    ename: string,
    email: string,
    phone: string,
    address: {
        city?: string,
        country: string,
        zipcode?: number
    }
}