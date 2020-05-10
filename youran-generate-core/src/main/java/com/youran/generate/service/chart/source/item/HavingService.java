package com.youran.generate.service.chart.source.item;

import com.youran.common.optimistic.OptimisticLock;
import com.youran.generate.dao.chart.MetaChartSourceItemDAO;
import com.youran.generate.pojo.dto.chart.source.item.HavingAddDTO;
import com.youran.generate.pojo.dto.chart.source.item.HavingUpdateDTO;
import com.youran.generate.pojo.mapper.chart.MetaChartSourceItemMapper;
import com.youran.generate.pojo.po.chart.source.item.HavingPO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 【having条件】服务类
 *
 * @author: cbb
 * @date: 2020-05-10
 */
@Service
public class HavingService {

    @Autowired
    private MetaChartSourceItemDAO metaChartSourceItemDAO;
    @Autowired
    private MetaChartSourceItemService metaChartSourceItemService;

    /**
     * 【having条件】数据预处理
     *
     * @param po
     */
    public void preparePO(HavingPO po) {
        po.featureSerialize();
        metaChartSourceItemService.preparePO(po);
    }

    /**
     * 新增【having条件】
     *
     * @param addDTO
     * @return
     */
    @Transactional(rollbackFor = RuntimeException.class)
    public HavingPO save(HavingAddDTO addDTO) {
        HavingPO po = MetaChartSourceItemMapper.INSTANCE
            .fromHavingAddDTO(addDTO);
        this.preparePO(po);
        metaChartSourceItemDAO.save(po);
        return po;
    }


    /**
     * 修改【图表数据源项】
     *
     * @param updateDTO
     * @return
     */
    @Transactional(rollbackFor = RuntimeException.class)
    @OptimisticLock
    public HavingPO update(HavingUpdateDTO updateDTO) {
        Integer sourceItemId = updateDTO.getSourceItemId();
        HavingPO po = metaChartSourceItemService.getMetaChartSourceItem(sourceItemId, true);
        MetaChartSourceItemMapper.INSTANCE.setHavingUpdateDTO(po, updateDTO);
        this.preparePO(po);
        metaChartSourceItemDAO.update(po);
        return po;
    }


}
