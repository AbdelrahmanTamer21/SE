function getRandomLocation() {
    const minLat = 30.0; // Minimum latitude value
    const maxLat = 31.0; // Maximum latitude value
    const minLng = 30.0; // Minimum longitude value
    const maxLng = 31.0; // Maximum longitude value

    const lat = Math.random() * (maxLat - minLat) + minLat;
    const lng = Math.random() * (maxLng - minLng) + minLng;

    return { lat, lng };
}

let DonorsData  = [ 
    {
        key: 1,
        donor_id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@gmail.com',
        phone: '123-456-7890',
        address: '1234 Elm St, Springfield, IL 62701',
        location: getRandomLocation()
    },
    {
        key: 2,
        donor_id: 2,
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane.smith@gmail.com',
        phone: '234-567-8901',
        address: '2345 Oak St, Springfield, IL 62702',
        location: getRandomLocation()
    },
    {
        key: 3,
        donor_id: 3,
        first_name: 'James',
        last_name: 'Johnson',
        email: 'james.johnson@gmail.com',
        phone: '345-678-9012',
        address: '3456 Pine St, Springfield, IL 62703',
        location: getRandomLocation()
    }
];
export default DonorsData;