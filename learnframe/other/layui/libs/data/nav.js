function getNavData(){
	const navs = [{
		"title" : "后台首页",
		"icon" : "layui-icon-home",
		"href" : "",
		"spread" : false
	},{
		"title" : "表格案例",
		"icon" : "layui-icon-table",
		"href" : "../table/index.html",
		"spread" : false
	},{
		"title" : "表单案例",
		"icon" : "layui-icon-table",
		"href" : "../form/index.html",
		"spread" : false
	},{
		"title" : "404页面",
		"icon" : "layui-icon-404",
		"href" : "../404/index.html",
		"spread" : false
	},{
		"title" : "二级菜单演示",
		"icon" : "layui-icon-website",
		"href" : "",
		"spread" : false,
		"children" : [
			{
				"title" : "二级菜单1",
				"icon" : "layui-icon-website",
				"href" : "",
				"spread" : false
			},
			{
				"title" : "二级菜单2",
				"icon" : "layui-icon-website",
				"href" : "",
				"spread" : false
			}
		]
	}];
	return navs;
}