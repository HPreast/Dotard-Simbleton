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