<template lang="">
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 fw-bold">Alteração de dados </p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-10">
                <form> 
                    <div class="row">
                        <div class="form-group col">
                            <label for="name">Nome </label>
                            <input type="text" required v-model="client.name" class="form-control" id="name" placeholder="Nome Completo">
                        </div>
                        <div class="form-group col">
                            <label for="email">Email</label>
                            <input type="email" required v-model="client.email" class="form-control" id="email" placeholder="Email">
                        </div>
                    </div> 
                    <div class="row">
                        <div class="form-group col">
                            <label for="age">Idade </label>
                            <input type="number" required v-model="client.age" class="form-control" id="age" >
                        </div>
                        <div class="form-group col">
                            <label for="gender">Sexo </label>
                            <select class="form-control" id="gender" required>
                                <option value="Feminino">Feminino</option>
                                <option value="Masculino">Masculino</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-2">
                            <label for="cpe">CPE </label>
                            <input type="text" required v-model="client.cpe" class="form-control" id="cpe">
                        </div>
                        <div class="form-group col-sm-5">
                            <label for="address">Endereço</label>
                            <input type="text" required v-model="client.address" class="form-control" id="address" placeholder="Email">
                        </div>
                        <div class="form-group col-sm-5" sstyle="width: 40.666667%;">
                            <label for="city">Cidade </label>
                            <input type="text" required v-model="client.city" class="form-control" id="city" >
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-1">
                            <label for="state">UF</label>
                            <input type="text" required v-model="client.state" class="form-control" id="state" >
                        </div>
                        <div class="form-group col-sm-4">
                            <label for="district">Bairro </label>
                            <input type="text" required v-model="client.district" class="form-control" id="district" >
                        </div>
                        <div class="form-group col-sm-1">
                            <label for="number">Nº</label>
                            <input type="text" required v-model="client.number" class="form-control" id="number" >
                        </div>
                        <div class="form-group col-sm-6" style="width: 48%;">
                            <label for="complement">Complemento</label>
                            <input type="text" required v-model="client.complement" class="form-control" id="complement" >
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col mt-2">
                            <input type="submit" class="btn btn-success" @click="updateClient()" value="Editar">
                        </div>
                    </div>
                </form>
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
            client: {
                name: '',
                age: null,
                gender:'',
                email: '',
                cpe: '',
                address: '',
                number: null,
                district:'',
                city:'',
                state:'',
                complement:''
            },  
            sucessMsg:'',
            errorMsg: '',
        }
    },
    methods: {
        getIdClient(){
            axios.get(`${api.baseURL}/client/${this.clientId}`)
            .then((res) => {
                this.client = res.data;
            }).catch(err => console.log(err))
        },
        updateClient(){
            axios.patch(`${api.baseURL}/client/${this.clientId}`, this.client)
            .then((res) =>{
                this.sucessMsg = res.data;
            }).catch(err => console.log(err))
        }
    },
    created() {
      this.getIdClient();
    },
}
</script>
<style lang="">
    
</style>