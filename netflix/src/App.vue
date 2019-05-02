<template>
  <div class="contain">
    <Categoria :key="categoria.id" v-for="categoria in categorias"
               v-bind:titulo= "categoria.nome"
               v-bind:filmes="categoria.filmes">

    </Categoria>


  </div>
</template>

<script>

  import Categoria from './components/categoria';


export default {
  components: {
    Categoria
  },
  name: 'App',
  data() {
    return {

      categorias:[]


    }
  },
  created() {
    this.$http.get('http://localhost:3000/categorias').then(response => {
      this.categorias = response.body;

    })
  }
}


</script>

<style scoped>

</style>
