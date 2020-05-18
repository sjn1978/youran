/**
 * 关联类型
 * filterValueType为过滤值类型：1单值、2双值、3多值、4无值
 * matchFieldTypes为匹配的java字段类型
 * timeGranularity为是否时间粒度
 */
const filterOperatorOptions = [
  {
    value: 1,
    label: '等于',
    filterValueType: 1,
    matchFieldTypes: [
      'String',
      'Integer', 'Short', 'Long', 'Double', 'Float', 'BigDecimal',
      'LocalDate', 'LocalDateTime', 'Date',
      'Boolean'
    ],
    timeGranularity: false
  },
  {
    value: 10,
    label: '小于',
    filterValueType: 1,
    matchFieldTypes: [
      'String',
      'Integer', 'Short', 'Long', 'Double', 'Float', 'BigDecimal',
      'LocalDate', 'LocalDateTime', 'Date'
    ],
    timeGranularity: false
  },
  {
    value: 11,
    label: '大于等于',
    filterValueType: 1,
    matchFieldTypes: [
      'String',
      'Integer', 'Short', 'Long', 'Double', 'Float', 'BigDecimal',
      'LocalDate', 'LocalDateTime', 'Date'
    ],
    timeGranularity: false
  },
  {
    value: 12,
    label: '小于等于',
    filterValueType: 1,
    matchFieldTypes: [
      'String',
      'Integer', 'Short', 'Long', 'Double', 'Float', 'BigDecimal',
      'LocalDate', 'LocalDateTime', 'Date'
    ],
    timeGranularity: false
  },
  {
    value: 13,
    label: '介于之间',
    filterValueType: 2,
    matchFieldTypes: [
      'String',
      'Integer', 'Short', 'Long', 'Double', 'Float', 'BigDecimal',
      'LocalDate', 'LocalDateTime', 'Date'
    ],
    timeGranularity: false
  },
  {
    value: 2,
    label: '不等于',
    filterValueType: 1,
    matchFieldTypes: [
      'String',
      'Integer', 'Short', 'Long', 'Double', 'Float', 'BigDecimal',
      'LocalDate', 'LocalDateTime', 'Date'
    ],
    timeGranularity: false
  },
  {
    value: 21,
    label: '是当前',
    filterValueType: 4,
    matchFieldTypes: ['LocalDate', 'LocalDateTime', 'Date'],
    timeGranularity: true
  },
  {
    value: 22,
    label: '前段时间',
    filterValueType: 1,
    matchFieldTypes: ['LocalDate', 'LocalDateTime', 'Date'],
    timeGranularity: true
  },
  {
    value: 23,
    label: '后段时间',
    filterValueType: 1,
    matchFieldTypes: ['LocalDate', 'LocalDateTime', 'Date'],
    timeGranularity: true
  },
  {
    value: 3,
    label: '包含',
    filterValueType: 3,
    matchFieldTypes: [
      'String',
      'Integer', 'Short', 'Long', 'Double', 'Float', 'BigDecimal',
      'LocalDate', 'LocalDateTime', 'Date'
    ],
    timeGranularity: false
  },
  {
    value: 4,
    label: '不包含',
    filterValueType: 3,
    matchFieldTypes: [
      'String',
      'Integer', 'Short', 'Long', 'Double', 'Float', 'BigDecimal',
      'LocalDate', 'LocalDateTime', 'Date'
    ],
    timeGranularity: false
  },
  {
    value: 5,
    label: '为空',
    filterValueType: 4,
    matchFieldTypes: [
      'String',
      'Integer', 'Short', 'Long', 'Double', 'Float', 'BigDecimal',
      'LocalDate', 'LocalDateTime', 'Date',
      'Boolean'
    ],
    timeGranularity: false
  },
  {
    value: 6,
    label: '不为空',
    filterValueType: 4,
    matchFieldTypes: [
      'String',
      'Integer', 'Short', 'Long', 'Double', 'Float', 'BigDecimal',
      'LocalDate', 'LocalDateTime', 'Date',
      'Boolean'
    ],
    timeGranularity: false
  },
  {
    value: 7,
    label: 'like',
    filterValueType: 1,
    matchFieldTypes: ['String'],
    timeGranularity: false
  },
  {
    value: 9,
    label: '大于',
    filterValueType: 1,
    matchFieldTypes: [
      'String',
      'Integer', 'Short', 'Long', 'Double', 'Float', 'BigDecimal',
      'LocalDate', 'LocalDateTime', 'Date'
    ],
    timeGranularity: false
  }
]

export default {
  /**
   * 图表类型
   */
  chartTypeOptions: [
    {
      value: 1,
      label: '明细表',
      name: 'detail_list',
      aggregation: false
    },
    {
      value: 2,
      label: '聚合表',
      name: 'agg_table',
      aggregation: true
    },
    {
      value: 3,
      label: '柱线图',
      name: 'bar_line',
      aggregation: true
    },
    {
      value: 4,
      label: '饼图',
      name: 'pie',
      aggregation: true
    }
  ],
  /**
   * 关联类型
   */
  joinTypeOptions: [
    {
      value: 1,
      label: 'inner join'
    },
    {
      value: 2,
      label: 'left join'
    },
    {
      value: 3,
      label: 'right join'
    }
  ],
  /**
   * 根据字段类型获取匹配的操作符
   */
  getFilterOperatorOptions (fieldType) {
    return filterOperatorOptions.filter(value => value.matchFieldTypes.indexOf(fieldType) > -1)
  },
  /**
   * 根据值获取过滤操作符选项
   */
  getFilterOperatorOption (value) {
    return filterOperatorOptions.find(option => option.value === value)
  },
  /**
   * 时间粒度
   */
  timeGranularityOptions: [
    {
      value: 1,
      label: '分钟'
    },
    {
      value: 2,
      label: '小时'
    },
    {
      value: 3,
      label: '天'
    },
    {
      value: 4,
      label: '周'
    },
    {
      value: 5,
      label: '月'
    },
    {
      value: 6,
      label: '季度'
    },
    {
      value: 7,
      label: '年'
    }
  ]
}
