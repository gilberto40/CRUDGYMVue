Vue.component('ejercicio',{
    template://html
    `<div><h3><span class="material-icons">accessibility_new</span>{{mensaje}}</h3><input type="text" class="form-control" v-model="tipoEjercicio"><listado :tipoEjercicio="tipoEjercicio"></listado></div> `, 
    data(){
        return{
            mensaje: "Gym Component Vue Dinamic",
            tipoEjercicio: ""
        }
    }
})