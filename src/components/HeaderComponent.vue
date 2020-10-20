<template>
  <div class="header">
      <div id="logo">
        <h1> <img src="/icons/brand-logo.png" alt="logo" />Insta</h1><h1 id="red">Touch</h1>
      </div>
      <div class="divider div-transparent div-arrow-down"></div>
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
h1{
  font-size: 32px;
}
#logo img{
  padding-right: 10px;
}
#logo h1{
  font-family: 'Comfortaa', cursive;
  display: inline;
}
.divider
{
	position: relative;
	margin-top: 2.5%;

	height: 1px;
}

.div-transparent:before
{
	content: "";
	position: absolute;
	top: 0;
	left: 5%;
	right: 5%;
	width: 90%;
	height: 1px;
	background-image: linear-gradient(to right, transparent, rgb(48,49,51), transparent);
  opacity: 0.3;
}


</style>
