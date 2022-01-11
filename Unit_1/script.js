

const lengthRoomOne = prompt('Какая длина комнаты ?'),
      widthRoomOne  = prompt('Какая ширина комнаты ?');



if (lengthRoomOne !== null && widthRoomOne !== null && !isNaN(lengthRoomOne) && !isNaN(widthRoomOne)){
    const addRoom = confirm('Хотите добавить ещё одну комнута в расчеты ?');

    if (addRoom){
        const lengthRoomTwo = prompt('Какая длина комнаты ?'),
              widthRoomTwo  = prompt('Какая ширина комнаты ?');

        if (lengthRoomTwo !== null && widthRoomTwo !== null && !isNaN(lengthRoomTwo) && !isNaN(widthRoomTwo)){
            alert((lengthRoomOne * widthRoomOne) + (lengthRoomTwo * widthRoomTwo))
        }else {
            alert('Ошибка в введенных данных при добавлении второй комнаты')
        }

    }else  {
        alert(lengthRoomOne * widthRoomOne)
    }

} else {
    alert('Ошибка в введенных данных');
}





