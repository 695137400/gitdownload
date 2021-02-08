<template>
    <div class="el-button el-button--default is-circle"
         @click="click"
         @mousedown="mouseDown"
         style="position: fixed;z-index: 999999999;font-size: 20px;"
         :style="{'margin-left':startX+'px','margin-top':startY+'px'}"
         id="menuBtn"
    >
        <img src="data:image/png;base64,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" height="50" width="50"/></div>
</template>

<script>
    export default {
        name: "handle",
        data () {
            return {
                startX: 10,
                startY: 10,
                changeX: 0,
                changeY: 0,
                ismv: false,
                isup: false,
            };
        },
        props: {
            icon: String,
            click: Function,
        },
        created () {
            document.addEventListener("mouseup", this.mouseUp);
        },
        watch: {
            icon: function () {

            },
        },
        destroyed () {
            document.removeEventListener("mouseup", this.mouseUp);
        },
        methods: {
            mouseDown () {
                document.addEventListener("mousemove", this.mouseMove);
                this.ismv = false;
                this.isup = false;
                this.changeX = 0;
                this.changeY = 0;

            },
            mouseMove (event) {
                this.ismv = true;
                if (!this.isup) {
                    this.changeX = event.clientX;
                    this.changeY = event.clientY;
                    this.startX = this.changeX;
                    this.startY = this.changeY;
                }
                event.preventDefault();
                document.getElementById("menuBtn").onmouseup = this.mouseUp;
            },
            mouseUp (Event) {
                console.log("mouseUp");
                this.isup = true;
                document.removeEventListener("mousemove", this.mouseMove);
                if (this.ismv) {
                    this.ismv = false;
                    this.changeX = Event.clientX;
                    this.changeY = Event.clientY;
                    var w = document.documentElement.offsetWidth;
                    var h = document.documentElement.offsetHeight;
                    if (this.changeX > w / 2) {
                        this.startX = w - 100;
                        this.$emit("leftChang", false);
                    } else {
                        this.startX = 10;
                        this.$emit("leftChang", true);
                    }
                    if (this.startY > h - 100) {
                        this.startY = h - 100;
                    }
                    if (this.startY < 10) {
                        this.startY = 10;
                    }
                }
            },
        },
    };
</script>
<style>
    .icon-left {
        border-right: 30px solid;
        border-top: 15px solid #fff0;
        border-bottom: 15px solid #73737300;
        border-left: solid 1px #ffffff00;
        background: #adadad00;
        width: 0;
        height: 0px;
        margin-top: 10px;
    }
</style>
