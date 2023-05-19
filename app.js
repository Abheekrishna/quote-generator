const URL = 'https://quote-garden.onrender.com/api/v3/quotes/random';

const quoteDiv = document.getElementById('quotePlaceHolder')
const authorDiv = document.getElementById('authorPlaceHolder')

const loader = document.getElementById('loader');

const loading = () => {
    loader.classList.add('show')
}
const removeLoading = () => {
    loader.classList.remove('show')
}

const getQuote = () => {
    loading()
    fetch(URL)
    .then(response => response.json())
    .then(json => {
        removeLoading()
        const quote = json.data[0].quoteText;
        const author = json.data[0].quoteAuthor
        quoteDiv.innerText = `"${quote}"`
        authorDiv.innerText = `-${author}`
    })
}

const btn = document.getElementById('getBtn');

btn.addEventListener('click', () => {
    getQuote()
})


const year = document.getElementById('year')
const newDate = new Date().getFullYear();
year.innerText = `${newDate}`


const copyBtn = document.getElementById('copyText')
const copyText = document.getElementById('copy')

const textCopy = () => {
    if (quoteDiv.innerText.length === 0) {
        copyText.innerText = `Nothing to copy!`
    } else {
        const range = document.createRange();
    range.selectNode(quoteDiv)

    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)

    document.execCommand('copy')
    selection.removeAllRanges()
    copyText.innerText = `Text copied!`
    }
}

copyBtn.onclick = () => textCopy()
btn.onclick = () => {
    copyText.innerText = ''
}

btn.onclick = () => {
    quoteDiv.innerText = ''
    authorDiv.innerText = ''
}