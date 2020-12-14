window.addEventListener('load', function() {
    let figs = document.body
    .querySelectorAll('.toggle-figure')

    for (let f=0; f < figs.length; f++ ) {
        figs[f].addEventListener("click", () => {
            figs[f].classList.toggle('toggle-figure--expand')

            figs[f].querySelector('.toggle-figure__button')
            .classList.toggle('toggle_figure__button--expand')

            figs[f].querySelector('.toggle-figure__figure')
            .classList.toggle('toggle_figure__figure--expand')

            document.getElementById('body').style.display = 'none'
            document.getElementById('body').style.display = 'inherit'

            console.log('toggle figure %s', figs[f])
        })
    }
})
