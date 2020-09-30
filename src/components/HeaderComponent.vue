<template>
  <div class="header">
      <div id="logo">
        <h1> <img src="/icons/brand-logo.png" alt="logo" />Insta</h1><h1 id="red">Touch</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
p {
  font-size: 20px;
}
.header {
  text-align: center;
  margin: 2.5%;
}
#logo img{
  padding-right: 10px;
}
#logo h1{
  font-family: 'Comfortaa', cursive;
  display: inline;
}
#red{
  color: 	#D2302C
}
</style>
