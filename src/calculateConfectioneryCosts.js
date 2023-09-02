function calculateConfectioneryCosts(celebs) {
  const arr = [];
  for (const celeb of celebs) {
    let newTotal = 0;
    if (
      celeb.yearlyCumulativeSpend &&
      celeb.purchaseToday &&
      celeb.purchaseToday.costPerItem &&
      celeb.purchaseToday.amountBought
    ) {
      newTotal = parseInt(celeb.yearlyCumulativeSpend.replace("£", ""));
      newCost = parseInt(celeb.purchaseToday.costPerItem.replace("£", ""));
      newTotal += newCost * celeb.purchaseToday.amountBought;
      celeb.yearlyCumulativeSpend = newTotal;
    }
    const obj = { name: celeb.name, yearlyCumulativeSpend: newTotal };
    arr.push(obj);
  }
  return arr;
}

module.exports = calculateConfectioneryCosts;


