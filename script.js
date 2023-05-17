const armenian_btn = document.querySelector('#armenian')
const armenian_text = document.querySelectorAll('.arm')

const english_btn = document.querySelector('#english')
const english_text = document.querySelectorAll('.en')






const show_english_text = function (){
    for(let i of english_text) {
        i.classList.remove('hidden');
    }
    for(let i of armenian_text) {
        i.classList.add('hidden');
    }

}


const show_armenian_text = function (){
    for(let i of armenian_text) {
        i.classList.remove('hidden');
    }

    for(let i of english_text) {
        i.classList.add('hidden');
    }
}

show_armenian_text()


armenian_btn.addEventListener('click', function() {
    show_armenian_text();
});

english_btn.addEventListener('click', function() {
    show_english_text();
});


function scrollToGoals() {
    const goalsSection = document.querySelector('#goals');
    goalsSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContacts() {
    const goalsSection = document.querySelector('#contacts');
    goalsSection.scrollIntoView({ behavior: 'smooth' });
}















