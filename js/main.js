$(document).ready(function() {
  fillProfileInfo();
  fillEducation();
  fillExperience();
  fillCertificate();
  fillPortfolio();
});

function fillProfileInfo(){
  // Name
  let name = "";
  name += "<h1 class='mb-0'>" + profile.about.name;
      name += "<span class='text-primary'> " + profile.about.surname + "</span>";
  name += "</h1>";
  $("#basic_info_name").html(name);
  // Contact
  let basic_info = "";
  basic_info += "<div class='subheading mb-5'>";
      basic_info += profile.about.contact;
      basic_info += "<a href='mailto:" + profile.about.email + "' target='_blank'>" + profile.about.email + "</a>";
  basic_info += "</div>";
  basic_info += "<p>" + profile.about.description + "</p>";
  $("#basic_info_description").html(basic_info);
  // Interests
  let interests_info = "";
  for (var i = 0; i < profile.interests.length; i++) {
    let interest = profile.interests[i];
    interests_info += "<p>" + interest + "</p>";
    interests_info += "<p class='mb-0'></p>";
  }
  $("#interests_info").html(interests_info);
  // Networks
  let networks_info = "";
  let networks = profile.about.networks;
  for (var icon in networks) {
    let url = networks[icon];
    networks_info += "<a class='social-icon' href='" + url + "' target='_blank'><i class='" + icon + "'></i></a>";
  }
  networks_info += "<a class='social-icon' href='mailto:" + profile.about.email + "' target='_blank'><i class='far fa-envelope'></a>";
  $(".social-icons").html(networks_info);
  // Skills
  let skills_info = "";
  let skills = profile.skills.icons;
  for (var icon in skills) {
    skills_info += "<li class='list-inline-item'><i class='" + skills[icon] + "'></i></li>";
  }
  $(".dev-icons").html(skills_info);
  // Wofkflows
  let workflow_info = "";
  let workflow = profile.skills.workflow;
  for (var w in workflow) {
    workflow_info += "<li>";
        workflow_info += "<span class='fa-li'><i class='fas fa-check'></i></span>";
        workflow_info += workflow[w];
    workflow_info += "</li>";
  }
  $("#workflow_info").html(workflow_info);
}

function fillPortfolio(){
  let portfolio_info = "";
  let portfolio = profile.portfolio;
  for (var p in portfolio) {
    let item = portfolio[p];
    portfolio_info += "<div class='grid-item'>";
      portfolio_info += "<a class='portfolio-item' target='_blank' href='" + item["url"] + "'>";
        portfolio_info += "<img src='" + item["img"] + "'>";
      portfolio_info += "</a>";
    portfolio_info += "</div>";
  }
  $("#portfolio_grid").html(portfolio_info);
}


function fillEducation(){
  let education_field = $("#education_info");
  let content = "";
  let education = profile.education;
  for (var ed in education) {
    let title = ed;
    let subheading = education[ed]["subheading"];
    let description = education[ed]["description"];
    let timeframe = education[ed]["timeframe"];
    content += "<div class='d-flex flex-column flex-md-row justify-content-between mb-5'>";
        content += "<div class='flex-grow-1'>";
            content += "<h3 class='mb-0'>" + title + "</h3>";
            content += "<div class='subheading mb-3'>" + subheading + "</div>";
            content += "<div>" + description + "</div>";
        content += "</div>";
        content += "<div class='flex-shrink-0'><span class='text-primary'>" + timeframe + "</span></div>";
    content += "</div>";
  }
  $(education_field).html(content);
}

function fillExperience(){
  let exp_field = $("#experience_info");
  let content = "";
  let experiences = profile.experiences;
  for (var exp in experiences) {
    let title = exp;
    let subheading = experiences[exp]["subheading"];
    let description = experiences[exp]["description"];
    let timeframe = experiences[exp]["timeframe"];
    content += "<div class='d-flex flex-column flex-md-row justify-content-between mb-5'>";
    content += "<div class='flex-grow-1'>";
    content += "<h3 class='mb-0'>" + title + "</h3>";
    content += "<div class='subheading mb-3'>" + subheading + "</div>";
    content += "<p>" + description + "</p>";
    content += "</div>";
    content += "<div class='flex-shrink-0'><span class='text-primary'>" + timeframe + "</span></div>";
    content += "</div>";
  }
  $(exp_field).html(content);
}

function fillCertificate(){
  let cert_field = $("#certifications");
  let content = "";
  let certifications = profile.certifications;
  for (var i = 0; i < certifications.length; i++) {
    content += "<li>";
        content += "<span class='fa-li'><i class='fas fa-trophy text-warning'></i></span>";
        content += certifications[i];
    content += "</li>";
  }
  $(cert_field).html(content);
}
