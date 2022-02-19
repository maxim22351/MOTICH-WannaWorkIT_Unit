
// // next page
// const buttonHeader = document.querySelector('.header_btn')
//
//
// buttonHeader.addEventListener('click',(e) => {
//     e.preventDefault()
//
//     document.body.children[0].style.display = 'none'
//     document.body.children[1].style.display = 'block'
//
// })

//delete

function Delete (){
    const iconDelete = document.querySelectorAll('.delete_note')

    iconDelete.forEach(deleteIcon => {
        deleteIcon.addEventListener('click',(e) => {
            const getArrLocalStorage = JSON.parse(localStorage.getItem('notes'));
            let searchKey;


            getArrLocalStorage.forEach(item => {
                if (item.key === e.target.dataset.key){
                    searchKey = item.key
                }
            })


            let index = getArrLocalStorage.findIndex(el => el.key === searchKey);

            getArrLocalStorage.splice(index,1)

            location.reload()
            localStorage.setItem('notes',JSON.stringify(getArrLocalStorage))

        })
    })

}

function change (){
    const iconChange = document.querySelectorAll('.change_note')
    const popupChange = document.querySelector('.change')
    const closeChangePopup = popupChange.querySelector('.popup_form_btn_back')
    const popupChangeForm = popupChange.querySelector('.popup_form_add')
    const popupChangeButton = popupChangeForm.querySelector('.popup_form_btn_creat')
    const getArrLocalStorage = JSON.parse(localStorage.getItem('notes'))
    let changeKey;

    iconChange.forEach(iconChange => {
        iconChange.addEventListener('click',(e)=>{
            e.preventDefault()

            changeKey = e.target.dataset.key;
            popupChange.style.display = 'block'
            document.body.style.overflow = 'hidden'

            getArrLocalStorage.forEach(item => {
                if (item.key === changeKey){
                    popupChangeForm.children[0].children[0].value = item.title
                    popupChangeForm.children[1].children[0].value = item.desk
                    popupChangeForm.children[2].children[0].value = item.color
                    popupChangeForm.children[3].children[0].value = item.day

                }
            })

        })
    })

    closeChangePopup.addEventListener('click',(e) => {
        e.preventDefault()
        popupChange.style.display = 'none'
        document.body.style.overflow = ''
    })

    popupChangeButton.addEventListener('click',(e) => {
        e.preventDefault()

        getArrLocalStorage.forEach(item => {
            if (item.key === changeKey){
                 item.title = popupChangeForm.children[0].children[0].value
                 item.desk = popupChangeForm.children[1].children[0].value
                 item.color = popupChangeForm.children[2].children[0].value
                 item.day = popupChangeForm.children[3].children[0].value

            }
        })
        alert('Успешно изменили заметку')
        localStorage.setItem('notes',JSON.stringify(getArrLocalStorage))
        location.reload()
    })
}

// show notes
const blockNotes = document.querySelector('.section_block_notes_ table tbody')
const blockLastNotes = document.querySelectorAll('.section_last_block_item')[1]


    try{
        const getArrLocalStorage = JSON.parse(localStorage.getItem('notes'));
        const getArrLocalStorageLast = JSON.parse(localStorage.getItem('notes'))[JSON.parse(localStorage.getItem('notes')).length - 1];

        getArrLocalStorage.forEach(item => {
            blockNotes.insertAdjacentHTML('beforeend',
                `
                <tr>
                    <td>${item.day}</td>
                    <td class="section_block_notes_cub" style="background: ${item.color}"></td>
                    <td>${item.title}</td>
                    <td>
                        <img src="img/icon_delete.png" alt="delete" data-key="${item.key}" style="cursor: pointer" class="delete_note">
                        <img src="img/icon_change.png" alt="change" data-key="${item.key}" style="cursor: pointer" class="change_note">
                    </td>
                </tr>
            `
            )
        })

        blockLastNotes.children[0].textContent = getArrLocalStorageLast.title
        blockLastNotes.children[1].textContent = getArrLocalStorageLast.day
        blockLastNotes.children[2].textContent = getArrLocalStorageLast.desk
    } catch (e){
        console.log(e)
    }




