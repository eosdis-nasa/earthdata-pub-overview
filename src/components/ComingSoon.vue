<template>
  <div id="main">
    <div id="inner">
      <img src="../assets/styles/nasa-meatball-new.svg" />
      <h2>Earthdata Pub Coming Soon</h2>
    </div>
  </div>
</template>

<style>
#main {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #2275aa;
  width: 480px;
  height: 360px;
  margin-left: auto;
  margin-right: auto;
  margin-top: calc( (100vh - 640px) / 2 );
  border: 1px solid rgba(0,0,0,.1);
}
#inner {
  text-align: center;
}
#inner img {
    height: 150px;
    margin: 25px;
}
</style>
