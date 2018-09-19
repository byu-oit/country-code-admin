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
        <!--</v-header>-->
        <!--<ul>-->
            <!--<li v-for="item in list"> {{ item }} </li>-->
        <!--</ul>-->
        <body>
        <!--<layout align-center>-->
            <!--<v-flex xs12 sm4 text-xs-center>-->
                <div>
                    <v-btn large color="primary">USA</v-btn>
                    <!--<button @click="showList" class="btn btn-primary">Codes</button>-->
                </div>
            <!--</v-flex>-->
        <!--</layout>-->
        </body>
    </div>
</template>

<script>
  export default {
    name: 'CountryCodeList',
    data: function () {
      return {
        title: 'Country Codes',
        list: [
          'USA',
          'CAN',
          'ARG'
        ]
      }
    },
    methods: {

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
        font-size: 2em;
        text-align: center
    }
    div {
        background-color: #dbe1ec;
    }
</style>