// open and close popup

const buttonShowPopup = document.querySelector('.section_btn')
const popupBlock = document.querySelector('.b-popup')
const closePopupBlock = document.querySelector('.popup_form_btn_back')

buttonShowPopup.addEventListener('click', (e)=>{
    e.preventDefault();

    popupBlock.style.display = 'block';
    document.body.style.overflow = 'hidden'
})

closePopupBlock.addEventListener('click', (e)=>{
    e.preventDefault();

    popupBlock.style.display = 'none';
    document.body.style.overflow = ''
})

const PopupForm = document.querySelector('.popup_form_add')
const buttonCreatList = document.querySelector('.popup_form_btn_creat')



// creat notes
buttonCreatList.addEventListener('click',(e)=>{
    e.preventDefault()

    let arrResult = [];
    let arr = [];

    function randomKey(length) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }


    for (let i = 0; i < PopupForm.children.length; i++) {
        if(i === 4) continue

        if (PopupForm.children[i].children[0].value === ''){
            alert('Заполните все поля')
            arrResult.push(false)
        } else {
            arrResult.push(true)
            arr.push(PopupForm.children[i].children[0].value)
            PopupForm.children[i].children[0].value = ''
        }
    }

    if(arrResult[0] && arrResult[1] && arrResult[2] && arrResult[3]){
        alert('Успешно добавлен')
        popupBlock.style.display = 'none';
        document.body.style.overflow = ''
        arr.unshift(randomKey(10))


        if (localStorage.getItem('notes') === null){
            localStorage.setItem('notes',JSON.stringify([{
                key: arr[0],
                title: arr[1],
                color: arr[3],
                day: arr[4],
                desk: arr[2]
            }]))

            blockNotes.insertAdjacentHTML('beforeend',
                `
                        <tr>
                            <td>${arr[4]}</td>
                            <td class="section_block_notes_cub" style="background: ${arr[3]}"></td>
                            <td>${arr[1]}</td>
                            <td>
                                <img src="img/icon_delete.png" alt="delete" data-key="${arr[0]}" style="cursor: pointer" class="delete_note">
                                <img src="img/icon_change.png" alt="change" data-key="${arr[0]}" style="cursor: pointer" class="change_note">
                            </td>
                        </tr>
                    `
            )

            blockLastNotes.children[0].textContent = arr[1]
            blockLastNotes.children[1].textContent = arr[4]
            blockLastNotes.children[2].textContent = arr[2]

        } else {
            let getArrLocalStorage = JSON.parse(localStorage.getItem('notes'));

            getArrLocalStorage[getArrLocalStorage.length] = {
                key: arr[0],
                title: arr[1],
                color: arr[3],
                day: arr[4],
                desk: arr[2]
            }

            blockNotes.insertAdjacentHTML('beforeend',
                `
                        <tr>
                            <td>${arr[4]}</td>
                            <td class="section_block_notes_cub" style="background: ${arr[3]}"></td>
                            <td>${arr[1]}</td>
                            <td>
                                <img src="img/icon_delete.png" alt="delete" data-key="${arr[0]}" style="cursor: pointer" class="delete_note">
                                <img src="img/icon_change.png" alt="change" data-key="${arr[0]}" style="cursor: pointer" class="change_note">
                            </td>
                        </tr>
                    `
            )

            blockLastNotes.children[0].textContent = arr[1]
            blockLastNotes.children[1].textContent = arr[4]
            blockLastNotes.children[2].textContent = arr[2]


            localStorage.setItem('notes',JSON.stringify(getArrLocalStorage))
        }

    }
    Delete()
    change()
})


Delete()
change()


