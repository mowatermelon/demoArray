/***************************************************************************************
*                              附件公共脚本函数（需ZTree）                             *
****************************************************************************************/
var m_AM_DivTreeBox;    //加载树容器
var m_AM_DivAttachBox;  //显示附件列表父容器
var m_AM_DivsRMenuPBox; //右键菜单显示父容器
var m_AM_ParentNode;    //父节点标识
var m_AM_ParentType;    //父节点类型
var m_AM_RMenu;         //右键菜单功能（1新增节点;2删除节点;3编辑节点;4新增附件;5删除附件;6另存附件;7批量导入附件(批量导入指定文件夹内所有附件,包含子文件夹及其附件);8批量另存附件）----用英文半角分号分隔，如：1;2;3;4;5;6;7;8
var m_AM_MaxFileSize;   //最大附件大小值
var m_AM_bAddJD;        //添加节点 
var m_AM_Path;          //根目录路径
var m_AM_iviewer;       //iviewer插件

var AM_LoadAttachInfo = function (AttachOptions) {
    if (AttachOptions != "") {
        var sAMOptions = eval(AttachOptions);
        if (sAMOptions != null) {
            m_AM_DivAttachBox = "";
            m_AM_ParentNode = "";
            m_AM_ParentType = "";
            m_AM_RMenu = "";
            m_AM_MaxFileSize = "";
            m_AM_bAddJD = false;
            m_AM_iviewer = null;
            m_AM_Path = "";
            
            if (sAMOptions.DivTreeBox != null) {
                if (sAMOptions.DivTreeBox != "") {
                    m_AM_DivTreeBox = sAMOptions.DivTreeBox;
                }
            }
            if (sAMOptions.DivAttachBox != null) {
                if (sAMOptions.DivAttachBox != "") {
                    m_AM_DivAttachBox = sAMOptions.DivAttachBox;
                }
            }
            if (sAMOptions.DivsRMenuPBox != null) {
                if (sAMOptions.DivsRMenuPBox != "") {
                    m_AM_DivsRMenuPBox = sAMOptions.DivsRMenuPBox;
                }
            }
            if (sAMOptions.ParentNode != null) {
                if (sAMOptions.ParentNode != "") {
                    m_AM_ParentNode = sAMOptions.ParentNode;
                }
            }
            if (sAMOptions.ParentType != null) {
                if (sAMOptions.ParentType != "") {
                    m_AM_ParentType = sAMOptions.ParentType;
                }
            }
            if (sAMOptions.RMenu != null) {
                if (sAMOptions.RMenu != "") {
                    m_AM_RMenu = sAMOptions.RMenu;
                }
            }
            if (sAMOptions.MaxFileSize != null) {
                if (sAMOptions.MaxFileSize != "") {
                    m_AM_MaxFileSize = sAMOptions.MaxFileSize;
                }
            }
            if (sAMOptions.RootPath != null) {
                if (sAMOptions.RootPath != "") {
                    m_AM_Path = sAMOptions.RootPath;
                }
            }

            var Attach_HTML = '<div id="AM_RightAttachInfo" style="top:0px;_margin-top:0px; width:100%; height:100%;expression(eval(document.documentElement.scrollTop));' +
                              ' <table style=" width:100%;">' +                             
                              '        <tr><td id="AM_txAttachName"><div id="AM_divAttachName" style=" height:24px; line-height:24px; width:100%; text-align:center; margin:auto;background-color:#FFFFFF;"></div>' +                              
                              '        </td></tr><tr><td valign="top"><div id="AM_divAttachInfo" style="width:100%; text-align:center; vertical-align:middle;overflow: hidden;"><div id="AM_divImgFJ" style="width: 100%;height:100%;position: relative;"></div></div></td></tr>' +
                              '       <tr><td><div id="AM_divAttachButtonBox" style="width:100%; text-align:center; height:30px;">' +
                              '                 <ul id="AM_List" style="margin-top:3px;"><li title="左旋转" style="cursor:pointer;width:70px;display:inline; margin-left:30px;list-style:none;" id="AM_LiZXZ"  onmouseover="AM_R_MenuonMouseOver(this);" onmouseout="AM_R_MenuonMouseOut(this);" ><img src = "../../Image/Common/左旋转.png"/><div style="float:right;"></div></li>' +
                              '                 <li title="右旋转" style="cursor:pointer;width:70px;display:inline; margin-left:30px;list-style:none;" id="AM_LiYXZ"  onmouseover="AM_R_MenuonMouseOver(this);" onmouseout="AM_R_MenuonMouseOut(this);" ><img src = "../../Image/Common/右旋转.png"/><div style="float:right;"></div></li>' +
                              '                 <li title="放大" style="cursor:pointer;width:50px;display:inline; margin-left:30px;list-style:none;" id="AM_LiFD"  onmouseover="AM_R_MenuonMouseOver(this);" onmouseout="AM_R_MenuonMouseOut(this);" ><img src = "../../Image/Common/放大.png"/><div style="float:right;"></div></li>' +
                              '                 <li title="缩小" style="cursor:pointer;width:50px;display:inline; margin-left:30px;list-style:none;" id="AM_LiSX"  onmouseover="AM_R_MenuonMouseOver(this);" onmouseout="AM_R_MenuonMouseOut(this);" ><img src = "../../Image/Common/缩小.png"/><div style="float:right;"></div></li>' +
                              '                 <li title="适宽" style="cursor:pointer;width:50px;display:inline; margin-left:30px;list-style:none;" id="AM_LiSK"  onmouseover="AM_R_MenuonMouseOver(this);" onmouseout="AM_R_MenuonMouseOut(this);" ><img src = "../../Image/Common/适宽.png"/><div style="float:right;"></div></li></ul>' +
                              '        </div></td></tr>' +
                              ' </table></div>';
            $("#" + m_AM_DivAttachBox).html(Attach_HTML);
            //创建右键菜单容器
            $("#" + m_AM_DivsRMenuPBox).append('<div id="AM_Row_rMenu"></div>');
            var sRMenus = m_AM_RMenu.split(';');
            var sRMenusNames = null;
            var divRmenuHTML = "<ul>";
            for (var r = 0; r < sRMenus.length; r++) {
                if (sRMenus[r] == "1") {
                    m_AM_bAddJD = true;
                    var strRMenusName1 = "添加节点";
                    divRmenuHTML += "<li title='" + strRMenusName1 + "' id='li_AM_add' onclick='fn_AM_add(\"新增节点\");' onmouseover='AM_R_MenuonMouseOver(this);' onmouseout='AM_R_MenuonMouseOut(this);'><img alt='" + strRMenusName1 + "' src='../../Image/Common/xzjd.png'/><span>&nbsp;" + strRMenusName1 + "</span></li>";
                }
                else if (sRMenus[r] == "2") {
                    var strRMenusName2 = "删除节点";
                    divRmenuHTML += "<li title='" + strRMenusName2 + "' id='li_AM_del' onclick='fn_AM_delAttach();' onmouseover='AM_R_MenuonMouseOver(this);' onmouseout='AM_R_MenuonMouseOut(this);'><img alt='" + strRMenusName2 + "' src='../../Image/Common/cancel.png'/><span>&nbsp;" + strRMenusName2 + "</span></li>";
                }
                else if (sRMenus[r] == "3") {
                    var strRMenusName3 = "编辑节点";
                    divRmenuHTML += "<li title='" + strRMenusName3 + "' id='li_AM_renName' onclick='fn_AM_add(\"编辑节点\");' onmouseover='AM_R_MenuonMouseOver(this);' onmouseout='AM_R_MenuonMouseOut(this);'><img alt='" + strRMenusName3 + "' src='../../Image/Common/cxmm.png'/><span>&nbsp;" + strRMenusName3 + "</span></li>";
                }
                else if (sRMenus[r] == "4") {
                    var strRMenusName4 = "添加附件";
                    divRmenuHTML += "<li title='" + strRMenusName4 + "' id='li_AM_addAttach' onclick='fn_AM_addAttach();' onmouseover='AM_R_MenuonMouseOver(this);' onmouseout='AM_R_MenuonMouseOut(this);'><img alt='" + strRMenusName4 + "' src='../../Image/Common/xzfj.png'/><span>&nbsp;" + strRMenusName4 + "</span></li>";
                }
                else if (sRMenus[r] == "5") {
                    var strRMenusName5 = "删除附件";                    
                    divRmenuHTML += "<li title='" + strRMenusName5 + "' id='li_AM_delAttach' onclick='fn_AM_delAttach();' onmouseover='AM_R_MenuonMouseOver(this);' onmouseout='AM_R_MenuonMouseOut(this);'><img alt='" + strRMenusName5 + "' src='../../Image/Common/scfj.png'/><span>&nbsp;" + strRMenusName5 + "</span></li>";
                }
                else if (sRMenus[r] == "6") {
                    var strRMenusName6 = "另存附件";                    
                    divRmenuHTML += "<li title='" + strRMenusName6 + "' id='li_AM_Save' onclick='fn_AM_DownLoadAttach();' onmouseover='AM_R_MenuonMouseOver(this);' onmouseout='AM_R_MenuonMouseOut(this);'><img alt='" + strRMenusName6 + "' src='../../Image/Common/diagnostics.gif'/><span>&nbsp;" + strRMenusName6 + "</span></li>";
                }
                else if (sRMenus[r] == "7") {
                    //var strRMenusName7 = "批量导入附件";
                    //divRmenuHTML += "<li title='" + strRMenusName7 + "' id='li_AM_InPutBXFile' onclick='fn_AM_InPutFiles();' onmouseover='AM_R_MenuonMouseOver(this);' onmouseout='AM_R_MenuonMouseOut(this);'><img alt='" + strRMenusName7 + "' src='../../Image/Common/drwjj.png'/><span>&nbsp;" + strRMenusName7 + "</span></li>";
                } 
                else if (sRMenus[r] == "8") {
                    var strRMenusName8 = "批量另存附件";
                    divRmenuHTML += "<li title='" + strRMenusName8 + "' id='li_AM_SaveFiles' onclick='fn_AM_DownLoadAttach();' onmouseover='AM_R_MenuonMouseOver(this);' onmouseout='AM_R_MenuonMouseOut(this);'><img alt='" + strRMenusName8 + "' src='../../Image/Common/diagnostics.gif'/><span>&nbsp;" + strRMenusName8 + "</span></li>";
                }
            }
            divRmenuHTML += "</ul>";
            $("#AM_Row_rMenu").html(divRmenuHTML);
            //加载数据
            AM_LoadTreeData();

            //左旋转
            $("#AM_LiZXZ").click(function () {
                if (m_AM_iviewer != null) {
                    m_AM_iviewer.iviewer("angle", -90);
                }
            });

            //右旋转
            $("#AM_LiYXZ").click(function () {
                if (m_AM_iviewer != null) {
                    m_AM_iviewer.iviewer("angle", 90);
                }
            });

            //放大
            $("#AM_LiFD").click(function () {
                if (m_AM_iviewer != null) {
                    m_AM_iviewer.iviewer("zoom_by", 1);
                }
            });

            //缩小
            $("#AM_LiSX").click(function () {
                if (m_AM_iviewer != null) {
                    m_AM_iviewer.iviewer("zoom_by", -1);
                }
            });

            //适宽
            $("#AM_LiSK").click(function () {
                if (m_AM_iviewer != null) {
                    m_AM_iviewer.iviewer("set_zoom", 100);
                }
            });
        }
    }
}

