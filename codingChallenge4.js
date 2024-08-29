function tinhTienTip(bill) {
    let tip;

    if (bill >= 50 && bill <= 300) {
      tip = bill * 0.15;
    } else {
      tip = bill * 0.2;
    }
    const total = bill + tip;
    
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`);
  }
  
  tinhTienTip(275);
  tinhTienTip(40);
  tinhTienTip(430);