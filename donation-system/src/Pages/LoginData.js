import OrganizationData from "./OrganizationData";

let LoginData = [
    {
        username: "admin",
        password: "123",
        type: "Admin"
    },
    {
        username: "donor",
        password: "123",
        type: "Donor"
    },
    {
        organizationName: "org1",
        organizationEmail: "org1@gmail.com",
        username: "org1",
        password: "123",
        type: "Organization",
        pdf: undefined,
        status: "pending"
    },
    {
        organizationName: "org2",
        organizationEmail: "org2@gmail.com",
        username: "org2",
        password: "123",
        type: "Organization",
        pdfPath: undefined,
        status: "pending",
    }
]

export default LoginData;