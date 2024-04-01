import { h } from 'vue'

const icons = {
}

const custom = {
  component: (props) => h(icons[props.icon]),
}

export { custom }
