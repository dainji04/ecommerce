export default function convertMoney(money) {
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
