<template>

          <v-card>
            <v-card-title>
                <strong><h2>Country Codes</h2></strong>
                <v-spacer></v-spacer>
                <v-text-field
                        v-model="search"
                        append-icon="search"
                        label="Search"
                        single-line
                        hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                    :headers="headers"
                    :items="countryCodeList"
                    :search="search"
            >
                <template slot="items" slot-scope="props">
                    <td><strong><h4>{{ props.item.country_code }}</h4></strong></td>
                    <td class="text-xs-left">{{ props.item.description }}</td>
                    <td class="text-xs-left">{{ props.item.long_description }}</td>
                    <td class="text-xs-left">{{ props.item.iso3_code }}</td>
                    <td class="text-xs-left">{{ props.item.iso_code }}</td>
                </template>
                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                    Your search for "{{ search }}" found no results.
                </v-alert>
            </v-data-table>
        </v-card>
</template>

<script>
    export default {
      name: 'CountryCodeTable',
      data: function () {
        return {
            search: '',
            selected: [],
            headers: [
              {text: 'Country Code', sortable: false, align: 'center', value: 'country_code'},
              {text: 'Description', sortable: false, align: 'left', value: 'description'},
              {text: 'Long Description', sortable: false, align: 'left', value: 'long_description'},
              {text: 'iso3 Code', sortable: false, align: 'left', value: 'iso3_code'},
              {text: 'iso Code', sortable: false, align: 'left', value: 'iso_code'}
            ],
            countryCodeList: [
              {
                country_code: 'USA',
                description: 'United States',
                long_description: 'United States of America',
                iso3_code: 'USA',
                iso_code: 'US'
              },
              {
                country_code: 'CAN',
                description: 'Canada',
                long_description: 'Canada',
                iso3_code: 'CAN',
                iso_code: 'CA'
              },
              {
                country_code: 'ARG',
                description: 'Argentina',
                long_description: 'The Republic of Argentina',
                iso3_code: 'ARG',
                iso_code: 'AR'
              }
            ]
        }
      }
    }
</script>

<style>

</style>