<!--<template>-->
    <!--<section>-->
        <!--<div>-->
            <!--<h1>Admissions-Country Codes</h1>-->
        <!--</div>-->

        <!--<div id="app">-->
            <!--&lt;!&ndash;<app-title></app-title>&ndash;&gt;-->
        <!--</div>-->
    <!--</section>-->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
       <!--/* data () {-->
            <!--return{-->

            <!--}-->
        <!--}*/-->
    <!--}-->
<!--</script>-->

<template>
    <div>
        <!--<v-header large color="primary">-->
            <h1>
            {{ title }}
            </h1>

    </div>
</template>

<script>
  export default {
    name: 'CountryCodeList',
    data: function () {
      return {
        title: 'Country Codes',
      }
    }
  }
    // methods: {
    //   showList: function() {
    //     return: {
    //       [
    //         'USA',
    //         'CAN',
    //         'SAU'
    //   ]

</script>

<style scoped>
    h1 {
        font-size: 4em;
        text-align: center
    }
    div {
        background-color: #dbe1ec;
        background-size: auto;
    }
</style>