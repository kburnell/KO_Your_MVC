using System.Web.Mvc;

namespace Templates.Web.Controllers {

    public class HomeController : Controller {

        public ActionResult Index() {
            return View();
        }
    }
}