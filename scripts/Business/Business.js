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
    <h3 class="agentName">${businessObj.purchasingAgent}</h3>
    <div class="agentCompany">
        <p>${businessObj.companyName}</p>
    </div>
    <div class="agentPhone">
    <p>${businessObj.phoneWork}
    </div>
    `
}