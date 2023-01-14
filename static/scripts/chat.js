
var Fil1 = [];
var Fil2 = [];
var Fil3 = [];
let doc = [
  {
    Name: "Ameera Andrade",
    Specialization_1: "Counselling Psychologist",
    Specialization_2: "Child Psychologist",
  },
  {
    Name: "Jack WhiteHall",
    Specialization_1: "Clinical Psychologist",
    Specialization_3: "Queer Friendly",
  },
  {
    Name: "Melwina Gomes",
    Specialization_1: "Clinical Psychologist",
    Specialization_2: "Child Psychologist",
    Specialization_3: "Queer Friendly",
  },
  {
    Name: "Krutika Gaikwad",
    Specialization_1: "Clinical Psychologist",
    Specialization_2: "Child Psychologist",
  },
  { Name: "Lauren Thomas", Specialization_1: "Clinical Psychologist" },
  {
    Name: "Ben Buffet",
    Specialization_1: "Counselling Psychologist",
    Specialization_3: "Queer Friendly",
  },
  {
    Name: "Susan Saran",
    Specialization_1: "Clinical Psychologist",
    Specialization_3: "Queer Friendly",
  },
  {
    Name: "Quinn Lockley",
    Specialization_1: "Counselling Psychologist",
    Specialization_2: "Child Psychologist",
  },
  {
    Name: "Steven Grant",
    Specialization_1: "Clinical Psychologist",
    Specialization_2: "Child Psychologist",
  },
  {
    Name: "Maya Johnson",
    Specialization_1: "Counselling Psychologist",
    Specialization_3: "Queer Friendly",
  },
];

function mix() {
  for (let i = 0; i < doc.length; i++) {
    let element = doc[i];
    Fil1.push(element);
  }
  return Fil1;
}

function Clinical_re() {
  for (let i = 0; i < doc.length; i++) {
    let element = doc[i];
    if (element.Specialization_1 == "Clinical Psychologist") {
      Fil1.push(element);
    }
  }
  return Fil1;
}

function Counselling_re() {
  for (let i = 0; i < doc.length; i++) {
    let element = doc[i];
    if (element.Specialization_1 == "Counselling Psychologist") {
      Fil1.push(element);
    }
  }
  return Fil1;
}

function Age_re(cou) {
  if (cou == 1) {
    for (let i = 0; i < Fil1.length; i++) {
      let element = Fil1[i];
      if (element.Specialization_2 == "Child Psychologist") {
        Fil2.push(element);
      }
    }
    console.log(Fil2);
    return Fil2;
  } else {
    for (let i = 0; i < Fil1.length; i++) {
      let element = Fil1[i];
      Fil2.push(element);
    }
    console.log(Fil2);

    return Fil2;
  }
}

function Gender_re(a) {
  if (a == 1) {
    for (let i = 0; i < Fil2.length; i++) {
      let element = Fil2[i];
      if (element.Specialization_3 == "Queer Friendly") {
        Fil3.push(element);
      }
    }
    console.log(Fil3);
    return Fil3;
  } else {
    for (let i = 0; i < Fil2.length; i++) {
      let element = Fil2[i];
      Fil3.push(element);
    }
    console.log(Fil3);
    return Fil3;
  }
}

function last() {
  return Fil3;
}

