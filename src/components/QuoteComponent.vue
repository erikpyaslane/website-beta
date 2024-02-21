<template>
  <div class="quote-container">
    <div class="quote-content rounded">
      <h2 class="quote-text">
        Minu eesmärgiks on pakkuda personaalseid lõhna-ja muusikalahendusi ja huviringe,
        kasutades looduslikke lõhnaaineid, mis loovad elu- või töökeskonnas viibimisel
        sobiliku atmosfääri ja suurendavad heaolutunnet.
      </h2>
    </div>
  </div>
</template>

<style scoped>
.quote-container {
  width: 100%;
  margin: 20px auto;
  position: relative;
}

.quote-content {
  background-color: transparent;
  padding: 20px;
  position: relative; /* Ensure child elements are positioned relative to this container */
}

.quote-content::before,
.quote-content::after {
  content: "“";
  font-size: 10em;
  color: #555;
  position: absolute;
}

.quote-content::before {
  top: 10px;
  left: 15px;
  transform: translateY(-30%) translateX(-30%); /* Adjust position */
}

.quote-content::after {
  bottom: 10px;
  right: 15px;
  transform: translateY(65%) translateX(25%); /* Adjust position to align to the bottom */
}

.quote-text {
  margin: 0;
  font-size: 2em;
  color: #333;
  line-height: 1.4;
  font-family: 'Snell Roundhand', cursive;
}

</style>