//批量导入附件
function fn_AM_InPutFiles() {
    AM_R_hideRMenu();
    try {
        var Message = "请选择文件路径";                     //选择框提示信息        
        var Shell = new ActiveXObject("Shell.Application");
        var Folder = Shell.BrowseForFolder(0, Message, 0);  //起始目录为：桌面
        if (Folder != null) {
            var sFilePath = "";
            var name = "";
            var IsLoadFirst = true;
            var InNumML = 0;
            var InNumWJ = 0;
            var FolderItems = Folder.items();               // 返回 FolderItems 对象
            for (var i = 0; i < FolderItems.count; i++) {
                if (FolderItems.item(i).IsFolder) {         //IsFolder ：如果是文件夹就为True，否则为False
                    InNumML++;
                    IsLoadFirst = false;
                    name = FolderItems.Item(i).name;
                    $.ajax({
                        type: 'post',
                        async: false,
                        url: m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?T=" + Math.random(), // GREI.ApplicationPath +
                        dataType: 'text',
                        data: { action: "EditAttach", ParentNode: m_AM_ParentNode, ParentType: m_AM_ParentType, PId: m_AM_Pid, CId: m_AM_Cid, IsMast: m_AM_IsMast, Ckind: "文件夹", CName: name, Type: "新增" },
                        success: function (oRet) {
                            if (oRet != "") {
                                InPutChildFiles(m_AM_ParentNode, m_AM_ParentType, oRet, FolderItems.Item(i).Path, m_AM_IsMast);
                            }
                        },
                        error: function () {
                            showmodal({
                                flag: "info",
                                title: "提示信息",
                                content: "附件保存失败，请查看是否被其他软件占用！",
                                Tclose: true,
                                Bclose: true
                            });
                        }
                    });
                }
                else {
                    sType = "文件";
                    InNumWJ++;
                    IsLoadFirst = false;
                    FilePath = FolderItems.Item(i).Path;
                    
                    $("#FileBtn").val(FilePath);
                    if (!bSave) {
                        showmodal({
                            flag: "info",
                            title: "提示信息",
                            content: "附件保存失败，请查看是否被其他软件占用！",
                            Tclose: true,
                            Bclose: true
                        });
                    }
                    $("#FileBtn").val("");
                }
            }
        }
    }
    catch (e) { }
}

