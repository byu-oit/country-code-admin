'use strict'

// const setCountryCode = (state, index) ==> {
//
// }

export const state = () => ({
  //Country Codes
    title: 'BYU Country Codes',
    countryCodes: {
      // data: {
      country_code: '',
      country: '',
      description: '',
      long_description: '',
      iso_code: '',
      iso_code_3: '',
      country_phone_prefix: '',
      valid_for_address: '',
      valid_for_birth_country: '',
      valid_for_citizenship: '',
      valid_for_home_country: '',
      continent_code: ''
    }

  // }
})


export const getters = {
  country_code: state => {
    return state.country_code
  },
  country: state => {
    return state.country
  },
  description: state => {
    return state.description
  },
  long_description: state => {
    return state.long_description
  },
  iso_code: state => {
    return state.iso_code
  },
  iso_code_3: state => {
    return state.iso_code_3
  },
  country_phone_prefix: state => {
    return state.country_phone_prefix
  },
  valid_for_address: state => {
    return state.valid_for_address
  },
  valid_for_birth_country: state => {
    return state.valid_for_birth_country
  },
  valid_for_citizenship: state => {
    return state.valid_for_citizenship
  },
  valid_for_home_country: state => {
    return state.valid_for_home_country
  },
  continent_code: state => {
    return state.continent_code
  }
}

export const mutations = {
  setCountryCode (state, {
    country_code = '',
    country = '',
    description = '',
    long_description = '',
    iso_code = '',
    iso_code_3 = '',
    country_phone_prefix = '',
    valid_for_address = '',
    valid_for_birth_country = '',
    valid_for_citizenship = '',
    valid_for_home_country = '',
    continent_code = ''
  }) {
    state.countryCodes = {
      country_code,
      country,
      description,
      long_description,
      iso_code,
      iso_code_3,
      country_phone_prefix,
      valid_for_address,
      valid_for_birth_country,
      valid_for_citizenship,
      valid_for_home_country,
      continent_code
    }
  }
}

export const actions = {

  fetchCountryCodes: async (context) => {
    const request = {
      url: 'https://api.byu.edu/domains/identity/country_codes_v2/v2'
    }
    return new Promise((resolve, reject) => {
      window.byu.auth.request(request, (body, status) => {
        const values = JSON.parse(body).values
        context.commit(getters.country_code)
        resolve(true)
      })
    })
  },

  createCountryCode: async (context) => {
    const request = {
      url: 'https://api.byu.edu/domains/identity/country_codes_v2/v2'
    }
    return new Promise
  }

}