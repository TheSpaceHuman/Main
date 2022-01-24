import { defineNuxtPlugin } from '#app';
import { message, notification } from 'ant-design-vue';
import '@/assets/styles/antd.less'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            message,
            notification,
        }
    }
});
