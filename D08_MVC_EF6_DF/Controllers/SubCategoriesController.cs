using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using D08_MVC_EF6_DF.Models;

namespace D08_MVC_EF6_DF.Controllers
{
    public class SubCategoriesController : Controller
    {
        private Northwind_D08_MVC_EF6_DFEntities db = new Northwind_D08_MVC_EF6_DFEntities();

        // GET: SubCategories
        public ActionResult Index()
        {
            var subCategories = db.SubCategories.Include(s => s.Categories);
            return View(subCategories.ToList());
        }

        // GET: SubCategories/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SubCategories subCategories = db.SubCategories.Find(id);
            if (subCategories == null)
            {
                return HttpNotFound();
            }
            return View(subCategories);
        }

        // GET: SubCategories/Create
        public ActionResult Create()
        {
            ViewBag.CategoryID = new SelectList(db.Categories, "CategoryID", "CategoryName");
            return View();
        }

        // POST: SubCategories/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "SubCategoryID,SubCategoryName,CategoryID,Description,Picture")] SubCategories subCategories)
        {
            if (ModelState.IsValid)
            {
                db.SubCategories.Add(subCategories);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CategoryID = new SelectList(db.Categories, "CategoryID", "CategoryName", subCategories.CategoryID);
            return View(subCategories);
        }

        // GET: SubCategories/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SubCategories subCategories = db.SubCategories.Find(id);
            if (subCategories == null)
            {
                return HttpNotFound();
            }
            ViewBag.CategoryID = new SelectList(db.Categories, "CategoryID", "CategoryName", subCategories.CategoryID);
            return View(subCategories);
        }

        // POST: SubCategories/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "SubCategoryID,SubCategoryName,CategoryID,Description,Picture")] SubCategories subCategories)
        {
            if (ModelState.IsValid)
            {
                db.Entry(subCategories).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CategoryID = new SelectList(db.Categories, "CategoryID", "CategoryName", subCategories.CategoryID);
            return View(subCategories);
        }

        // GET: SubCategories/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            SubCategories subCategories = db.SubCategories.Find(id);
            if (subCategories == null)
            {
                return HttpNotFound();
            }
            return View(subCategories);
        }

        // POST: SubCategories/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            SubCategories subCategories = db.SubCategories.Find(id);
            db.SubCategories.Remove(subCategories);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
