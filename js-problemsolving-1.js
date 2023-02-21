// problem practice of recape arrow function create
const add = (first, socond, third) => first + socond + third;
console.log(add(10,20,30));

// problem problem of ES6 backtic system
const line  = `I am a web developer.
I love to code.
I love to eat biryani.
`;
console.log(line);

// Default parameter trying to catch
const defaultPera = (first, second=10) => first+second;
console.log(defaultPera(20));

// Check length even then return this elements
const friends = ['Shamim', 'Roman','Junayed', 'Oashim'];
const checkEven =(friends)=>{
    const evenFriends = [];
    for (const friend of friends) {
        const fdLen = friend.length;
        if((fdLen % 2) == 0){
            evenFriends.push(friend);

        }
    }
    console.log(evenFriends);
}
checkEven(friends);

// practice of square of element with arryas
const num = [2,2,3];
const num2 = [2,3,4]
const squareCeck = (num, num2)=>{
    const numCheck = Math.pow(2,2)
    console.log(numCheck);
}
squareCeck(num,num2)