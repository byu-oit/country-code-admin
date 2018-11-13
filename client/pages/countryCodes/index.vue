<template>
    <section class="container">

        <CountryCodeTitle></CountryCodeTitle>
        <CountryCodeTable></CountryCodeTable>
        <AddCountryCode></AddCountryCode>
    </section>


</template>

<script>
    import CountryCodeTitle from "../../components/name"
    import CountryCodeTable from "../../components/table"
    import AddCountryCode from '../../components/AddCountryCode'

    export default {
      components: {
        CountryCodeTitle,
        AddCountryCode,
        CountryCodeTable
      },
      // data () {
      //   return {
      //     source: ''
      //  }
      // }
    }
</script>

<style>
    section {
        text-align: center;
        :v-color="primary";
    }
</style>