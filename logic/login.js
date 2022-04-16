document.getElementById("button").addEventListener("click", Counter)

const Counter = () => {
    let number = parseInt(document.getElementById("button").textContent)

    number += 1

    return (document.getElementById("button").textContent = number)
}

export default Counter
