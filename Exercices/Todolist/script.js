const list = document.getElementById('list')
const form = document.querySelector('form')
const item = document.getElementById('item')

//ajouter une tâche
form.addEventListener('submit', (e) => {
    e.preventDefault();
    list.innerHTML += `<li>${item.value}</li>`;
    storage();
    item.value = '';
});

//supprimer une tâche
list.addEventListener('click', (e) => {
    if(e.target.classList.contains('checked')){
        e.target.remove();
    } else {
        e.target.classList.add('checked');
    }
    storage();
});

//stocker les tâches
function storage(){
    window.localStorage.todoList = list.innerHTML;
}