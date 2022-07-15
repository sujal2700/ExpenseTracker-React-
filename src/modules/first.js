import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import Overview from './overview';
import Transaction from './transaction';
const Container=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:30px 0 10px;
  font-family:Calibri;
  width:360px;
`;

const HomeComponent=(props)=>{
   const [transactions, updateTransaction]=useState([]); 
   const [expense, updateExpense]=useState(0);
   const [income, updateIncome]=useState(0);
   const addTransaction=(payload)=>{
        const transactionArray=[...transactions];
         transactionArray.push(payload);
         updateTransaction(transactionArray);
    };
    const calculateBalance=()=>{
        let exp=0;
        let inc=0;
        transactions.map((payload) => {
           payload.type==="EXPENSE"?(exp=exp+payload.amount):(inc=inc+payload.amount);
        });
        updateExpense(exp);
        updateIncome(inc);
    };
    useEffect(()=> calculateBalance(),[transactions]);

   return (<Container>HomeComponent
    <Overview addTransaction={addTransaction} expense={expense} income={income}/>
    <Transaction transactions={transactions}/>
   </Container>);
};
export default HomeComponent;