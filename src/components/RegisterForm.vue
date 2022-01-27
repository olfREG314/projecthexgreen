<template>
  <!-- <div class="justForCenter"> -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col m-5">
        <form action="#" @submit.prevent="submit">
          <div class="form-group row">
            <label for="Name" class="col form-label">NGO Name</label>
            <input type="Name" class="form-control" v-model="orgName" />
          </div>
          <div class="form-group row">
            <label for="Discription" class="col form-label">Discription</label>
            <textarea
              type="textarea"
              class="form-control"
              style="height: 200px"
              v-model="orgDescription"
            />
            <div id="descriptionHelp" class="form-text">
              Tell people what your NGO work for
            </div>
          </div>
          <div class="form-group row">
            <label for="Phone" class="col form-label">Phone Number</label>
            <input type="Phone" class="form-control" v-model="orgPhone" />
          </div>
          <div class="row createAccount-btn justify-content-center">
            <button class="btn btn-primary" @click="saveMessage()">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div class="col"><MapComponent2 class="map2" /></div>
      <div class="col-1 cancel-btn" style="">
        <button class="btn btn-outline-danger" @click="hideRegisterCmt()">
          <i class="bi bi-x-circle"></i>
        </button>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
import MapComponent2 from "@/components/MapCmtChsLoc";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../main.js";
export default {
  components: {
    MapComponent2,
  },
  data() {
    return {
      orgName: "",
      orgDescription: "",
      orgPhone: "",
      // orgPassword: ''
    };
  },
  methods: {
    hideRegisterCmt() {
      this.$store.commit("showRegister", false);
    },
    async saveMessage() {
      // Add a new message entry to the Firebase database.
      console.log("inside savemessage");
      try {
        await addDoc(collection(db, "ngoUsers"), {
          orgName: this.orgName,
          orgDescription: this.orgDescription,
          orgPhone: this.orgPhone,
        });
      } catch (error) {
        console.error("Error writing new message to Firebase Database", error);
      }
      alert("User Registered");
      this.$store.commit("showRegister", false);
    },
  },
};
</script>
<style scoped>
.container {
  border-radius: 10px;
  background-color: var(--nice-color);
  display: flex;
  position: relative;
  height: 90vh;
  color: white;
  align-items: center;
  backdrop-filter: blur(4px);
  box-shadow: 0px 0px 10px var(--nice-color);
  max-height: 550px;
  width: 100vw;
}
/* .row {
  display: flex;
  position: relative;
} */
.col {
  display: flex;
  position: relative;
}
.map2 {
  display: flexbox;
  position: relative;
  width: 100vw;
  height: 100%;
  overflow: visible;
}
.createAccount-btn .btn {
  margin-top: 10px;
  width: 200px;
}
</style>
