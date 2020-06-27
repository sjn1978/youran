import chartItemMock from '../item/chartItemMock'
export default {
  mockDatasetSource (dimension, metrics) {
    const dimensionValues = chartItemMock.mockDimensionList(dimension, 5)
    const array = [[dimension.titleAlias, metrics.titleAlias]]
    for (let i = 0; i < dimensionValues.length; i++) {
      const name = dimensionValues[i]
      array.push([name, chartItemMock.mockMetrics(metrics, i)])
    }
    return array
  }
}
