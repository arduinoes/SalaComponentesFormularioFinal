<template>
  <Navbar />
  <div v-if="obra" class="row justify-content-center">
    <BaseDetalle 
      :obra="obra" />
  </div>
</template>

<script>
import BaseDetalle from "../components/BaseDetalle.vue";
import Navbar from "../components/Navbar.vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../main";
export default {
  name: "DetalleObra",
  props: ["id"],
  components: {
    BaseDetalle,
    Navbar
  },

  data() {
    return {
      obra: null,
    };
  },
  methods: {
    async obtenerDatoID(id) {
      const docRef = doc(db, "obras", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.obra = docSnap.data();
        this.obra.id = docSnap.id;
        console.log(this.obra)
      } else {
        console.log("¡No existe el documento!");
      }
    },
  },
    mounted() {
    this.obtenerDatoID(this.id);
  },

};
</script>
