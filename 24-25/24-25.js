let appNote = {
    data() {
        return {
            title: 'Список справ',
            note: '',
            noteArr: [],
            pidkazka: 'Введіть свою справу',
        }
    },
    methods: {
        addNote() {
            if (this.note != '') {
                this.noteArr.push(this.note);
                localStorage.setItem('alala', JSON.stringify(this.noteArr))
                this.note = ''
            }
            console.log(this.noteArr);


        }, DelNote(i) {
            this.noteArr.splice(i, 1);
            localStorage.setItem('alala', JSON.stringify(this.noteArr))
        },
    },
    mounted() {
        if (localStorage.getItem('alala') != null) {
            this.noteArr = JSON.parse(localStorage.getItem('alala'));
        }

    }
}
Vue.createApp(appNote).mount('#vue-notes')
