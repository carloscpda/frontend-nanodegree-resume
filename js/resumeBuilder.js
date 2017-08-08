var bio = {
  "name": "Harry Potter",
  "role": "Auror",
  "contacts": {
    "mobile": "987 65 43 21",
    "email": "harry.potter@student.hogwarts.com",
    "github": "harrypotter",
    "twitter": "@harrypotter",
    "location": "Privet Drive, Little Whinging"
  },
  "welcomeMessage": "You are protected, in short, by your ability to love! The only protection that can possibly work against the lure of power like Voldemort's! In spite of all the temptation you have endured, all the suffering, you remain pure of heart, just as pure as you were at the age of eleven, when you stared into a mirror that reflected your heart's desire, and it showed you only the way to thwart Lord Voldemort, and not immortality or riches.",
  "skills": ["Patronus Charm", "Transfiguration", "Stunning Spell", "Impediment Jinx", "Reductor Curse"],
  "biopic": "images/potter.jpg"
};

bio.display = function() {
  var header = $('#header');
  var topContacts = $('#topContacts');
  var footerContacts = $('#footerContacts');

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  header.prepend(formattedRole);
  header.prepend(formattedName);

  topContacts.append(formattedMobile);
  topContacts.append(formattedEmail);
  topContacts.append(formattedGithub);
  topContacts.append(formattedTwitter);
  topContacts.append(formattedLocation);
  footerContacts.append(formattedMobile);
  footerContacts.append(formattedEmail);
  footerContacts.append(formattedGithub);
  footerContacts.append(formattedTwitter);
  footerContacts.append(formattedLocation);

  header.append(formattedBioPic);
  header.append(formattedWelcomeMsg);
  header.append(HTMLskillsStart);

  bio.skills.forEach(function(skill) {
    var formattedSkill = HTMLskills.replace("%data%", skill);
    $('#skills').append(formattedSkill);
  });
};

var education = {
  "schools": [
    {
      "name": "Hogwarts School of Witchcraft and Wizardry",
      "location": "Highlands, Scotland",
      "degree": "Wizard" ,
      "major": "Auror",
      "dates": "2002 - 2007",
      "url": "http://harrypotter.wikia.com/wiki/Hogwarts_School_of_Witchcraft_and_Wizardry"
    }, {
      "name": "Beauxbatons Academy of Magic",
      "location": "Pyrenees, France",
      "degree": "Advance Wizard",
      "major": "Advance Auror",
      "dates": "2007 - 2009",
      "url": "http://harrypotter.wikia.com/wiki/Beauxbatons_Academy_of_Magic"
    }
  ],
  "onlineCourses": [
    {
      "title": "Potions: Advanced Potion Making",
      "school": "Castelobruxo",
      "dates": "2005",
      "url": "http://harrypotter.wikia.com/wiki/Castelobruxo"
    }
  ]
};

education.display = function() {
  var edu = $('#education');
  edu.append(HTMLschoolStart);
  var entry = $('.education-entry');

  education.schools.forEach(function(school) {
    var formattedName =
      HTMLschoolName.replace("%data%", school.name).replace("#", school.url) +
      HTMLschoolDegree.replace("%data%", school.degree);
    var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
    var formattedDate = HTMLschoolDates.replace("%data%", school.dates);

    entry.append(formattedName);
    entry.append(formattedLocation);
    entry.append(formattedDate);
    entry.append(formattedMajor);
  });

  entry.append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(course) {
    var formattedName =
      HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url) +
      HTMLonlineSchool.replace("%data%", course.school);
    var formattedDate = HTMLonlineDates.replace("%data%", course.dates);
    var formattedURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);

    entry.append(formattedName);
    entry.append(formattedDate);
    entry.append(formattedURL);
  });

};


var work = {
  "jobs": [
    {
      "employer": "Auror Office",
      "title": "Head of Auror Office",
      "location": "London",
      "dates": "2017 - Now",
      "description": "An Auror's job is to hunt down and capture Dark Wizards, once a criminal is captured they are generally handed over to the authorities."
    }, {
      "employer": "Department of Magical Law Enforcement",
      "title": "Auror",
      "location": "London",
      "dates": "2011 - 2016",
      "description": "An Auror is a highly trained specialist officer who investigate crimes involving the Dark Arts and apprehend Dark Wizards."
    }
  ]
};

work.display = function() {
  $('#workExperience').append(HTMLworkStart);
  var entry = $('.work-entry');

  work.jobs.forEach(function(job) {
    var formattedJob =
      HTMLworkEmployer.replace("%data%", job.employer) +
      HTMLworkTitle.replace("%data%", job.title);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedDate = HTMLworkDates.replace("%data%", job.dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

    entry.append(formattedJob);
    entry.append(formattedLocation);
    entry.append(formattedDate);
    entry.append(formattedDescription);
  });
};

var projects = [
  {
    "title": "The Corporeal Patronus",
    "dates": 2007,
    "description": "A corporeal Patronus is one that is fully-formed, taking the shape of bright-white, translucent animal. The specific animal forms that corporeal Patronuses take vary from person to person and reflect each individual's personality.",
    "images": [
      "images/pat1.png",
      "images/pat2.jpg",
      "images/pat3.png"
    ]
  }
];

projects.display = function() {
  $('#projects').append(HTMLprojectStart);
  var entry = $('.project-entry');

  projects.forEach(function(project) {
    var formattedProject =
      HTMLprojectTitle.replace("%data%", project.title) +
      HTMLprojectDates.replace("%data%", project.dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

    entry.append(formattedProject);
    entry.append(formattedDescription);

    project.images.forEach(function(image) {
      var formattedImage = HTMLprojectImage.replace("%data%", image);
      entry.append(formattedImage);
    });
  });
};

bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);
