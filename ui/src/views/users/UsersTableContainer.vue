<template>
    <div class="users-container">
        <h1>Users</h1>
        <users-table :users="users"/>
    </div>
</template>

<script>
    import request from '../../utils/request'
    import UsersTable from './UsersTable'
  export default {
    components: {UsersTable},
    component: [UsersTable],
    data() {
      return {
        users: [],
        meta: [],
        links: [],
      }
    },
    methods: {
      async fetchUsers() {
        const response = await request.get('/api/users');
        console.log(response);
        this.users = response.data.data;
        this.meta = response.data.meta;
        this.links = response.data.links;
      }
    },
    mounted() {
      this.fetchUsers();
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .users {
        &-container {
            margin: 30px;
        }
    }
</style>