//添加附件
function fn_Am_fileChange() {
    var sPaht = $("#FileBtn").val();
    if (sPaht != "") {
        var sArrFile = sPaht.split(",");
        var iZS = sArrFile.length;
        if (iZS > 0) {
            for (var i = 0; i < iZS; i++) {
                var sLJ = sArrFile[i];
                if (!/\.(gif|jpg|jpeg|png|tif|GIF|JPG|JPEG|PNG|TIF)$/.test(sLJ)) {
                    showmodal({
                        flag: "info",
                        title: "提示信息",
                        content: "附件仅支持上传图片格式文件，您选择的文件中存在非法文件，请重新选择！",
                        Tclose: true,
                        Bclose: true
                    });
                    return;
                }
            }
            $.ajaxFileUpload({
                url: m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?T=" + Math.random(),
                type: "post",
                data: { action: "SaveAttach", ParentNode: m_AM_ParentNode, ParentType: m_AM_ParentType, Pid: m_AM_Cid, IsMast: m_AM_IsMast },
                secureuri: false,           //一般设置为false
                fileElementId: "FileBtn",   //文件上传控件的id属性
                dataType: 'text',
                success: function (data, status) {
                    if (data != '') {
                        AM_LoadTreeData();
                        var btnfile = $("#FileBtn")
                        btnfile.after(btnfile.clone().val(""));
                        btnfile.remove();
                        showmodal({
                            flag: "info",
                            title: "提示信息",
                            content: "附件上传成功！",
                            Tclose: true,
                            Bclose: true
                        });
                    }
                    else {
                        showmodal({
                            flag: "info",
                            title: "提示信息",
                            content: "附件上失败！",
                            Tclose: true,
                            Bclose: true
                        });
                    }
                }
            });
        }
    }
}

//添加附件
function fn_AM_addAttach() {
    AM_R_hideRMenu();
    var objFile = $("#FileBtn").click();
    if (objFile == null) {
        return;
    }    
}

//查看附件
function fn_AM_ShowAttach(sId, sName) {
    if (m_AM_Ckind == "文件") {
        var sUrl = m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?action=ShowAttach&CId=" + sId + "&T=" + Math.random();
        if (m_AM_iviewer == null) {
            m_AM_iviewer = $("#AM_divImgFJ").iviewer({
                src: sUrl
            });
        }
        else {
            m_AM_iviewer.iviewer("loadImage", sUrl);
        }
        m_AM_ShowId = sId;
        var AttachList_zTreeNode = $.fn.zTree.getZTreeObj(m_AM_DivTreeBox);
        var node = AttachList_zTreeNode.getNodeByParam("id", sId);
        AttachList_zTreeNode.selectNode(node, false);
        fn_AM_GetLastAndNextFile();
        if (m_AM_NextOneID != "" && m_AM_Last0neID != "") {
            //存在上下附件
            $("#AM_divAttachName").html('<table style="table-layout:fixed;"><tr><td><img title="上一个" onclick="fn_AM_Last0ne();" style="position:absolute; z-index:3; cursor:pointer;margin-top:-10px; margin-left:45px;" src = "../../Image/Common/左.png"/></td><td id="Attach_td_msg" valign="top" style="width:100%; border:1px solid white;text-align:center; white-space:nowrap; text-overflow:ellipsis; overflow:hidden;">' + sName + '</td><td ><img title="下一个" onclick="fn_AM_NextOne();" style="position:absolute; z-index:3; cursor:pointer; margin-top:-10px;right:45px;" src = "../../Image/Common/右.png"/></td></tr></table>');
        }
        else if (m_AM_NextOneID != "") {
            //只存在下一个附件
            $("#AM_divAttachName").html('<table style="margin-left:auto; margin-right:auto;"><tr><td></td><td id="Attach_td_msg" valign="top">' + sName + '</td><td>&nbsp;&nbsp;&nbsp;&nbsp;<img title="下一个" onclick="fn_AM_NextOne();" style="cursor:pointer;" src = "../../Image/Common/右.png"/></td></tr></table>');
        }
        else if (m_AM_Last0neID != "") {
            //只存在上一个附件
            $("#AM_divAttachName").html('<table style="margin-left:auto; margin-right:auto;"><tr><td><img title="上一个" onclick="fn_AM_Last0ne();" style="cursor:pointer;" src = "../../Image/Common/左.png"/>&nbsp;&nbsp;&nbsp;&nbsp;</td><td id="Attach_td_msg" valign="top">' + sName + '</td><td></td></tr></table>');
        }
        else {
            //只有这一个附件
            $("#AM_divAttachName").html(sName);
        }
    }
}

var m_AM_Last0neID;
var m_AM_Last0neName;
//查看上一个附件
function fn_AM_Last0ne() {
    fn_AM_ShowAttach(m_AM_Last0neID, m_AM_Last0neName);
    var AttachList_zTreeNode = $.fn.zTree.getZTreeObj(m_AM_DivTreeBox);
    var node = AttachList_zTreeNode.getNodeByParam("id", m_AM_ShowId);
    AttachList_zTreeNode.selectNode(node, false);
}

var m_AM_NextOneID;
var m_AM_NextOneName;
//查看下一个附件
function fn_AM_NextOne() {
    fn_AM_ShowAttach(m_AM_NextOneID, m_AM_NextOneName);
    var AttachList_zTreeNode = $.fn.zTree.getZTreeObj(m_AM_DivTreeBox);
    var node = AttachList_zTreeNode.getNodeByParam("id", m_AM_ShowId);
    AttachList_zTreeNode.selectNode(node, false);
}

