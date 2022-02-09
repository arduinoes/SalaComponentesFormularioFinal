<template>
  <div>
    <Navbar />
    <div class="container my-5">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="(item, index) in obras" :key="index">
          <div class="card">
            <img :src="item.photo" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title text-center">{{ item.author }}</h5>
              <p class="card-text text-center">{{ item.title }}</p>
              <p class="card-text text-center">{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { query, orderBy, limit, startAfter } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../main";
export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      lastVisible: '',
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
    // GET
    async obtenerDatos() {
      const q = query(collection(db, "obras"), orderBy("author"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
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
