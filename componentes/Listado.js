Vue.component('listado',{
    template://html
    `<div><button class="btn btn-info" type="submit" @click.prevent="AgregarEjercicio">Agregar</button><div> <div :class="['container', 'alert', 'col-12', 'mt-3', item.estado ? 'alert-success' : 'alert-danger' ]" v-for ="(item, index) of dataDb" role="alert"><span class="material-icons align-self-end">accessibility_new</span><h3 class ="col-3 d-inline">{{item.ejercicio}}</h3><span>-{{item.estado}}</span><input type="hidden" value="index"><div class = "float-right"><button class="btn btn-sm" @click="editarDB(index)"><span class="material-icons" >done</span></button><button class="btn btn-sm" @click="eliminarDB(index)"><span class="material-icons">delete</span></button></div></div></div></div>`,
    data(){
        return{
            dataDb: [],
        }
    },
    props:['tipoEjercicio'],
    created(){
        if(localStorage.getItem('rutina') != null){
            this.data = JSON.parse(localStorage.getItem('rutina'))
        }
    },
    methods:{
        AgregarEjercicio(){
            this.dataDb.push({
                ejercicio: this.tipoEjercicio,
                estado: false
            });
            
            localStorage.setItem('rutina', JSON.stringify(this.dataDb))
        },
        editarDB(index){
            if(this.dataDb[index].estado == true){
                this.dataDb[index].estado = false;
            }else{
                this.dataDb[index].estado = true;
            }
            localStorage.setItem('rutina', JSON.stringify(this.dataDb))
        },
        eliminarDB(index){
            this.dataDb.splice(index, 1);
            localStorage.setItem('rutina', JSON.stringify(this.dataDb))
        }
        
    }
})