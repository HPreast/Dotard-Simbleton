import { useBusinesses, nyBusinesses } from "./BusinessData.js"
import { business } from "./Business.js"


const contentElement = document.querySelector(".businessList")
const nyContentElement = document.querySelector(".businessList--newYork")

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