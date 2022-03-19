<template>
    <v-content>
        <v-container>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="8">
                            <v-window v-model="step">
                                <v-window-item :value="1">
                                    <v-row>
                                        <v-col>
                                           <h1 class="text-center display-2 yellow--text text--accent-3">Entre nesse carnaval!</h1>
                                            <v-form>
                                                <v-text-field label="Email" name="Email" type="text" color="yellow accent-3" :rules="emailRules" required/>
                                                <v-text-field label="Senha" name="Password" type="password" color="yellow accent-3"/>
                                                <v-text-field label="Repita a senha" name="repitaPassword" type="password" color="yellow accent-3"/>
                                                <div class="bota">
                                                    <v-btn class="botao" rounded color="yellow"> Registrar </v-btn> 
                                                </div>
                                            </v-form>
                                        </v-col>
                                    </v-row>
                                </v-window-item>  
                            </v-window>
                    </v-col>
                </v-row>
        </v-container>
    </v-content>
</template>

<script>
    export default{
        name:'FRegistro',
         data: () => ({
            emailRules: [ v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail deve ser válido'],
        }),
         methods:{
        entrar() {this.$router.push({ name: "" });},
        cadastrar(){this.$router.push({ name: "" });}
        },
    }
</script>

<style scoped>

    

</style>