var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Gets the first message
function firstBotMessage() {
  let firstMessage = `Hey, we understand things might be rough right now for you or one of your loved ones<div class="message1">Would you like us to initiate a conversation right now? </div><div class="message1">Disclaimer: This is an automated service that filters through a database. This chatbot does not act as a substitute for mental help.</div><div class="message1">For immediate help, contact hotline numbers.</div><button id="btny" class="btn">Yes</button><button id="btnn" class="btn">No</button>`;
  document.getElementById("res").innerHTML =
    '<p class="message1"><span>' + firstMessage + "</span></p>";

  let yes = document.getElementById("btny");
  yes.addEventListener("click", function (event) {
    let botHtml =
      '<p class="message1"><span>' +
      "We understand you'd want to talk to someone at the moment. " +
      "</span></p>" +
      `<p class="message1">Problems:-</p><div class="message1"><li><input type="checkbox" name="co">I have been feeling tired and sad lately.</li><li><input type="checkbox" name="co">I face a lack of motivation in doing things.</li><li><input type="checkbox" name="cl">I've been a part of stressful/traumatic events recently.</li><li><input type="checkbox" name="clco">I've been having panic attacks.</li><li><input type="checkbox" name="cocl">I've been havaing trouble focusing/concentrating on stuff.</li><li><input type="checkbox" name="clco">I've been havaing trouble sleeping.</li><li><input type="checkbox" name="cocl">My mood is not stable these days.</li><li><input type="checkbox" name="clco">I've been having intrusive thoughts.</li><li><input type="checkbox" name="clco">I've lost my appetite.</li><li><input type="checkbox" name="cocl">I get easily irritated these days.</li><li><input type="checkbox" name="cocl">I feel like I cannot handle what's going on in my life right now.</li><li><input type="checkbox" name="co">I've suffered a loss and i'm grieving.</li><li><input type="checkbox" name="clco">I tend to forget things quickly these days.</li><li><input type="checkbox" name="cocl">I feel like drinking/smoking will make my problems go away.</li><li><input type="checkbox" name="cocl">I've been wanting to harm myself lately.</li><li><input type="checkbox" name="co">I've been having suicidal thoughts lately.</li></div><button id="st" class="btn">Submit</button>`;
    document.getElementById("res").innerHTML = botHtml;

    let Submit = document.getElementById("st");
    Submit.addEventListener("click", function (event) {
      var co = document.getElementsByName("co");
      var cl = document.getElementsByName("cl");
      var cocl = document.getElementsByName("cocl");
      var clco = document.getElementsByName("clco");
      var Counselling = 0;
      var Clinical = 0;
      for (let checkbox of co) {
        if (checkbox.checked) {
          Counselling++;
        }
      }

      for (let checkbox of cl) {
        if (checkbox.checked) {
          Clinical++;
        }
      }

      for (let checkbox of cocl) {
        if (checkbox.checked) {
          Counselling++;
          Clinical = 0.5 + Clinical;
        }
      }

      for (let checkbox of clco) {
        if (checkbox.checked) {
          Clinical++;
          Counselling = 0.5 + Counselling;
        }
      }

      console.log("Counselling :" + Counselling);
      console.log("Clinical :" + Clinical);
      var ty = 0;
      if (Counselling > Clinical) {
        Counselling_re();
      } else if (Counselling < Clinical) {
        Clinical_re();
      } else {
        mix();
      }

      Age();
    });
  });

  let no = document.getElementById("btnn");
  no.addEventListener("click", function (event) {
    let botHtml = `<p class="message1"><span> We hope things get better. If you or anyone around you is feeling suicidal, please contact suicide hotlines immediately-<br><span>iCall: 9152987821<br><a href="https://icallhelpline.org" target="_blank">Go To Icallhelpline</a></span><br><span>AASRA: 9820466726<br><a href="http://www.aasra.info/helpline.html" target="_blank">Go To AASRA</a></span></span></p>`;
    document.getElementById("res").innerHTML = botHtml;
    yes.style.display = "none";
    // no.style.display = "none";
  });

  let time = getTime();

  $("#chat-timestamp").append(time);
  //document.getElementById("userInput").scrollIntoView(false);
  //<input type = "checkbox"></input>
}

firstBotMessage();

