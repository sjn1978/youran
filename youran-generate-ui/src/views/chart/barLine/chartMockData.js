import chartItemMock from '../item/chartItemMock'

export default {
  /**
   * 假设axisX为部门，axisX2为性别
   * 则返回结果为：['部门','男','女']
   */
  mockHeaderForMode1 (axisX, axisX2) {
    const header = chartItemMock.mockDimensionList(axisX2, 3)
    return [axisX.titleAlias].concat(header)
  },
  /**
   * 返回结果：
   * [
   *   ['部门','男','女'],
   *   ['部门1',20,30],
   *   ['部门2',30,40],
   *   ['部门3',40,50],
   *   ['部门4',50,60],
   *   ['部门5',60,70]
   * ]
   */
  mockSourceForMode1 (header, axisX, axisY) {
    // 第一行为维度行
    const source = [header]
    for (let i = 0; i < 5; i++) {
      const item = []
      item[0] = chartItemMock.mockDimension(axisX, i)
      for (let j = 1; j < header.length; j++) {
        item[j] = chartItemMock.mockMetrics(axisY, i + j)
      }
      source.push(item)
    }
    return source
  },
  mockSeriesForMode1 (header, axisY) {
    const seriesType = axisY.seriesType ? axisY.seriesType : 'bar'
    const series = []
    for (let i = 0; i < header.length - 1; i++) {
      series.push({ type: seriesType })
    }
    return series
  },
  /**
   * 假设axisX为部门，axisYList[0]为人数，axisYList[1]为平均年龄
   * 则返回结果为：['部门','人数','平均年龄']
   */
  mockHeaderForMode2 (axisX, axisYList) {
    const header = [axisX.titleAlias]
    axisYList.forEach(axisY => header.push(axisY.titleAlias))
    return header
  },
  /**
   * 返回结果：
   * [
   *   ['部门','人数','平均年龄'],
   *   ['部门1',20,30],
   *   ['部门2',30,40],
   *   ['部门3',40,50],
   *   ['部门4',50,60],
   *   ['部门5',60,70]
   * ]
   */
  mockSourceForMode2 (header, axisX, axisYList) {
    // 第一行为维度行
    const source = [header]
    for (let i = 0; i < 5; i++) {
      const item = []
      item[0] = chartItemMock.mockDimension(axisX, i)
      for (let j = 1; j < header.length; j++) {
        const axisY = axisYList[j - 1]
        item[j] = chartItemMock.mockMetrics(axisY, i + j)
      }
      source.push(item)
    }
    return source
  },
  mockSeriesForMode2 (axisYList) {
    const series = []
    for (let i = 0; i < axisYList.length; i++) {
      const axisY = axisYList[i]
      const seriesType = axisY.seriesType ? axisY.seriesType : 'bar'
      series.push({ type: seriesType })
    }
    return series
  }
}
