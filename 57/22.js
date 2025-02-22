let carData = [
    {
        name: 'Ford',
        model: 'Focus',
        Image: 'ford-focus.jpg',
        year: '2015',
        price: '8000',
        color: 'red',
        about: 'Детальніше про Форд Фокус',
    },
    {
        name: 'Opel',
        model: 'Insignia',
        Image: 'opel.jpg',
        year: '2015',
        price: '8000',
        color: 'blue',
        about: 'Детальніше про Опель Інсігніа',
    },
    {
        name: 'Toyota',
        model: 'Rav4',
        Image: 'rav4.jpg',
        year: '2015',
        price: '8000',
        color: 'blue',
        about: 'Детальніше про Тойоту',
    },
    {
        name: 'Zaz',
        model: 'Vida',
        Image: 'vida.jpg',
        year: '2015',
        price: '8000',
        color: 'blue',
        about: 'Детальніше про Заз Віда',
    },
    {
        name: 'Wolsvagen',
        model: 'Juke',
        Image: 'wv-juke.jpg',
        year: '2015',
        price: '8000',
        color: 'blue',
        about: 'Детальніше про Фольцваген Жук'
    },
    {
        name: 'Renault',
        model: 'Kilo',
        Image: 'renault.jpg',
        year: '2015',
        price: '8000',
        color: 'blue',
        about: 'Детальніше про Renault Kilo ',
    },
]
let appCar = {
data(){
return{
cars:carData,
oneCar:carData[0],
num:0
}
},
methods:{
clickCar(i){
    this.oneCar = carData[i]
    this.num = i
}
}
}
Vue.createApp(appCar).mount('#vue-cont')