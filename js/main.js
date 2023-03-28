// ! ----------- Local Storage ------------
// console.log(localStorage);

// ? setItem 
// localStorage.setItem('name', 'Aidai');
// let obj = {
//     city: 'Bishkek',
//     country: 'Kyrgyzstan',
// };
// localStorage.setItem('country',JSON.stringify(obj));

//? Для отправки данных в LocalStorage используется метод setItem, который принимает два аргумента : 1) Название ключа; 2) данные в формате JSON.stringify();


// ? getItem 
// let data1 = localStorage.getItem('name');
// console.log(data1);

// let data2 = JSON.parse(localStorage.getItem('country'));
// console.log(data2);

// let data3 = localStorage.getItem('obj');
// console.log(data3);
// ? Метод getItem  используется для получения данных из localStorage. Принимает один аргумент - ключ.

// ? Данные приходят в формате JSON.stringify(), поэтому при получении нужно перевести в формат JSON.parse();

// ? removeItem - метод который удаляет данные по названию ключа
// localStorage.removeItem('country');

// ? clear - очищает весь localStorage();
// localStorage.clear()

// ! ============== SessionStorage ===============

// localStorage.setItem('example', 'будет храниться даже если закроем браузер и закомментируем данный код');

// sessionStorage.setItem('example', 'Очищается при закрытии вкладки браузера');




// ! ------- TODO list ------------
let form = document.querySelector('form');
let inpTask = document.querySelector('form input');
let list = document.querySelector('ul');

// ? create
function createTask(){
    if(localStorage.getItem('tasks-data') === null){
        localStorage.setItem('tasks-data', '[]');
    }

    let data = JSON.parse(localStorage.getItem('tasks-data'))
    console.log(data);
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    let obj = {
        task: inpTask.value
    };

    let data = JSON.parse(localStorage.getItem('tasks-data'));

    data.push(obj);
    localStorage.setItem('tasks-data',JSON.stringify(data));

    // setItemObjTask(obj);
    createTask();
});

// функция для добавления новых объектов в главный массив

// function setItemObjTask(task){
//     let data = JSON.parse(localStorage.getItem('tasks-data'));
//     data.push(task);
//     localStorage.setItem('tasks-data',JSON.stringify(data));
// }