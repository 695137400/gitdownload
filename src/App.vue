<template>
    <div id="app" style="height: 100%">
        <btnHandle :click="tagleMenu" :icon="!isCollapse?'left':'right'" @leftChang="leftChang" style="background-color: #3a8ee6;width: 0px;height: 0px;"/>
        <div class="el-menu-vertical-demo" v-if="isCollapse" :style="{ width: width + 'px' }" id="hand" :class="isLeft?'hand-left':'hand-right'">
            <handle class="myxhandle" @widthChange="widthChange" :isLeft="isLeft"/>
        </div>
    </div>
</template>

<script>
    import handle from "./components/handle";
    import btnHandle from "./components/btnHandle";

    export default {
        components: {
            handle,
            btnHandle,
        },
        name: "App",
        data () {
            return {
                isCollapse: false,
                width: 400,
                isLeft: true,
            };
        },
        created () {
            window._this = this;
        },
        methods: {
            tagleMenu () {
                if (this.isCollapse) {
                    this.isCollapse = false;
                } else {
                    this.isCollapse = true;
                }
            },
            widthChange (movement) {
                var w = document.documentElement.offsetWidth;
                if (this.isLeft) {
                    this.width -= movement;
                } else {
                    this.width += movement;
                }
                if (this.width < 200) {
                    this.width = 200;
                }
                console.log(w / 2);
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
        background-color: red;
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
