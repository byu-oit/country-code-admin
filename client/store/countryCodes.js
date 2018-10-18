import * as axios from '../plugins/axios'
//import safeget from '../lodash.get'

/*
Country Codes
          "country_code": "USA",
          "country": "United States",
          "description": "United States",
          "long_description": "United States of America",
          "iso_code": "US",
          "iso_code_3": "USA",
          "country_phone_prefix": "001",
          "valid_for_address": "Y",
          "valid_for_birth_country": "Y",
          "valid_for_citizenship": "Y",
          "valid_for_home_country": "Y",
          "continent_code": "NA",
 */
// 'use strict';
//  export const state = () => ({
//    countryCodes: {
//      country_code: 'USA',
//      country: '',
//      description: '',
//      long_description: '',
//      iso_code: '',
//      iso_code_3: '',
//      country_phone_prefix: '',
//      valid_for_address: '',
//      valid_for_birth_country: '',
//      valid_for_citizenship: '',
//      valid_for_home_country: '',
//      continent_code: ''
//    }
// })

// export const mutations = {
//   setCountryCode (state, {
//     country_code = 'USA',
//     country = '',
//     description = '',
//     long_description = '',
//     iso_code = '',
//     iso_code_3 = '',
//     country_phone_prefix = '',
//     valid_for_address = '',
//     valid_for_birth_country = '',
//     valid_for_citizenship = '',
//     valid_for_home_country = '',
//     continent_code = ''
//   }) {
//   state.countryCodes = {
//     country_code,
//     country,
//     description,
//     long_description,
//     iso_code,
//     iso_code_3,
//     country_phone_prefix,
//     valid_for_address,
//     valid_for_birth_country,
//     valid_for_citizenship,
//     valid_for_home_country,
//     continent_code
//   }
//   }
// }
//
// export const actions = {
//   setCountryCode: async(context) => {
//     const request = {
//       url: 'https://api.byu.edu/domains/identity/country_codes_v2/v2'
//     }
//     return new Promise((resolve, reject) => {
//       window.byu.auth.request(request, (body, status) => {
//         const values = JSON.parse(body).values
//         context.commit("setCountryCode", values)
//       })
//     })
//   }
// }

  // countryCode
  // } (state, value) {
  //   state.country_code = value
  // ?
  //   state.country = value
  // },
  // description (state, value) {
  //   state.description = value
  // },
  // long_description (state, value) {
  //   state.long_description = value
  // },
  // iso_code (state, value) {
  //   state.iso_code = value
  // },
  // iso_code_3 (state, value) {
  //   state.iso_code_3 = value
  // },
  // country_phone_prefix (state, value) {
  //   state.country_phone_prefix = value
  // },
  // valid_for_address (state, value) {
  //   state.valid_for_address = value
  // },
  // valid_for_birth_country (state, value) {
  //   state.valid_for_birth_country = value
  // },
  // valid_for_citizenship (state, value) {
  //   state.valid_for_citizenship = value
  // },
  // valid_for_home_country (state, value) {
  //   state.valid_for_home_country = value
  // }
  // // setCountryCode ()
// }

// const apiBase = 'https://api.byu.edu/domains/identity/country_codes_v2/v2'
//
// const resolveAllRequests = status => true
//
// const requestConfig = (rootState) => {
//    if (!safeget(rootState, 'wabs.auth.accessToken')) {
//      throw Error('Not logged in!')
//    }
//    return {
//      validateStatus: resolveAllRequests,
//      headers: {
//        'authorization': 'Bearer ${rootState.wabs.auth.accessToken}'
//      }
//    }
// }
//
// export const actions = {
//    async fetchList ({ rootState, commit }) {
//      console.log('in fetchList')
//      if (!rootState.wabs.user) {
//        throw Error('Not logged in!')
//      }
//      const byuId = rootState.wabs.user.byuId
//      console.log(byuId)
//      const setId = setIds[school]
//      console.log(setId)
//      if (!setId) {
//        return null
//      }
//      const url = '${apiBase}/?set_id=${setId}'
//      const {status, statusText, data} = await axios.get(url, requestConfig(rootState))
//      if (state >= 400) {
//        console.error('Status ${status} - ${statusText} while fetching template for ${school}!')
//        throw Error('Error with template list!')
//      }
//      console.log(`Fetched set list
//         status: ${status}
//         statusText: ${statusText}
//         data: ${JSON.stringify(data)}`)
//      const { values } = data
//      const templates = values.map(t => {
//        console.log(JSON.stringify(t, null, 2))
//        const name = safeget(t, 'name', 'UNKNOWN NAME')
//        const description = safeget(t, 'description', 'Unknown Description')
//        const uuid = t.uuid
//        return { name, description, uuid }
//      })
//      console.log(JSON.stringify(templates, null, 2))
//      commit('setcountryCode', {
//        country_code,
//        country,
//        description,
//        long_description,
//        iso_code,
//        iso_code_3,
//        country_phone_prefix,
//        valid_for_address,
//        valid_for_birth_country,
//        valid_for_citizenship,
//        valid_for_home_country,
//        continent_code
//      })
//    },
//   async fetchCountryCode ({ rootState, commit}, {USA}) {
//      console.log('in fetchCountryCode')
//      console.log(USA)
//     if (!USA) {
//       return null
//     }
//     const url = `${apiBase}/${USA}`
//     const {status, statusText, data} = await axios.get(url, requestConfig(rootState))
//     if (status >= 400) {
//       console.error(`Status ${status} -${statusText} while fetching `)
//     }
//   }
//
// }

