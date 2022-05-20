const counter = document.getElementById("counter");

counter.value=49;



const minus = document.getElementById("minus");
const plus = document.getElementById("plus");


const hundredLess = document.getElementById("hundred-less");
const hundredMore = document.getElementById("hundred-more");
const simulationText = document.getElementById("simulation-text");


// function to set the prices according to the number of employees
const basicMonthPrice =document.getElementById("basic-month-price");
const proMonthPrice =document.getElementById("pro-month-price");
const basicYearPrice =document.getElementById("basic-year-price");
const proYearPrice =document.getElementById("pro-year-price");
const proDiscount = document.getElementById("pro-discount");
const basicDiscount = document.getElementById("basic-discount");

const setPrices = ()=>{
    console.log(counter.value);
    if(Number(counter.value)<=50){
        basicMonthPrice.innerText= "5,00";
        proMonthPrice.innerText="8,00";

        basicYearPrice.innerText="4,25";
        basicDiscount.innerText="5,00"

        proDiscount.innerText="8,00";
        proYearPrice.innerText="6,80";
    }
    if(Number(counter.value)>50){
        basicMonthPrice.innerText= "4,50";
        proMonthPrice.innerText="6,80";

        basicYearPrice.innerText="3,83";
        basicDiscount.innerText="4,50"

        proDiscount.innerText="6,80";
        proYearPrice.innerText="5,78";    
    }
}



//month/anual checkbox for employess <100 

const monthly = document.getElementById("monthly");
const anual = document.getElementById("anual");
const plansByMonth = document.getElementById("plans-by-month");
const plansByYear = document.getElementById("plans-by-year");



monthly.addEventListener('change',()=>{
    
    if(monthly.checked){
        plansByMonth.style.display="flex";
        plansByYear.style.display="none";
        anual.checked=false;
        setPrices();
        totalAmount();

    }
})

anual.addEventListener('change',()=>{
    if(anual.checked){
        plansByMonth.style.display="none";
        plansByYear.style.display="flex";
        monthly.checked=false;
        setPrices();
        totalAmount();
    }
})

//function to transform the string prices into numbers
const setNumber = (price)=>{
   let num=price.innerText.replace(",",".");
   return Number(num);
    
}



// function to calculate the total amount to be paid
const amountElement = document.getElementById("total-amount");
const timeOfPayment = document.getElementById("time-of-payment");
const discountTag = document.getElementById("discount-tag");
const discountTotalAmount = document.getElementById("discount-total-amount");

const totalAmount = ()=>{
    let amount = 0;
    if(monthly.checked && basicMonthCheckbox.checked){
        amount = setNumber(basicMonthPrice)*Number(counter.value);
        amountElement.innerText= amount.toFixed(2).replace(".",",");
        timeOfPayment.innerText = "mensal";
        discountTag.style.display="none";
        discountTotalAmount.style.display="none";

    }

    if(monthly.checked && proMonthCheckbox.checked){
        amount = setNumber(proMonthPrice)*Number(counter.value);
        amountElement.innerText= amount.toFixed(2).replace(".",",");
        timeOfPayment.innerText = "mensal";
        discountTag.style.display="none";
        discountTotalAmount.style.display="none";
    }

    if(anual.checked && basicYearCheckbox.checked){
        amount = (setNumber(basicYearPrice)*Number(counter.value))*12;
        discountTotalAmount.innerText ="R$"+ amount.toFixed(2).replace(".",",")+" Anual"; 
        amount = amount - (amount*15)/100;
        amountElement.innerText= amount.toFixed(2).replace(".",",");
        timeOfPayment.innerText = "anual";
        discountTag.style.display="block";
        discountTotalAmount.style.display="block";
    }

    if(anual.checked && proYearCheckbox.checked){
        amount = (setNumber(proYearPrice)*Number(counter.value))*12;
        discountTotalAmount.innerText ="R$"+ amount.toFixed(2).replace(".",",")+" Anual"; 
        amount = amount - (amount*15)/100;
        amountElement.innerText= amount.toFixed(2).replace(".",",");
        timeOfPayment.innerText = "anual";
        discountTag.style.display="block";
        discountTotalAmount.style.display="block";
    }
}



//function executing the plans shown by employess>=100 or employees<100
const counterChange = ()=>{

    if(Number(counter.value)<0){
        counter.value = 0;
    }

    if(Number(counter.value)<100){
        hundredLess.style.display="flex";
        hundredMore.style.display="none";
        simulationText.style.display="block";
        
        

    }

    if(Number(counter.value) >99){
        hundredMore.style.display="flex";
        hundredLess.style.display="none";
        simulationText.style.display="none";
    }
    setPrices();
    totalAmount();

}


minus.addEventListener("click",()=>{
    counter.value = Number(counter.value) - 1;
    counterChange();
})

plus.addEventListener("click",()=>{
    counter.value = Number(counter.value) + 1;
    counterChange();
})

counter.addEventListener('input',()=>{
    counterChange();
    setPrices();
})







//plans reaction by choosing between basic and pro (employess<100)

//monthly
const basicMonthCheckbox = document.getElementById("basic-month-checkbox");
const proMonthCheckbox = document.getElementById("pro-month-checkbox");
const basicMonth = document.getElementById("basic-month");
const proMonth = document.getElementById("pro-month");

basicMonthCheckbox.addEventListener('change',()=>{
    if(basicMonthCheckbox.checked){
        basicMonth.classList.add("plan-active");
        proMonth.classList.remove("plan-active");
        proMonthCheckbox.checked = false;
        totalAmount();
    }
})

proMonthCheckbox.addEventListener('change',()=>{
    if(proMonthCheckbox.checked){
        proMonth.classList.add("plan-active");
        basicMonth.classList.remove("plan-active");
        basicMonthCheckbox.checked = false;
        totalAmount();
    }
})

//anual 
const proYearCheckbox = document.getElementById("pro-year-checkbox");
const basicYearCheckbox = document.getElementById("basic-year-checkbox");
const proYear = document.getElementById("pro-year");
const basicYear = document.getElementById("basic-year");

basicYearCheckbox.addEventListener('change',()=>{
    
    if(basicYearCheckbox.checked){
        basicYear.classList.add("plan-active");
        proYear.classList.remove("plan-active");
        proYearCheckbox.checked = false;
        totalAmount();
    }
})

proYear.addEventListener('change',()=>{
    if(proYearCheckbox.checked){
        proYear.classList.add("plan-active");
        basicYear.classList.remove("plan-active");
        basicYearCheckbox.checked = false;
        totalAmount();
    }
})


//plans reaction by choosing between basic and pro (employess >= 100)

const hundredBasicCheckbox = document.getElementById("hundred-basic-checkbox");
const hundredProCheckbox = document.getElementById("hundred-pro-checkbox");
const hundredBasic = document.getElementById("hundred-basic");
const hundredPro = document.getElementById('hundred-pro');

hundredBasicCheckbox.addEventListener('change',()=>{
    if(hundredBasicCheckbox.checked){
        hundredBasic.classList.add("plan-active");
        hundredPro.classList.remove("plan-active");
        hundredProCheckbox.checked = false;
    }
})

hundredProCheckbox.addEventListener('change',()=>{
    if(hundredProCheckbox.checked){
        hundredPro.classList.add("plan-active");
        hundredBasic.classList.remove("plan-active");
        hundredBasicCheckbox.checked = false;
    }
})



