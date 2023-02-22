/**  
 * How to find secondery array from this data 
 * get the accese secondary array with your own capacity
 * If you want to destructuring method you can do it
*/
let data = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        { school_name: "ABC secondary school" },
                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
const sophiaSecondarySchool = data.Sophia.study[1].secondary;
// Destructuring Method
// const {Sophia:{study}}=data;
// const [{secondary}] =study;
// console.log(sophiaSecondarySchool);


/**
 * 2
 * How to get access two object property from this data list
 * 1. abc
 * 2.xyz
 */
let activities = {
    activity1: [
        {
            name: "listen on spotify",
            song_list: {
                song_1: "abc",
                song_2: "bcd"
            },
            id: 1
        },
        {
            name: "listen music through bot",
            song_list: {
                song_1: "wxy",
                song_2: "xyz"
            },
            id: 2
        }
    ]
}
const resultABC = activities.activity1[0].song_list.song_1;
const resultXYZ = activities.activity1[1].song_list.song_2;
console.log(resultABC, resultXYZ); 


/**  
 * 3
 * HOW WILL DISPLAY PRETURBUSE AND HERRY FROM THIS DATA 
 * 1. Petersburg
 * 2.herry
*/
let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
}
const petersburg = students[2222].address.city;
// console.log(petersburg);
const herry = students[3333].name;
// console.log(herry);
