<template>
    <section class="container">

        <!--<CountryCodeTitle></CountryCodeTitle>-->
        <!--<CountryCodeTable></CountryCodeTable>-->
        <button @click="fetchCountryCodes">API Call</button>
        <AddCountryCode></AddCountryCode>

    </section>

</template>

<script>
    import CountryCodeTitle from "../components/name"
    import CountryCodeTable from "../components/table"
    import AddCountryCode from '../components/AddCountryCode'
    import { mapActions } from 'vuex'

    export default {
        components: {
            CountryCodeTitle,
            AddCountryCode,
            CountryCodeTable
        },
        methods: {
          ...mapActions([
            'fetchCountryCodes'
          ])
        },
      beforeMount() {
          this.fetchCountryCodes()
      }
    }
</script>

<style>
    section {
        text-align: center;
    :v-color="primary";
    }
</style>