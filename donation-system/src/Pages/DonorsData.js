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
        first_name: 'Hassan',
        last_name: 'Khaled',
        email: 'Hk2003@gmail.com',
        phone: '01265478932',
        address: '1234 Elm St, Springfield, IL 62701',
        location: getRandomLocation()
    },
    {
        key: 2,
        donor_id: 2,
        first_name: 'Ahmed',
        last_name: 'Ali',
        email: 'Ah2003@gmail.com',
        phone: '01265478932',
        address: '2345 Oak St, Springfield, IL 62702',
        location: getRandomLocation()
    },
    {
        key: 3,
        donor_id: 3,
        first_name: 'Mohamed',
        last_name: 'Khaled',
        email: 'Mk2004@gmail.com',
        phone: '01265478932',
        address: '3456 Pine St, Springfield, IL 62703',
        location: getRandomLocation()
    }
];
export default DonorsData;