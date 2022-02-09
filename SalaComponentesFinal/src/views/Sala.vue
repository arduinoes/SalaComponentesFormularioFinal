<template>
  <Navbar />
  <div class="row justify-content-center">
    <BaseTarjeta
      class="col-4 m-2"
      v-for="obra in obras"
      :key="obra.id"
      :obra="obra"
    />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import BaseTarjeta from "../components/BaseTarjeta.vue";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../main";
export default {
  name: "Sala",
  components: {
    Navbar,
    BaseTarjeta,
  },
  data() {
    return {
      obras: [],
      obra: {
        title: "",
        author: "",
        date: "",
        photo: "",
      },
    };
  },
  methods: {
    async obtenerDatos() {
      const data = await getDocs(collection(db, "obras"));
      data.forEach((doc) => {
        let obra = doc.data();
        obra.id = doc.id;
        this.obras.push(obra);
        console.log(obra);
      });
    },
  },
  mounted() {
    this.obtenerDatos();
  },
};
</script>
