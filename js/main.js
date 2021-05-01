document.getElementById('btn').addEventListener('click', showBackground)

function showBackground() {
    document.querySelector('body').style.background = 'red'
    document.querySelector('body').style.transition = '2s'
}