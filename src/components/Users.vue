<template>
<div>
  <h1>사용자 정보 리스트</h1>
  <table class="table table-bordered table-condensed">
    <tr>
      <th>번호</th>
      <th>이메일</th>
      <th>비밀번호</th>
      <th>이름</th>
      <th>날짜</th>
    </tr>
    <tr v-for="user in userList" v-bind:key="user.id">
      <td>{{user.id}}</td>
      <td>{{user.email}}</td>
      <td>{{user.password}}</td>
      <td>{{user.name}}</td>
      <td>{{user.det}}</td>
    </tr>
  </table>
  <page></page>

</div>
</template>

<script>
import Page from "./Page";

export default {
  name: "Users",
  data: () => {
    return {
      userList:{}
    }
  },
  created() {
    this.axios.get('/users?page=1')
    .then(res => {
      this.userList = res.data
    })
    .catch(error => {
      console.log(error)
    })
  },
  components:{
    Page
  }
}
</script>

<style scoped>
  h1{
    color: green;
    font-size: 50px;
    padding-bottom: 100px;
  }
  table, th, td{
    border: 3px solid gray;
    font-size: 18px;
  }
  table{
    border-collapse: collapse;
    margin-bottom: 150px;
  }
  th{
    text-align: center;
  }
  td{
    text-align: right;
  }
  tr:hover{
    background-color: green;
  }
</style>