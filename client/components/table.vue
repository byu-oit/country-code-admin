<template>
    <!--<table>-->
        <!--<tr>-->
            <!--&lt;!&ndash;<th> {{ firstRow }}</th>&ndash;&gt;-->
            <!--&lt;!&ndash;<th> {{ secondRow }}</th>&ndash;&gt;-->
            <!--&lt;!&ndash;<th> {{ thirdRow }}</th>&ndash;&gt;-->
        <!--&lt;!&ndash;</tr>&ndash;&gt;-->
        <!--&lt;!&ndash;<tr>&ndash;&gt;-->
            <!--&lt;!&ndash;<td v-for="item in entry"> {{ item }}</td>&ndash;&gt;-->
        <!--&lt;!&ndash;</tr>&ndash;&gt;-->
    <!--</table>-->
        <v-card>
            <v-card-title>
                Country Codes
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
                    :items="desserts"
                    :search="search"
            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.countryCode }}</td>
                    <td class="text-xs-right">{{ props.item.description }}</td>
                    <td class="text-xs-right">{{ props.item.longDescription }}</td>
                    <td class="text-xs-right">{{ props.item.iso3Code }}</td>
                    <td class="text-xs-right">{{ props.item.isoCode }}</td>
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
        // if () {const countryCode = 'USA'
        // const description = 'United States'
        // const longDescription = 'United States of America'
        // const iso3Code = 'USA'
        // const isoCode = 'US'}},
        return {
          props: {
            item: [
              'countryCode',
              'description',
              'longDescription',
              'iso3Code',
              'isoCode'
            ]
          }
        }
      }
    }
      // data: function () {
      //   return {
      //     firstRow: 'Country Code',
      //     secondRow: 'Description',
      //     thirdRow: 'Long Description',
      //     entry: [
      //       'ARG',
      //       'Argentina',
      //       'Argentina'
      //     ]
      //   }
      // }
</script>

<style>

</style>