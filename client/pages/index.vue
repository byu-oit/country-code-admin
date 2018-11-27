<template>
    <div>
        <div v-if="getAuthorized === false">
            <h2> Error retrieving codes.  Please make sure you are logged in. </h2>
        </div>
        <div  v-show="getAuthorized">
        <!--<CountryCodeTitle></CountryCodeTitle>-->
        <!--<CountryCodeTable></CountryCodeTable>-->
        <!--<button @click="fetchCountryCodes">API Call</button>-->
        <AddCountryCode></AddCountryCode>
        </div>
    </div>

</template>

<script>
    import CountryCodeTitle from "../components/name"
    import CountryCodeTable from "../components/table"
    import AddCountryCode from '../components/AddCountryCode'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        components: {
            CountryCodeTitle,
            AddCountryCode,
            CountryCodeTable
        },
        computed: {
            ...mapGetters([
                'getAuthorized'
            ])
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