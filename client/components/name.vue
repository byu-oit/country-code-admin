<template>
    <div>
        <!--<v-header large color="primary">-->

                <h1>{{ title }}</h1>


    </div>
</template>

<script>



  export default {
    name: 'CountryCodeTitle',


    data: function () {
      return {
        title: 'Country Codes',
      }
    }
  }

</script>

<style scoped>
    h1 {
        font-size: 3em;
        text-align: center
    }
    div {
        background-color: #dbe1ec;
        background-size: auto;
    }
</style>