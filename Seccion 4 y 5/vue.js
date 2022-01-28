const data = {
    tareas: [
        {
            texto: 'Aprender Vue.js',
            terminada: false
        },
        {
            texto: 'Aprender Angualar',
            terminada: false
        },
        {
            texto: 'Aprender Ionic',
            terminada: false
        }
    ],
    nuevaTarea: ''
};

Vue.component('titulo', {
    template: '<h2>{{ titulo }}</h2>',
    data: function () {
        return {titulo: 'Lista de Tareas'}
    }
});

Vue.component('nueva-tarea', {
    template: `
    <div class="input-group">
        <input type="text" 
            placeholder="Escribe una nueva tarea..." 
            v-model="nuevaTarea"
            @keyup.enter="agregarTarea"
            class="form-control">
        <span class="input-group-btn">
            <button type="button " @click="agregarTarea"
                    class="btn btn-primary">Agregar</button>
        </span>
    </div>
    `,
    data: function () {
        return data;
    },
    methods: {
        agregarTarea: function () {
            const texto = this.nuevaTarea.trim();
            if(texto){
                this.tareas.push({
                    texto,
                    terminada: false
                });
            }
            this.nuevaTarea = '';
        }
    }
});

Vue.component('lista-de-tareas', {
    template: `
    <ul class="list-group lista">
                
        <li v-for="(tarea, indice) in tareas" class="list-group-item ">
            <div class="row">
                <div class="col-sm-10" v-bind:class="{terminada: tarea.terminada}">
                    {{ tarea.texto }}
                </div>
                <div class="col-sm-2">
                    <span class="pull-right">
                        <button class="btn-xs btn btn-success"
                                @click="tarea.terminada = !tarea.terminada">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                            </svg>

                        </button>

                        <button class="btn-xs btn btn-danger"
                                @click="borrarTarea(indice)">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>

                        </button>
                    </span>
                </div>
            </div>
        </li>
    </ul>
    `,
    data: function () {
        return data;
    },
    methods: {
        borrarTarea: function (indice) {
            this.tareas.splice(indice, 1);
        }
    }
});

const app = new Vue({
    el: '#app',
    data, 
    methods: {
        borrarTarea: function (indice) {
            this.tareas.splice(indice, 1);
        }
    }
})