using System.Web;
using System.Web.Mvc;

namespace D07_MVC_EF6_DF
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
