import React,{Suspense} from 'react';

//Lazy loading the Profile component

const Profile=React.lazy(()=>import('./Profile'));

function ProfileApp(){
    return(
        <div>
            <h1>Welcome to the Profile App</h1>
            {/* using suspense to handle the loading state */}
            <Suspense fallback={<div>Loading Profile...</div>}>
            <Profile/>
            </Suspense>
        </div>
    )
}

export default ProfileApp;