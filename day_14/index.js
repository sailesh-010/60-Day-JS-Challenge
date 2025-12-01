function check(pass){

    let score = 0;
    if (pass.length < 8) return "Password must be at least 8 characters long";
    if(/[0-9]/.test(pass)) score++;
    if(/[a-z]/.test(pass)) score++;
    if(/[A-Z]/.test(pass)) score++;
    if(/[!@#$%^&*()_+=-]/.test(pass)) score++;

    if (score <= 1) return "Weak Password";
    if (score <= 3) return "Medium Password";
    return "Strong Password";

}

console.log(check('asuwhahu111'));
console.log(check("123"));
console.log(check("A1!ahendjsjd"));
