const findTheOldest = function(arr) {
    let OldAge = -1;
    let Oldperson;
    arr.forEach(person => {
        if((person.yearOfDeath - person.yearOfBirth) > OldAge){
            Oldperson = person;
            OldAge = person.yearOfDeath - person.yearOfBirth;
        }
    });
    return Oldperson;
};

// Do not edit below this line
module.exports = findTheOldest;
