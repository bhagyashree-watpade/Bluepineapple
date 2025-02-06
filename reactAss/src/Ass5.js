/* ass 5 -> useEffect for API Calls */
import React,{ useState, useEffect } from 'react';

export default function UserInformation() {
    const [userData,setUserData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data =>setUserData(data));
    }, []);

    return (
        <div>
            {userData && (
                <div>
                    <h3>Assignment 5 : </h3>
                    <h2>First User Information</h2>
                    <p>
                        Id: {userData.id}
                    </p>
                    <p>
                        Name:&nbsp;
                        {userData.first_name} &nbsp;
                        {userData.last_name}     
                    </p>
                    <p>
                        Email : {userData.email};
                    </p>
                
                </div>
            )}
        </div>
    );
}


