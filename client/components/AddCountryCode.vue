<template>
    <div>
        <v-toolbar flat color="white">
            <v-toolbar-title>Country Codes</v-toolbar-title>
            <v-divider
                    class="mx-2"
                    inset
                    vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
                <v-btn slot="activator" color="primary" dark class="mb-2">New Country Code</v-btn>
                <v-card>
                    <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.country_code" label="Country Code"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.long_description" label="Long Description"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.iso3_code" label="ISO3 code"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.iso_code" label="ISO code"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.phone_prefix" label="Phone Prefix"></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                        <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-toolbar>
        <v-data-table
                :headers="headers"
                :items="countryCodes"
                hide-actions
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.country_code }}</td>
                <td class="text-xs-right">{{ props.item.description }}</td>
                <td class="text-xs-right">{{ props.item.long_description }}</td>
                <td class="text-xs-right">{{ props.item.iso3_code }}</td>
                <td class="text-xs-right">{{ props.item.iso_code }}</td>
                <td class="text-xs-right">{{ props.item.phone_prefix}}</td>
                <td class="justify-center layout px-0">
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
                </td>
            </template>
            <template slot="no-data">
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
        <div>{{ this.state }}</div>
    </div>
</template>

<script>
  // import VTextField from 'vuetify/src/components/VTextField/VTextField'
  import axios from '../plugins/axios'
  import Vuex from 'vuex'
  export default {
    name: 'AddCountryCode',
    const: 'this.state',
    // components: {VTextField},
    data: function () {
      return {
        dialog: false,
        headers: [
          {
            text: 'Country Code',
            align: 'center',
            sortable: false,
            value: 'country_code'
          },
          {text: 'Description', align: 'right', value: 'description'},
          {text: 'Long Description', align: 'right', value: 'long_description'},
          {text: 'iso3 Code', align: 'right', value: 'iso3_code'},
          {text: 'iso Code', align: 'right', value: 'iso_code'},
          {text: 'Phone Prefix', align: 'right', value: 'phone_prefix', sortable: false}
        ],
        countryCodes: [],
        editedIndex: -1,
        editedItem: {
          country_code: '',
          description: '',
          long_description: '',
          iso3_code: '',
          iso_code: '',
          phone_prefix: ''
        },
        defaultItem: {
          country_code: '',
          description: '',
          long_description: '',
          iso3_code: '',
          iso_code: '',
          phone_prefix: ''
        }
      }
    },
    // mounted () {
    //   name: 'API'
    //   axios
    //     .get('https://api.byu.edu/domains/identity/country_codes_v2/v2')
    //     .then(response => this.info = response)


      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        }
      },

      watch: {
        dialog (val) {
          val || this.close()
        }
      },

      created () {
        this.initialize()
      },

      methods: {
        // mounted () {
        //   name: 'API'
        //   axios
        //     .get('https://api.byu.edu/domains/identity/country_codes_v2/v2')
        //     .then(response => this.info = response)

        initialize () {
          this.countryCodes = [
            {
              country_code: 'CHI',
              description: 'Chile',
              long_description: 'The Republic of Chile',
              iso3_code: 'CHI',
              iso_code: 'CL',
              phone_prefix: '56'
            },
            {
              country_code: 'USA',
              description: 'United States',
              long_description: 'United States of America',
              iso3_code: 'USA',
              iso_code: 'US',
              phone_prefix: '001'
            },
            {
              country_code: 'CAN',
              description: 'Canada',
              long_description: 'Canada',
              iso3_code: 'CAN',
              iso_code: 'CA',
              phone_prefix: '121'
            },
            {
              country_code: 'BRA',
              description: 'Brazil',
              long_description: 'Brazil',
              iso3_code: 'BRA',
              iso_code: 'BR',
              phone_prefix: '55'
            },
            {
              country_code: 'ARG',
              description: 'Argentina',
              long_description: 'The Republic of Argentina',
              iso3_code: 'ARG',
              iso_code: 'AR',
              phone_prefix: '54'
            },
            {
              country_code: 'ALB',
              description: 'Albania',
              long_description: 'Albania',
              iso3_code: 'ALB',
              iso_code: 'AL',
              phone_prefix: '355'
            },
            {
              country_code: 'CZE',
              description: 'Czech Republic',
              long_description: 'Czech Republic',
              iso3_code: 'CZE',
              iso_code: 'CZ',
              phone_prefix: '420'
            },
            {
              country_code: 'POL',
              description: 'Poland',
              long_description: 'Poland',
              iso3_code: 'POL',
              iso_code: 'PL',
              phone_prefix: '48'
            },
            {
              country_code: 'GER',
              description: 'Germany',
              long_description: 'Germany',
              iso3_code: 'GER',
              iso_code: 'DE',
              phone_prefix: '49'
            },
            {
              country_code: 'AUA',
              description: 'Austria',
              long_description: 'Austria',
              iso3_code: 'AUA',
              iso_code: 'AT',
              phone_prefix: '43'
            }
          ]
        },

        editItem (item) {
          this.editedIndex = this.countryCodes.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
        },

        deleteItem (item) {
          const index = this.countryCodes.indexOf(item)
          confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        },

        close () {
          this.dialog = false
          setTimeout(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          }, 300)
        },

        save () {
          if (this.editedIndex > -1) {
            Object.assign(this.countryCodes[this.editedIndex], this.editedItem)
          } else {
            this.countryCodes.push(this.editedItem)
          }
          this.close()
        }
      }
    }

</script>

<style scoped>

</style>