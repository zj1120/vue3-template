<template>
  <div>
    <h1>hello world!</h1>
    <h1>{{ newName }}</h1>
    <hr>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/user'

const userStore = useUserStore()

const { name } = storeToRefs(userStore)

const { setName, fullName } = userStore

setName('Tom')

const newName = fullName()

</script>
