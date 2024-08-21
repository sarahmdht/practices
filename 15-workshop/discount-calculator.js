// calculating cart discounts (from API)
const customers = [
    {id: 1, name: "Apple", price: 100, discount: 5, amount: 10},
    {id: 2, name: "Orange", price: 80, discount: 10, amount: 5},
    {id: 3, name: "Banana", price: 50, discount: 20, amount: 1},
    {id: 4, name: "felfel", price: 200, discount: 7, amount: 5},
    {id: 5, name: "watermelon", price: 150, discount: 3, amount: 2}
];

let totalCost = 0;
let totalDiscount = 0;
let totalFinalCost = 0;

const cartTable = document.getElementById('cartTable');

customers.forEach(item => {
    const cost = item.price * item.amount;
    const discount = (cost * item.discount) / 100;
    const finalCost = cost - discount;

    totalCost += cost;
    totalDiscount += discount;
    totalFinalCost += finalCost;

    const row = `<tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.amount}</td>
        <td>${cost}</td>
        <td>${discount}</td>
        <td>${finalCost}</td>
    </tr>`;
    
    cartTable.innerHTML += row;
});

const totalRow = `<tr>
    <th>Total</th>
    <th></th>
    <th></th>
    <th>${totalCost}</th>
    <th>${totalDiscount}</th>
    <th>${totalFinalCost}</th>
</tr>`;

cartTable.innerHTML += totalRow;