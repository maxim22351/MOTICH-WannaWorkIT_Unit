

class User {

    constructor(name, surname, birthday, salary) {
        this._name = name
        this._surname = surname
        this._birthday = birthday
        this._salary = salary

    }

    country = 'Ukraine'
    colorSkin = 'white'

    showUserName (){
        console.log(`${this._name} ${this._surname}`)
    }

    showUserYear (){
        console.log(this._birthday)
    }

    get salary() {
        return this._salary
    }

    set salary(value) {
        if (value > this._salary) return this._salary = value;
        else console.log('Ошибка в изменения данных');
    }

}



const nameUser = prompt('Введите имя')
const surnameUser = prompt('Введите фамилию')
const birthdayUser = prompt('Введите дату рождения (формат 22-03-1981)')
const salaryUser = prompt('Введите вашу текущую зарплату (по курсу доллара)')

const  dateReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/


if (isNaN(nameUser) && isNaN(surnameUser) && birthdayUser.match(dateReg) && !isNaN(salaryUser)){
    const newUser = new User(nameUser,surnameUser,birthdayUser,salaryUser)

    newUser.showUserName()
    newUser.showUserYear()

    const salaryUserMore = +prompt('Какую зарплату вы хотите ? (Возможно изменить только в большую сторону)')


   if (salaryUserMore > newUser.salary){
       alert(`Вы увеличи свою зарплату на ${salaryUserMore - newUser.salary}`)
       newUser.salary = salaryUserMore
   } else {
       alert('Зарплата без изменений')
   }

} else {
    alert('Ошибка в введенных данных !!!!')
    const rebootPage = confirm('Пройти ещё раз ?')

    if (rebootPage) {
        window.location.reload()
    }
}









