var numUniqueEmails = function(emails) {
    let testEmails = []
    for (let i = 0; i < emails.length; i++) {
        let localAndDomain = emails[i].split('@')
        let ignoreLocalPlus = localAndDomain[0].split('+')
        let filteredLocalPlus = ignoreLocalPlus[0];
        let filteredLocal = filteredLocalPlus.split('.').join("")
        let domain = localAndDomain[1];
        let filteredEmail = filteredLocal.concat("@").concat(domain)
        if(!testEmails.includes(filteredEmail)) {
            testEmails.push(filteredEmail)
        }
    }
    return testEmails.length
};