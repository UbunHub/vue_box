<template>
  <div class="fork">
    <div class="fork-column1">
      <div class="fork-item fork-item-grid1">
          <img src=""/>
      </div>
    </div>
    <div class="fork-columns2">
      <div class="fork-item">
          <img src=""/>
      </div>
      <div class="fork-row">
        <div class="fork-item">
            <img src=""/>
        </div>
        <div class="fork-item">
            <img src=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<style >
.fork {
  background-color: white;
  padding: 4px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 2fr 3fr;
}

.fork-columns2 {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}
.fork-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.fork-item-grid1{
    height: 160px;
}
.fork-item{
   
    margin: 2px;
    background-color: lightblue;
    border-radius: 4px;
}

</style>

