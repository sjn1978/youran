/**
 * 灵活可变的字段模板
 */
export const flexibleTemplate = {
  '普通字段模板': {
    jfieldName: '',
    fieldName: '',
    fieldDesc: '',
    jfieldType: '',
    fieldType: '',
    fieldLength: 0,
    fieldScale: 0,
    primaryKey: 0,
    autoIncrement: 0,
    defaultValue: '',
    notNull: 0,
    foreignKey: 0,
    specialField: '',
    fieldExample: '',
    fieldComment: '',
    dicType: '',
    query: 0,
    queryType: null,
    insert: 1,
    update: 1,
    list: 1,
    listSort: 0,
    show: 1,
    editType: null,
    orderNo: 10
  },
  '外键模板': {
    jfieldName: '',
    fieldName: '',
    fieldDesc: '',
    jfieldType: '',
    fieldType: '',
    fieldLength: 0,
    fieldScale: 0,
    primaryKey: 0,
    autoIncrement: 0,
    defaultValue: '',
    notNull: 0,
    foreignKey: 1,
    specialField: '',
    fieldExample: '',
    fieldComment: '',
    dicType: '',
    query: 1,
    queryType: 1,
    insert: 1,
    update: 1,
    list: 1,
    listSort: 0,
    show: 1,
    editType: null,
    orderNo: 10
  }
}
/**
 * 固定字段模板
 */
