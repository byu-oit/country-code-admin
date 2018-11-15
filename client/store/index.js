/**
 *  @license
 *    Copyright 2018 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
'use strict';

// export state as a function
export const state = () => ({
    name: 'Country Codes',
    countryCodes: {
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

});

export const getters = {
    getName: state => {
        return state.name
    },
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
};
// export mutations object
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
};

// export actions object
export const actions = {

    // server side only execution for pre-populating the Vuex store
    nuxtServerInit: ({ commit }, { req }) => {
        const wabs = req.wabs || {};

        // update user and auth data
        commit('wabs/authUpdate', wabs.auth);
        commit('wabs/userUpdate', wabs.user);
    }

};
