/*

Your Own Array: Think of your favorite mode of transportation, 
such as a motorcycle or a car, and make a list that stores several examples. 
Use your list to print a series of statements about these items, 
such as “I would like to own a Honda motorcycle.”

*/

let favoriteTransportation: string[] =["Honda Civic", "Tesla", "Rolse Royals"] 

favoriteTransportation.forEach(items =>{
    if(items.includes(favoriteTransportation[0])){
        console.log(`I would like to buy ${items} in pakistan.`);
        
    }else if(items.includes(favoriteTransportation[1])){
        console.log(`I would like to own ${items}.`);
        
    }else if(items.includes(favoriteTransportation[2])){
        console.log(`I would like to ride ${items} in pakistan.`);
        
    }else{
        console.log(`I dont like anything.`);
        
    }
});