//获取上一个或下一个附件信息
function fn_AM_GetLastAndNextFile() {
    m_AM_NextOneID = "";
    m_AM_NextOneName = "";
    m_AM_Last0neID = ""
    m_AM_Last0neName = "";
    var bLast0ne = true;
    var bNextOne = true;
    var AttachList_zTreeNode = $.fn.zTree.getZTreeObj(m_AM_DivTreeBox);
    var sNodes = AttachList_zTreeNode.getSelectedNodes();
    if (sNodes.length > 0) {
        var nodeNext = sNodes[0].getNextNode();
        if (nodeNext != null) {
            if (nodeNext.ckind == "文件") {
                m_AM_NextOneID = nodeNext.id;
                m_AM_NextOneName = nodeNext.cname;
                bNextOne = false;
            }
        }
        var nodeLast = sNodes[0].getPreNode();
        if (nodeLast != null) {
            if (nodeLast.ckind == "文件") {
                m_AM_Last0neID = nodeLast.id;
                m_AM_Last0neName = nodeLast.cname;
                bLast0ne = false;
            }
        }
    }

    //获取非同节点下的附件
    if (bLast0ne || bNextOne) {
        var nodes = AttachList_zTreeNode.transformToArray(AttachList_zTreeNode.getNodes());
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].id == m_AM_ShowId) {
                //找上一个附件
                if (bLast0ne) {
                    for (var j = i - 1; j < i; j--) {
                        if (j < 0) {
                            break;
                        }
                        var node = AttachList_zTreeNode.getNodeByParam("id", nodes[j].id);
                        if (node != null) {
                            if (node.ckind == "文件") {
                                m_AM_Last0neID = node.id;
                                m_AM_Last0neName = node.cname;
                                bLast0ne = false;
                                break;
                            }
                        }
                    }
                }
                //找下一个附件
                if (bNextOne) {
                    for (var k = i + 1; k < nodes.length; k++) {
                        var node = AttachList_zTreeNode.getNodeByParam("id", nodes[k].id);
                        if (node != null) {
                            if (node.ckind == "文件") {
                                m_AM_NextOneID = node.id;
                                m_AM_NextOneName = node.cname;
                                bNextOne = false;
                                break;
                            }
                        }
                    }
                }
                break;
            }
        }
    }

    //获取第一个和最后一个附件信息
    if (bLast0ne || bNextOne) {
        var sFirstId = "";
        var sFirstName = "";
        var sLostId = "";
        var sLostName = "";
        var nodes = AttachList_zTreeNode.transformToArray(AttachList_zTreeNode.getNodes());
        for (var i = 0; i < nodes.length; i++) {
            //获取第一个附件信息
            if (bNextOne) {
                if (nodes[i].ckind == "文件") {
                    sFirstId = nodes[i].id;
                    sFirstName = nodes[i].cname;
                    bNextOne = false;
                }
            }
            if (bLast0ne) {
                if (nodes[i].ckind == "文件") {
                    sLostId = nodes[i].id;
                    sLostName = nodes[i].cname;
                }
            }
            if (!bNextOne && !bLast0ne) {
                break;
            }
        }
        if (m_AM_NextOneID == "") {
            m_AM_NextOneID = sFirstId;
            m_AM_NextOneName = sFirstName;
        }
        if (m_AM_Last0neID == "") {
            m_AM_Last0neID = sLostId
            m_AM_Last0neName = sLostName;
        }
    }

}

var m_AM_CheckedCids = "";
var m_AM_EditAttach_zTree;
var m_AM_EditAttach_setting = "";
m_AM_EditAttach_setting = {
    check: {
        enable: true,
        chkboxType: { "Y": "s", "N": "ps" }
    },
    view: {
        selectedMulti: false
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        beforeClick: this.fn_AM_EditAttach_beforeClick,
        onCheck: this.fn_AM_EditAttach_onCheck,
        onRightClick: this.fn_AM_EditAttach_RightClick
    }
};
var m_AM_DownLoadAttach_setting = "";
m_AM_DownLoadAttach_setting = {
    check: {
        enable: true,
        chkboxType: { "Y": "ps", "N": "ps" }
    },
    view: {
        selectedMulti: false
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        beforeClick: this.fn_AM_EditAttach_beforeClick,
        onCheck: this.fn_AM_DownLoadAttach_onCheck,
        onRightClick: this.fn_AM_EditAttach_RightClick
    }
};
//点击菜单前触发事件
function fn_AM_EditAttach_beforeClick(treeId, treeNode) {
    var treeObj = $.fn.zTree.getZTreeObj("AM_EditAttach_divRes");
    treeObj.checkNode(treeNode, !treeNode.checked, true, true);
}
//选中菜单事件
function fn_AM_EditAttach_onCheck(e, treeId, treeNode) {
    if (!treeNode.checked) {
        var pnode = treeNode.getParentNode();
        fn_AM_EditAttach_QXParChecked(pnode);
    }
    var treeObj = $.fn.zTree.getZTreeObj("AM_EditAttach_divRes");
    var nodes = treeObj.getCheckedNodes(true);
    var CheckIds = "";
    var bDnoe = true;
    if (nodes.length > 0) {
        for (var i = 0, l = nodes.length; i < l; i++) {
            if (bDnoe) {
                CheckIds = "'" + nodes[i].id + "'";
                bDnoe = false;
            }
            else {
                CheckIds += ",'" + nodes[i].id + "'";
            }
        }
    }
    m_AM_CheckedCids = CheckIds;
}

//选中菜单事件
function fn_AM_DownLoadAttach_onCheck(e, treeId, treeNode) {
    var treeObj = $.fn.zTree.getZTreeObj("AM_EditAttach_divRes");
    var nodes = treeObj.getCheckedNodes(true);
    var CheckIds = "";
    var bDnoe = true;
    if (nodes.length > 0) {
        for (var i = 0, l = nodes.length; i < l; i++) {
            if (bDnoe) {
                CheckIds = "'" + nodes[i].id + "'";
                bDnoe = false;
            }
            else {
                CheckIds += ",'" + nodes[i].id + "'";
            }
        }
    }
    m_AM_CheckedCids = CheckIds;
}

//取消勾选时同时取消父节点勾选状态
function fn_AM_EditAttach_QXParChecked(node) {
    if (node != null) {
        while (node.checked) {
            node.checked = false;
            var pnode = node.getParentNode();
            fn_AM_EditAttach_QXParChecked(pnode);
        }
    }
}
//树右键事件
function fn_AM_EditAttach_RightClick(e, treeId, node) {

}
//删除附件
function fn_AM_delAttach() {
    AM_R_hideRMenu();
    fn_AM_EditAttach("删除附件");    
}

//另存附件
function fn_AM_DownLoadAttach() {
    AM_R_hideRMenu();
    fn_AM_EditAttach("另存附件");
}

