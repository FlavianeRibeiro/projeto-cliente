<template>
    <div>
        <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 fw-bold">Cadastro de Clientes
                    <router-link to="/creat" class="btn btn-success"> Novo </router-link>
                </p>
            </div>
        </div>
    </div>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-12">
                <div v-if="successMsg != ''" class="alert alert-success" role="alert">
                    {{successMsg}}
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" v-for="client in clients" v-bind:key="client._id">
                <div class="card my-2">
                    <div class="card-body">
                        <div class="column">
                            <ul class="">
                                <li class="list-group-item"> <span class="fw-bold">Nome: </span>{{client.name}}</li>
                                <li class="list-group-item"> <span class="fw-bold">E-mail: </span>{{client.email}}</li>
                                <li class="list-group-item"> <span class="fw-bold" v-if="client.age">Idade: </span>{{client.age}} anos</li>
                                <li class="list-group-item text-center"> <span class="adress" v-if="client.state">{{client.state}} | {{client.city}}</span></li>
                            </ul>
                            <div class="btns d-flex flex-row justify-content-center align-itens-center">
                                <router-link :to="`/view/${client._id}`" class="btn btn-info my-1">
                                <i class="fa fa-eye"></i></router-link>                                    
                                <router-link :to="`/edit/${client._id}`" class="btn btn-primary my-1">
                                <i class="fa fa-pen"></i></router-link>                                    
                                <button class="btn btn-danger my-1" @click="deleteClient(client._id)">
                                <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
</template>
<script>
import axios from "axios";
import api from "../service/api"

export default {
    data(){
        return{
            search: '',
            clients: [],
            successMsg:'',
            errorMsg: '',
        }
    },
    methods: {
        getAllClient(){
            axios.get(`${api.baseURL}/client`)
            .then((res) => {
                this.clients = res.data;
            }).catch(err => console.log(err))
        },
        deleteClient(id){
            console.log(id)
            axios.delete(`${api.baseURL}/client/${id}`)
            .then((res) =>{
                this.successMsg = res.data.message;
                console.log(res, this.clients.indexOf(id))
                this.getAllClient();
            }).catch(err => console.log(err))  
        },
    },
    created() {
      this.getAllClient();
    },
}
</script>
<style>
    .btns{
        gap: 15px;
    }   
    ul {
        padding-left: 0;
    }
    .adress{
        background-color: #17a2b8;
        color:white;
        padding: 8px;
        border-radius: 25px;
        font-size: 14px;
    }
    
</style>