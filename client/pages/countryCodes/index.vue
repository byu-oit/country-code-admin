<template>
    <section class="container">

        <CountryCodeList></CountryCodeList>
        <CountryCodeTable></CountryCodeTable>
        <AddCountryCode></AddCountryCode>
    </section>


</template>

<script>
    import CountryCodeList from "../../components/name"
    import CountryCodeTable from "../../components/table"
    import AddCountryCode from '../../components/AddCountryCode'
    export default {
      components: {
        AddCountryCode,
        CountryCodeList,
        CountryCodeTable
      },
      data () {
        return {
          source: ''
        }
      }
    }
</script>

<style>
    section {
        text-align: center;
        :v-color="primary";
    }
</style>