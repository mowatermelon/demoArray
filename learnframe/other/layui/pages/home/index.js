let $, tab;
layui.config({
	base: "../../plugins/layui.crazy/"
}).use(['menuTab', 'form', 'element', 'layer', 'jquery'], function () {
	let form = layui.form,
		layer = layui.layer,
		element = layui.element;
	$ = layui.jquery;
	tab = layui.menuTab();

	initHomeBtnBind($);
	checkScreenLoad($);
	keepScreenLoad(element);

})

function initHomeBtnBind($) {
	$(".lockcms").on("click", function () {
		setItem("lockcms", true, true);
		lockPage($);
	})

	//手机设备的简单适配
	let treeMobile = $('.site-tree-mobile'),
		shadeMobile = $('.site-mobile-shade')

	treeMobile.on('click', function () {
		$('body').addClass('site-mobile');
	});

	shadeMobile.on('click', function () {
		$('body').removeClass('site-mobile');
	});

	// 添加新窗口
	$(".layui-nav .layui-nav-item a").on("click", function () {
		addTab($(this));
		$(this).parent("li").siblings().removeClass("layui-nav-itemed");
	});
	$(".showNotice").on("click", function () {
		showNotice();
	});

	$(document).on('keydown', function () {
		if (event.keyCode == 13) {
			$("#unlock").click();
		}
	});
}

function unlockScreen($btn, closeNow) {
	const ISRIGHT = false;
	const defaultEmptyErr = '请输入解锁密码！';
	const errTip = function () {
		fnTip(defaultEmptyErr, 2000);
	}
	const defaultCheckNum = '123456';

	let $subLockDom = $btn.siblings(".admin-header-lock-input");
	let currUnlockNum = $subLockDom.val();

	if (!currUnlockNum) {
		errTip();
		return ISRIGHT;
	}
	if (!currUnlockNum.trimAll()) {
		errTip();
		return ISRIGHT;
	}

	if (currUnlockNum === defaultCheckNum) {
		setItem("lockcms", false, true);
		$subLockDom.val('');
		closeNow();
	} else {
		fnTip("密码错误，请重新输入！");
	}
}

function checkScreenLoad($) {
	let lockCMS = getItem("lockcms", true);
	let needShowNotice = getItem("showNotice", true);
	// 判断是否显示锁屏
	if (lockCMS) {
		lockPage($);
	}
	//判断是否处于锁屏状态(如果关闭以后则未关闭浏览器之前不再显示)
	if (!lockCMS && needShowNotice) {
		showNotice();
	}
}

function keepScreenLoad(element) {
	const defaultCheckType = 'array';
	let menu = getCheckStorageData('menu', defaultCheckType);
	//刷新后还原打开的窗口
	if (menu.length > 0) {
		const tabFilter = 'menuTab';
		curmenu = getCheckStorageData('curmenu', defaultCheckType);
		for (let i = 0; i < menu.length; i++) {
			let openTitle = '<i class="layui-icon ' + menu[i].icon + '"></i>';
			openTitle += '<cite>' + menu[i].title + '</cite>';
			openTitle += '<i class="layui-icon layui-unselect layui-tab-close" data-id="' + menu[i].layId + '">&#x1006;</i>';
			element.tabAdd(tabFilter, {
				title: openTitle,
				content: "<iframe src='" + menu[i].href + "' data-id='" + menu[i].layId + "'></frame>",
				id: menu[i].layId
			})
			//定位到刷新前的窗口
			if (curmenu != "undefined") {
				if (curmenu == '' || curmenu == "null") { //定位到后台首页
					element.tabChange(tabFilter, '');
				} else if (JSON.parse(curmenu).title == menu[i].title) { //定位到刷新前的页面
					element.tabChange(tabFilter, menu[i].layId);
				}
			} else {
				element.tabChange(tabFilter, menu[menu.length - 1].layId);
			}
		}
	}
}

function getLockHtml() {
	const res = `
	<div class="admin-header-lock" id="lock-box">
	<div class="admin-header-lock-img"><img src="../../libs/images/logo.jpg" /></div>
	<div class="admin-header-lock-name px-3" id="lockUserName">WATERMELON</div>
	<div class="input_btn">
		<input type="password" class="admin-header-lock-input layui-input" placeholder="请输入密码解锁.." name="lockPwd" id="lockPwd" />
		<button class="layui-btn" id="unlock">解锁</button>
	</div>
	<p class="px-3">请输入“123456”，否则不会解锁成功哦！！！</p>
</div>`;
	return res;
}
/***
 * 锁屏
 */
function lockPage($) {
	fnAlertShow(getLockHtml(), {
		needB: false,
		showMax:false
	}, function (modalIndex, layero, closeNow) {
		// 解锁
		$("#unlock").on("click", function () {
			unlockScreen($(this), closeNow);
		});
	});
}
/***
 * 公告层
 */
function showNotice() {
	fnAlert('WATERMELON后台管理');
}
/***
 * 打开新窗口
 */
function addTab(_this) {
	tab.tabAdd(_this);
}