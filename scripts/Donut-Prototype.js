        let donutsList = [];
        let donutLimit = 12;
        
        let flavor = '';
        let toppings = '';
        
        function renderDonutList() {
        let donutsListHTML = '';
        for (let i = 0; i < donutsList.length; i++) {
            const donutObject = donutsList[i];
            
            const { flavor, toppings, quantity } = donutObject;
            const html = `
            <div class="list-div">
                <div class="label-list">${quantity}pcs ${flavor} & ${toppings}</div>
                <div class="button-divs">
                    <button onclick="
                    donutsList.splice(${i}, 1);
                    renderDonutList();
                    console.log('hi');
                    ">Delete
                    </button> 
                    <button onclick="
                        increaseQuantity(${i});
                        ">+1
                    </button> 
                    <button onclick="
                        decreaseQuantity(${i});
                        ">-1
                    </button>
                    </div>
            </div> 
            `;
            donutsListHTML += html;
        }
        
        document.querySelector('.js-donut-list')
            .innerHTML = donutsListHTML;
        }
        
        
        function pickFlavor(primary) {
        let getFlavor = document.querySelector(`.${primary}`);
        flavor = getFlavor.innerHTML;
        }
        
        
        function pickToppings(secondary) {
        let getToppings = document.querySelector(`.${secondary}`);
        toppings = getToppings.innerHTML;
        }
        
        function addThem() {
        if (donutsList.length < donutLimit) {
            donutsList.push({
            flavor,
            toppings,
            quantity: 1
            });

            renderDonutList();
        } else {
            alert(`You have reached the limit of ${donutLimit} customized donuts.`);
            resultTotalDonut();
        }
        }
        
        function increaseQuantity(index) {
        if (donutsList.length === donutLimit) {
            alert(`You have reached the limit of ${donutLimit} customized donuts.`);
        } else {
            donutsList[index].quantity++;
            donutLimit--;
            renderDonutList();
        }
        }
        
        function decreaseQuantity(index) {
        if (donutsList[index].quantity > 1) {
            donutsList[index].quantity--;
            renderDonutList();
        } else if (confirm("Are you sure you want to remove this donut?")) { 
            donutsList.splice(index, 1); 
            renderDonutList();
        }
        }
        
        function limitDonutList(size) {
        donutLimit = size;
        donutsList = donutsList.slice(0, donutLimit);
        document.querySelector('.js-pcs-donut-display')
            .innerHTML = `${donutLimit} pcs customized donut`;
        }
        
        function resultTotalDonut () {
        document.querySelector('.js-result-donut')
            .innerHTML = `Total Donut: ${quantity}`;
        }
        