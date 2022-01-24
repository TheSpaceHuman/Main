import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    typescript: {
        strict: true,
    },
    css: ['~/assets/styles/style.scss'],
    // TODO fix error with SSR
    ssr: false,
    vite: {
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                }
            }
        }
    },
})
