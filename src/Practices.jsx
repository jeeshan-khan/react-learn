export const Practices = () =>
{
   const Students = [1,5];
//    console.log(Boolean(Students.length))
//    console.log(Students.length)
   return(
    <>
        {/* <p>{Students.length && "No Students found"}</p> */}
        {/* 1st? */}
        {/* <p>{Students.length===0 && "no students"}</p> */}
        {/* 2nd */}
        {/* <p>{!Students.length && "No Students found"}</p> */}
        <p>{Boolean(!Students.length) && "No Students found"}</p>
        <p>No. of Students:{Students.length}</p>
    </>
   )
}