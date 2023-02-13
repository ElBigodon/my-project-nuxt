<template>
  <div class="bg-zinc-600 w-screen h-screen flex">
    <n-space class="m-auto" vertical>
      <n-alert class="shadow-2xl" title="Bem-vindo!" type="info" bordered>
        Pacote inicial para desenvolvimento SSR com Nuxt 3 + Vue 3 e suas maravilhas
      </n-alert>
    </n-space>
  </div>
</template>

<script lang="ts" setup>

const message = useMessage()

const data = $ref({name:null})

message.success("Olá!")

</script>
