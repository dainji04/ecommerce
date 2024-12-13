import convertMoney from "./convertMoney";

export default function calculatorSales(originalPrice, discount) {
    let discountPercent = discount / 100;
    let priceSaled = originalPrice * discountPercent;
    let resultPrice = originalPrice - priceSaled;
    return convertMoney(resultPrice);
}
