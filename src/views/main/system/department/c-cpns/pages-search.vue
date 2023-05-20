<template>
  <div class="search">
    <el-form label-width="80px" size="large" ref="formRef" :model="searchForm">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="部门名称" prop="name">
            <el-input placeholder="请填写部门名称" v-model="searchForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="部门领导" prop="leader">
            <el-input placeholder="请输入查询的部门领导" v-model="searchForm.leader" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="searchForm.createAt"
              type="daterange"
              range-separator=" - "
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <div class="btns">
      <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
      <el-button type="primary" icon="Search" @click="handleSearchClick">查询</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

const emit = defineEmits(['queryClick', 'resetClick'])

const searchForm = reactive({
  name: '',
  leader: '',
  createAt: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const handleResetClick = () => {
  // 清空表单
  formRef.value?.resetFields()
  emit('resetClick')
}
const handleSearchClick = () => {
  emit('queryClick', searchForm)
  // console.log(searchForm)
}
</script>

<style lang="less" scoped>
.search {
  background-color: #fff;
  padding: 20px;

  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }

  .btns {
    text-align: right;
    padding: 0 50px 10px 0;
  }
}
</style>
