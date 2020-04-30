<template>
    <el-container class="home-container">

        <el-aside style="width:200px;">
            <div class="logo">
                <a href="">
                    <img :src="menu.logoInfo.image" height="60" width="60"/>
                </a><span>{{menu.logoInfo.title}}</span>
            </div>
            <div>
                <el-menu unique-opened="true"
                         default-active="2"
                         background-color="#545c64"
                         text-color="#fff"
                         active-text-color="#4354FF">
                    <el-submenu v-for="(item,j) in menu.menuInfo" :index="j.toString()" :key="item.pageID">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>{{item.title}}</span>
                        </template>
                        <el-menu-item v-for="(child,i) in item.child" :index="j.toString()+'_'+i.toString()"
                                      :key="child.pageID">
                            <i class="el-icon-menu"></i> {{child.title}}
                        </el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </div>
        </el-aside>
        <el-container>
            <el-header>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </el-header>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>


<script>
    export default {
        name: 'Index',
        props: {},
        data() {
            return {
                menu: {
                    "homeInfo": {"title": "首页", "href": "/Index/Default/"},
                    "logoInfo": {"title": "xxxx管理系统", "image": "/img/logo.82b9c7a5.png", "href": ""},
                    "menuInfo": [{
                        "pageID": 100,
                        "Href": "",
                        "title": "产品管理",
                        "icon": "fa fa-th-large",
                        "child": [{
                            "pageID": 403,
                            "href": "/Team/Index",
                            "title": "团管理",
                            "icon": "fa fa-caret-right",
                            "child": []
                        }, {"pageID": 401, "href": "/Product/List", "title": "产品", "icon": "fa fa-caret-right"}]
                    }, {
                        "pageID": 400,
                        "href": "",
                        "title": "系统管理",
                        "icon": "fa fa-share-alt",
                        "child": [{
                            "pageID": 402,
                            "href": "/Users/index",
                            "title": "员工管理new",
                            "icon": "fa fa-caret-right"
                        }, {"pageID": 404, "href": "/Users/List", "title": "员工管理", "icon": "fa fa-caret-right"}]
                    }]
                }
            };
        },
        create() {
            console.log('1')
        },
        mounted() {
            console.log(this.menu)
        }


    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-aside {
        background-color: red;
    }

    .el-header {
        background-color: blue;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
    }

    .el-main {
        background-color: bisque;
        padding: 0;
    }

    .el-container {
        height: 100%;
    }

    .logo {
        display: flex;
        /*justify-content: space-between;*/
        align-items: center;
    }

    .logo > span {
        font-size: 20px;
        color: #ffffff;
        padding-right: 10px;
    }

    .el-menu {
        border: 0px;
    }

    .el-aside::-webkit-scrollbar {
        display: none;
    }
</style>