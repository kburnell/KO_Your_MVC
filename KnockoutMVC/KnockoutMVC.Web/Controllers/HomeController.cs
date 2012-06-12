using System.Collections.Generic;
using System.Web.Mvc;
using KnockoutMVC.Web.Models;

namespace KnockoutMVC.Web.Controllers {

    public class HomeController : Controller {

        public ActionResult Index() {
            ViewBag.Message = "Knockout MVC";
            return View();
        }

        public ActionResult HtmlHelperList() {
            IList<DreamCar> cars = new List<DreamCar>();
            cars.Add(new DreamCar { Id = 1, Year = 1971, Make = "Plymouth", Model = "Hemi Cuda" });
            cars.Add(new DreamCar { Id = 2, Year = 1967, Make = "Ford", Model = "Shelby Mustang GT 500" });
            return View(cars);
        }

        public JsonResult GetDreamCars() {
            IList<DreamCar> cars = new List<DreamCar>();
            cars.Add(new DreamCar {Id=1, Year = 1971, Make = "Plymouth", Model = "Hemi Cuda" });
            cars.Add(new DreamCar { Id = 2, Year = 1967, Make = "Ford", Model = "Shelby Mustang GT 500" });
            return Json(cars);
        }

        public ActionResult HtmlHelperUpdate()
        {
            DreamCar dc = (new DreamCar { Id = 2, Year = 1967, Make = "Ford", Model = "Shelby Mustang GT 500" });
            return View(dc);
        }

    }
}