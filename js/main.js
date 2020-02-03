'use strict'

$(document).ready(init)

function init() {
  renderProjects()
}

function renderProjects() {
  var $galleryGrid = $('.portfolio-grid')
  var projects = getProjectsForDisplay()
  var projectsStrs = ''
  projects.forEach(project => {
    var projectStr =
      `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" onclick="renderProjectModal('${project.id}')" href="#portfolioModal${project.id}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${project.thumbnail}" />
          </a>
          <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
          </div>
        </div>`
    projectsStrs += projectStr
  })

  $galleryGrid.html(projectsStrs)
}


function sendEmail() {
  var $inputSubject = $('.contact-subject').val()
  var $inputMessage = $('.contact-message').val()
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=rami.davidov@gmail.com&su=${$inputSubject}&body=${$inputMessage}`)
}

function renderProjectModal(id) {
  var $projectModal = $('.portfolio-modal-container')
  var project = findProject(id)
  var modalStr =
    `<div class="portfolio-modal modal fade" id="portfolioModal${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <h2>${project.name}</h2>
                <p class="item-intro text-muted">${project.title}</p>
                <img class="img-fluid d-block mx-auto" src="${project.img}" alt="">
                <p>${project.desc}</p>
                <ul class="list-inline">
                  <li>Released: ${project.publishedAt}</li>
                  <li>Category: ${project.labels.join(', ')}</li>
                </ul>
                <button class="btn btn-dark" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                    <button class="btn btn-primary" onclick="openProjectLink(${project.id})" type="button">Go check it out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
  $projectModal.html(modalStr)
}

function openProjectLink(id) {
  var project = findProject(id)
  window.open(project.url)
}
