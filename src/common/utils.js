const utils = {
  //示例
  isNumber: type => {
    return type == 'Integer'
      || type == 'Long'
      || type == 'Double'
      || type == 'BigDecimal'
      || type == 'Number'
  }
}

const install = function(Vue, opts = {}) {
  Vue.prototype.$utils = utils
}

export default {
  install,
  utils
}
