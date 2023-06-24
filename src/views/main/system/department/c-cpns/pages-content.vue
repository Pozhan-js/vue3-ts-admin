<template>
  <div class="content">
    <div class="header">
      <h3 class="title">部门列表</h3>
      <el-button type="primary" @click="handleNewUserClick">新建部门</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" border style="width: 100%">
        <el-table-column align="center" type="selection" width="50px" />
        <el-table-column align="center" type="index" label="序号" width="80px" />
        <el-table-column align="center" prop="name" label="部门名称" width="120px" />
        <el-table-column align="center" prop="leader" label="部门领导" width="120px" />
        <el-table-column align="center" prop="parentId" label="上级部门" width="150px" />
        <el-table-column align="center" prop="createAt" label="创建时间">
          <template v-slot="{ row }">
            {{ formateDate(row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="updateAt" label="更新时间">
          <template v-slot="{ row }">
            {{ formateDate(row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="160px">
          <template #="{ row }">
            <el-button type="primary" size="small" text icon="Edit" @click="handleEditBtnClick(row)">编辑</el-button>
            <el-button type="danger" size="small" text icon="Delete" @click="handleDeleteClick(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer">
      <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper" :total="pageTotalCount" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import userSystemStore from '@/store/main/system/system'
import { formateDate } from '@/utils/formate'
import { ref } from 'vue'

const systemStore = userSystemStore()
// 发起请求函数
const fetchPageListData = (formData: any = {}) => {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size
  const info = {
    offset,
    size,
    ...formData
  }

  systemStore.postPageListDataAction('department', info)
}

// const isShow = ref(false)

// 自定义事件
const emit = defineEmits(['newClick', 'newEdit'])

// 页码相关的逻辑
const currentPage = ref(1)
const pageSize = ref(10)

fetchPageListData()
//将store数据变成响应式的 一开始 usersList是一个空数组 但是在请求数据之后 会变成响应式的
// 通过storeToRefs将store中的数据变成响应式的
const { pageList, pageTotalCount } = storeToRefs(systemStore)

const handleSizeChange = (value: number) => {
  fetchPageListData()
  // console.log('size change')
}

const handleCurrentChange = (value: number) => {
  fetchPageListData()
  // console.log('current change')
}
// TODO删除功能待定
const handleDeleteClick = ({ id }) => {
  // console.log('删除', id)
  systemStore.deletePageByIdAction('department', id)
}

const handleEditBtnClick = (itemInfo: any) => {
  emit('newEdit', itemInfo)
}

// 新建用户
const handleNewUserClick = () => {
  // 触发自定义事件 修改对话框变量
  emit('newClick')
}

defineExpose({
  fetchPageListData
})
</script>

<style lang="less" scoped>
.content {
  background-color: #fff;
  margin-top: 20px;
  padding: 20px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .title {
      font-size: 20px;
      font-weight: 600;
    }
  }
}

.table {
  :deep(.el-table__cell) {
    padding: 12px 0;
  }

  .el-button {
    margin-left: 0;
    padding: 5px 11px;
  }
}

.footer {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
