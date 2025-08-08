function handleForm()
{
    let name=document.getElementById("name").value;
    let password=document.getElementById("pword").value;
    let email=document.getElementById("email").value;
    let phnum=document.getElementById("pNum").value;
    let N=validateName(name)
    let P=validatePassword(password)
    let E=validateEmail(email)
    let PH=validatePnum(phnum)

    if(N=="valid input"&&P=="valid input"&&E=="valid input"&&PH=="valid input")
{
    return true
}
    document.getElementById("nameError").innerText=N=="valid input"?"":N
    document.getElementById("passwordError").innerText=P=="valid input"?"":P
    document.getElementById("emailError").innerText=E=="valid input"?"":E
    document.getElementById("pNumError").innerText=PH=="valid input"?"":PH

}

function validateName(name)
{
    const regex=/^[A-Za-z\s]+$/;
    if(!regex.test(name))
    {
        return "Invalid input"
    }
    return "valid input"
}

function validatePassword(password)
{
    
    const regex=/^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!regex.test(password))
    {
        return "Invalid input"
    }
    return "valid input"
}

function validateEmail(email)
{   
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    //const regex=/^[a-zA-z0-9,-]+@[A-Za-z0-9,-]+\[A-Za-z]{2,}$/;
    if(!regex.test(email))
    {
        return "Invalid input"
    }
    return "valid input"
}

function validatePnum(phnum)
{
   const regex=/^[0-9]{10}$/; 
   if(!regex.test(phnum))
   {
    return "Invalid input"
   }
   return "valid input"
}