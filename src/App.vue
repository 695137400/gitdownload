<template>
    <div id="app" style="height: 100%;z-index: 99999;">
        <btnHandle id="fbtn" :click="tagleMenu" @leftChang="leftChang" :style="{display:fbtnShow?'block':'none' }"/>
        <div class="el-menu-vertical-demo" v-if="isCollapse" :style="{ width: width + 'px' }" id="hand" :class="isLeft?'hand-left':'hand-right'">
            <div style="height: 45px;">
                <el-button class="menuBtn"
                           style="float: right;"
                           icon="el-icon-d-arrow-left"
                           @click="tagleMinMenu"/>
            </div>
            <fileLIst/>
            <handle class="myxhandle" @widthChange="widthChange" :isLeft="isLeft"/>
        </div>
    </div>
</template>

<script>
    import handle from "./components/handle";
    import btnHandle from "./components/btnHandle";
    import fileLIst from "./components/fileList";

    export default {
        components: {
            handle,
            btnHandle,
            fileLIst
        },
        name: "App",
        data () {
            return {
                isCollapse: false,
                width: 200,
                isLeft: true,
                fbtnShow: true,

            };
        },
        created () {
            window._this = this;
        },
        methods: {
            tagleMenu() {
                if (this.isCollapse) {
                    this.fbtnShow = true;
                    this.isCollapse = false;
                } else {
                    this.isCollapse = true;
                    this.fbtnShow = false;
                }
            },
            tagleMinMenu() {
                this.tagleMenu();
            },
            widthChange(movement) {
                var w = document.documentElement.offsetWidth;
                if (this.isLeft) {
                    this.width -= movement;
                } else {
                    this.width += movement;
                }
                if (this.width < 200) {
                    this.width = 200;
                }
                if (this.width > w / 2) {
                    this.width = w / 2;
                }
            },
            leftChang (data) {
                this.isLeft = data;
                this.isCollapse = false;
                this.width = 200;
            },
        },
    };
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
    }

    #app {
        position: absolute;
        top: 0;
    }

    .el-menu-vertical-demo {
        box-shadow: 0 0 5px;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        height: 100%;
        position: fixed;
    }

    .hand-left {
        left: 0;
    }

    .hand-right {
        right: 0;
    }

</style>
