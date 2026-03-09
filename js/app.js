async function loadAllCards() {

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json();
    // console.log(data.data);
    
    displaysCards(data.data);
}




// function displaysCards(card) {
//     const cardsContainer = document.getElementById("cardsContainer");

//     card.forEach(cards => {

//         // console.log(card);
//         const carts = document.createElement("div");

//         carts.innerHTML = `
       
//         `
    
//         cardsContainer.appendChild(carts);

//     });

// }

const displaysCards = (card)=>{
const cardsContainer = document.getElementById("cardsContainer");


card.forEach(cards => {
    console.log(cards);

    const carts = document.createElement('div');
    carts.innerHTML =`
     <div class="card bg-base-100 shadow-sm p-4 space-y-5 
                       border-t-8 border-[#00A96E]">
                    <div class="flex justify-between">
                        <p><img src="./assets/Status.png" alt=""></p>
                        <p class="badge badge-secondary">${cards.priority}</p>
                    </div>
                    <p class=" font-semibold text-xl">${cards.title}</p>
                    <p class="description font-normal text-wrap">${cards.description}</p>
                    <div>
                        
                        <div class="card-actions">
                            <p class="badge  bg-yellow-400">
                                <span><img src="./assets/Vector (1).png" alt=""></span>
                                BUG
                            </p>
                            <p class="badge bg-yellow-400"><SPan><img src="./assets/Lifebuoy.png" alt=""></SPan>
                                HELP WANTED</p>
                        </div>
                        <div class="text-[#64748B] space-y-2 pt-5">
                            <div class="divider"></div>
                            <p>${cards.author}</p>
                            <p>1/15/2024</p>
                        </div>
                    </div>
                </div>
    `
    cardsContainer.append(carts) 
    // const 
});

}



loadAllCards();
// displaysCards()
