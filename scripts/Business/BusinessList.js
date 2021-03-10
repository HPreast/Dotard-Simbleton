import { useBusinesses, agents } from "./BusinessData.js"
import { business, agentsHTML } from "./Business.js"


const contentElement = document.querySelector(".businessList")
const nyContentElement = document.querySelector(".businessList--newYork")
const manuContentElement = document.querySelector(".businessList--manufacturing")
const agentContentElement = document.querySelector(".agents")

export const businessList = () => {
    const businessArray = useBusinesses();
    contentElement.innerHTML = "";

    businessArray.forEach(
        (businessObj) => {
            contentElement.innerHTML += business(businessObj)
        }
    );
}


export const nyBusinessList = () => {
    const nyArray = useBusinesses().filter(businessObj => {
        if (businessObj.addressStateCode === "NY") {
          return businessObj
        }
        
      })
      nyContentElement.innerHTML = "";
      nyArray.forEach(
          (businessObj) => {
              nyContentElement.innerHTML += business(businessObj)
          }
      );

}

export const manufacturingBusinessList = () => {
    const manufacturingArray = useBusinesses().filter(businessObj => {
        if (businessObj.companyIndustry === "Manufacturing") {
          return businessObj
        }
        
      })
      manuContentElement.innerHTML = "";
      manufacturingArray.forEach(
          (businessObj) => {
              manuContentElement.innerHTML += business(businessObj)
          }
      );

}

export const agentsList = () => {
 agentContentElement.innerHTML = "<h2>Purchasing Agents</h2><hr>"
agents.forEach(
    (agentObj) => {
        agentContentElement.innerHTML += agentsHTML(agentObj)
    }
)

}

export const searchBar = () => {


// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keydown", event => {
        if (event.key === "Enter") {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */

            const foundBusiness = useBusinesses().find((business)  => 
            business.companyName.startsWith(event.target.value)) // implement .find() method here

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section><hr>
            `;
        }
    });
}