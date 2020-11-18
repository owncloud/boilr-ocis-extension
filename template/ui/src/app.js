import App from './components/App.vue'

const appInfo = {
  name: '{{ Name }}',
  id: '{{ Name }}',
  icon: 'info',
  isFileEditor: false,
  extensions: []
}

const routes = [
  {
    name: '{{ Name }}',
    path: '/',
    components: {
      app: App
    }
  }
]

const navItems = [
  {
    name: '{{ Name }}',
    iconMaterial: appInfo.icon,
    route: {
      name: '{{ Name }}',
      path: `/${appInfo.id}/`
    }
  }
]

export default {
  appInfo,
  routes,
  navItems
}
