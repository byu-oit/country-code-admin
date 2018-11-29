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
    countryCodes: [],
    authorized: null
});

export const getters = {
    getName: state => {
        return state.name
    },
    getCountryCodes: state => {
        return state.countryCodes
    },
    getAuthorized: state => {
        return state.authorized
    }
};
// export mutations object
export const mutations = {
    setCountryCodes: (state, values) => {
        state.countryCodes = values
    },
    setAuthorized: (state, bool) => {
        state.authorized = bool
    },
    deleteCode: (state, index) => {
        state.countryCodes.splice(index, 1) //API CALL
    },
    editCode: (state, item, index) => {
        state.countryCodes[index] = item //API CALL
    },
    addCode: (state, item) => {
        state.countryCodes.push(item) //API CALL
    }
};

// export actions object
export const actions = {

    fetchCountryCodes: async (context) =>{
        if (!(window.byu && window.byu.user && window.byu.user.byuId)) {
            context.commit("setAuthorized", false)
        }
        else {
            const request = {
                url: "https://api.byu.edu:443/domains/identity/country_codes_v2/v2/"
            }
            return new Promise((resolve, reject) => {
                window.byu.auth.request(request, (body, status) => {
                    if (status >= 400) {
                        console.error(`${status} - ${body}`)
                        context.commit("setAuthorized", false)
                        resolve(false)
                    }
                    else {
                        const values = JSON.parse(body).values
                        context.commit('setCountryCodes', values)
                        context.commit('setAuthorized', true)
                        console.log(values)
                        resolve(true)
                    }
                })
            })
        }
    },

    // server side only execution for pre-populating the Vuex store
    nuxtServerInit: ({ commit }, { req }) => {
        const wabs = req.wabs || {};

        // update user and auth data
        commit('wabs/authUpdate', wabs.auth);
        commit('wabs/userUpdate', wabs.user);
    }

};
