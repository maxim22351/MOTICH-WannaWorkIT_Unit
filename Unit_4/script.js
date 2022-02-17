const blockButton = document.querySelector('.block_btn')


blockButton.addEventListener('click', function (e) {

    switch (e.target.style.backgroundColor){
        case 'red':
            document.body.style.backgroundColor = 'red';
            break;

        case 'orange':
            for (let i = 0; i < this.children.length; i++) {
                if (this.children[i].style.backgroundColor === 'orange') continue;
                this.children[i].style.color = 'white';
            }
            break;

        case 'yellow':
            this.lastElementChild.textContent = 'другой';
            break;

        case 'green':
            document.body.children[1].style.display = 'block'
            break;

        case 'deepskyblue':
            this.children[4].insertAdjacentHTML(
                'beforebegin',
                '<button style="background: deepskyblue">Button 5</button>'
            )
            break;

        case 'blue':
            this.firstElementChild.style.display = 'none';
            break;

        case 'purple':
            if (this.firstElementChild.style.display === '') alert('Кнопка есть');
            this.firstElementChild.style.display = '';
            break;
    }
})
