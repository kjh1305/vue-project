
<template>
  <div>
    <v-container>
      <h1 class="display-2 font-weight-bold text-center ma-10 pa-4">사용자 정보 리스트</h1>
      <v-data-table
          :headers="userListHeaders"
          :items="userList"
          :items-per-page="userListPageList.totalPageCnt"
          hide-default-footer
          class="elevation-10"
      ></v-data-table>
      <div class="text-center pt-2">
        <v-pagination v-model="page"
                      :length="userListPageList.totalPageCnt"
                      :total-visible="userListTotalVisible"
                      
                      class="ma-5"></v-pagination>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "Users",
  data: () => {
    return {
      page:1
    }
  },
  computed:{
    ...mapState(["userListHeaders","userList","userListPageList","userListTotalVisible"])
  },
  created() {
    this.$store.dispatch("userGetList")
    this.$store.dispatch("userGetPage")
  },
  methods:{
    test(){
      console.log("test")
    }
  },
  watch: {
    page: function (pageNum) {
      this.$store.dispatch("userPageClick", pageNum)
    }
  }
}
</script>