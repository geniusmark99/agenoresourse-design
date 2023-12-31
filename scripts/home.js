// Event for Mobile button hamburger
const OpenMobileDropDown = ()=> {
    if(ContainsClass("#mobile-dropdown-content","hidden")){
        RemoveClass("#mobile-dropdown-content","hidden");
        AddClass("#svg-hamburger-icon-btn","hidden");
        RemoveClass("#svg-close-icon-btn","hidden");
    }else {
        AddClass("#mobile-dropdown-content","hidden");
        RemoveClass("#svg-hamburger-icon-btn","hidden");
        AddClass("#svg-close-icon-btn","hidden");
    }
    }
    
    
    /*
     document.addEventListener('DOMContentLoaded', function () {
                const weeksElement = document.getElementById('weeks');
                const priceElement = document.getElementById('price');
                let weeks = 1;
                let basePrice = 5000;
    
                function updatePrice() {
                    const totalPrice = basePrice + (weeks - 1) * 5000;
                    priceElement.textContent = `$${totalPrice}`;
                }
    
                document.getElementById('increment').addEventListener('click', function () {
                    weeks++;
                    weeksElement.textContent = `${weeks} weeks`;
                    updatePrice();
                });
    
                document.getElementById('decrement').addEventListener('click', function () {
                    if (weeks > 1) {
                        weeks--;
                        weeksElement.textContent = `${weeks} weeks`;
                        updatePrice();
                    }
                });
            });
    */
    
    // This function is for Increasing and Decreasing The Week and Prices Simultaneously 
    
    function PriceAndWeekChanger({price,increId,decreId,weekId,priceId}){
        const weeksElement = Id(`${weekId}`);
        const priceElement = Id(`${priceId}`);
        let weeks = 1;
        let basePrice = price;
    
        function updatePrice() {
            const totalPrice = basePrice + (weeks - 1) * price;
            priceElement.innerText = `${totalPrice}`;
            if (weeks > 1) {
                Query(`#${weekId}-pluralize .pluralize`).classList.add("show");
               }else {
                Query(`#${weekId}-pluralize .pluralize`).classList.remove("show");
               }
        }
    
        Id(`${increId}`).addEventListener('click', function () {
            weeks++;
         
            // weeksElement.textContent = `${weeks} weeks`;
            weeksElement.value  = weeks;
            updatePrice();
        });
    
        Id(`${decreId}`).addEventListener('click', function () {
            if (weeks > 1) {
                 weeks--;
              weeksElement.value  = weeks;
    
            //     weeksElement.textContent = `${weeks} weeks`;
                updatePrice();
            }
        });
    }
    
    PriceAndWeekChanger({
    price: 5000,
    increId:"bronze-increase",
    decreId:"bronze-decrease",
    weekId:"bronze-week",
    priceId:"bronze-price-amount"});
    
    PriceAndWeekChanger({
    price: 6000,
    increId:"silver-increase",
    decreId:"silver-decrease",
    weekId:"silver-week",
    priceId:"silver-price-amount"});
    
    
    PriceAndWeekChanger({
    price: 7000,
    increId:"gold-increase",
    decreId:"gold-decrease",
    weekId:"gold-week",
    priceId:"gold-price-amount"});
    
    PriceAndWeekChanger({
    price: 8000,
    increId:"diamond-increase",
    decreId:"diamond-decrease",
    weekId:"diamond-week",
    priceId:"diamond-price-amount"});
    
    
    PriceAndWeekChanger({
    price: 9000,
    increId:"platinum-increase",
    decreId:"platinum-decrease",
    weekId:"platinum-week",
    priceId:"platinum-price-amount"});
    
        
    
    AddEvent("#mobile-hamburger-btn","click",OpenMobileDropDown);
    
    document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" || event.key === "Esc") {
    OpenMobileDropDown();
    }
    });
    // Close Event for Mobile button hamburger