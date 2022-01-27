var app = new Vue({
    el: '#vm',
    data: {
        contador: 0,
        x: 0,
        y: 0,
        contadorClicker: 0
    },
    methods: {
        sumarUno:  function() {
            this.contador++;
        },
        restarUno: function() {
            this.contador--;
        },
        alerta: function(mensaje) {
            alert(mensaje);
        },
        mostrarUbicacion: function(e) {
            this.x = e.clientX;
            this.y = e.clientY;
        },
        clicker: function (cantidad) {
            this.contadorClicker += cantidad;
        }
    }
});