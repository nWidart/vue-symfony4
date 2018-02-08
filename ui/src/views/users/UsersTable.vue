<template>
    <div>
        <el-table :data="users" v-loading.body="users.length === 0">
            <el-table-column prop="attributes._id" label="id" sortable="custom"/>
            <el-table-column prop="attributes.email" label="email" sortable="custom"/>
            <el-table-column prop="attributes.username" label="username" sortable="custom"/>
        </el-table>
    </div>
</template>

<script>
  export default {
    props: {
      users: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {}
    },
    methods: {},
    watch: {
      users(newValue) {
        console.log(newValue);
      }
    },
    mounted() {
    }
  }
</script>
