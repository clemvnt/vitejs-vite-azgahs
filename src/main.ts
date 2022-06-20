import { createApp } from 'vue'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import './style.css'
import App from './App.vue'
import { setLicenseKey } from '@grapecity/wijmo'

setLicenseKey(
  'Groupe Isagri,258635536948393#B0MVlW6wWeTBTW4FjZVNzczFnaqZmaXdnWkJlb8EWTaV7YqJ6baZGbUVjSpdmWTF6NMJHdURVRCV7crIzMKp5aBJXZsVEV7FHWkRWMOhWSslzRPdGWPtSdjpENox4ZV3mYF3SSRRDWwVkVMl6LL5mSmBjMJZlSycTUtZHUwl6cZNWZWp7UyMjTIN7QWFGU0dXWrhXVX34MkFEa8ZVO8UGbll7VwUnUzwmUV5UaKVzawJ5M784UOtEOxV4NTZDNmVERRJTdNJESMFXbLBFT7Y4LSlWQZNWdxRWTPlEaatCR64WWVJnWRhWZodkZiojITJCLiUkMCZTN9ETNiojIIJCL6UDNzEzN5QDN0IicfJye#4Xfd5nIzMEMCJiOiMkIsISZy36Qg2Wbql6ViojIOJyebpjIkJHUiwiI9EjNyUDMgETM6ATMyAjMiojI4J7QiwiIpJ7ZhNXSgUGc53mcHJiOiEmTDJCLiMTOzgDN9YzM5UzM6gTNyIiOiQWSiwSfdtlOicGbmJCLiEjdxIDMyIiOiIXZ6JCLlNHbhZmOiI7ckJye0ICbuFkI1pjIEJCLi4TPRFHRypHTqBTZaBjQ6kFezp4SBREW7lnaINEc4p7Y4Nmc5RlYklnT9YGNEJDNpdEZrd7cYllNkRVVzBzak94dhNnU5Q5ZU3kVWRWZqRjRMJjaOdVVnFXSxIkcmV4LKlWSKhXRD3mSuVFOuRuS' // NOSONAR
)

createApp(App).mount('#app')
