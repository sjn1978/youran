package com.youran.generate.service.chart.source;

import com.youran.common.constant.ErrorCode;
import com.youran.common.exception.BusinessException;
import com.youran.common.optimistic.OptimisticLock;
import com.youran.generate.dao.chart.MetaChartSourceDAO;
import com.youran.generate.pojo.dto.chart.source.MetaChartSourceAddDTO;
import com.youran.generate.pojo.dto.chart.source.MetaChartSourceUpdateDTO;
import com.youran.generate.pojo.mapper.chart.MetaChartSourceMapper;
import com.youran.generate.pojo.po.MetaProjectPO;
import com.youran.generate.pojo.po.chart.source.MetaChartSourcePO;
import com.youran.generate.pojo.qo.chart.MetaChartSourceQO;
import com.youran.generate.pojo.vo.chart.source.MetaChartSourceListVO;
import com.youran.generate.pojo.vo.chart.source.MetaChartSourceShowVO;
import com.youran.generate.service.MetaProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

/**
 * 【图表数据源】增删改查服务
 *
 * @author cbb
 * @date 2020/04/04
 */
@Service
public class MetaChartSourceService {

    @Autowired
    private MetaChartSourceDAO metaChartSourceDAO;
    @Autowired
    private MetaProjectService metaProjectService;

    private void checkProjectId(MetaProjectPO project, Integer projectId) {
        if (!Objects.equals(project.getProjectId(), projectId)) {
            throw new BusinessException(ErrorCode.RECORD_NOT_FIND, "禁止跨项目操作");
        }
    }

    /**
     * 新增【图表数据源】
     *
     * @param addDTO
     * @return
     */
    @Transactional(rollbackFor = RuntimeException.class)
    public MetaChartSourcePO save(MetaChartSourceAddDTO addDTO) {
        Integer entityId = addDTO.getEntityId();
        // 获取项目，并校验操作人
        MetaProjectPO project = metaProjectService.getProjectByEntityId(entityId, true);
        this.checkProjectId(project, addDTO.getProjectId());
        MetaChartSourcePO metaChartSource = MetaChartSourceMapper.INSTANCE.fromAddDTO(addDTO);
        metaChartSourceDAO.save(metaChartSource);
        metaProjectService.updateProject(project);
        return metaChartSource;
    }

    /**
     * 修改【图表数据源】
     *
     * @param updateDTO
     * @return
     */
    @Transactional(rollbackFor = RuntimeException.class)
    @OptimisticLock
    public MetaChartSourcePO update(MetaChartSourceUpdateDTO updateDTO) {
        Integer sourceId = updateDTO.getSourceId();
        Integer entityId = updateDTO.getEntityId();
        // 获取项目，并校验操作人
        MetaProjectPO project = metaProjectService.getProjectByEntityId(entityId, true);
        this.checkProjectId(project, updateDTO.getProjectId());
        MetaChartSourcePO metaChartSource = this.getMetaChartSource(sourceId, true);
        MetaChartSourceMapper.INSTANCE.setUpdateDTO(metaChartSource, updateDTO);
        metaChartSourceDAO.update(metaChartSource);
        metaProjectService.updateProject(project);
        return metaChartSource;
    }

    /**
     * 查询列表
     *
     * @param metaChartSourceQO
     * @return
     */
    public List<MetaChartSourceListVO> list(MetaChartSourceQO metaChartSourceQO) {
        List<MetaChartSourceListVO> list = metaChartSourceDAO.findListByQuery(metaChartSourceQO);
        return list;
    }

    /**
     * 根据主键获取【图表数据源】
     *
     * @param sourceId 主键
     * @param force    是否强制获取
     * @return
     */
    public MetaChartSourcePO getMetaChartSource(Integer sourceId,
                                                boolean force) {
        MetaChartSourcePO metaChartSource = metaChartSourceDAO.findById(sourceId);
        if (force && metaChartSource == null) {
            throw new BusinessException(ErrorCode.RECORD_NOT_FIND);
        }
        metaChartSource.featureDeserialize();
        return metaChartSource;
    }


    /**
     * 查询【图表数据源】详情
     *
     * @param sourceId
     * @return
     */
    public MetaChartSourceShowVO show(Integer sourceId) {
        MetaChartSourcePO metaChartSource = this.getMetaChartSource(sourceId, true);
        MetaChartSourceShowVO showVO = MetaChartSourceMapper.INSTANCE.toShowVO(metaChartSource);
        return showVO;
    }

    /**
     * 删除【图表数据源】
     *
     * @param sourceIds
     * @return
     */
    @Transactional(rollbackFor = RuntimeException.class)
    public int delete(Integer... sourceIds) {
        int count = 0;
        for (Integer sourceId : sourceIds) {
            MetaChartSourcePO po = this.getMetaChartSource(sourceId, true);
            if (po == null) {
                continue;
            }
            Integer projectId = po.getProjectId();
            //校验操作人
            MetaProjectPO project = metaProjectService.getAndCheckProject(projectId);
            count += metaChartSourceDAO.delete(sourceId);
            metaProjectService.updateProject(project);
        }
        return count;
    }


}


