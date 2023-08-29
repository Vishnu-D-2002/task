// resume in JSON Format

let resume = {
    Name: 'Vishnu',
    Email: 'vishnu@gmail.com',
    Contact: '8858687818',
    Education: {
        BE: 2023,
        HSE: 2019,
        SSLC:2017
    },
    Gender: 'Male',
    DOB: '26.3.2002',
    marital_status:'single',
    place: 'salem',
    language_known: ["tamil", 'english'],
    programming_language: ['c', 'c++', 'java', 'javascript', 'html', 'CSS', 'MERN'],
    Interests: ['IOT', 'embedded', 'problem solving'],
    Hobbies:['cricket','chess','carrom']
}
console.log(JSON.stringify(resume));



//output :

// [Running] node "c:\tasks\task-5\(q2)resume in JSON.js"
// {"Name":"Vishnu","Email":"vishnu@gmail.com","Contact":"8858687818",
// "Education": { "BE": 2023, "HSE": 2019, "SSLC": 2017 }, "Gender": "Male", 
// "DOB": "26.3.2002", "marital_status": "single", "place": "salem", 
// "language_known": ["tamil", "english"], "programming_language": ["c", "c++", "java", "javascript", "html", "CSS", "MERN"],
// "Interests": ["IOT", "embedded", "problem solving"], 
// "Hobbies": ["cricket", "chess", "carrom"]}

// [Done] exited with code=0 in 0.221 seconds