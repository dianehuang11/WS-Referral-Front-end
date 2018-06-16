document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.js-health-container-toggle').addEventListener('click', () => {
        document.querySelector('.js-health-container').classList.remove('hidden')
        document.querySelector('.js-item-container').classList.add('hidden')
    })
   
    document.querySelector('.js-item-container-toggle').addEventListener('click', () => {
        document.querySelector('.js-item-container').classList.remove('hidden')
        document.querySelector('.js-health-container').classList.add('hidden')
    })

   
});

