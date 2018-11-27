<template>
    <section>
        <div>
        <v-toolbar flat color="white">
            <v-toolbar-title> {{ getName }} </v-toolbar-title>
            <!--<v-divider-->
            <!--class="mx-2"-->
            <!--inset-->
            <!--vertical-->
            <!--&gt;</v-divider>-->
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
                                    <v-text-field v-model="editedItem.country" label="Country"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.continent_code" label="Continent Code"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.valid_for_address" label="Valid for Address"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.valid_for_home_country" label="Valid for Home Country"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.valid_for_birth_country" label="Valid for Birth Country"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.valid_for_citizenship" label="Valid for Citizenship"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6 md4>
                                    <v-text-field v-model="editedItem.iso_code_3" label="ISO3 code"></v-text-field>
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
                :items="getCountryCodes"
                hide-actions
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
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
                <td>{{ props.item.country_code }}</td>
                <td class="text-xs-right">{{ props.item.country }}</td>
                <td class="text-xs-right">{{ props.item.continent_code}}</td>
                <td class="text-xs-right">{{ props.item.valid_for_address }}</td>
                <td class="text-xs-right">{{ props.item.valid_for_home_country}}</td>
                <td class="text-xs-right">{{ props.item.valid_for_birth_country}}</td>
                <td class="text-xs-right">{{ props.item.valid_for_citizenship}}</td>
                <td class="text-xs-right">{{ props.item.iso_code_3 }}</td>
                <td class="text-xs-right">{{ props.item.iso_code }}</td>
                <td class="text-xs-right">{{ props.item.country_phone_prefix}}</td>

            </template>
            <template slot="no-data">
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
    </div>
        <template>
            <div class="text-xs-center">
            <v-pagination
                    v-model="page"
                    :length="10"
                    prev-icon="mdi-menu-left"
                    next-icon="mdi-menu-right"
            ></v-pagination>
            </div>
        </template>
    </section>

</template>

<script>
  // import VTextField from 'vuetify/src/components/VTextField/VTextField'

  import {mapGetters} from 'vuex'
  // import VTextField from 'vuetify/lib/components/VTextField/VTextField'
  export default {
    name: 'AddCountryCode',
    // components: {VTextField},
    // components: {VTextField},
    data: function () {
      return {
        page: 20,
        dialog: false,
        headers: [
          {text: '', align: 'center', value: ''},
          {text: 'Country Code', align: 'center', sortable: false, value: 'country_code'},
          {text: 'Country', align: 'right', value: 'description'},
          {text: 'Continent Code', align: 'right', value: 'continent_code'},
          {text: 'Valid for Address', align: 'right', value: 'long_description'},
          {text: 'Valid for Home Country', align: 'right', value: 'valid_for_home_country'},
          {text: 'Valid for Birth Country', align: 'right', value: 'valid_for_birth_country'},
          {text: 'Valid for Citizenship', align: 'right', value: 'valid_for_citizenship'},
          {text: 'iso3 Code', align: 'right', value: 'iso3_code'},
          {text: 'iso Code', align: 'right', value: 'iso_code'},
          {text: 'Phone Prefix', align: 'right', value: 'phone_prefix', sortable: false}
        ],
        countryCodes: [],
        editedIndex: -1,
        editedItem: {
          country_code: '',
          country: '',
          continent_code: '',
          valid_for_address: '',
          valid_for_home_country: '',
          valid_for_birth_country: '',
          valid_for_citizenship: '',
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
    computed: {
      ...mapGetters ([
        'getName',
        'getCountryCodes'
      ]),
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    methods: {

      editItem (item) {
        this.editedIndex = this.countryCodes.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.countryCodes.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.countryCodes.splice(index, 1)
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

