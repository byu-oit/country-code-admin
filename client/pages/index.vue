<template>
    <div>
        <div v-if="getAuthorized === false">
            <h2> Access not granted. </h2>
        </div>
        <div  v-show="getAuthorized">
        <!--<button @click="fetchCountryCodes">API Call</button>-->
        <CountryCodeTable></CountryCodeTable>
        </div>
    </div>

</template>

<script>

    import CountryCodeTable from '../components/country-code-table'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        components: {
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
    h2 {
        color: #002856;
    }
</style>