import React from "react";

function Socafi() {
    return(
    <>
    <header id="header" class="header d-flex align-items-center">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

            <a href="/#hero" class="logo d-flex align-items-center">
                <img src="assets/img/logotgeprom.JPG" alt="k"></img>
                <h1>TGEPROM<span>.</span></h1>
            </a>
            <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
            <nav id="navbar" class="navbar">
            <ul>
                <li><a href="/" class="active">ACCEUIL</a></li>
            </ul>
            </nav>

        </div>
    </header>

    <main id="main">


    <div class="breadcrumbs d-flex align-items-center" style={{ backgroundImage: `url(assets/img/socafi-fond.png)`}}>
        <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

        <h2>Usine pharmaceutique Socafi Pharma Diamniadio</h2>
        <ol>
            <li>Details du Projet</li>
        </ol>

        </div>
    </div>

    <section id="blog" class="blog">
      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4 posts-list">

          <div class="col-xl-4 col-md-6">
            <div class="post-item position-relative h-48">

              <div class="post-img position-relative overflow-hidden">
                <img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt="" />
                <span class="post-date">December 12</span>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6">
            <div class="post-item position-relative h-48">

              <div class="post-img position-relative overflow-hidden">
                <img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt="" />
                <span class="post-date">December 12</span>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6">
            <div class="post-item position-relative h-48">

              <div class="post-img position-relative overflow-hidden">
                <img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt="" />
                <span class="post-date">December 12</span>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6">
            <div class="post-item position-relative h-48">

              <div class="post-img position-relative overflow-hidden">
                <img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt="" />
                <span class="post-date">December 12</span>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6">
            <div class="post-item position-relative h-48">

              <div class="post-img position-relative overflow-hidden">
                <img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt="" />
                <span class="post-date">December 12</span>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-md-6">
            <div class="post-item position-relative h-48">

              <div class="post-img position-relative overflow-hidden">
                <img src="assets/img/blog/blog-1.jpg" class="img-fluid" alt="" />
                <span class="post-date">December 12</span>
              </div>
            </div>
          </div>

        </div>

        <div class="blog-pagination">
          <ul class="justify-content-center">
            <li class="active"><a href="#">1</a></li>
          </ul>
        </div>

      </div>
    </section>

    </main>

    <div class="copyright">
        <p>copyright 2023 <a href="#">Ideal Dev Solution</a>. Tous droits reservés</p>
    </div>

    </>
    );
}
export default Socafi;