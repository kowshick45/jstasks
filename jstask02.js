
 
 let User = prompt("Enter your name:");
let x=true;
while (x === true) {
    let y = Number(prompt("Enter your age:"));
    if (y >= 18) {
        alert("Hello " + User + ", you are eligible to vote ");
    } else if (y < 18) {
        alert("Sorry " + User + ", you are not eligible to vote ");
    }
    a=confirm("Do you want to check again?");
    if(a===false){
        alert("Goodbye!");
        break;
    }
}
 

 
let username;
let psd;
let cnfm;
let choice;
username = prompt("Please enter your username");
psd = prompt("Please enter the password");
if (username == "library" && psd == "book123") {
    cnfm = confirm("Do you want to borrow a book?");
    if (cnfm == true) {
        choice = prompt("1=Fiction, 2=Science, 3=History");
        switch (choice) {
            case "1":
                alert("You have selected Fiction");
                break;
            case "2":
                alert("You have selected Science");
                break;
            case "3":
                alert("You have selected History");
                break;
            default:
                alert("Invalid category!");
        }
    } else {
        alert("Maybe next time! Goodbye!");
    }
} else {
    alert("Invalid login!");
}