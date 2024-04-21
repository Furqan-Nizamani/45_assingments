/*

No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.

*/

let usernames: string [] = ["Admin", "Furqan", "ALI"]

if(usernames.length > 0){
    for(let username of usernames){
        if(username === "Admin"){
            console.log("Hello admin would you like to see reprt");
            
        }
        else{
            console.log(`Hello ${username}, How are you?`);
            
        }
    }
}else{
    console.log("We have to find some users");
    
}