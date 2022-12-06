developers = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 34, language: 'Javascript' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
    ]

//Problem 1

function countFromEurope(developers){
  return developers.filter(person => person.continent ==='Europe').length
}

// getGreetings should return an array where each element contains an appropriate greeting for the matching developer from the input.
// Greetings should be of the form 'Hi <firstName>, what do you like the most about <language>?'
// For the list above, it would return ['Hi Sofia, what do you like the most about Javascript?', 'Hi Lukas, what do you like the most about Python?', 'Hi Madison, what do you like the most about Python?']

function getGreetings(developers){
  return developers.map((greeting) => `Hi ${greeting.firstName}, what do you like most about ${greeting.language}?`);
}

// isJSComing should return true if the array contains at least one developer whose language is Javascript.
// For the list above it would return true.
function isJSComing(developers){
  return (developers.filter((jsUsers) => (jsUsers.language === 'Javascript')).length)>= 1 ? true : false;
}
// getFirstPythonDeveloper should return the first developer in the array whose language is Python
// You should return a string formatted like '<firstName>, <country>', or the string 'none' if no python developers are present.
// For the list above, it would return 'Lukas, Croatia'

function getFirstPythonDeveloper(developers){
  const find = ((developers.filter((python) => (python.language === 'Python')))[0]) 
  const a = find != undefined ? `${find.firstName}, ${find.country}`: 'none';
  console.log(a)
  return a;
}

// getAverageAge should return the average age of the developers (rounded down).
// If there are no developers, return -1
// For the list above, it would return 30.

function getAverageAge(developers){
  const calcTotal = (total, age) => total += age
  let total1 = 0
  let a = (Math.floor(((developers.map((user) => user.age).reduce(calcTotal, total1)) / developers.length)))
  let final = 0
  !a ? final = -1 : final = a
  return final;
}
// getLanguageCounts should return an object representing how many developers of each language there are.
// For the list above, it would return { Javascript: 1, Python: 2 }
// NB. Developers could know any language (not just JS or Python), so the keys of the object will depend on what developers you get passed.
function getLanguageCounts(developers){
  const counts = {}
  let a = (developers.map((user) => user.language)).forEach((language) => counts[language] = counts[language] ? counts[language] + 1 : 1 );
  a = counts
  return a;
}

// getOldest should return an array which includes the name of the developer who is the oldest.
// In case of a tie, include all same-age developers listed in the same order as they appeared in the original input array.
// For the list above, it would return ['Lukas']
function getOldest(developers){
  const dec = (a, b) => b - a
  const a = (developers.map((user) =>user.age)).sort(dec)[0];
  let c = []
  while(developers.find(person => person.age === a)){
    b = developers.find(person => person.age === a)
    c.push(b.firstName)
    d = developers.map(person => person.age).indexOf(a)
    console.log(d)
    developers.splice(d,1)
  }
  
  return c;
}

// isGlobalGroup should return true if the list contains a developer from each of these 5 zones:
// 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'
// For the list above, it would return false
function isGlobalGroup (developers) {
  let europeCount = 0
  let americasCount = 0
  let asiaCount = 0
  let africaCount = 0
  let oceaniaCount = 0
  let total = 0
  developers.map((continents) => developers.continent).forEach((continent) => 
  {
    if(continent == 'Europe'){
      europeCount = 1
    }
    else if(continent == 'Asia'){
      asiaCount = 1
    }
    else if(continent == 'Americas'){
      americasCount = 1
    }
    else if(continent == 'Africa'){
      africaCount = 1
    }
    else if(continent == 'Oceania'){
      oceaniaCount = 1
    }
   })

  total = europeCount + americasCount + asiaCount + africaCount + oceaniaCount
  if(total == 5){
    return true;
  }
  else{
    return false;
  }
}

// askForMissingDetails should return a list of questions that need answering to fill in missing details from the developers (fields whose values are null)
// For example, if you receive:
// [
//      { firstName: 'Sofia', lastName: 'I.', country: null, continent: 'Americas', age: 34, language: 'Javascript' },
//      { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
//      { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 23, language: 'Python' }
// ];
// You would return
// [
//      'Hi Sofia. What is your country?',
//      'Hi Lukas. What is your language?'
// ]
// First name will always be present on the developers. There will be at most one field missing.
// Hint: Look up Object.keys, Object.values and Object.entries
function askForMissingDetails (developers) {
    e = []
    developers.forEach(person => {
      a = Object.values(person)
      b = []
       for (i = 0; i< a.length; i++) {
          if(a[i] == null){
            b.push(i)
          }
          
      }
      c = Object.keys(person)
      d = []
      for(i = 0; i < b.length; i++){
        temp = c[b[i]]
        d.push(temp)
      }
      
      for(i = 0; i < d.length; i++){
        x = `Hi ${person.firstName}. What is your ${d[i]}?`
        console.log(`Hi ${person.firstName}. What is your ${d[i]}?`)
        e.push(x)
      }

    });
    
    return e;

}


module.exports = {
    countFromEurope,
    getGreetings,
    isJSComing,
    getFirstPythonDeveloper,
    getAverageAge,
    getLanguageCounts,
    getOldest,
    isGlobalGroup,
    askForMissingDetails,
}