//删除、另存等附件操作
function fn_AM_EditAttach(sType)
{
    if (m_AM_Ckind == "文件夹") {
        var sDelHtml = '<div class="container">' +
                    '   <div class="input-group">' +
                    '       <div class="ztree" id="AM_EditAttach_divRes"></div>' +
                    '   </div>' +
                    '</div>';
        showmodal({
            flag: "info",
            content: sDelHtml,  //内容
            title: sType,       //设置模态窗标题
            Bclose: true,       //设置右下角关闭按钮是否显示，默认为显示
            Qclose: true,       //设置右下角确定按钮是否显示，默认为显示
            Sheight: 320,       //设置模态窗高度，默认为auto
            SWidth: 600,        //设置模态窗宽度，默认为auto
            callbackB: true,    //确认确认按钮有没有回调函数，默认为false   
            callbackBF: function () {
                var _this = this;
                if (m_AM_CheckedCids == "") {
                    showmodal({
                        flag: "info",
                        title: "提示信息",
                        content: "请选择附件后再执行操作！",
                        modalIndex: "02",
                        Tclose: true,
                        Bclose: true
                    });
                    return false;
                }
                if (sType == "删除附件") {
                    var _thisF = this;
                    showmodal({
                        flag: "info",
                        title: "提示信息",
                        content: "您确定要删除选中的附件吗？",
                        modalIndex: "02",
                        Tclose: true,
                        Qclose: true,
                        callbackB: true,
                        callbackBF: function () {
                            var _this = this;
                            bJXSC = true;
                            _this.closeModal();
                            $.ajax({
                                type: 'post',
                                url: m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?T=" + Math.random(), //GREI.ApplicationPath +
                                dataType: 'text',
                                data: { action: "DelAttach", ParentNode: m_AM_ParentNode, ParentType: m_AM_ParentType, CheckIds: m_AM_CheckedCids },
                                success: function (oRet) {
                                    if (oRet != "") {
                                        m_AM_CheckedCids = "";
                                        AM_LoadTreeData();
                                        $("#AM_divAttachName").html("");
                                        if (m_AM_iviewer != null) {
                                            m_AM_iviewer.iviewer("destroy");
                                            m_AM_iviewer = null;
                                        }
                                        _thisF.closeModal();
                                    }
                                    else {
                                        showmodal({
                                            flag: "info",
                                            title: "提示信息",
                                            content: sType + "失败！",
                                            modalIndex: "02",
                                            Tclose: true,
                                            Bclose: true
                                        });
                                        return false;
                                    }
                                },
                                error: function () {
                                    showmodal({
                                        flag: "info",
                                        title: "提示信息",
                                        content: sType + "失败！",
                                        modalIndex: "02",
                                        Tclose: true,
                                        Bclose: true
                                    });
                                    return false;
                                }
                            });
                        }
                    });
                }
                else if (sType == "另存附件") {
                    var treeObj = $.fn.zTree.getZTreeObj("AM_EditAttach_divRes");
                    var nodes = treeObj.getCheckedNodes(true);
                    if (nodes.length > 0) {
                        try {
                            var sPath = "";
                            //合成目录
                            for (var i = 0, l = nodes.length; i < l; i++) {
                                var sId = nodes[i].id;
                                var sFilePath = fn_AM_GetsPath(sId);
                                var sName = nodes[i].name
                                var sCkind = nodes[i].ckind;
                                if (sCkind == "文件夹") {
                                    sFilePath += "/" + sName;
                                }
                                $.ajax({
                                    async: false,
                                    url: m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?T=" + Math.random(),
                                    dataType: 'text',
                                    data: { action: "DownLoadAttach", CId: sId, Path: sPath, FilePath: sFilePath, type: "UpLoad", Ckind: sCkind },
                                    success: function (msg) {
                                        if (msg != "") {
                                            sPath = msg;
                                        }
                                        else {
                                            showmodal({
                                                flag: "info",
                                                title: "提示信息",
                                                content: "附件下载失败！",
                                                modalIndex: "02",
                                                Tclose: true,
                                                Bclose: true
                                            });
                                            return;
                                        }
                                    },
                                    error: function () { }
                                });
                            }
                            //执行下载
                            if (sPath != "") {
                                try {
                                    form.dataSubmit({
                                        url: m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?T=" + Math.random(),
                                        type: 'post',
                                        data: { action: "DownLoadAttachZIP", Path: sPath }
                                    });
                                } catch (e) { }
                            }
                            _this.closeModal();
                        } catch (e) { }
                    }
                }
            },
            callbackShown: function () {
                var sPId = m_AM_Cid;
                if (m_AM_Pid == null) {
                    sPId = "";
                }
                $.ajax({
                    type: 'post',
                    url: m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?T=" + Math.random(), // GREI.ApplicationPath + 
                    dataType: 'text',
                    data: { action: "LoadTreeData", ParentNode: m_AM_ParentNode, ParentType: m_AM_ParentType, PId: sPId },
                    success: function (oRet) {
                        if (oRet != "") {
                            var dataObj = eval("(" + oRet + ")"); //转换为json对象
                            $.parser.parse($('#AM_EditAttach_divRes').parent());
                            if (sType == "删除附件") {
                                $.fn.zTree.init($('#AM_EditAttach_divRes'), m_AM_EditAttach_setting, dataObj);
                            }
                            else if (sType == "另存附件") {
                                $.fn.zTree.init($('#AM_EditAttach_divRes'), m_AM_DownLoadAttach_setting, dataObj);
                            }
                            m_AM_EditAttach_zTree = $.fn.zTree.getZTreeObj("AM_EditAttach_divRes");
                        }
                        else {
                            showmodal({
                                flag: "info",
                                title: "提示信息",
                                content: "数据加载失败！",
                                modalIndex: "02",
                                Tclose: true,
                                Bclose: true
                            });
                        }
                    },
                    error: function () {
                        showmodal({
                            flag: "info",
                            title: "提示信息",
                            content: "数据加载失败！",
                            modalIndex: "02",
                            Tclose: true,
                            Bclose: true
                        });
                    }
                });
            }
        });
    }
    else { //单个文件执行操作
        if (m_AM_Cid == "") {
            showmodal({
                flag: "info",
                title: "提示信息",
                content: "请选择附件后再执行操作！",
                modalIndex: "02",
                Tclose: true,
                Bclose: true
            });
            return false;
        }
        m_AM_CheckedCids = "'" + m_AM_Cid + "'";
        if (sType == "删除附件") {
            showmodal({
                flag: "info",
                title: "提示信息",
                content: "您确定要删除选中的附件吗？",
                modalIndex: "02",
                Tclose: true,
                Qclose: true,
                callbackB: true,
                callbackBF: function () {
                    var _this = this;
                    $.ajax({
                        type: 'post',
                        url: m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?T=" + Math.random(), //GREI.ApplicationPath + 
                        dataType: 'text',
                        data: { action: "DelAttach", ParentNode: m_AM_ParentNode, ParentType: m_AM_ParentType, CheckIds: m_AM_CheckedCids },
                        success: function (oRet) {
                            if (oRet != "") {
                                m_AM_CheckedCids = "";
                                AM_LoadTreeData();
                                $("#AM_divAttachName").html("");
                                if (m_AM_iviewer != null) {
                                    m_AM_iviewer.iviewer("destroy");
                                    m_AM_iviewer = null;
                                }
                            }
                            else {
                                showmodal({
                                    flag: "info",
                                    title: "提示信息",
                                    content: sType + "失败！",
                                    modalIndex: "02",
                                    Tclose: true,
                                    Bclose: true
                                });
                                return false;
                            }
                        },
                        error: function () {
                            showmodal({
                                flag: "info",
                                title: "提示信息",
                                content: sType + "失败！",
                                modalIndex: "02",
                                Tclose: true,
                                Bclose: true
                            });
                            return false;
                        }
                    });
                    _this.closeModal();
                }
            });
        }
        else if (sType == "另存附件") {
            try {
                form.dataSubmit({
                    url: m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?T=" + Math.random(),
                    type: 'post',
                    data: { action: "DownLoadAttach", CId: m_AM_Cid, type: "Down", Ckind: "文件" }
                });
            } catch (e) { }
        }
    }
}

