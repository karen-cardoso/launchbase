const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

  function createTransaction(transaciton){
    user.transactions.push(transaction)

      if(transaciton.type == 'credit'){
        user.balance += transation.value
      }
      else{
        user.balance -= transaction.value
      }
  }
  
createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

  