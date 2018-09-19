<template>
    <section class="container">

        <CountryCodeList></CountryCodeList>
        <CountryCodeTable></CountryCodeTable>
    </section>


</template>

<script>
    import CountryCodeList from "../../components/name"
    import CountryCodeTable from "../../components/table"
    export default {
      components: {
        CountryCodeList,
        CountryCodeTable
      }
    }
</script>

<style>
    section {
        text-align: center;
        :v-color="primary";
    }
</style>