//获取指定节点所在目录
function fn_AM_GetsPath(sId) {
    var treeObj = $.fn.zTree.getZTreeObj("AM_EditAttach_divRes");
    var node = treeObj.getNodesByParam("id", sId, null);
    var Pnode = node[0].getParentNode();
    var sPath = "";
    m_AM_sPath = "";
    if (Pnode != null) {
        fn_AM_GetPsPath(Pnode.id);
    }
    if (m_AM_sPath != "") {
        sPath = m_AM_sPath + sPath;
    }
    return sPath;
}

var m_AM_sPath = "";
function fn_AM_GetPsPath(sId) {
    var treeObj = $.fn.zTree.getZTreeObj("AM_EditAttach_divRes");
    var node = treeObj.getNodesByParam("id", sId, null);
    var sPath = "/" + node[0].name;
    var Pnode = node[0].getParentNode();
    if (Pnode != null) {
        fn_AM_GetPsPath(Pnode.id);
    }
    m_AM_sPath += sPath;
}

//添加编辑节点
function fn_AM_add(sType){
    AM_R_hideRMenu();
    var sCName = "";
    if (sType.indexOf("编辑") != -1) {
        sCName = m_AM_Cname;
    }
    var sEditHtml = '<div class="panel-body"><div class = "input">' +
                    '    <div class="input-group col-xs-2 col-sm-12">' +
                    '        <span class="input-group-addon bg-iinfo">节点名称</span>' +
                    '        <input type="text" class="form-control" placeholder="请输入节点名称" id="AM_txtName" value="' + sCName + '" />' +
                    '    </div>' +
                    '</div></div>';
    showmodal({
        flag: "info",
        content: sEditHtml, //内容
        title: sType,       //设置模态窗标题
        Bclose: true,       //设置右下角关闭按钮是否显示，默认为显示
        Qclose: true,       //设置右下角确定按钮是否显示，默认为显示
        Sheight: 100,       //设置模态窗高度，默认为auto
        SWidth: 600,        //设置模态窗宽度，默认为auto
        callbackB: true,    //确认确认按钮有没有回调函数，默认为false   
        callbackShown: function () {
            $(".panel-body").css("border", "none");
            $(".input").css("border", "none");
            $(".input-group").css("border", "none");
        },
        callbackBF: function () {
            var sName = $("#AM_txtName").val();
            if (sName == "") {
                showmodal({
                    flag: "info",
                    title: "提示信息",
                    content: "请输入节点名称后再保存！",
                    modalIndex: "02",
                    Tclose: true,
                    Bclose: true
                });
                return false;
            }
            var _this = this;
            $.ajax({
                type: 'post',
                url: m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?T=" + Math.random(), //GREI.ApplicationPath + 
                dataType: 'text',
                data: { action: "EditAttach", ParentNode: m_AM_ParentNode, ParentType: m_AM_ParentType, PId: m_AM_Pid, CId: m_AM_Cid, IsMast: m_AM_IsMast, Ckind: m_AM_Ckind, CName: sName, Type: sType},
                success: function (oRet) {
                    if (oRet != "") {
                        AM_LoadTreeData();
                        _this.closeModal();
                    }
                    else {
                        showmodal({
                            flag: "info",
                            title: "提示信息",
                            content: sType + "失败！",
                            modalIndex: "02",
                            Tclose: true,
                            Bclose: true
                        });
                        return false;
                    }
                },
                error: function () {
                    showmodal({
                        flag: "info",
                        title: "提示信息",
                        content: sType + "失败！",
                        modalIndex: "02",
                        Tclose: true,
                        Bclose: true
                    });
                    return false;
                }
            });
        }
    });
}

function AM_R_showRMenu(type, x, y) {
    try { $("#div" + m_AM_DivId).show(); } catch (e) { }
    $("#AM_Row_rMenu ul").show();
    $("#AM_Row_rMenu").css({ "top": y + "px", "left": x + "px", "visibility": "visible" });
    $("body").bind("mousedown", AM_R_onBodyMouseDown);
}
function AM_R_hideRMenu() {
    if ($("#AM_Row_rMenu")) {
        try { $("#div" + m_AM_DivId).hide(); } catch (e) { }
        $("#AM_Row_rMenu").css({ "visibility": "hidden" });
    }
    $("body").unbind("mousedown", AM_R_onBodyMouseDown);
}
function AM_R_onBodyMouseDown(event) {
    if (!(event.target.id == "AM_Row_rMenu" || $(event.target).parents("#AM_Row_rMenu").length > 0)) {
        try { $("#div" + m_AM_DivId).hide(); } catch (e) { }
        $("#AM_Row_rMenu").css({ "visibility": "hidden" });
    }
}

//鼠标移动到右键菜单上
function AM_R_MenuonMouseOver(obj) {
    var sObj = eval(obj);
    sObj.style.color = "#0317F7";
}

//鼠标移开右键菜单
function AM_R_MenuonMouseOut(obj) {
    var sObj = eval(obj);
    sObj.style.color = "#000000";
}

//菜单树拖拽事件
function m_AM_dropPrev(treeId, nodes, node) {
    if (node != null) {
        return true;
    }
    else {
        return false;
    }
}

function m_AM_dropNext(treeId, nodes, node) {
    if (node != null) {
        return true;
    }
    else {
        return false;
    }
}

//定义ZTree
var m_AM_zTree;
var m_AM_zTreeDataObj;
var m_AM_setting = "";
m_AM_setting = {
    check: {
        enable: false
    },
    edit: {
        drag: {
            autoExpandTrigger: true,
            prev: m_AM_dropPrev,
            inner: true,
            next: m_AM_dropNext
        },
        enable: true,
        showRemoveBtn: false,
        showRenameBtn: false
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        onClick: this.m_AM_treeMenu_Click,
        onRightClick: this.m_AM_treeMenu_RightClick,
        beforeDrop: m_AM_treeMenu_beforeDrop
    }
};

