import { useBusinesses } from "./BusinessData.js"
import { business } from "./Business.js"

const contentElement = document.querySelector(".businessList")

export const businessList = () => {
    const businessArray = useBusinesses();
    contentElement.innerHTML = "";

    businessArray.forEach(
        (businessObj) => {
            contentElement.innerHTML += business(businessObj)
        }
    );
}
