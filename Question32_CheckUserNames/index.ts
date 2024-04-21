/*

Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

*/


let crunt_users: string [] = ["furqan", "ali", "abdul raqueeb" ,"faizan", "abdul baseer"]
let new_users: string [] = ["Ajmal khan", "Roshan", "Zohair", "Furqan", "Ali" ]

for(let new_user of new_users){
    let lowercase_new_user = new_user.toLocaleLowerCase();
    let is_unique = true;

    for(let crunt_user of crunt_users){
        if(crunt_user.toLocaleLowerCase() === lowercase_new_user){
            console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
            is_unique = false;
            break;
            
        }
    }
    if(is_unique){
        console.log(`Congratulations! The username "${new_user}" is available.`);
        
    }
}