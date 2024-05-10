import { useNavigate, useParams } from 'react-router-dom';
import TeachingPostsData from "../TeachingPostsData";

function TeachingPostsInfo() {
    const navigate = useNavigate();
    const { id } = useParams();
    const TeachingPosts = TeachingPostsData.find(donation => donation.id === Number(id));
    
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h1>Post Information</h1>
            <p>number of students: {TeachingPosts?.Number_of_students}</p>
            <p>Address: {TeachingPosts?.address}</p>
            <p>map: {TeachingPosts?.map}</p>
            <p>Subjects: {TeachingPosts?.Subject}</p>  
            <button onClick={goBack}>Back</button>
            <button >Donate</button>          
        </div>
    );
}

export default TeachingPostsInfo;