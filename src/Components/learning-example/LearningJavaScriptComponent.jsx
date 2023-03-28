const person = {
    name:'anshul', 
    address:{
        city:'muzaffarnagar',
        state:'U.P'
    },
    profiles:['instagram','twitter','facebook'],
    printProfile: () =>{
       person.profiles.map(profile=>{
        console.log(profile)
       })
    }
}

export default function LearningJavaScriptComponent(){
    return(
        <>
        <div className="LearningJavaScriptComponent">
            {person.name}
        </div>
        <div>{person.address.city}</div>
        <div>{person.address.state}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.profiles[1]}</div>
        <div>{person.printProfile()}</div>
        </>
    );
}