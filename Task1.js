function calculateVAT(price) {


    if (typeof price !== 'number') {
        return "Invalid";
    }


    if (price <= 0) {
        return "Invalid";
    }


    const vatAmount = price * 0.075;

    return vatAmount;
}




function validContact(contact) {

    if (typeof contact !== 'string') {
        return "Invalid";
    }


    if (contact.includes(' ')) {
        return false;
    }


    if (contact.length !== 11) {
        return false;
    }


    if (!contact.startsWith('01')) {
        return false;
    }


    for (let char of contact) {
        if (char < '0' || char > '9') {
            return false;
        }
    }


    return true;
}




function willSuccess(marks) {

    if (!Array.isArray(marks)) {
        return "Invalid";
    }


    let passCount = 0;
    let failCount = 0;


    for (let mark of marks) {

        if (typeof mark !== 'number') {
            return "Invalid";
        }

        if (mark >= 50) {
            passCount++;
        } else {
            failCount++;
        }
    }

    return passCount > failCount;
}



function validProposal(person1, person2) {

    if (typeof person1 !== 'object' || person1 === null ||
        typeof person2 !== 'object' || person2 === null) {
        return "Invalid";
    }


    if (!person1.name || !person1.gender || !person1.age ||
        !person2.name || !person2.gender || !person2.age ||
        typeof person1.age !== 'number' || typeof person2.age !== 'number' ||
        typeof person1.gender !== 'string' || typeof person2.gender !== 'string') {
        return "Invalid";
    }


    if (person1.gender.toLowerCase() === person2.gender.toLowerCase()) {
        return false;
    }

    const ageDifference = Math.abs(person1.age - person2.age);
    if (ageDifference > 7) {
        return false;
    }


    return true;
}





function calculateSleepTime(times) {

    if (times.length === 0) {
        return { hour: 0, minute: 0, second: 0 };
    }


    for (let time of times) {
        if (typeof time !== 'number') {
            return "Invalid";
        }
    }


    const totalSeconds = times.reduce((sum, current) => sum + current, 0);

    const hours = Math.floor(totalSeconds / 3600);
    const remainingSeconds = totalSeconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    return {
        hour: hours,
        minute: minutes,
        second: seconds
    };
}


