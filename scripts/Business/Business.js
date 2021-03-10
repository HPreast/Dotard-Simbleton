export const business = (businessObj) => {
    return ` 
    <section class="business">
    <h3 class="companyName">${businessObj.companyName}</h3>
    <div class="address">
        <p>${businessObj.addressFullStreet}</p>
        <p>${businessObj.addressCity}, ${businessObj.addressStateCode}${businessObj.addressZipCode}</p>
    </div>
    </section>
    `
}

export const agentsHTML = (businessObj) => {
    return `
    <h3 class="agentName">${businessObj.name}</h3>
    <div class="agentCompany">
        <p>${businessObj.company}</p>
    </div>
    <div class="agentPhone">
    <p>${businessObj.phone}</p>
    </div>
    `
}