function Age() {
  let botHtml = `<p class="botText"><span>Select the Age:</span></p><button id="zerop" class="btn">0 - 18</button><br><button id="eighteenp" class="btn">18 - 30</button><br><button id="thirtyp" class="btn">30 - 45</button><br><button id="fourtyvp" class="btn"> 45+ </button><br><button id="anotsay" class="btn"> Prefer Not To Say</button>`;
  document.getElementById("res").innerHTML = botHtml;

  let zerop = document.getElementById("zerop");
  zerop.addEventListener("click", function (event) {
    Age_re(1);
    selgender();
  });

  let eighteenp = document.getElementById("eighteenp");
  eighteenp.addEventListener("click", function (event) {
    Age_re(0);
    selgender();
  });

  let thirtyp = document.getElementById("thirtyp");
  thirtyp.addEventListener("click", function (event) {
    Age_re(0);
    selgender();
  });

  let fourtyvp = document.getElementById("fourtyvp");
  fourtyvp.addEventListener("click", function (event) {
    Age_re(0);
    selgender();
  });

  let anotsay = document.getElementById("anotsay");
  anotsay.addEventListener("click", function (event) {
    Age_re(0);
    selgender();
  });
}

function selgender() {
  let gender;
  let botHtml = `<p class="botText"><span>Select the Gender:</span></p><button id="male" class="btn">Male</button><br><button id="female" class="btn">Female</button><br><button id="nonb" class="btn">Non Binary</button><br><button id="gnotsay" class="btn"> Prefer Not To Say</button>`;
  document.getElementById("res").innerHTML = botHtml;

  let male = document.getElementById("male");
  male.addEventListener("click", function (event) {
    Gender_re(0);
    mode();
  });

  let female = document.getElementById("female");
  female.addEventListener("click", function (event) {
    Gender_re(0);
    mode();
  });

  let nonb = document.getElementById("nonb");
  nonb.addEventListener("click", function (event) {
    Gender_re(1);
    mode();
  });

  let gnotsay = document.getElementById("gnotsay");
  gnotsay.addEventListener("click", function (event) {
    Gender_re(0);
    mode();
  });
}

function mode() {
  let botHtml = `<p class="message1"><span>Mode of Therapy:</span></p><br><button id="on" class="btn">Online</button><br><button id="of" class="btn">Offline</button>`;
  document.getElementById("res").innerHTML = botHtml;

  let Online = document.getElementById("on");
  Online.addEventListener("click", function (event) {
    Onli();
  });


  let Offline = document.getElementById("of");
  Offline.addEventListener("click", function (event) {
    offline();
  });
}

function offline() {
  let botHtml = `<p class="message1"><span>We currently are planning to expand this algorithm to sort by location for a better experience. For offline psychologists near you tailored by OUR algorithm, check back in some time.</span></p><br><a class="message1" href="https://www.google.com/search?q=psychologist+near+me&oq=psychologi&aqs=chrome.1.69i57j0i271l3.83245j0j7&sourceid=chrome&ie=UTF-8" target="_blank">Psychologist Near Me</a>`;
  document.getElementById("res").innerHTML = botHtml;
}

function Onli() {
  var docsel = last();
  // console.log(doc);
  var sel = docsel[Math.floor(Math.random() * docsel.length)];
  // console.log(sel);
  var name = sel.Name;
  var sp1 = sel.Specialization_1;
  var sp2 = sel.Specialization_2;
  var sp3 = sel.Specialization_3;
  // console.log(name + sp1 +sp2 + sp3); 

  let botHtml = `<p class="message1"><span>Name : ` + name + `<br>Specialization_1 : ` + sp1 + `<br>Specialization_2 : ` + sp2 + `<br>Specialization_3 : ` + sp3 + `</span></p><button id="on" class="btn">Consult The Psychologist</button><br><button id="of" class="btn">Talk to someone Else</button>`;
  document.getElementById("res").innerHTML = botHtml;
}

// Retrieves the response
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = "I love Code Palace!";
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  //Uncomment this if you want the bot to respond to this buttonSendText event
  // setTimeout(() => {
  //     getHardResponse(sampleText);
  // }, 1000)
}

function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText("Heart clicked!");
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});
const baseurl = "http://localhost:8383";
async function send(e) {
  e.preventDefault();
  const res = await fetch(baseurl, {
    method: "GET",
  });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className = " active";
}
