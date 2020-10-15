<template>
  <div class="content">
    <div class="activate">
      <h3>
        Touch to
        <h3 id="red-gradient">People</h3>
      </h3>
      <div class="main-button">
        <ejs-switch checked="true" cssClass="main-button"></ejs-switch>
      </div>
    </div>
    <div class="activate-child">
      <div id="follow-back">
        <h3 id="red">Follow </h3><h3>Back</h3>
        <ejs-switch checked="true" cssClass="follow-back-button"></ejs-switch>
      </div>
      <div id="like-comm">
        <h3 id="red">Like </h3><h3>Comment</h3>
        <ejs-switch checked="true" cssClass="like-comm-button"></ejs-switch>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentComponent",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
p,
h3 {
  font-family: "Montserrat", sans-serif;
  display: inline;
}
.content {
  height: 250px;
  background: #f7f7f9;
  padding-top: 2.5%;
  border-radius: 20px;
}
.activate {
  width: 200px;
  margin: 0 auto;
  text-align: center;
}
.activate h3 {
  font-size: 20px;
}
.activate h3 #red-gradient {
  background: rgb(129, 14, 11);
  background: radial-gradient(
    circle,
    rgba(129, 14, 11, 1) 76%,
    rgba(195, 11, 6, 1) 83%,
    rgba(247, 247, 249, 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
.activate .main-button {
  padding-top: 5%;
}
.activate-child{
  margin-left: 7.5%;
  margin-right: 7.5%;
  margin-top: 5%;
}
.activate-child h3{
  font-size: 16px; 
}
.activate-child #red{
  font-weight: bold;
}
.activate-child #follow-back, #like-comm{
  margin-top: 2.5%;
}


</style>
