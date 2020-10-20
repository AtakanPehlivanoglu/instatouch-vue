<template>
  <div class="content">
    <div class="activate">
      <h3>
        New Touch to
        <h3 id="red-gradient">Media</h3>
      </h3>
      <div class="main-button">
        <ejs-switch
          cssClass="main-button"
          onLabel="ON"
          v-model="mainValue"
          :checked="mainValue"
        ></ejs-switch>
      </div>
    </div>
    <div class="activate-child">
      <div class="follow-back">
        <div tabindex="0" class="e-card">
          <div class="e-card-header">
            <div class="e-card-header-caption">
              <div class="e-card-header-title">
                <span id="blue">Follow </span><span>Back</span>
              </div>

              <div class="follow-back-child">
                <div class="e-card-sub-title">
                  <span class="e-icons e-arrow"></span>
                  <span>Daily Followbacks:</span>
                </div>
              </div>
            </div>
            <div class="e-card-header-image football">
              <ejs-switch
                cssClass="follow-back-button"
                v-model="followBackValue"
                :checked="mainValue"
                :disabled="!mainValue"
              ></ejs-switch>
            </div>
          </div>
        </div>
      </div>
      <div class="like-comm">
        <div tabindex="0" class="e-card">
          <div class="e-card-header">
            <div class="e-card-header-caption">
              <div class="e-card-header-title">
                <span id="blue">Like </span><span>Comment</span>
              </div>

              <div class="follow-back-child">
                <div class="e-card-sub-title">
                  <span class="e-icons e-arrow"></span>
                  <span>Daily Liked Comments:</span>
                </div>
              </div>
            </div>
            <div class="e-card-header-image football">
              <ejs-switch
        cssClass="like-comm-button"
        v-model="likeCommValue"
        :checked="mainValue"
        :disabled="!mainValue"
      ></ejs-switch>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentComponent",
  data() {
    return {
      mainValue: true,
      followBackValue: true,
      likeCommValue: true,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
p,
h3, span:not(.e-icons) {
  font-family: "Montserrat", sans-serif;
  display: inline;
}
.e-arrow:before {
  content: "\ec07";
  margin: 2.5%;
}
.content {
  height: 250px;
  padding-top: 2.5%;
  border-radius: 20px;
}
.activate {
  height: 75px;
  width: 250px;
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
.activate-child {
  margin-left: 7.5%;
  margin-right: 7.5%;
  margin-top: 2.5%;
}
.activate-child .follow-back h3,
.activate-child .like-comm h3 {
  font-size: 16px;
}

.activate-child .follow-back-child h3,
.activate-child .like-comm-child h3 {
  font-size: 14px;
}
.activate-child .follow-back-child,
.activate-child .like-comm-child {
  margin-left: 5%;
}
.activate-child #red {
  font-weight: bold;
}
</style>
