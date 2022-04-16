function counterHandler() {
    document.getElementById("button").addEventListener("click", () => {
        let number = parseInt(document.getElementById("button").textContent)

        number += 1

        return (document.getElementById("button").textContent = number)
    })
}

export default counterHandler
