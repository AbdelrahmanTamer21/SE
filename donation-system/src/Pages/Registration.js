import './Registration.css';

function Registration(){

    return(
        <div id='regCard'>
            <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder='John' required/>
            
            <label htmlFor="LastName">LastName Name</label>
                <input type="text" id="LastName" name="LastName" placeholder='Doe' required/>

            <label htmlFor="Gender">Gender</label>
                <input type="text" id="Gender" name="Gender" required/>

            <label htmlFor="Email">Email</label>
                <input type="email" id="Email" name="Email" placeholder='JohnDoe12@gmail.com' required/>

            <label htmlFor="ContactNumber">Contac tNumber</label>
                <input type="tel" id="Email" name="Email" placeholder='JohnDoe12@gmail.com' required/>



            


        </div>
    )

}