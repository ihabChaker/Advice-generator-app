/**
 * @typedef {Object} Slip
 * @property {string} advice - The advice text.
 * @property {number} id - The ID of the advice slip.
*/

/**
 * @typedef {Object} SlipApi
 * @property {Slip} slip - The advice object.
*/

const API_ENDPOINT = 'https://api.adviceslip.com/advice'

const adviceTextContainer = document.getElementById('advice-text')
const adviceIdContainer = document.getElementById('advice-id')

function getAdviceData() {
    return fetch(API_ENDPOINT).then(async (response) => {
        /** @type {SlipApi} */
        const { slip } = await response.json()
        return slip
    }).catch((error) => {
        alert(error)
    })
}

function displayAdvice(id, advice) {
    adviceTextContainer.innerText = advice
    adviceIdContainer.innerText = id
}

async function fetchAndDisplayAdvice() {
    const adviceData = await getAdviceData();
    if (adviceData) {
        displayAdvice(adviceData.id, adviceData.advice);
    }
}
document.addEventListener('DOMContentLoaded', fetchAndDisplayAdvice)

const newAdviceBtn = document.getElementById('new-advice-btn')
newAdviceBtn.addEventListener('click', fetchAndDisplayAdvice)