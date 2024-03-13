import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function NavBar() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      const serviceId = 'service_3r3sctu';
      const templateId = 'template_kppyrlg';
      const userId = '9JEDgP2zfjGmPW_Ln';

      emailjs.send(serviceId, templateId, {
      name,
      email,
      subject,
      message,
      }, userId)
      .then((response) => {
          setSuccessMessage('votre message a bien été envoyé.');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          history.push("/#about");
      }, (error) => {
          setErrorMessage('votre message n\'a pas été envoyé');
      });

      axios.post('/contact-form.php', { name, email, message, subject })
      .then((response) => {
          console.log(response);
      })
      .catch((error) => {
          console.log(error);
      });
  };

    return(
    <main id="main">
      <div>
          <header id="header" class="header d-flex align-items-center">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

        <a href="" class="logo d-flex align-items-center">
          <img src="assets/img/logotgeprom.JPG" alt="k"></img>
          <h1>TGEPROM<span>.</span></h1>
        </a>

        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="#hero" class="active">ACCEUIL</a></li>
            <li><a href="#about">A Propos</a></li>
            <li><a href="#constructions">Services</a></li>
            <li><a href="#alt-services">Objectifs</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

      </div>
    </header>
          <section id="hero" class="hero">

              <div class="info d-flex align-items-center">
              <div class="container">
                  <div class="row justify-content-center">
                  <div class="col-lg-6 text-center">
                      <h2 data-aos="fade-down">Bienvenue sur <span>TGEPROM</span></h2>
                      <p data-aos="fade-up">Au cœur de l'industrie du BTP, <span>TGEPROM</span> s'engage à fournir des services de construction et de travaux publics de la plus haute qualité. Forts d'une expérience solide et d'une équipe d'experts dévoués, nous sommes votre partenaire de confiance pour la réalisation de vos projets les plus ambitieux...</p>
                      <a data-aos="fade-up" data-aos-delay="200" href="#about" class="btn-get-started">Commencer</a>
                  </div>
                  </div>
              </div>
              </div>

              <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
              
                <div class="carousel-item active" style={{ backgroundImage: `url(assets/img/hero-carousel/hero-carousel-1.jpg)`}}></div>
                <div class="carousel-item" style={{ backgroundImage: `url(assets/img/2e-slider.jpg)`}}></div>
                <div class="carousel-item" style={{ backgroundImage: `url(assets/img/slider-3.JPG)`}}></div>
                <div class="carousel-item" style={{ backgroundImage: `url(assets/img/slider-4.JPG)`}}></div>

                <a class="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>

                <a class="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
                  <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>

              </div>

          </section>
          <main id="main">
            <section id="about" class="about">
              <div class="container" data-aos="fade-up">

                <div class="row position-relative">

                  <div class="col-lg-7 about-img" style={{ backgroundImage: `url(assets/img/hero-carousel/hero-carousel-1.jpg)`}}></div>

                  <div class="col-lg-7">
                    <h2>A Propos de Nous</h2>
                    <div class="our-story">
                      <h4>------------------------------------------------</h4>
                      <h3>TGEPROM</h3>
                      <p><strong>TAYSIR GENERAL D'ENTREPRISES ET DE PROMOTION IMMOBILIERE</strong>, une entreprise dynamique dans le secteur du BTP, se distingue par son engagement 
                        indéfectible envers l'excellence et l'innovation. Fondée sur des valeurs solides de professionnalisme 
                        et d'intégrité, Tgeprom s'est rapidement imposée comme un leader incontesté dans son domaine.
                        Grâce à une équipe talentueuse et passionnée, Tgeprom s'efforce constamment de repousser les limites 
                        de la construction, en proposant des solutions novatrices et durables. Que ce soit dans la réalisation de 
                        projets architecturaux ambitieux, la construction d'infrastructures complexes ou la rénovation de bâtiments 
                        historiques, Tgeprom excelle dans chaque aspect de son métier.</p>
                
                      {/* <p>Au-delà de ses compétences techniques, Tgeprom accorde une grande importance à la satisfaction de ses clients.
                        À travers une communication transparente et une écoute attentive, l'entreprise forge des relations de confiance qui 
                        perdurent au fil des projets. Chaque réalisation de Tgeprom est le fruit d'une collaboration étroite avec ses clients, 
                        garantissant des résultats qui dépassent les attentes. Fort de son expertise et de son engagement envers l'excellence, 
                        Tgeprom continue de tracer son chemin vers l'avenir, contribuant ainsi au développement et à la transformation du paysage 
                        urbain avec une empreinte de qualité et d'innovation.</p> */}
                        <ul>
                        <li><i class="bi bi-check-circle"></i> <span>Professionalisme</span></li>
                        <li><i class="bi bi-check-circle"></i> <span>Efficacité</span></li>
                        <li><i class="bi bi-check-circle"></i> <span>Fiabilité</span></li>
                      </ul>
                      {/* <div class="watch-video d-flex align-items-center position-relative">
                        <i class="bi bi-play-circle"></i>
                        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox stretched-link">Watch Video</a>
                      </div> */}
                    </div>
                  </div>
                </div>

              </div>
              
            </section>
            <section id="clients" class="clients section-bg">
                <div class="container">

                    <div class="row" data-aos="zoom-in">

                    <div class="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/LOGO-SENICO.png" class="img-fluid" alt="" />
                    </div>

                    <div class="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/socafi.jpg" class="img-fluid" alt="" />
                    </div>

                    <div class="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/sipa.png" class="img-fluid" alt="" />
                    </div>

                    <div class="col-lg-3 col-md-6 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/sicopa.png" class="img-fluid" alt="" />
                    </div>
                    
                    </div>

                </div>
            </section>
          </main>
          <section id="constructions" class="constructions">
            <div class="container" data-aos="fade-up">

              <div class="section-header">
                <h2>Nos Services</h2>
                <p>Chez <span>TGEPROM</span>, chaque bâtiment, routes, que nous construisons est bien plus qu'une simple structure. 
                C'est le fruit d'une vision, d'une expertise et d'un savoir-faire méticuleux. Que ce soit des résidences élégantes, 
                des complexes commerciaux dynamiques ou des infrastructures publiques vitales, chacune de nos constructions est le 
                reflet de notre engagement envers l'excellence et notre passion pour l'art de bâtir.</p>
              </div>

              <div class="row gy-4">

                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                  <div class="card-item">
                    <div class="row">
                      <div class="col-xl-5">
                        <div class="card-bg" style={{ backgroundImage: `url(assets/img/image-genie.jpg)`}}></div>
                      </div>
                      <div class="col-xl-7 d-flex align-items-center">
                        <div class="card-body">
                          <h4 class="card-title">Génie Civil</h4>
                          <p>Bienvenue dans l'univers du génie civil, où chaque projet est une symphonie d'ingénierie et d'innovation. 
                            Notre entreprise s'engage à transformer les idées en réalités tangibles, en construisant des infrastructures qui façonnent notre environnement et améliorent la qualité de vie des générations futures.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                  <div class="card-item">
                    <div class="row">
                      <div class="col-xl-5">
                        <div class="card-bg" style={{ backgroundImage: `url(assets/img/btp.JPG)`}}></div>
                      </div>
                      <div class="col-xl-7 d-flex align-items-center">
                        <div class="card-body">
                          <h4 class="card-title">BTP (Bâtiment et travaux publics)</h4>
                          <p>Nous offrons une gamme complète de service dans le domaine du Bâtiment et des Travaux Publics. Notre équipe d'experts qualifiés et passionnés maîtrise une variété de disciplines, allant de la conception architecturale à la gestion de chantier, en passant par les techniques de construction les plus avancées.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                  <div class="card-item">
                    <div class="row">
                      <div class="col-xl-7 d-flex align-items-center">
                        <div class="card-body">
                          <h4 class="card-title"> VRD (voiries et réseaux divers) </h4>
                          <p>Que ce soit la création de routes robustes, de trottoirs accueillants, de réseaux d'assainissement efficaces ou de réseaux de distribution d'eau, notre équipe dynamique et expérimentée est prête à relever tous les défis Découvrez avec nous comment chaque projet VRD devient une réalité, façonnant un avenir plus sûr, plus fluide et plus connecté pour tous.</p>
                        </div>
                      </div>
                      <div class="col-xl-5">
                        <div class="card-bg" style={{ backgroundImage: `url(assets/img/voirie.jpeg)`}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                  <div class="card-item">
                    <div class="row">
                      <div class="col-xl-7 d-flex align-items-center">
                        <div class="card-body">
                          <h4 class="card-title">Hydraulique et assainissement</h4>
                          <p>L'hydraulique et l'assainissement sont bien plus qu'une simple 
                            activité : ce sont des engagements envers la santé publique, 
                            l'environnement et le développement durable. Nous nous engageons 
                            à fournir des services de haute qualité qui répondent aux besoins 
                            spécifiques de nos clients, tout en respectant les normes les plus 
                            strictes en matière de qualité, de sécurité et d'efficacité.</p>
                        </div>
                      </div>
                      <div class="col-xl-5">
                        <div class="card-bg" style={{ backgroundImage: `url(assets/img/hydraulique.jpg)`}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12" data-aos="fade-up" data-aos-delay="400">
                  <div class="card-item">
                    <div class="row">
                      <div class="col-xl-7 d-flex align-items-center">
                        <div class="card-body">
                          <h4 class="card-title">Aménagement et Réhabilitation</h4>
                          <p>Notre entreprise est fière de son engagement envers 
                            l'amélioration et la revitalisation des environnements existants, 
                            que ce soit à travers des projets de réhabilitation de bâtiments historiques, 
                            la revitalisation de quartiers urbains, ou la restauration d'écosystèmes naturels fragiles. 
                            Ensemble, nous façonnons un avenir où les espaces urbains sont vivants et durables, où les 
                            communautés prospèrent dans des environnements sains et inclusifs, et où la nature est préservée et célébrée. </p>
                        </div>
                      </div>
                      <div class="col-xl-5">
                        <div class="card-bg" style={{ backgroundImage: `url(assets/img/Aménagement.jpg)`}}></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
      </section>
      
      <section id="alt-services" class="alt-services">
        <div class="container" data-aos="fade-up">

          <div class="row justify-content-around gy-4">
            <div class="col-lg-6 img-bg" style={{ backgroundImage: `url(assets/img/ojectif.jpg)`}} data-aos="zoom-in" data-aos-delay="100"></div>

            <div class="col-lg-5 d-flex flex-column justify-content-center">
              <h3>Nos Objectifs</h3>
              <p>En tant qu'entreprise, notre vision est de devenir un leader innovant dans notre domaine, en offrant des produits et services de qualité 
                supérieure qui répondent aux besoins et aux attentes de nos clients. Nous aspirons à créer un impact positif durable dans les communautés 
                où nous opérons, tout en maintenant un engagement ferme envers l'intégrité et la responsabilité sociale.</p>
              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                <i class="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4><a class="stretched-link">Croissance durable</a></h4>
                  <p>Nous nous engageons à réaliser une croissance rentable et durable, 
                    en investissant dans la recherche et le développement pour améliorer 
                    continuellement nos produits et processus</p>
                </div>
              </div>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                <i class="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4><a class="stretched-link">Excellence opérationnelle</a></h4>
                  <p>Nous cherchons à optimiser nos opérations à tous les niveaux de l'entreprise, 
                    en mettant l'accent sur l'efficacité, la qualité et la gestion responsable des ressources. </p>
                </div>
              </div>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                <i class="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4><a class="stretched-link">Engagement envers nos parties prenantes</a></h4>
                  <p>Nous accordons une grande importance à nos employés, clients, fournisseurs et actionnaires. 
                    Nous nous efforçons de maintenir des relations solides et durables avec chacun d'entre eux, 
                    en favorisant la transparence, la communication ouverte et le respect mutuel.</p>
                </div>
              </div>

              <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                <i class="bi bi-patch-check flex-shrink-0"></i>
                <div>
                  <h4><a class="stretched-link">Innovation sociale</a></h4>
                  <p>Nous nous efforçons de contribuer positivement aux communautés où nous sommes présents, en 
                    soutenant des initiatives sociales et philanthropiques qui améliorent la qualité de vie des personnes. </p>
                </div>
              </div>

            </div>
          </div>

        </div>
        <section id="projects" class="projects">
        <div class="container" data-aos="fade-up">

          <div class="section-header">
            <h2>Nos Projets</h2>
            <p>Explorez avec fierté nos réalisations chez Tgeprom : des projets innovants qui transforment les défis en opportunités concrètes.</p>
          </div>

          <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order">

            <ul class="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" class="filter-active">Tous Les Projets</li>
            </ul>

            <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

              <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/remodeling-1.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Usine pharmaceutique Socaphi Pharma Diamniadio</h4>
                    <p>Usine pharmaceutique Socaphi Pharma Diamniadio</p>
                    {/* <a href="assets/img/projects/remodeling-1.jpg" title="Remodeling 1" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="/Socafi" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                <div class="portfolio-content h-100">
                  <img src="assets/img/residence-R+3.JPG" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Immeuble R+3 Moustapha et Ibrahima à OUAKAM</h4>
                    <p>Immeuble R+3 Moustapha et Ibrahima à OUAKAM</p>
                    {/* <a href="assets/img/residence-R+3.JPG" title="Construction 1" data-gallery="portfolio-gallery-construction" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a  href="/Moustapha&Ibrahima" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src="assets/img/projects/repairs-1.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Usine Savon Mbao</h4>
                    <p>Usine Savon Mbao</p>
                    {/* <a href="assets/img/projects/repairs-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-repairs" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="/Savon" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                <div class="portfolio-content h-100">
                  <img src="assets/img/hangar-projet.jpeg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Projet réhabilitation hangar et aménagement pharmaceutique socafi pharma 2</h4>
                    <p>Projet réhabilitation hangar et aménagement pharmaceutique socafi pharma 2</p>
                    {/* <a href="assets/img/projects/design-1.jpg" title="Repairs 1" data-gallery="portfolio-gallery-book" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="/Hangar" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
                <div class="portfolio-content h-100">
                  <img src="assets/img/Daar-noor.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Projet de construction résidence Darr Nouhr à Touba</h4>
                    <p>Projet de construction résidence Darr Nouhr à Touba</p>
                    {/* <a href="assets/img/Daar-noor.jpg" title="Remodeling 2" data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="/Nouhr" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-construction">
                <div class="portfolio-content h-100">
                  <img src="assets/img/taysir.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Projet de construction résidence Taysir</h4>
                    <p>Projet de construction résidence Taysir</p>
                    {/* <a href="assets/img/projects/construction-2.jpg" title="Construction 2" data-gallery="portfolio-gallery-construction" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="/Taysir" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
               
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item filter-repairs">
                <div class="portfolio-content h-100">
                  <img src="assets/img/tawfekh.jpg" class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>Projet de construction résidence tawfekh à Touba</h4>
                    <p>Projet de construction résidence tawfekh à Touba</p>
                    {/* <a href="assets/img/projects/repairs-2.jpg" title="Repairs 2" data-gallery="portfolio-gallery-repairs" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                    <a href="/Tawfekh" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a> */}
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
      </section>
      </div>

      <section id="contact" class="contact">
      <div class="breadcrumbs d-flex align-items-center" style={{ backgroundImage: `url(assets/img/breadcrumbs-bg.jpg)`}}>
        <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

          <h2>Contact</h2>
          {/* <ol>
            <li><a href="index.html">Home</a></li>
            <li>Contact</li>
          </ol> */}

        </div>
      </div>
     
    
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        
        <div class="row gy-4">
          <div class="col-lg-6">
            <div class="info-item  d-flex flex-column justify-content-center align-items-center">
              <i class="bi bi-map"></i>
              <h3>Notre Adresse</h3>
              <p>2B Sicap Karack en face du College Yallah Surren</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="info-item d-flex flex-column justify-content-center align-items-center">
              <i class="bi bi-envelope"></i>
              <h3>Email</h3>
              <p>contact@tgeprom.sn</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="info-item  d-flex flex-column justify-content-center align-items-center">
              <i class="bi bi-telephone"></i>
              <h3>Nous Contacter</h3>
              <p>+221 33 822 22 20</p>
            </div>
          </div>

        </div>

        <div class="row gy-4 mt-1">

          <div class="col-lg-6 ">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.087590140709!2d-17.469385625164325!3d14.707638485791522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b504d4c840c23%3A0x83db04dc2ffc7e9!2sTGEPROM!5e0!3m2!1sfr!2ssn!4v1710256296798!5m2!1sfr!2ssn" frameborder="0" style={{border: `10`, width: `100%`, height: `384px`}} allowfullscreen></iframe>
          </div>

          <div class="col-lg-6">
            <form onSubmit={handleSubmit} class="php-email-form">
              <div class="row gy-4">
                <div class="col-lg-6 form-group">
                  <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} class="form-control" id="name" placeholder="Prenom et Nom" required />
                </div>
                <div class="col-lg-6 form-group">
                  <input type="email" class="form-control" value={email} onChange={(event) => setEmail(event.target.value)}  name="email" id="email" placeholder="Email" required />
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" value={subject} onChange={(event) => setSubject(event.target.value)} name="subject" id="subject" placeholder="Objet" required />
              </div>
              <div class="form-group">
                <textarea class="form-control" value={message} onChange={(event) => setMessage(event.target.value)} name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                  {successMessage && <div class="sent-message">{successMessage}</div>}
                  {errorMessage && <div class="error-message">{errorMessage}</div>}
              </div>
              <div class="text-center"><button type="submit" onclick="rechargerPage()">Envoyer le Message</button></div>
            </form>
          </div>
        </div>

      </div>
    </section>
    
    <>
        <div class="copyright">
            <p>copyright 2023 <a href="#">Ideal Dev Solution</a>. Tous droits reservés</p>
        </div>
    </>    
    </main>
    );
}
export default NavBar;
