<template lang="">
    <div>
        <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
            <a class="navbar-brand" href="#"> CRUD-Cliente</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/creat" class="nav-link">Cadastro</router-link> 
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Listagem</router-link> 
                </li>
                </ul>
            </div>            
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>