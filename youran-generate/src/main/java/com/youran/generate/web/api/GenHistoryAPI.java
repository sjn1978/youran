package com.youran.generate.web.api;

import com.youran.common.pojo.vo.PageVO;
import com.youran.common.pojo.vo.ReplyVO;
import com.youran.generate.pojo.qo.GenHistoryQO;
import com.youran.generate.pojo.vo.GenHistoryListVO;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;


/**
 * Title: 【生成历史】API
 * Description: swagger接口文档
 * Project: bbs
 * Author: cbb
 * Create Time: 2018-03-17 16:47
 */
@Api(tags = "GenHistory", description = "生成历史")
public interface GenHistoryAPI {

    /**
     * 分页查询【生成历史】
     */
    @ApiOperation(value="分页查询【生成历史】")
    ReplyVO<PageVO<GenHistoryListVO>> list(GenHistoryQO genHistoryQO);

}
