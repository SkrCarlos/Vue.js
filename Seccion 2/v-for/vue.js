var app = new Vue({
    el: '#vm',
    data: {
        paises: [
            {
                nombre: 'México',
                poblacion: 1000
            }, 
            {
                nombre: 'España',
                poblacion: 1000
            }, 
            {
                nombre: 'Colombia',
                poblacion: 1000
            }
        ],

        empleado: {
            nombre: 'Carlos Carreon',
            edad: '20 años',
            nacionalidad: 'Mexicano',
            profesion: 'Programador',
            empresa: 'IMB',
            telefono: '123456789'
        }
    }
});