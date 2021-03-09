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