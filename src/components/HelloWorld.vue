<template>
    <el-row :span="24" style="min-height: 100%">
        <el-col :span="2" style="border: solid 1px red;">
            <div class="grid-content bg-purple"></div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
