export function initFormBean (forEdit) {
  const formBean = {
    projectId: null,
    title: '',
    className: '',
    tableName: '',
    desc: '',
    pageSign: 1,
    feature: {
      save: 1,
      update: 1,
      delete: 1,
      deleteBatch: 1,
      list: 1,
      show: 1,
    }
  }
  if (forEdit) {
    formBean['entityId'] = null
  }
  return formBean
}

export function getRules () {
  return {
    projectId: [
      { required: true, type: 'number', message: '请选择项目', trigger: 'change' }
    ],
    title: [
      { required: true, message: '请输入实体名', trigger: 'blur' },
      { max: 25, message: '长度不能超过25个字符', trigger: 'blur' }
    ],
    className: [
      { required: true, message: '请输入类名', trigger: 'blur' },
      { max: 50, message: '长度不能超过50个字符', trigger: 'blur' }
    ],
    tableName: [
      { required: true, message: '请输入表名', trigger: 'blur' },
      { max: 50, message: '长度不能超过50个字符', trigger: 'blur' }
    ],
    pageSign: [
      { required: true, type: 'number', message: '请选择是否支持分页', trigger: 'change' }
    ],
    desc: [
      { max: 250, message: '长度不能超过250个字符', trigger: 'blur' }
    ]
  }
}
export function initMtmFormBean (forEdit) {
  const formBean = {
    projectId: null,
    needId: false,
    bigId: false,
    tableName: '',
    desc: '',
    entityId1: null,
    entityId2: null,
    entityIdField1: '',
    entityIdField2: '',
    holdRefer1: 0,
    holdRefer2: 0,
    feature: {
      f1: {
        addRemove: 0,
        set: 1,
        withinEntity: 1,
      },
      f2: {
        addRemove: 0,
        set: 1,
        withinEntity: 1,
      }
    },
  }
  if (forEdit) {
    formBean['mtmId'] = null
  }
  return formBean
}

export function getMtmRules () {
  return {
    projectId: [
      { required: true, type: 'number', message: '请选择项目', trigger: 'change' }
    ],
    tableName: [
      { required: true, message: '请输入关联表名', trigger: 'blur' },
      { max: 50, message: '长度不能超过50个字符', trigger: 'blur' }
    ],
    entityIdField1: [
      { required: false, message: '请输入外键字段', trigger: 'blur' },
      { max: 64, message: '长度不能超过64个字符', trigger: 'blur' }
    ],
    entityIdField2: [
      { required: false, message: '请输入外键字段', trigger: 'blur' },
      { max: 64, message: '长度不能超过64个字符', trigger: 'blur' }
    ],
    needId: [
      { required: true, type: 'boolean', message: '请选择是否需要自增id', trigger: 'change' }
    ],
    bigId: [
      { required: true, type: 'boolean', message: '请选择id字段类型', trigger: 'change' }
    ],
    entityId1: [
      { required: true, type: 'number', message: '请选择实体1', trigger: 'change' }
    ],
    entityId2: [
      { required: true, type: 'number', message: '请选择实体2', trigger: 'change' }
    ],
    holdRefer1: [
      { required: true, type: 'number', message: '请选择实体1持有引用', trigger: 'change' }
    ],
    holdRefer2: [
      { required: true, type: 'number', message: '请选择实体2持有引用', trigger: 'change' }
    ]
  }
}
