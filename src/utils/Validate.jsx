const CheckValidData = (email,password) => {
    const isEmailValid =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    if(!isEmailValid) return "Email Id is not Valid"
    if(!isPasswordValid) return "password must contains the atleast one capital letter,numbers and the unique identifiers"

  //   if (!isSignForm) {
  //   const isNameValid = /^[A-Za-z ]{3,}$/.test(name);
  //   if (!isNameValid) return "Name must be at least 3 characters and contain only letters";
  // }
    return null
}

export default CheckValidData