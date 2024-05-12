function getRandomLocation() {
    const minLat = 30.0; // Minimum latitude value
    const maxLat = 31.0; // Maximum latitude value
    const minLng = 30.0; // Minimum longitude value
    const maxLng = 31.0; // Maximum longitude value

    const lat = Math.random() * (maxLat - minLat) + minLat;
    const lng = Math.random() * (maxLng - minLng) + minLng;

    return { lat, lng };
}

let LoginData = [
    {
        first_name: "Omar",
        last_name: "Mosallam",
        username: "admin",
        password: "123",
        type: "Admin",
        email: "omar.m.mohamed.om@gmail.com",
        phone: "01018677738",
        address:{
            city: "Cairo",
            street: "Nasr City",
            building: "4",
            floor: "3",
            apartment: "303"
        },
        image: undefined,
        location: getRandomLocation()
    },
    {
        donor_id: 1,
        first_name: "Hassan",
        last_name: "Khaled",
        email: "Hk2003@gmail.com",
        phone: "01265478932",
        username: "donor1",
        password: "123",
        don_Type: "Teacher",
        type: "Donor",
        status: "approved",
        image: undefined,
        location: getRandomLocation(),
        joined_date: undefined
    },
    {
        donor_id: 2,
        first_name: "Ahmed",
        last_name: "Ali",
        email: "Ah2003@gmail.com",
        phone: "01265478932",
        username: "donor2",
        password: "123",
        don_Type: "Doctor",
        type: "Donor",
        status: "approved",
        image: undefined,
        location: getRandomLocation(),
        joined_date: undefined
        
    },
    {
        donor_id: 3,
        first_name: "Mohamed",
        last_name: "Khaled",
        email: "Mk2004@gmail.com",
        phone: "01265478932",
        username: "donor3",
        password: "123",
        don_Type: "Donor",
        type: "Donor",
        status: "approved",
        image: undefined,
        location: getRandomLocation(),
        joined_date: "2024-1-4"

    },
    {
        org_id: 1,
        organizationName: "org",
        organizationEmail: "org@gmail.com",
        username: "org",
        password: "123",
        type: "Organization",
        orgType: "Hospital",
        pdf: undefined,
        status: "approved",
        image: undefined,
        location: getRandomLocation(),
        joined_date: "2024-1-6"
    },
    {
        org_id: 2,
        organizationName: "org1",
        organizationEmail: "org1@gmail.com",
        username: "org1",
        password: "123",
        type: "Organization",
        orgType: "Hospital",
        pdf: undefined,
        status: "approved",
        image: undefined,
        location: getRandomLocation(),
        joined_date: "2024-2-5"
    },
    {
        org_id: 3,
        organizationName: "org2",
        organizationEmail: "org2@gmail.com",
        username: "org2",
        password: "123",
        type: "Organization",
        orgType: "Orphanage",
        pdf: undefined,
        status: "pending",
        image: undefined,
        location: getRandomLocation(),
        joined_date: undefined
    },
    {
        org_id: 4,
        organizationName: "org3",
        organizationEmail: "org3@gmail.com",
        username: "org3",
        password: "123",
        type: "Organization",
        orgType: "School",
        pdf: undefined,
        status: "pending",
        image: undefined,
        location: getRandomLocation(),
        joined_date: undefined
    }
]

export default LoginData;