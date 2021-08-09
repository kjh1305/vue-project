<template>
  <div>
    <v-container>
    <h1 class="display-2 font-weight-bold text-center ma-10 pa-4">사용자 정보 리스트</h1>
      <v-data-table
          :headers="headers"
          :items="userList"
          class="elevation-10"
          :page.sync="page"
          :items-per-page="pageList.totalPageCnt"
          hide-default-footer
      ></v-data-table>
      <div class="text-center pt-2">
        <v-pagination v-model="page" :length="pageList.totalPageCnt" class="ma-5"></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Users",
  data: () => {
    return {
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'email', value: 'email' },
        { text: 'password', value: 'password' },
        {
          text: 'name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'det', value: 'det' },
      ],
      userList: [],
      page:1,
      perPage:'',
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
