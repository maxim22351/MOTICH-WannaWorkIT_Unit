document.querySelector('.block_btn').addEventListener('click', function (e) {

    switch (e.target.style.backgroundColor) {
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

        async function cloneButton(item) {
            let event = e.target;
            let indexBtn;

            await Array.from(item.children).forEach(item => {
                if (item.style.backgroundColor === event.style.backgroundColor) {
                    indexBtn = parseInt(item.textContent.match(/[0-9]/))
                }

            })

            await item.children[indexBtn - 1].insertAdjacentHTML(
                'beforebegin',
                `<${event.nodeName.toLowerCase()} style="background: ${event.style.backgroundColor}">
                        ${event.textContent}
                      </${event.nodeName.toLowerCase()}>`
            )
        }

            cloneButton(this);

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