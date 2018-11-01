let tabFilter, menu = [],
	liIndex, curNav, delMenu;
layui.define(["element", "jquery"], function (exports) {
	let element = layui.element,
		$ = layui.jquery,
		layId,
		Tab = function () {
			this.tabConfig = {
				closed: true,
				openTabNum: 3,
				tabFilter: "menuTab"
			}
		};
	let $navDom = $(".navBar");
	//新消息

	//显示左侧菜单
	if ($navDom.html() == '') {
		let _this = this;
		$(".navBar").html(navBar(getNavData())).height($(window).height() - 230);
		element.init(); //初始化页面元素
		$(window).resize(function () {
			$navDom.height($(window).height() - 230);
		})
	}

	//参数设置
	Tab.prototype.set = function (option) {
		let _this = this;
		$.extend(true, _this.tabConfig, option);
		return _this;
	};

	//通过title获取lay-id
	Tab.prototype.getLayId = function (title) {
		$(".layui-tab-title.top_tab li").each(function () {
			if ($(this).find("cite").text() == title) {
				layId = $(this).attr("lay-id");
			}
		})
		return layId;
	}
	//通过title判断tab是否存在
	Tab.prototype.hasTab = function (title) {
		let tabIndex = -1;
		$(".layui-tab-title.top_tab li").each(function () {
			if ($(this).find("cite").text() == title) {
				tabIndex = 1;
			}
		})
		return tabIndex;
	}

	//右侧内容tab操作
	let tabIdIndex = 0;
	Tab.prototype.tabAdd = function (_this) {
		menu = getCheckStorageData('menu', 'array');

		let that = this;
		let closed = that.tabConfig.closed,
			openTabNum = that.tabConfig.openTabNum;
		tabFilter = that.tabConfig.tabFilter;
		let currIcon = _this.find("i.layui-icon").attr("data-icon");
		if (currIcon) {
			let title = '';
			let currCite = _this.find("cite").text();
			let currUrl = _this.attr("data-url");
			if (that.hasTab(currCite) == -1 && _this.siblings("dl.layui-nav-child").length == 0) {
				if ($(".layui-tab-title.top_tab li").length == openTabNum) {
					layer.msg('只能同时打开' + openTabNum + '个选项卡哦。不然系统会卡的！');
					return;
				}
				tabIdIndex++;
				if (currIcon) {
					title += '<i class="layui-icon ' + currIcon + '"></i>';
				}
				title += '<cite>' + currCite + '</cite>';
				title += '<i class="layui-icon layui-unselect layui-tab-close" data-id="' + tabIdIndex + '">&#x1006;</i>';
				element.tabAdd(tabFilter, {
					title: title,
					content: "<iframe src='" + currUrl + "' data-id='" + tabIdIndex + "'></frame>",
					id: new Date().getTime()
				})

				//当前窗口内容
				let curmenu = {
					"icon": currIcon,
					"title": currCite,
					"href": currUrl,
					"layId": new Date().getTime()
				}
				menu.push(curmenu);
				setItem("menu", menu, true); //打开的窗口
				setItem("curmenu", curmenu, true); //当前的窗口
				element.tabChange(tabFilter, that.getLayId(currCite));
			} else {
				//当前窗口内容
				let curmenu = {
					"icon": currIcon,
					"title": currCite,
					"href": currUrl,
					"layId": new Date().getTime()
				}
				setItem("curmenu", curmenu, true); //当前的窗口
				element.tabChange(tabFilter, that.getLayId(currCite));
			}
		}
		// })
	}
	$("body").on("click", ".top_tab li", function () {
		//切换后获取当前窗口的内容
		let curmenu = '';
		const $this = $(this);
		const currIndex = $this.index();
		let menu = getCheckStorageData('menu', 'array');
		curmenu = menu[currIndex - 1];
		if (currIndex == 0) {
			setItem("curmenu", '', false);
		} else {
			if (curmenu) {
				setItem("curmenu", curmenu, true); //当前的窗口
				if (!$.isEmptyObject(getCheckStorageData('curmenu', 'object'))) {
					//如果删除的不是当前选中的tab,则将curmenu设置成当前选中的tab
					if (curNav != JSON.stringify(delMenu)) {
						setItem("curmenu", curNav, true);
					} else {
						setItem("curmenu", menu[liIndex - 1], true); //当前的窗口
					}
				}
			}

		}
		element.tabChange(tabFilter, $this.attr("lay-id")).init();
	})

	//删除tab
	$("body").on("click", ".top_tab li i.layui-tab-close", function () {
		//删除tab后重置session中的menu和curmenu
		liIndex = $(this).parent("li").index();
		let menu = getCheckStorageData('menu', 'array');
		//获取被删除元素
		delMenu = menu[liIndex - 1];
		let curmenu = getCheckStorageData('curmenu', 'object');

		if (JSON.stringify(curmenu) != JSON.stringify(menu[liIndex - 1])) { //如果删除的不是当前选中的tab
			curNav = JSON.stringify(curmenu);
		} else {
			if ($(this).parent("li").length > liIndex) {
				setItem("curmenu", curmenu);
				curNav = curmenu;
			} else {
				setItem("curmenu", menu[liIndex - 1], true); //当前的窗口
				curNav = JSON.stringify(menu[liIndex - 1]);
			}
		}
		menu.splice((liIndex - 1), 1);
		setItem("menu", menu, true);
		element.tabDelete("menuTab", $(this).parent("li").attr("lay-id")).init();
	})

	let menuTabClass = new Tab();
	exports("menuTab", function (option) {
		return menuTabClass.set(option);
	});
});

function navBar(data) {
	var ulHtml = '<ul class="layui-nav layui-nav-tree">';
	for (var i = 0; i < data.length; i++) {
		if (data[i].spread) {
			ulHtml += '<li class="layui-nav-item layui-nav-itemed">';
		} else {
			ulHtml += '<li class="layui-nav-item">';
		}
		if (data[i].children != undefined && data[i].children.length > 0) {
			ulHtml += '<a href="javascript:;">';
			if (checkMenuIconRight(data[i])) {
				ulHtml += '<i class="layui-icon ' + data[i].icon + '" data-icon="' + data[i].icon + '"></i>';
			}
			ulHtml += '<cite>' + data[i].title + '</cite>';
			ulHtml += '<span class="layui-nav-more"></span>';
			ulHtml += '</a>'
			ulHtml += '<dl class="layui-nav-child">';
			for (var j = 0; j < data[i].children.length; j++) {
				ulHtml += '<dd><a href="javascript:;" data-url="' + data[i].children[j].href + '">';
				if (checkMenuIconRight(data[i].children[j])) {
					ulHtml += '<i class="layui-icon ' + data[i].children[j].icon + '" data-icon="' + data[i].children[j].icon + '"></i>';
				}
				ulHtml += '<cite>' + data[i].children[j].title + '</cite></a></dd>';
			}
			ulHtml += "</dl>"
		} else {
			ulHtml += '<a href="javascript:;" data-url="' + data[i].href + '">';
			if (data[i].icon != undefined && data[i].icon != '') {
				ulHtml += '<i class="layui-icon ' + data[i].icon + '" data-icon="' + data[i].icon + '"></i>';
			}
			ulHtml += '<cite>' + data[i].title + '</cite></a>';
		}
		ulHtml += '</li>'
	}
	ulHtml += '</ul>';
	return ulHtml;
}

function checkMenuIconRight(data) {
	return data.hasOwnProperty('icon') && data.icon !== '';
}