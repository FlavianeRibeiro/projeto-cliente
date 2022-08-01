<template lang="">
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 fw-bold">Cadastro de Clientes </p>
            </div>
        </div>
    </div>
    <div class="container">
  
</div>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div v-if="successMsg != ''" class="alert alert-success" role="alert">
                    {{successMsg}}
                </div>
            </div>
            <div class="col-md-10">
                <form> 
                    <div class="row">
                        <div class="form-group col-sm-4">
                            <label for="name">Nome </label>
                            <input type="text" required v-model="client.name" class="form-control" id="name">
                        </div>
                        <div class="form-group col-sm-4">
                            <label for="email">Email</label>
                            <input type="email" required v-model="client.email" class="form-control" id="email">
                        </div>
                        <div class="form-group col-sm-2">
                            <label for="age">Idade </label>
                            <input type="number" required v-model="client.age" class="form-control" id="age" >
                        </div>
                        <div class="form-group col-sm-2">
                            <label for="gender">Sexo: </label>
                            <select class="form-control" id="gender" required>
                                <option value=""></option>
                                <option value="Feminino">Feminino</option>
                                <option value="Masculino">Masculino</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-2">
                            <label for="cpe">CEP </label>
                            <input type="text" required v-model="client.cpe" class="form-control" id="cpe">
                        </div>
                        <div class="form-group col-sm-5">
                            <label for="address">Endereço</label>
                            <input type="text" required v-model="client.address" class="form-control" id="address" >
                        </div>
                        <div class="form-group col-sm-5">
                            <label for="city">Cidade </label>
                            <input type="text" required v-model="client.city" class="form-control" id="city" >
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-3">
                            <label for="state">UF</label>
                            <input type="text" required v-model="client.state" class="form-control" id="state" >
                        </div>
                        <div class="form-group col-sm-4">
                            <label for="district">Bairro </label>
                            <input type="text" required v-model="client.district" class="form-control" id="district" >
                        </div>
                        <div class="form-group col-sm-2">
                            <label for="number">Nº</label>
                            <input type="text" required v-model="client.number" class="form-control" id="number" >
                        </div>
                        <div class="form-group col-sm-3">
                            <label for="complement">Complemento</label>
                            <input type="text" required v-model="client.complement" class="form-control" id="complement" >
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col mt-2">
                            <input type="submit" class="btn btn-success" @click="submit" value="Salvar">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import api from "../service/api";
export default {
    name: 'CreatClient',
    data(){
        return{
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
            imageSrc: '',
            successMsg:'',
            errorMsg: '',
        }
    },
    methods: {
        submit(){
            console.log(this.client);
            this.client.img = this.imageSrc;
            axios.post(`${api.baseURL}/client`, this.client)
            .then((res) =>{
                console.log(res);
                this.successMsg = res.data.message;
            })
        }
    }
}
</script>
<style >
</style>