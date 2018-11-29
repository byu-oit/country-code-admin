<template>
    <section>
        <v-card>
            <v-card-title class="cardTitle">
                {{ getName }}
                <v-spacer></v-spacer>

                <v-text-field
                        v-model="search"
                        append-icon="search"
                        label="Search"
                        single-line
                        hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <NewCountryCode></NewCountryCode>
            </v-card-title>
        </v-card>

        <v-data-table
                :headers="headers"
                :items="getCountryCodes"
                class="elevation-1"
                must-sort
                :pagination.sync="pagination"
                :rows-per-page-items="rowSelection"
                :search="search"
        >
            <template slot="items" slot-scope="props">
                <td>
                    <v-layout>
                        <v-icon
                            small
                            class="mr-2"
                            @click="editItem(props.item)"
                        >
                            edit
                        </v-icon>
                        <v-icon
                            small
                            @click="deleteItem(props.item)"
                        >
                            delete
                        </v-icon>
                    </v-layout>
                </td>
                <td>{{ props.item.country_code }}</td>
                <td class="text-xs-center">{{ props.item.country }}</td>
                <td class="text-xs-center">{{ props.item.continent_code}}</td>
                <td class="text-xs-center">{{ props.item.valid_for_address }}</td>
                <td class="text-xs-center">{{ props.item.valid_for_home_country}}</td>
                <td class="text-xs-center">{{ props.item.valid_for_birth_country}}</td>
                <td class="text-xs-center">{{ props.item.valid_for_citizenship}}</td>
                <td class="text-xs-center">{{ props.item.iso_code_3 }}</td>
                <td class="text-xs-center">{{ props.item.iso_code }}</td>
                <td class="text-xs-center">{{ props.item.country_phone_prefix}}</td>

            </template>
        </v-data-table>
    </section>
</template>

<script>

  import NewCountryCode from '../components/new-country-code'
  import {mapGetters} from 'vuex'

  export default {
    name: 'country-code-table',
      components: {NewCountryCode},
      data: function () {
      return {
        pagination: {
          rowsPerPage: 15
        },
        rowSelection: [ 5, 15, 25, { "text": "$vuetify.dataIterator.rowsPerPageAll", "value": -1 } ],
        search: '',
        headers: [
          {text: '', align: 'center', value: '', sortable: false},
          {text: 'Country Code',  value: 'country_code'},
          {text: 'Country', align: 'center', value: 'country'},
          {text: 'Continent Code', value: 'continent_code'},
          {text: 'Valid for Address', value: 'valid_for_address'},
          {text: 'Valid for Home Country', value: 'valid_for_home_country'},
          {text: 'Valid for Birth Country', value: 'valid_for_birth_country'},
          {text: 'Valid for Citizenship', value: 'valid_for_citizenship'},
          {text: 'iso3 Code', value: 'iso_code_3'},
          {text: 'iso Code', value: 'iso_code'},
          {text: 'Phone Prefix', value: 'phone_prefix'},
        ],

      }
    },
    computed: {
      ...mapGetters ([
        'getName',
        'getCountryCodes'
      ]),
    },

  }
</script>

<style scoped>
    cardTitle {

    }
</style>

