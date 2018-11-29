<template>
    <div>
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
    </div>
</template>

<script>
    export default {
        name: "new-country-code",
        data: function () {
            return {
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
                },
                dialog: false,
            }
        },
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
                    this.countryCodes.push(this.editedItem) //API CALL
                }
                this.close()
            }
        }
    }
</script>

<style scoped>

</style>