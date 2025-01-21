function Profile ()
{
    return(
    <div>
        <ProfileCard
        name="jeeshan"
        age={20}
        address="golapolo lane"
        description={
            <div>
                <strong>Average heighted boy with no skills</strong>
            </div>
        }
        >
            <p>Dont know much about this guy</p>
            <button>contact</button>
        </ProfileCard>
        <ProfileCard
        name="Jyotishankar"
        age={20}
        address="Shergarh"
        description={
            <p>
                Average heighted boy but highly skilled
            </p>
        }
        >
            <div>
                <p>Hobbies:coding,simping over a lady</p>

            </div>
            <button>Contact</button>
        </ProfileCard>
    </div>
    )
}

export default Profile;

// function profilecard to pass props to access the data in profilecard

function ProfileCard(props){
    return(
        <>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Address:{props.address}</p>
            <p>Description:{props.description}</p>
            <p>{props.children}</p>
        </>
    )
}