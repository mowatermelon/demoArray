		//面板默认数据
		function initPanelData(){
			this.text =[
									{
										title:'开心',
										content:[
											{
											"title":"数据来源",
											"alias":"sjy",
											"type":"select",
											"cls":"input-group col-xs-12 col-sm-6",
											"isMust":true,
											"option":[
												"吃瓜群众","吃惊群众"
											]
											},
											{
												"title":"计算方式",
												"alias":"jsfs",
												"type":"select",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":true,
												"option":[
													"西瓜面积","瓜子面积","苹果面积"
												]
											}, 
											{
												"title":"扣除模式",
												"alias":"kcms",
												"type":"select",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":true,
												"option":[
													"开心就好模式","吃瓜就好模式"
												]
											},
											{
												"title":"输出单位",
												"alias":"scdw",
												"type":"select",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":true,
												"option":[
													"小心","小气","小资"
												]
											}, 
											{
												"title":"小数单位",
												"alias":"xsw",
												"type":"change",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":true,
												"option":2,
												"min":0,
												"max":10,
												"count":1,
                        "fix":0
											},  
											{
												"title":"吃鸡距离",
												"alias":"cjjl",
												"type":"text",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":true,
												"option":2,
												"unit":"千米"
											}
										]
									},
									{
										title:'伤心',
										content:[
											{
											"title":"数据来源",
											"alias":"sjy",
											"type":"select",
											"cls":"input-group col-xs-12 col-sm-6",
											"isMust":true,
											"option":[
												"吃瓜群众","吃惊群众"
											]
											},
											{
												"title":"计算方式",
												"alias":"jsfs",
												"type":"select",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":true,
												"option":[
													"西瓜面积","瓜子面积","苹果面积"
												]
											}, 
											{
												"title":"扣除模式",
												"alias":"kcms",
												"type":"select",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":true,
												"option":[
													"开心就好模式","吃瓜就好模式"
												]
											},
											{
												"title":"输出单位",
												"alias":"scdw",
												"type":"select",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":true,
												"option":[
													"小心","小气","小资"
												]
											}, 
											{
												"title":"吃鸡距离",
												"alias":"cjjl",
												"type":"text",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":true,
												"option":2,
												"unit":"千米"
											}, 
											{
												"title":"吃惊比例",
												"alias":"cjbl",
												"type":"change",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":true,
												"option":0.9,
												"min":0,
												"max":1,
												"count":0.1,
												"fix":1
											}
										]
									},
									{
										title:'生气',
										content:[
											{
											"title":"数据来源",
											"alias":"sjy",
											"type":"select",
											"cls":"input-group col-xs-12 col-sm-6",
											"isMust":true,
											"option":[
												"吃瓜群众","吃惊群众"
											]
											},
											{
												"title":"计算方式",
												"alias":"jsfs",
												"type":"select",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":true,
												"option":[
													"西瓜面积","瓜子面积","苹果面积"
												]
											}, 
											{
												"title":"扣除模式",
												"alias":"kcms",
												"type":"select",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":true,
												"option":[
													"开心就好模式","吃瓜就好模式"
												]
											},
											{
												"title":"输出单位",
												"alias":"scdw",
												"type":"select",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":true,
												"option":[
													"小心","小气","小资"
												]
											}, 
											{
												"title":"吃瓜距离",
												"alias":"cgjl",
												"type":"change",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":false,
												"option":20,
												"min":10,
												"max":100,
												"count":10,
                        "fix":0
											},  
											{
												"title":"吃鸡距离",
												"alias":"cjjl",
												"type":"text",
												"cls":"input-group col-xs-12 col-sm-6",
												"isMust":true,
												"option":2,
												"unit":"千米"
											}
										]
									}
								];
		}

		function initTableData(){
			this.text = "<table height='20' cellspacing='0' bordercolordark='#ffffff' cellpadding='0' width='1700' bordercolorlight='#3c3c3c' border='1' frame='border'><caption style='font-size: 18px; font-weight: bold'>1.选定区域土地分类面积统计表</caption><tbody><tr><td style='font-size: 12px' colspan='17' align='right'>元/平方米</td></tr><tr style='font-size: 12px; font-weight: bold'><td>地块编号</td><td>标识码</td><td>图斑号</td><td>图斑类型</td><td>所属图斑号</td><td>权属单位代码</td><td>权属单位名称</td><td>所在图幅号</td><td>权利人</td><td>图斑净面积</td><td>地类编码</td><td>地类名称</td><td>宗地号</td><td>土地证号</td><td>权属性质</td><td>新增建设用地类型</td><td>新增耕地类型</td></tr><tr style='font-size: 12px'><td>1</td><td><a onclick=\"onMarkOnMap('tdly_dltb','bsm','12189082',true);\">12189082</a></td><td>01-105-002-18</td><td>图斑</td><td>01-105-002-18</td><td>1525011050020002000</td><td>张台村</td><td></td><td></td><td>4361.33</td><td>203</td><td>村庄</td><td></td><td></td><td>集体</td><td></td><td></td></tr><tr style='font-size: 12px'><td>合计</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td>总计</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><table height='20' cellspacing='0' bordercolordark='#ffffff' cellpadding='0' width='10000' bordercolorlight='#3c3c3c' border='1' frame='border'><caption style='font-size: 18px; font-weight: bold'>2.按照村汇总表(三大类分类)</caption><tbody><tr><td style='font-size: 12px' colspan='103' align='right'>元/平方米</td></tr><tr style='font-size: 12px; font-weight: bold'><td rowspan='3'>地块编号</td><td rowspan='3'>权属单位代码</td><td rowspan='3'>权属单位名称</td><td rowspan='3'>权属性质</td><td rowspan='3'>土地总面积</td><td colspan='33' align='center'>农用地</td><td colspan='50' align='center'>建设用地</td><td colspan='15' align='center'>未利用地</td></tr><tr style='font-size: 12px; font-weight: bold'><td rowspan='2'>合计(1)</td><td colspan='6' align='center'>耕地</td><td colspan='6' align='center'>园地</td><td colspan='7' align='center'>林地</td><td colspan='4' align='center'>牧草地</td><td colspan='9'>其他农用地</td><td rowspan='2'>合计(2)</td><td colspan='7' align='center'>过度期间地类</td><td colspan='6' align='center'>商服用地</td><td colspan='4' align='center'>工矿仓储用地</td><td colspan='3' align='center'>公共设施用地</td><td colspan='7' align='center'>公共建筑用地</td><td colspan='6' align='center'>住宅用地</td><td colspan='7' align='center'>交通运输用地</td><td colspan='3' align='center'>水利设施用地</td><td colspan='6'>特殊用地</td><td rowspan='2'>合计(3)</td><td colspan='8' align='center'>未利用土地</td><td colspan='6' align='center'>其他土地</td></tr><tr style='font-size: 12px; font-weight: bold'><td>小计(11)</td><td>灌溉水田(111)</td><td>望天田(112)</td><td>水浇地(113)</td><td>旱地(114)</td><td>菜地(115)</td><td>小计(12)</td><td>果园(121)</td><td>桑园(122)</td><td>茶园(123)</td><td>橡胶园(124)</td><td>其他园地(125)</td><td>小计(13)</td><td>有林地(131)</td><td>灌木林地(132)</td><td>疏林地(133)</td><td>未成林造林地(134)</td><td>迹地(135)</td><td>苗圃(136)</td><td>小计(14)</td><td>天然草地(141)</td><td>改良草地(142)</td><td>人工草地(143)</td><td>小计(15)</td><td>畜禽饲养地(151)</td><td>设施农业用地(152)</td><td>农村道路(153)</td><td>坑塘水面(154)</td><td>养殖水面(155)</td><td>农田水利用地(156)</td><td>田坎(157)</td><td>晒谷场等用地(158)</td><td>小计(20)</td><td>城市(201)</td><td>建制镇(202)</td><td>农村居民点(203)</td><td>独立工矿用地(204)</td><td>盐地(205)</td><td>特殊用地(206)</td><td>小计(21)</td><td>商业用地(211)</td><td>金融保险用地(212)</td><td>餐饮旅馆业用地(213)</td><td>其他商服用地(214)</td><td>综合楼(215)</td><td>小计(22)</td><td>工业用地(221)</td><td>采矿地(222)</td><td>仓储用地(223)</td><td>小计(23)</td><td>公共基础设施用地(231)</td><td>瞻仰景观休闲用地(232)</td><td>小计(24)</td><td>机关团体用地(241)</td><td>教育用地(242)</td><td>科研设计用地(243)</td><td>文体用地(244)</td><td>医疗卫生用地(245)</td><td>慈善用地(246)</td><td>小计(25)</td><td>城镇单一住宅用地(251)</td><td>城镇混合住宅用地(252)</td><td>农村宅基地(253)</td><td>空闲宅基地(254)</td><td>空闲地(259)</td><td>小计(26)</td><td>铁路用地(261)</td><td>公路用地(262)</td><td>民用机场(263)</td><td>港口码头用地(264)</td><td>管道运输用地(265)</td><td>街巷(266)</td><td>小计(27)</td><td>水库水面(271)</td><td>水工建筑用地(272)</td><td>小计(28)</td><td>军事设施用地(281)</td><td>使领馆用地(282)</td><td>宗教用地(283)</td><td>监教场所用地(284)</td><td>墓葬地(285)</td><td>小计(31)</td><td>荒草地(311)</td><td>盐碱地(312)</td><td>沼泽地(313)</td><td>沙地(314)</td><td>裸土地(315)</td><td>裸岩石砾地(316)</td><td>其他未利用土地(317)</td><td>小计(32)</td><td>河流水面(321)</td><td>湖泊水面(322)</td><td>苇地(323)</td><td>滩涂(324)</td><td>冰川及永久积雪(325)</td></tr><tr style='font-size: 12px'><td rowspan='6'>1</td><td rowspan='3'>1525011050020002000</td><td rowspan='3'>张台村</td><td>小计</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td>4361.33</td><td></td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td>集体土地</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td>4361.33</td><td></td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td>国有土地</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td rowspan='3' colspan='2'>合计</td><td>小计</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td>4361.33</td><td></td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td>集体土地</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td>4361.33</td><td></td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td>国有土地</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td rowspan='3' colspan='3'>总计</td><td>小计</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td>4361.33</td><td></td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td>集体土地</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td>4361.33</td><td></td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td>国有土地</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><table height='20' cellspacing='0' bordercolordark='#ffffff' cellpadding='0' width='10000' bordercolorlight='#3c3c3c' border='1' frame='border'><caption style='font-size: 18px; font-weight: bold'>3.按照村汇总表(土地利用现状分类)</caption><tbody><tr><td style='font-size: 12px' colspan='83' align='right'>元/平方米</td></tr><tr style='font-size: 12px; font-weight: bold'><td rowspan='2'>地块编号</td><td rowspan='2'>权属单位代码</td><td rowspan='2'>权属单位名称</td><td rowspan='2'>权属性质</td><td rowspan='2'>土地总面积</td><td rowspan='2' align='center'>综合(001)</td><td rowspan='2' align='center'>商业住宅(002)</td><td rowspan='2' align='center'>耕地(01)</td><td colspan='3' align='center'>其中</td><td rowspan='2' align='center'>园地(02)</td><td colspan='3' align='center'>其中</td><td rowspan='2' align='center'>林地(03)</td><td colspan='3' align='center'>其中</td><td rowspan='2' align='center'>草地(04)</td><td colspan='3' align='center'>其中</td><td rowspan='2' align='center'>商服用地(05)</td><td colspan='4' align='center'>其中</td><td rowspan='2' align='center'>工矿仓储用地(06)</td><td colspan='3' align='center'>其中</td><td rowspan='2' align='center'>住宅用地(07)</td><td colspan='2' align='center'>其中</td><td rowspan='2' align='center'>公共管理与公共服务用地(08)</td><td colspan='9' align='center'>其中</td><td rowspan='2' align='center'>特殊用地(09)</td><td colspan='5' align='center'>其中</td><td rowspan='2' align='center'>交通运输用地(10)</td><td colspan='7' align='center'>其中</td><td rowspan='2' align='center'>水域及水利设施用地(11)</td><td colspan='9' align='center'>其中</td><td rowspan='2' align='center'>其他土地(12)</td><td colspan='7' align='center'>其中</td><td rowspan='2' align='center'>城镇村及工矿用地(20)</td><td colspan='5' align='center'>其中</td></tr><tr style='font-size: 12px; font-weight: bold'><td>水田(011)</td><td>水浇地(012)</td><td>旱地(013)</td><td>果园(021)</td><td>茶园(022)</td><td>其他园地(023)</td><td>有林地(031)</td><td>灌木林地(032)</td><td>其他林地(033)</td><td>天然牧草地(041)</td><td>人工牧草地(042)</td><td>其他草地(043)</td><td>批发零售用地(051)</td><td>住宿餐饮用地(052)</td><td>商务金融用地(053)</td><td>其他商服用地(054)</td><td>工业用地(061)</td><td>采矿用地(062)</td><td>仓储用地(063)</td><td>城镇住宅用地(071)</td><td>农村宅基地(072)</td><td>机关团体用地(081)</td><td>新闻出版用地(082)</td><td>科教用地(083)</td><td>医卫慈善用地(084)</td><td>文体娱乐用地(085)</td><td>公共设施用地(086)</td><td>公园与绿地(087)</td><td>风景名胜设施用地(088)</td><td>农业科研用地(089)</td><td>军事设施用地(091)</td><td>使领馆用地(092)</td><td>监教场所用地(093)</td><td>宗教用地(094)</td><td>殡葬用地(095)</td><td>铁路用地(101)</td><td>公路用地(102)</td><td>街巷用地(103)</td><td>农村道路(104)</td><td>机场用地(105)</td><td>港口码头用地(106)</td><td>管道运输用地(107)</td><td>河流水面(111)</td><td>湖泊水面(112)</td><td>水库水面(113)</td><td>坑塘水面(114)</td><td>沿海滩涂(115)</td><td>内陆滩涂(116)</td><td>沟渠(117)</td><td>水工建筑用地(118)</td><td>冰川及永久积雪(119)</td><td>空闲地(121)</td><td>设施农用地(122)</td><td>田坎(123)</td><td>盐碱地(124)</td><td>沼泽地(125)</td><td>沙地(126)</td><td>裸地(127)</td><td>城市(201)</td><td>建制镇(202)</td><td>村庄(203)</td><td>采矿用地(204)</td><td>风景名胜及特殊用地(205)</td></tr><tr style='font-size: 12px'><td rowspan='6'>1</td><td rowspan='3'>1525011050020002000</td><td rowspan='3'>张台村</td><td>小计</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td></td><td>4361.33</td><td></td><td></td></tr><tr style='font-size: 12px'><td>集体土地</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td></td><td>4361.33</td><td></td><td></td></tr><tr style='font-size: 12px'><td>国有土地</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td rowspan='3' colspan='2'>合计</td><td>小计</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td></td><td>4361.33</td><td></td><td></td></tr><tr style='font-size: 12px'><td>集体土地</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td></td><td>4361.33</td><td></td><td></td></tr><tr style='font-size: 12px'><td>国有土地</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td rowspan='3' colspan='3'>总计</td><td>小计</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td></td><td>4361.33</td><td></td><td></td></tr><tr style='font-size: 12px'><td>集体土地</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td></td><td>4361.33</td><td></td><td></td></tr><tr style='font-size: 12px'><td>国有土地</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><table height='20' cellspacing='0' bordercolordark='#ffffff' cellpadding='0' width='6000' bordercolorlight='#3c3c3c' border='1' frame='border'><caption style='font-size: 18px; font-weight: bold'>4.三大类分类对应现状分类汇总表</caption><tbody><tr><td style='font-size: 12px' colspan='67' align='right'>元/平方米</td></tr><tr style='font-size: 12px; font-weight: bold'><td rowspan='3'>地块编号</td><td rowspan='3'>权属单位代码</td><td rowspan='3'>权属单位名称</td><td rowspan='3'>权属性质</td><td rowspan='3'>土地总面积</td><td colspan='3' align='center'>建设用地</td><td colspan='3' align='center'>未利用地</td><td colspan='25' align='center'>农用地</td><td colspan='18' align='center'>建设用地</td><td height='20' colspan='14' align='center'>未利用地</td></tr><tr style='font-size: 12px; font-weight: bold'><td rowspan='2'>合计</td><td colspan='2' align='center'>城镇村及工矿用地</td><td rowspan='2'>合计</td><td colspan='2' align='center'>其他土地</td><td rowspan='2'>合计</td><td colspan='2' align='center'>牧草地</td><td colspan='4' align='center'>耕地</td><td colspan='4' align='center'>园地</td><td colspan='4' align='center'>林地</td><td colspan='2' align='center'>牧草地</td><td colspan='2' align='center'>交通用地</td><td colspan='3' align='center'>水域及水利设施用地</td><td colspan='3' align='center'>其他土地</td><td rowspan='2'>合计</td><td colspan='7' align='center'>交通运输用地</td><td colspan='3' align='center'>水域及水利设施用地</td><td colspan='2' align='center'>其他土地</td><td colspan='5' align='center'>城镇村及工矿用地</td><td rowspan='2'>合计</td><td colspan='2' align='center'>草地</td><td colspan='6' align='center'>水域及水利设施用地</td><td colspan='4' align='center'>其他土地</td></tr><tr style='font-size: 12px; font-weight: bold'><td>小计</td><td>城市(201)</td><td>小计</td><td>裸地(127)</td><td>小计</td><td>天然牧草地(041)</td><td>小计</td><td>水田(011)</td><td>水浇地(012)</td><td>旱地(013)</td><td>小计</td><td>果园(021)</td><td>茶园(022)</td><td>其他园地(023)</td><td>小计</td><td>有林地(031)</td><td>灌木林地(032)</td><td>其他林地(033)</td><td>小计</td><td>人工牧草地(042)</td><td>小计</td><td>农村道路(104)</td><td>小计</td><td>坑塘水面(114)</td><td>沟渠(117)</td><td>小计</td><td>设施农用地(122)</td><td>田坎(123)</td><td>小计</td><td>铁路用地(101)</td><td>公路用地(102)</td><td>街巷用地(103)</td><td>机场用地(105)</td><td>港口码头用地(106)</td><td>管道运输用地(107)</td><td>小计</td><td>水库水面(113)</td><td>水工建筑用地(118)</td><td>小计</td><td>空闲地(121)</td><td>小计</td><td>建制镇(202)</td><td>村庄(203)</td><td>采矿用地(204)</td><td>风景名胜及特殊用地(205)</td><td>小计</td><td>其他草地(043)</td><td>小计</td><td>河流水面(111)</td><td>湖泊水面(112)</td><td>沿海滩涂(115)</td><td>内陆滩涂(116)</td><td>冰川及永久积雪(119)</td><td>小计</td><td>盐碱地(124)</td><td>沼泽地(125)</td><td>沙地(126)</td></tr><tr style='font-size: 12px'><td rowspan='6'>1</td><td rowspan='3'>1525011050020002000</td><td rowspan='3'>张台村</td><td>小计</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td>集体土地</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td>国有土地</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td rowspan='3' colspan='2'>合计</td><td>小计</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td>集体土地</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td>国有土地</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td rowspan='3' colspan='3'>总计</td><td>小计</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td>集体土地</td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td>4361.33</td><td></td><td>4361.33</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr style='font-size: 12px'><td>国有土地</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>";
		}