var m_AM_Cid
var m_AM_Pid;
var m_AM_Cname;
var m_AM_Ckind;
var m_AM_IsMast;
var m_AM_hasChild;
var m_AM_ShowId;
//菜单树单击事件
function m_AM_treeMenu_Click(e, treeId, node) {
    try {
        if (node != null) {
            m_AM_Cid = node.id;
            m_AM_Pid = node.pId;
            m_AM_Cname = node.cname;
            m_AM_Ckind = node.ckind;
            m_AM_IsMast = node.IsMast;
            m_AM_hasChild = node.hasChild;
            if (m_AM_Ckind == "文件") {
                fn_AM_ShowAttach(m_AM_Cid, m_AM_Cname);
            }
        }
    } catch (e) { }
}

//菜单树右键事件
function m_AM_treeMenu_RightClick(e, treeId, node) {
    try {
        if (node != null) {
            m_AM_Cid = node.id;
            m_AM_Pid = node.pId;
            m_AM_Cname = node.cname;
            m_AM_Ckind = node.ckind;
            m_AM_IsMast = node.IsMast;
            m_AM_hasChild = node.hasChild;

            e = arguments[0] || window.event;
            x = e.clientX;
            y = e.clientY;
            var WinHeight = $("body").get(0).clientHeight;
            var iHeight = WinHeight - y;
            if (x > 75) {
                $("#AM_Row_rMenu").css("marginLeft", (75 - x) + "px");
            }
            else {
                $("#AM_Row_rMenu").css("marginLeft", "0px");
            }
            if (!node && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
                m_AM_zTree.cancelSelectedNode();
                AM_R_showRMenu("root", event.clientX, event.clientY);
            } else if (node && !node.noR) {
                m_AM_zTree.selectNode(node);
                AM_R_showRMenu("node", event.clientX, event.clientY);
            }
            $("#li_AM_add").hide();          //新增节点
            $("#li_AM_InPutBXFile").hide();  //批量导入附件(含子文件夹及其附件)     
            $("#li_AM_addAttach").hide();    //新增附件     
            $("#li_AM_delAttach").hide();    //删除附件
            $("#li_AM_Save").hide();         //另存附件
            $("#li_AM_del").hide();          //删除节点
            $("#li_AM_renName").hide();      //编辑节点 
            $("#li_AM_SaveFiles").hide();  //批量另存附件(按业务)      
            if (node.ckind == "文件夹") {
                $("#li_AM_add").show();          //新增节点
                $("#li_AM_InPutBXFile").show();  //批量导入附件(含子文件夹及其附件)   
                $("#li_AM_addAttach").show();    //新增附件    
                $("#li_AM_del").show();          //删除节点
                if (node.IsMast != "") {
                    $("#li_AM_renName").show();      //编辑节点 
                }
                $("#li_AM_SaveFiles").show();  //批量另存附件(按业务)   
            }
            else {
                $("#li_AM_delAttach").show();    //删除附件
                $("#li_AM_Save").show();         //另存附件  
                $("#li_AM_renName").show();      //编辑节点 
            }
            var iRHeight = $("#AM_Row_rMenu").outerHeight();
            if (iHeight < iRHeight) {
                $("#AM_Row_rMenu").css("marginTop", (iRHeight - iHeight) + "px");
            }
            else {
                $("#AM_Row_rMenu").css("marginTop", "0px");
            }
        }
    } catch (e) { }
}

//主菜单拖拽事件
function m_AM_treeMenu_beforeDrop(treeId, treeNodes, targetNode, moveType) {
    var bDone = true;
    if (targetNode != null) {
        var sId = treeNodes[0].id;
        var sCType = treeNodes[0].IsMast;
        var sCkind = treeNodes[0].ckind;
        var sNewId = targetNode.id;
        var sNewPId = targetNode.pId;
        var sNewCType = targetNode.IsMast;
        var sNewCkind = targetNode.ckind;
        var sTreePID = fn_AM_GetPID();
        if (sTreePID == sNewId) {
            if (sCkind == "文件夹") {
                if (moveType == "prev") {
                    bDone = false;
                }
                else if (moveType == "next") {
                    bDone = false;
                }
            }
            else {
                bDone = false;
            }
        }
        if (sCkind == "文件" && sNewPId == sTreePID) {
            if (moveType == "prev") {
                bDone = false;
            }
            else if (moveType == "next") {
                bDone = false;
            }
        }
        if (sNewCkind == "文件" && moveType == "inner") {
            bDone = false;
        }
    }
    else {
        bDone = false;
    }
    if (bDone) {
        $.ajax({
            type: 'post',
            url: m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?T=" + Math.random(), //GREI.ApplicationPath + 
            dataType: 'text',
            data: { action: "DragAttach",sId: sId, sNewId: sNewId, moveType: moveType, sTreePID: sTreePID, sNewPId: sNewPId, sCType: sCType, sNewCType: sNewCType },
            success: function (msg) {
                if (msg == "OK") {
                    bDone = true;
                    //AM_LoadTreeData();
                }
                else {
                    bDone = false;
                }
            },
            error: function () {
                bDone = false;
            }
        });
    }
    return bDone;
}

//获取树父节点
function fn_AM_GetPID() {
    var treeObj = $.fn.zTree.getZTreeObj(m_AM_DivTreeBox);
    var nodes = treeObj.getNodes();
    var sPid = "";
    if (nodes.length > 0) {
        for (var i = 0, l = nodes.length; i < l; i++) {
            if (nodes[i].pId == "" || nodes[i].pId == null) {
                sPid = nodes[i].id;
                break;
            }
        }
    }
    return sPid;
}

//加载附件树信息
function AM_LoadTreeData() {
    $.ajax({
        type: 'post',
        url: m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?T=" + Math.random(), //GREI.ApplicationPath + 
        dataType: 'text',
        data: { action: "LoadTreeData", ParentNode: m_AM_ParentNode, ParentType: m_AM_ParentType, PId: "" },
        success: function (data) {
            if (data != "") {
                m_AM_zTreeDataObj = eval("(" + data + ")"); //转换为json对象
                $.parser.parse($('#' + m_AM_DivTreeBox).parent());
                $.fn.zTree.init($("#" + m_AM_DivTreeBox), m_AM_setting, m_AM_zTreeDataObj);
                m_AM_zTree = $.fn.zTree.getZTreeObj(m_AM_DivTreeBox);
                if (m_AM_bAddJD) {
                    var sGID = fn_AM_GetPID();
                    //判断是否有可添加附件列表
                    fn_AM_CheckHasAddList();
                    if (m_AM_bShowAddLstBtn) {
                        //添加根节点按钮
                        var Gnode = m_AM_zTree.getNodeByParam("id", sGID);
                        var sObj = $("#" + Gnode.tId + "_span");
                        var addStr = '<span>&nbsp&nbsp&nbsp&nbsp<img src="../../Image/Common/xzjd.png" style="width:16px;height:16px;cursor:pointer;" align="absmiddle" title="添加列表" onclick="m_AM_AddList();" ></span>';
                        sObj.after(addStr);
                    }
                }
            }
        },
        error: function () {
            showmodal({
                flag: "info",
                title: "提示信息",
                content: "附件加载发生异常！",
                Tclose: true,
                Bclose: true
            });
        }
    });
}


