import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'
import { piniaStore } from './stores/store'
const app = createApp(App)
import { initializeApp } from 'firebase/app'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBeMrvCroZ3GwZwF3iFZTi_t_r8YxFLHu8',
  authDomain: 'fashion-store-df97c.firebaseapp.com',
  projectId: 'fashion-store-df97c',
  storageBucket: 'fashion-store-df97c.firebasestorage.app',
  messagingSenderId: '1067445047537',
  appId: '1:1067445047537:web:ab8859e075c9a1877c9950',
  measurementId: 'G-9CYH8JE8EY'
}

// Initialize Firebase
initializeApp(firebaseConfig)
app.use(createPinia())

const useStore = piniaStore()
router
  .isReady()
  .then(() => {
    useStore.routerLoading = false
  })
  .catch((err) => {
    console.log(err.message)
    useStore.routerLoading = false
  })
  .finally(() => {
    useStore.routerLoading = false
    console.log('resolved')
  })
app.use(router)

app.mount('#app')
