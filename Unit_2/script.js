


function Year (season = 'Время года не указан'){
    this.month = 12
    this.year = 2022
    this.yearSeason = (!isNaN(season) || season == null )? '' : season
    this.showInfo = () => {
        alert(`${this.yearSeason} прекрасное время года !`)
    }
}

const season = prompt('Укажите время года')
const years = new Year(season)

years.showInfo()