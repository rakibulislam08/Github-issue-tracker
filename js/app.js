const api = "https://phi-lab-server.vercel.app/api/v1/lab/issues"

let allIssues = []

async function loadAllCards() {

    const cardsContainer = document.getElementById("cardsContainer")
    cardsContainer.innerHTML = `<span class="loading loading-spinner loading-lg"></span>`

    const res = await fetch(api)
    const data = await res.json()

    allIssues = data.data

    displaysCards(allIssues)
}


const displaysCards = (cardData) => {

    const cardsContainer = document.getElementById("cardsContainer")
    cardsContainer.innerHTML = ""

    cardData.forEach(cards => {

        const carts = document.createElement('div')

        const borderColor =
            cards.status === "open"
                ? "border-green-500"
                : "border-purple-500"

        carts.innerHTML = `
<div onclick="openModal(${cards.id})"
class="card bg-base-100 shadow-sm p-4 space-y-5 border-t-8 ${borderColor} cursor-pointer">

<div class="flex justify-between">
<p><img src="./assets/Status.png"></p>
<p class="badge badge-secondary">${cards.priority}</p>
</div>

<p class="font-semibold text-xl">${cards.title}</p>

<p class="description">${cards.description}</p>

<div>

<div class="card-actions">
<p class="badge bg-yellow-400">${cards.label}</p>
</div>

<div class="text-[#64748B] space-y-2 pt-5">
<div class="divider"></div>
<p>${cards.author}</p>
<p>${cards.createdAt}</p>
</div>

</div>

</div>
`

        cardsContainer.append(carts)
    })
}


document.getElementById("all-btn").onclick = () => {

    setActive("all-btn")
    displaysCards(allIssues)

}

document.getElementById("openBtn").onclick = () => {

    setActive("openBtn")

    const openIssues = allIssues.filter(issue => issue.status === "open")

    displaysCards(openIssues)
}

document.getElementById("closedBtn").onclick = () => {

    setActive("closedBtn")

    const closedIssues = allIssues.filter(issue => issue.status === "closed")

    displaysCards(closedIssues)
}


function setActive(id) {

    document.querySelectorAll("#all-btn,#openBtn,#closedBtn").forEach(btn => {
        btn.classList.remove("bg-[#4A00FF]", "text-white")
        btn.classList.add("bg-white", "text-[#64748B]")
    })

    const activeBtn = document.getElementById(id)

    activeBtn.classList.remove("bg-white", "text-[#64748B]")
    activeBtn.classList.add("bg-[#4A00FF]", "text-white")

}


const searchInput = document.querySelector("input")
const searchBtn = document.querySelector(".btn-primary")

searchBtn.onclick = async () => {

    const text = searchInput.value

    if (!text) {
        displaysCards(allIssues)
        return
    }

    const res = await fetch(
        `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`
    )

    const data = await res.json()

    displaysCards(data.data)
}




loadAllCards()