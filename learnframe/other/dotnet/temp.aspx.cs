
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Script.Serialization;
namespace Melon.Test
{
  public partial class temp : System.Web.UI.Page
  {
    protected void Page_Load(object sender, EventArgs e)
    {
      if (!IsPostBack)
      {
        //页面初始加载的时候调用方法
          LoadProdList()
      }

    }
    /// <summary>
    /// 将数据和页面dom进行数据挂接
    /// </summary>
    public void LoadProdList()
    {
        List<ProdLists> ProdLs = JSONProdList();

        String tempContent = string.Empty;

        for (int n = 0; n < ProdLs.Count; n++)
        {
            tempContent += "<li>\n";
            tempContent += "     <p>姓名：" + ProdLs[n].Name + "</p>\n";
            tempContent += "     <p>价格：" + ProdLs[n].Price + "m</p>\n";
            tempContent += "</li>\n";

        }
        test.InnerHtml = tempContent;
    }

    /// <summary>
    /// 将获取到的产品接口数据，进行序列化
    /// </summary>
    /// <returns>序列化产品数据集合</returns>
    public List<ProdLists>  JSONProdList()
    {
        String ProdList = getProdList();
        List<ProdLists> ProdLs = JSONToObject<List<ProdLists>>(ProdList);    //将json数据转化为对象类型并赋值给list
        return ProdLs;
    }

    /// <summary>
    /// 获取easymock接口得到的模拟产品数据
    /// </summary>
    /// <returns>产品数据集合</returns>
    public string getProdList()
    {
      string ProdList = @"
                    [
                      {'Name': '廖杰','Price': 44.31},
                      {'Name': '蒋刚','Price': 65.65},
                      {'Name': '萧秀兰','Price': 20.55},
                      {'Name': '吴丽','Price': 52.88},
                      {'Name': '任强','Price': 88.48},
                      {'Name': '梁艳','Price': 53.27},
                      {'Name': '王平','Price': 74.67},
                      {'Name': '董娜','Price': 16.18},
                      {'Name': '蒋刚','Price': 8.28},
                      {'Name': '石强','Price': 18.18},
                      {'Name': '贺芳','Price': 94.85},
                      {'Name': '黄刚','Price': 46.13},
                      {'Name': '龙丽','Price': 76.88},
                      {'Name': '龚勇','Price': 57.27},
                      {'Name': '吴娟','Price': 21.44},
                      {'Name': '赵超','Price': 95.98},
                      {'Name': '锺敏','Price': 85.44},
                      {'Name': '梁芳','Price': 87.63},
                      {'Name': '卢洋','Price': 4.13},
                      {'Name': '陆娜','Price': 81.63},
                      {'Name': '高磊','Price': 81.07},
                      {'Name': '潘丽','Price': 53.02},
                      {'Name': '范刚','Price': 53.93},
                      {'Name': '蔡杰','Price': 4.75},
                      {'Name': '何丽','Price': 64.84},
                      {'Name': '田洋','Price': 25.59},
                      {'Name': '唐娟','Price': 95.88}
                    ]";
      return ProdList;
    }

    /// <summary>
    /// 产品数据类构造体
    /// </summary>
    public struct ProdLists
    {
      public string Name { get; set; }  //属性的名字，必须与json格式字符串中的"key"值一样。
      public string Price { get; set; }
    }

    /// <summary>
    /// 这个一个反序列化的方法，用于返回泛型集合
    /// </summary>
    public static T JSONToObject<T>(string jsonText)
    {
        JavaScriptSerializer jss = new JavaScriptSerializer();
        return jss.Deserialize<T>(jsonText);
    }
  }
}