export const fixedTemplate = {
  '主键ID(Long)': {
    jfieldName: 'id',
    fieldName: 'id',
    fieldDesc: '主键',
    jfieldType: 'Long',
    fieldType: 'bigint',
    fieldLength: 20,
    fieldScale: 0,
    primaryKey: 1,
    autoIncrement: 1,
    defaultValue: '',
    notNull: 1,
    foreignKey: 0,
    specialField: '',
    fieldExample: '1',
    fieldComment: '主键ID',
    dicType: '',
    query: 0,
    queryType: null,
    insert: 0,
    update: 0,
    list: 1,
    listSort: 0,
    show: 1,
    editType: null,
    orderNo: 1
  },
  '主键ID(Integer)': {
    jfieldName: 'id',
    fieldName: 'id',
    fieldDesc: '主键',
    jfieldType: 'Integer',
    fieldType: 'int',
    fieldLength: 11,
    fieldScale: 0,
    primaryKey: 1,
    autoIncrement: 1,
    defaultValue: '',
    notNull: 1,
    foreignKey: 0,
    specialField: '',
    fieldExample: '1',
    fieldComment: '主键ID',
    dicType: '',
    query: 0,
    queryType: null,
    insert: 0,
    update: 0,
    list: 1,
    listSort: 0,
    show: 1,
    editType: null,
    orderNo: 1
  },
  '创建时间': {
    jfieldName: 'createdTime',
    fieldName: 'created_time',
    fieldDesc: '创建时间',
    jfieldType: 'Date',
    fieldType: 'datetime',
    fieldLength: 0,
    fieldScale: 0,
    primaryKey: 0,
    autoIncrement: 0,
    defaultValue: '',
    notNull: 1,
    foreignKey: 0,
    specialField: 'createdTime',
    fieldExample: '2017-12-07 00:00:00',
    fieldComment: '创建时间【yyyy-MM-dd HH:mm:ss】',
    dicType: '',
    query: 0,
    queryType: null,
    insert: 0,
    update: 0,
    list: 0,
    listSort: 1,
    show: 0,
    editType: null,
    orderNo: 100
  },
  '创建人': {
    jfieldName: 'createdBy',
    fieldName: 'created_by',
    fieldDesc: '创建人',
    jfieldType: 'String',
    fieldType: 'varchar',
    fieldLength: 20,
    fieldScale: 0,
    primaryKey: 0,
    autoIncrement: 0,
    defaultValue: '',
    notNull: 1,
    foreignKey: 0,
    specialField: 'createdBy',
    fieldExample: 'admin',
    fieldComment: '创建人【最大长度20】',
    dicType: '',
    query: 0,
    queryType: null,
    insert: 0,
    update: 0,
    list: 0,
    listSort: 0,
    show: 0,
    editType: null,
    orderNo: 101
  },
  '修改时间': {
    jfieldName: 'operatedTime',
    fieldName: 'operated_time',
    fieldDesc: '修改时间',
    jfieldType: 'Date',
    fieldType: 'datetime',
    fieldLength: 0,
    fieldScale: 0,
    primaryKey: 0,
    autoIncrement: 0,
    defaultValue: '',
    notNull: 1,
    foreignKey: 0,
    specialField: 'operatedTime',
    fieldExample: '2017-12-07 00:00:00',
    fieldComment: '修改时间【yyyy-MM-dd HH:mm:ss】',
    dicType: '',
    query: 0,
    queryType: null,
    insert: 0,
    update: 0,
    list: 0,
    listSort: 1,
    show: 0,
    editType: null,
    orderNo: 110
  },
  '修改人': {
    jfieldName: 'operatedBy',
    fieldName: 'operated_by',
    fieldDesc: '修改人',
    jfieldType: 'String',
    fieldType: 'varchar',
    fieldLength: 20,
    fieldScale: 0,
    primaryKey: 0,
    autoIncrement: 0,
    defaultValue: '',
    notNull: 1,
    foreignKey: 0,
    specialField: 'operatedBy',
    fieldExample: 'admin',
    fieldComment: '修改人【最大长度20】',
    dicType: '',
    query: 0,
    queryType: null,
    insert: 0,
    update: 0,
    list: 0,
    listSort: 0,
    show: 0,
    editType: null,
    orderNo: 111
  },
  '乐观锁版本号': {
    jfieldName: 'version',
    fieldName: 'version',
    fieldDesc: '乐观锁版本号',
    jfieldType: 'Integer',
    fieldType: 'int',
    fieldLength: 11,
    fieldScale: 0,
    primaryKey: 0,
    autoIncrement: 0,
    defaultValue: '',
    notNull: 1,
    foreignKey: 0,
    specialField: 'version',
    fieldExample: '1',
    fieldComment: '乐观锁版本号【整型】',
    dicType: '',
    query: 0,
    queryType: null,
    insert: 0,
    update: 0,
    list: 0,
    listSort: 0,
    show: 0,
    editType: null,
    orderNo: 120
  },
  '逻辑删除标识': {
    jfieldName: 'deleted',
    fieldName: 'deleted',
    fieldDesc: '逻辑删除标识',
    jfieldType: 'Boolean',
    fieldType: 'tinyint',
    fieldLength: 1,
    fieldScale: 0,
    primaryKey: 0,
    autoIncrement: 0,
    defaultValue: '',
    notNull: 1,
    foreignKey: 0,
    specialField: 'deleted',
    fieldExample: 'false',
    fieldComment: '逻辑删除标识【0-未删除，1-已删除】',
    dicType: '',
    query: 0,
    queryType: null,
    insert: 0,
    update: 0,
    list: 0,
    listSort: 0,
    show: 0,
    editType: null,
    orderNo: 130
  },
  '排序号': {
    jfieldName: 'orderNo',
    fieldName: 'order_no',
    fieldDesc: '排序号',
    jfieldType: 'Integer',
    fieldType: 'int',
    fieldLength: 11,
    fieldScale: 0,
    primaryKey: 0,
    autoIncrement: 0,
    defaultValue: '',
    notNull: 1,
    foreignKey: 0,
    specialField: '',
    fieldExample: '1',
    fieldComment: '排序号【整型】',
    dicType: '',
    query: 0,
    queryType: null,
    insert: 1,
    update: 1,
    list: 1,
    listSort: 1,
    show: 1,
    editType: null,
    orderNo: 90
  }
}

export const findSystemTemplate = function (key) {
  const t1 = flexibleTemplate[key]
  if (t1) {
    return t1
  } else {
    return fixedTemplate[key]
  }
}
