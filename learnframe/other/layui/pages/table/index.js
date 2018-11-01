layui.use('table', function () {
    var table = layui.table;

    table.render({
        elem: '#demo',
        id:'idTest',
        cols: getTempTableCol(),
        data: getTempTableData(),
        skin: 'line', //表格风格
        even: true,
        page: true, //是否显示分页
        limits: [5, 7, 10],
        limit: 5 //每页默认显示的数量
    });

    //监听表格复选框选择
    table.on('checkbox(demo)', function (obj) {
        console.log(obj)
    });
    //监听工具条
    table.on('tool(demo)', function (obj) {
        var data = obj.data;
        if (obj.event === 'detail') {
            fnTip('ID：' + data.id + ' 的查看操作');
        } else if (obj.event === 'del') {
            layer.confirm('真的删除行么', function (index) {
                obj.del();
                layer.close(index);
            });
        } else if (obj.event === 'edit') {
            fnAlert('编辑行：<br>' + JSON.stringify(data))
        }
    });

    var $ = layui.$,
        active = {
            getCheckData: function () { //获取选中数据
                var checkStatus = table.checkStatus('idTest'),
                    data = checkStatus.data;
                fnAlert(JSON.stringify(data));
            },
            getCheckLength: function () { //获取选中数目
                var checkStatus = table.checkStatus('idTest'),
                    data = checkStatus.data;
                fnTip('选中了：' + data.length + ' 个');
            },
            isAll: function () { //验证是否全选
                var checkStatus = table.checkStatus('idTest');
                fnTip(checkStatus.isAll ? '全选' : '未全选')
            }
        };

    $('.demoTable .layui-btn').on('click', function () {
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });
});

function getTempTableData() {
    const res = [{
        "id": "10001",
        "username": "杜甫",
        "email": "xianxin@layui.com",
        "sex": "男",
        "city": "浙江杭州",
        "sign": "人生恰似一场修行",
        "experience": "116",
        "ip": "192.168.0.8",
        "logins": "108",
        "joinTime": "2016-10-14"
    }, {
        "id": "10002",
        "username": "李白",
        "email": "xianxin@layui.com",
        "sex": "男",
        "city": "浙江杭州",
        "sign": "人生恰似一场修行",
        "experience": "12",
        "ip": "192.168.0.8",
        "logins": "106",
        "joinTime": "2016-10-14",
        "LAY_CHECKED": true
    }, {
        "id": "10003",
        "username": "王勃",
        "email": "xianxin@layui.com",
        "sex": "男",
        "city": "浙江杭州",
        "sign": "人生恰似一场修行",
        "experience": "65",
        "ip": "192.168.0.8",
        "logins": "106",
        "joinTime": "2016-10-14"
    }, {
        "id": "10004",
        "username": "贤心",
        "email": "xianxin@layui.com",
        "sex": "男",
        "city": "浙江杭州",
        "sign": "人生恰似一场修行",
        "experience": "666",
        "ip": "192.168.0.8",
        "logins": "106",
        "joinTime": "2016-10-14"
    }, {
        "id": "10005",
        "username": "贤心",
        "email": "xianxin@layui.com",
        "sex": "男",
        "city": "浙江杭州",
        "sign": "人生恰似一场修行",
        "experience": "86",
        "ip": "192.168.0.8",
        "logins": "106",
        "joinTime": "2016-10-14"
    }, {
        "id": "10006",
        "username": "贤心",
        "email": "xianxin@layui.com",
        "sex": "男",
        "city": "浙江杭州",
        "sign": "人生恰似一场修行",
        "experience": "12",
        "ip": "192.168.0.8",
        "logins": "106",
        "joinTime": "2016-10-14"
    }, {
        "id": "10007",
        "username": "贤心",
        "email": "xianxin@layui.com",
        "sex": "男",
        "city": "浙江杭州",
        "sign": "人生恰似一场修行",
        "experience": "16",
        "ip": "192.168.0.8",
        "logins": "106",
        "joinTime": "2016-10-14"
    }, {
        "id": "10008",
        "username": "贤心",
        "email": "xianxin@layui.com",
        "sex": "男",
        "city": "浙江杭州",
        "sign": "人生恰似一场修行",
        "experience": "106",
        "ip": "192.168.0.8",
        "logins": "106",
        "joinTime": "2016-10-14"
    }];
    return res;
}

function getTempTableCol() {
    const res = [
        [ //标题栏
            {
                type: 'checkbox',
                fixed: 'left'
            },
            {
                field: 'id',
                title: 'ID',
                width: 80,
                sort: true
            }, {
                field: 'username',
                title: '用户名',
                width: 120
            }, {
                field: 'email',
                title: '邮箱',
                minWidth: 150
            }, {
                field: 'sign',
                title: '签名',
                minWidth: 160
            }, {
                field: 'sex',
                title: '性别',
                width: 80
            }, {
                field: 'city',
                title: '城市',
                width: 100
            }, {
                field: 'experience',
                title: '积分',
                width: 80,
                sort: true
            }, {
                fixed: 'right',
                width: 178,
                align: 'center',
                toolbar: '#barDemo'
            }
        ]
    ];
    return res;
}