var m_AM_bShowAddLstBtn = false;
//判断是否有可添加附件列表
function fn_AM_CheckHasAddList() {
    try {
        m_AM_bShowAddLstBtn = false;
        $.ajax({
            type: 'post',
            async: false,
            url: m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?T=" + Math.random(), // GREI.ApplicationPath + 
            dataType: 'text',
            data: { action: "CheckHasAddList", ParentNode: m_AM_ParentNode, ParentType: m_AM_ParentType, IsCheck: "是" },
            success: function (msg) {
                if (msg != "") {
                    m_AM_bShowAddLstBtn = true;
                }
            },
            error: function () { }
        });
    }
    catch (e) { }
}

//添加自定义节点
function m_AM_AddList()
{
    try {
        $.ajax({
            type: 'post',
            async: false,
            url: m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?T=" + Math.random(), //GREI.ApplicationPath + 
            dataType: 'text',
            data: { action: "CheckHasAddList", ParentNode: m_AM_ParentNode, ParentType: m_AM_ParentType, IsCheck: "否" },
            success: function (msg) {
                if (msg != "") {
                    fn_AM_ShowAddFJList(msg);
                }
                else {
                    showmodal({
                        flag: "info",
                        title: "提示信息",
                        content: "没有查询到可添加附件列表！",
                        Tclose: true,
                        Bclose: true
                    });
                }
            },
            error: function () {
                showmodal({
                    flag: "info",
                    title: "提示信息",
                    content: "数据加载发生异常！",
                    Tclose: true,
                    Bclose: true
                });
            }
        });
    }
    catch (e) { }
}

//显示添加列表
function fn_AM_ShowAddFJList(data)
{
    var sAddLstHtml = '<div id="div_Addlst" class="ztree" style="width:100%; height:100%;"></div>';
    showmodal({
        flag: "info",
        content: sAddLstHtml,       //内容
        title: "添加附件列表",  //设置模态窗标题
        Bclose: true,           //设置右下角关闭按钮是否显示，默认为显示
        Qclose: true,           //设置右下角确定按钮是否显示，默认为显示
        Sheight: 300,           //设置模态窗高度，默认为auto
        SWidth: 300,            //设置模态窗宽度，默认为auto
        callbackB: true,        //确认确认按钮有没有回调函数，默认为false   
        callbackShown: function () {
            $("#div_Addlst").css("border-bottom-width", "0px");
            m_AM_Addlst_CheckIds = "";
            var dataObj = eval("(" + data + ")"); //转换为json对象
            $.parser.parse($('#div_Addlst').parent());
            $.fn.zTree.init($('#div_Addlst'), m_AM_Addlst_setting, dataObj);
            m_AM_Addlst_zTree = $.fn.zTree.getZTreeObj("div_Addlst");
        },
        callbackBF: function () {
            var sCheckIds = m_AM_Addlst_CheckIds;
            if (sCheckIds == "") {
                var treeObj = $.fn.zTree.getZTreeObj("div_Addlst");
                var nodes = treeObj.getCheckedNodes(true);
                var bDnoe = true;
                if (nodes.length > 0) {
                    for (var i = 0, l = nodes.length; i < l; i++) {
                        if (bDnoe) {
                            sCheckIds = "'" + nodes[i].id + "'";
                            bDnoe = false;
                        }
                        else {
                            sCheckIds += ",'" + nodes[i].id + "'";
                        }
                    }
                }
            }
            if (sCheckIds != "") {
                var _this = this;
                $.ajax({
                    type: 'post',
                    async: false,
                    url: m_AM_Path + "Model/FJGL/RemoteHandle/AttachmentHandler.ashx?T=" + Math.random(), // GREI.ApplicationPath + 
                    dataType: 'text',
                    data: { action: "AddFJList", ParentNode: m_AM_ParentNode, ParentType: m_AM_ParentType, CheckIds: sCheckIds},
                    success: function (msg) {
                        if (msg == "OK") {
                            m_AM_Addlst_CheckIds = "";
                            AM_LoadTreeData();
                            _this.closeModal();
                        }
                        else{
                            showmodal({
                                flag: "info",
                                title: "提示信息",
                                content: "添加失败！",
                                modalIndex: "02",
                                Tclose: true,
                                Bclose: true
                            });
                        }
                    },
                    error: function () {
                        showmodal({
                            flag: "info",
                            title: "提示信息",
                            content: "添加失败！",
                            modalIndex: "02",
                            Tclose: true,
                            Bclose: true
                        });
                    }
                });
            }
            else {
                showmodal({
                    flag: "info",
                    title: "提示信息",
                    content: "请选择要添加的附件列表！",
                    modalIndex: "02",
                    Tclose: true,
                    Bclose: true
                });
            }
        }
    });
}

var m_AM_Addlst_zTree;
var m_AM_Addlst_zTreeDataObj;
var m_AM_Addlst_setting = "";
var m_AM_Addlst_CheckIds = "";
m_AM_Addlst_setting = {
    check: {
        enable: true,
        chkboxType: { "Y": "ps", "N": "ps" }
    },
    view: {
        selectedMulti: false
    },
    data: {
        simpleData: {
            enable: true
        }
    },
    callback: {
        beforeClick: this.m_AM_Addlst_beforeClick,
        onCheck: this.m_AM_Addlst_onCheck,
        onRightClick: this.m_AM_Addlst_RightClick
    }
};
//点击菜单前触发事件
function m_AM_Addlst_beforeClick(treeId, treeNode) {
    var zAddlstTree = $.fn.zTree.getZTreeObj("div_Addlst");
    zAddlstTree.checkNode(treeNode, !treeNode.checked, true, true);
}
//选中菜单事件
function m_AM_Addlst_onCheck(e, treeId, treeNode) {
    var treeObj = $.fn.zTree.getZTreeObj("div_Addlst");
    var nodes = treeObj.getCheckedNodes(true);
    var CheckIds = "";
    var bDnoe = true;
    if (nodes.length > 0) {
        for (var i = 0, l = nodes.length; i < l; i++) {
            if (bDnoe) {
                CheckIds = "'" + nodes[i].id + "'";
                bDnoe = false;
            }
            else {
                CheckIds += ",'" + nodes[i].id + "'";
            }
        }
    }
    m_AM_Addlst_CheckIds = CheckIds;
}
//删除节点树右键事件
function m_AM_Addlst_RightClick(e, treeId, node) {

}
