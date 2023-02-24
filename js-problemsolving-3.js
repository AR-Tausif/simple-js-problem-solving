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
 * 1. get access or print: abc
 * 2. get access or print: xyz
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


/**
 * 4
HOW WILL DISPLAY 3 VALUE IN THIS DATA 
    1. Programming er Choddogusti
    2. VW
    3. Bangladesh
 */
    let instructor = {
        name: "Jhankar Mahbub",
        entrepreneur: true,
        additionalData: {
            writer: true,
            favoriteHobbies: ["travelling", "Coding"],
            books: ["programming er bolod to bos", "programming ercoddogosti"],
            moreDetails: {
                favoriteBasketballTeam: "XYZ",
                isYoungest: true,
                hometown: {
                    city: "ABC",
                    state: "VW",
                },
                countriesLivedIn: ["Bangladesh", "New York"]
            }
        }
    }
    // PRINTING PROGRAMMING ER CHODDOgUSTI
    const coddoGusti = instructor.additionalData.books;
    console.log(coddoGusti[1]);
    // PRING VW
    const vwPrint = instructor.additionalData.moreDetails.hometown.state;
    console.log(vwPrint);
    // PRINT BANGLADESH
    const bangladeshPrit = instructor.additionalData.moreDetails.countriesLivedIn[0];
    console.log(bangladeshPrit);
    
    
    /**
     * 5
     * HOW WILL DISPLAY
     * 1. A
     * 2. D
     */
    const studentData = [
        {
            class: 10,
            details: [
                {
                    studentId: '1',
                    gradingDetails: [{ grade: 'A' }]
                },
                {
                    studentId: '2',
                    gradingDetails: [{ grade: 'B' }]
                }
            ]
        },
        {
            class: 11,
            details: [
                {
                    studentId: 3,
                    gradingDetails: [{ grade: 'B' }]
                },
                {
                    studentId: 4,
                    gradingDetails: [{ grade: 'D' }]
                }
            ]
        },
    ]
    // PRINT A 
    const studentDataA = studentData[0].details[0].gradingDetails[0].grade;
    console.log(studentDataA);
    // PRINT D 
    const studentDataD = studentData[1].details[1].gradingDetails[0].grade;
    console.log(studentDataD);
    
    /** 
     * 6
     * How will you display
    a) habluder adda
    b) Beginner
    */
    
    let data1 = {
        data:
            [
                {
                    bookId: 1,
                    bookDetails: {
            name: "habluder adda",
                        category: "XYZ",
                        price: "20$",
                    },
                    bookCategory: "Basic",
                },
                {
                    bookId: 2,
                    bookDetails: {
                        name: "gobluder adda",
                        category: "ABC",
                        price: "40$",
                    },
                    bookCategory: "Beginner",
                }
            ]
    }
    // PRINT habluder adda
    const habluderAdda = data1.data[0].bookDetails.name;
     console.log(habluderAdda);
    // PRINT Beginner 
    const beginnerPrint = data1.data[1].bookCategory;
    console.log(beginnerPrint);
