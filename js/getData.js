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