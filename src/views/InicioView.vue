<template>
    <v-container>
        <div class="titulo-carnaval">
            <h2 class="text-h5 text-center mb-3 mt-5">Carnaval na Pandemia</h2>
        </div>
        <v-img class="carnaval-img"  src="../assets/carnaval.png" alt="Carnaval de Rua"></v-img>

        <div class="intro-carnaval">        
            <p>Ajudamos pessoas a encontrarem blocos de carnaval espalhados por todo Brasil. 
            Diminuimos a distância entre os foliôes e a folia através  de uma tela de video. 
            Pegue a sua fantasia e venha pular carnaval sem sair de casa. 
            </p>
        </div>    
    </v-container>
</template>

<script>
export default {
   name: 'MeuInicio' 
}
</script>

<style scoped>
.carnaval-img{
    height: 250px;
    border-radius: 10px;
    margin-bottom: 80px;
}
.intro-carnaval {
    display: flex;
    text-align: center;

}  
.titulo-carnaval {
    color: black;
    margin-bottom: 30px;
}  

</style>

