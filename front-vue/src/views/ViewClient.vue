<template lang="">
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-4">
                <div class="card my-2">
                    <div class="card-body">
                        <ul class="col-sm-12">
                            <p class="h3 fw-bold">{{client.name}} </p>
                            <li class="list-group-item">E-mail: <span class="fw-bold">{{client.email}}</span></li>
                            <li class="list-group-item">Idade: <span class="fw-bold">{{client.age}} anos</span></li>
                            <li class="list-group-item">Sexo: <span class="fw-bold">{{client.gender}}</span></li>
                            <li class="list-group-item" v-if="client.cpe">Endereço: <span class="fw-bold">{{client.adrress}}, {{client.district}}, {{client.number}}, {{client.city}}, {{client.state}} ({{client.complement}})</span></li>
                        </ul>
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
            clientId: this.$route.params.id,
            client: [],
        }
    },
    methods: {
        getAllClient(){
            axios.get(`${api.baseURL}/client/${this.clientId}`)
            .then((res) => {
                this.client = res.data;
            }).catch(err => console.log(err))
        },
    },
    created() {
      this.getAllClient();
    },
}
</script>
<style>
    
</style>