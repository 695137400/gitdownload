<template>
    <div id="app" style="height: 100%">
        <el-button
                class="btn"
                :icon="isCollapse?'el-icon-d-arrow-left':'el-icon-d-arrow-right'"
                @click="tagleMenu"
                circle
                style="
                position: fixed;
                z-index: 999999999;
                background-color: #19ec60;
                color: #000000;"
                :style="{'margin-left':startX+'px','margin-top':startY+'px'}"
                @mousedown.native="mouseDown"
                @mousemove.native="mousemove"
        ></el-button>
        <div class="el-menu-vertical-demo" v-if="isCollapse" :style="{ width: width + 'px' }">
            <handle class="myxhandle" @widthChange="widthChange"/>
        </div>
    </div>
</template>

<script>
    import handle from "./components/handle";

    export default {
        components: {
            handle
        },
        name: 'App',
        data() {
            return {
                isCollapse: true,
                width: 400,
                startX: 10,
                startY: 10,
            };
        },
        methods: {
            tagleMenu() {
                if (this.isCollapse) {
                    this.isCollapse = false
                } else {
                    this.isCollapse = true;
                }
            },
            widthChange(movement) {
                this.width -= movement;
                if (this.width < 200) {
                    this.width = 200;
                }
            },
            mouseDown(event) {
                console.log('a', event);
                this.startX+=event.screenX;
            },
            mousemove(event) {
               console.log('X',event.screenX);
               console.log('Y',event.screenY);

            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        height: 100%;
        background-color: yellow;
        position: fixed;
    }

    .el-row {
        margin-bottom: 20px;
    }

    :last-child {
        margin-bottom: 0;
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
