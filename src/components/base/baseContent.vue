<template>
  <div>
      <router-link :to="{name:'Invitation'}"><invitation-card></invitation-card></router-link>
      
      <invitation-card></invitation-card>
      <invitation-card></invitation-card>
  </div>
</template>

<script>
import invitationCard from './invitationCard'
export default {
    setup(){
        const gotoInvitation = (item)=>{

        }
    },
    components:{
        invitationCard
    }
}
</script>

<style>

</style>