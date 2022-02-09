<template>
  <div class="card" style="width: 18rem">
    <img :src="obra.photo" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ obra.author }}</h5>
      <p class="card-text">
        {{ obra.title }}
      </p>
       <router-link :to="{ name: 'DetalleObra', params: { id: obra.id }}"
   class="btn btn-primary">Detalles
    </router-link>
    </div>
  </div>
</template>


<script>
export default {
    props: {
    obra: Object
  }
}
</script>
