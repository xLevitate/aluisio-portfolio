import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Layout from './components/Layout.vue'
import './styles/custom.css'

export default {
  ...DefaultTheme,
  Layout: () => {
    return h(Layout)
  }
}
