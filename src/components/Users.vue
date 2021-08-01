<template>
  <div>
    <h1>사용자 정보 리스트</h1>
    <b-container>
      <b-table striped hover :items="userList">
      </b-table>
    </b-container>
    <div class="overflow-auto pagination">
      <b-pagination
          v-model="page"
          :total-rows="pageList.totalListCnt"
          :per-page="perPage"
          first-text="First"
          prev-text="Prev"
          next-text="Next"
          last-text="Last"
      ></b-pagination>
    </div>
  </div>
</template>

<script>

export default {
  name: "Users",
  data (){
    return {
      fields:['번호', '이메일', '비밀번호', '이름', '날짜'],
      userList: [],
      page:1,
      perPage:5,
      pageList:[]
    }
  },
  created() {
    this.$axios.get('/users?page='+this.page)
        .then(res => {
          this.userList = res.data
        })
        .catch(error => {
          console.log(error)
        }),
    this.$axios.get('/users/page?page='+ this.page)
        .then(res => {
          this.pageList = res.data
        })
        .catch(error => {
          console.log(error)
        })
  },
  methods:{
    pageClick(pageNum){
      this.$axios.get('/users?page='+pageNum)
        .then(res =>{
          this.userList = res.data
        })
      .catch(error => {
        console.log(error)
      })
    }
  },
  watch: {
    page: function (pageNum) {
      this.pageClick(pageNum);
    }
  }
}
</script>

<style scoped>
.pagination{
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}
h1{
  padding-bottom: 50px;
}
</style>