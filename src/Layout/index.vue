<!-- Layout.vue -->
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const routes = router.getRoutes().filter((route) => route.meta?.title);
const isCollapse = ref(false);
</script>

<template>
    <el-container direction="horizontal">
        <el-aside width="auto">
            <div style="text-align: center">
                <el-switch v-model="isCollapse" />
            </div>
            <el-menu default-active="/calendar" router :collapse="!isCollapse">
                <el-menu-item
                    v-for="route in routes"
                    :key="route.name"
                    :index="route.path"
                >
                    <el-icon>
                        <component :is="route.meta.icon"></component>
                    </el-icon>
                    <template #title>{{ route.meta.title }}</template>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-main>
                <router-view> </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped></style>
