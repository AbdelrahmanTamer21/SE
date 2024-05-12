function getRandomPosition() {
    const positions = ['Teacher', 'Doctor'];
    const randomIndex = Math.floor(Math.random() * positions.length);
    return positions[randomIndex];
}

const TeacherDoctorsDummy  = [ 
    {
        key: 1,
        donor_id: 1,
        first_name: 'Ahmed',
        last_name: 'Ibrahim',
        email: 'ahmed.ibrahim@gmail.com',
        phone: '123-456-7890',
        address: '1 Nile St, Cairo, Egypt',
        position: getRandomPosition()
    },
    {
        key: 2,
        donor_id: 2,
        first_name: 'Fatima',
        last_name: 'Ali',
        email: 'fatima.ali@gmail.com',
        phone: '234-567-8901',
        address: '2 Sphinx St, Giza, Egypt',
        position: getRandomPosition()
    },
    {
        key: 3,
        donor_id: 3,
        first_name: 'Mohamed',
        last_name: 'Abdelaziz',
        email: 'mohamed.abdelaziz@gmail.com',
        phone: '345-678-9012',
        address: '3 Pyramids St, Luxor, Egypt',
        position: getRandomPosition()
    },
    {
        key: 4,
        donor_id: 4,
        first_name: 'Layla',
        last_name: 'Mahmoud',
        email: 'layla.mahmoud@gmail.com',
        phone: '456-789-0123',
        address: '4 Nile St, Aswan, Egypt',
        position: getRandomPosition()
    },
    {
        key: 5,
        donor_id: 5,
        first_name: 'Omar',
        last_name: 'Hassan',
        email: 'omar.hassan@gmail.com',
        phone: '567-890-1234',
        address: '5 Karnak St, Luxor, Egypt',
        position: getRandomPosition()
    },
    {
        key: 6,
        donor_id: 6,
        first_name: 'Nour',
        last_name: 'Khalifa',
        email: 'nour.khalifa@gmail.com',
        phone: '678-901-2345',
        address: '6 Aswan St, Aswan, Egypt',
        position: getRandomPosition()
    },
    {
        key: 7,
        donor_id: 7,
        first_name: 'Ali',
        last_name: 'Gaber',
        email: 'ali.gaber@gmail.com',
        phone: '789-012-3456',
        address: '7 Alexandria St, Alexandria, Egypt',
        position: getRandomPosition()
    }
];
export default TeacherDoctorsDummy;
