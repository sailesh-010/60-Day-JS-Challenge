let age = 10;
if (age <= 18){
    console.log("you can't vote, you are a kid")
}
else if (age >= 18 && age <= 40){
    console.log("you can vote, you are young")
}
else {
    console.log("you are old")
}

switch (true) {
    case age ==10:
        console.log("you  are 10 years old");
        break;
    case age <=18:
        console.log("you are 18 years old");
        break;
    case age <=40:
        console.log("you are 40 years old");
        break;
    default:
        console.log("you are old");
        break;
}