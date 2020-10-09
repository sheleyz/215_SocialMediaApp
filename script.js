var posts = [
  {
    name: "Reggie Wayne",
    username: "@ReggieWayne_17",
    profileImage:
      "https://images.unsplash.com/photo-1544765773-a8dce1f272f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=943&q=80",
    text: "I believe Andy Reid's face shield came with windshield wipers.",
    comments: 8,
    reposts: 9,
    likes: 199,
    verified: true
  },
  {
    name: "Tim Cook",
    username: "@tim_cook",
    profileImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    text: "Good morning! T-minus 6 hours! #AppleEvent",
    comments: 2390,
    reposts: 14100,
    likes: 104800,
    verified: true
  },
  {
    name: "Jon Acuff",
    username: "@JonAcuff",
    profileImage:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=944&q=80",
    text:
      'How old am I? <br><br> I’m, "Turn the subtitles on so I can also read this show while I’m watching it" years old.',
    comments: 9,
    reposts: 8,
    likes: 7,
    verified: false
  },
  {
    name: "Bob Goff",
    username: "@bobgoff",
    profileImage:
      "https://images.unsplash.com/photo-1552223772-76e698a05b48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    text:
      "Everyone, please find a puppy to play with for at least two hours today.",
    comments: 191,
    reposts: 2700,
    likes: 13100,
    verified: true
  },
  {
    name: "Steve Jobs",
    username: "@SteveJobs",
    profileImage:
      "https://images.unsplash.com/photo-1569769107543-e0f61bab8e02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    text: "Think different",
    comments: 5,
    reposts: 4,
    likes: 3,
    verified: false
  },
  {
    name: "Brady Shearer",
    username: "@BradyShearer",
    profileImage:
      "https://images.unsplash.com/photo-1579038773867-044c48829161?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    text:
      "Amazing season for the Raptors. Proud of these guys. Such a fun ride.",
    comments: 1,
    reposts: 0,
    likes: 30,
    verified: false
  }
];

function app() {
  var that = this;
  this.postEles = [];

  // Add Post button [adds same post every time]
  this.buttonEle = document.createElement("button");
  this.buttonEle.innerHTML = "Add Post";
  this.buttonEle.addEventListener("click", function () {
    posts.push({
      name: "Hammy",
      username: "@HammyTheSquirrel",
      profileImage:
        "https://images.unsplash.com/photo-1509987300714-11c90a6d40e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      text: "I WANT MY COOKIES!!!!!",
      comments: 10,
      reposts: 27,
      likes: 982,
      verified: false
    });
    this.index = posts.length - 1;
    that.postEles.push(new post(posts[this.index], that));
  });
  document.body.appendChild(this.buttonEle);

  for (var i = 0; i < posts.length; i++) {
    this.postEles.push(new post(posts[i], that));
  }
}

function post(obj, parent) {
  // Variables
  var that = this;
  this.profileImage = obj.profileImage;
  this.name = obj.name;
  this.username = obj.username;
  this.text = obj.text;
  this.comments = obj.comments;
  this.reposts = obj.reposts;
  this.likes = obj.likes;
  this.verified = obj.verified;

  // Creating Elements
  this.feedEle = document.createElement("div");
  this.postEle = document.createElement("div");
  this.profileImageEle = document.createElement("img");
  this.imageEle = document.createElement("div");
  this.bodyEle = document.createElement("div");
  this.contentEle = document.createElement("div");
  this.namesEle = document.createElement("div");
  this.nameEle = document.createElement("div");
  this.usernameEle = document.createElement("div");
  this.textEle = document.createElement("div");
  this.actionsEle = document.createElement("div");
  this.commentsEle = document.createElement("div");
  this.repostsEle = document.createElement("div");
  this.likesEle = document.createElement("div");
  this.shareEle = document.createElement("div");

  // Creating Font Awesome Icons
  this.commentIconEle = document.createElement("i");
  this.repostIconEle = document.createElement("i");
  this.heartIconEle = document.createElement("i");
  this.shareIconEle = document.createElement("i");
  this.verifiedIconEle = document.createElement("i");

  // delete post button
  // this.deleteButtonEle = document.createElement("button");
  // this.deleteButtonEle.innerHTML = "Delete Post";
  // this.deleteButtonEle.style.alignSelf = "flex-end";
  // this.deleteButtonEle.style.margin = "5px";
  // this.deleteButtonEle.addEventListener("click", function() {
  //   that.postEle.style.display = "none";
  //   this.index = posts.indexOf(obj);
  //   console.log(this.index);
  //   parent.postEles.splice(this.index, 1);
  //   posts.splice(this.index,1);
  //   console.log(posts);
  // });
  // this.postEle.appendChild(this.deleteButtonEle);

  // Setting Attributes
  this.commentIconEle.setAttribute("class", "far fa-comment");
  this.repostIconEle.setAttribute("class", "fas fa-retweet");
  this.heartIconEle.setAttribute("class", "far fa-heart");
  this.shareIconEle.setAttribute("class", "far fa-share-square");
  this.verifiedIconEle.setAttribute("class", "fas fa-check-circle");

  // Adding Class Lists - CSS Formatting
  this.feedEle.classList.add("feed");
  this.postEle.classList.add("post");
  this.imageEle.classList.add("imageEle");
  this.bodyEle.classList.add("bodyEle");
  this.contentEle.classList.add("content");
  this.namesEle.classList.add("names");
  this.nameEle.classList.add("name");
  this.usernameEle.classList.add("username");
  this.actionsEle.classList.add("actions");

  // Text and Images
  this.profileImageEle.src = this.profileImage;
  this.nameEle.innerHTML = this.name;
  this.usernameEle.innerHTML = this.username;
  this.textEle.innerHTML = this.text;

  if (this.comments >= 1000) {
    this.commentsEle.innerHTML = (Math.floor(this.comments/100)*100)/1000 + "K";
  } else {
    this.commentsEle.innerHTML = this.comments;
  }
  if (this.reposts >= 1000) {
    this.repostsEle.innerHTML = (Math.floor(this.reposts/100)*100)/1000 + "K";
  } else {
    this.repostsEle.innerHTML = this.reposts;
  }
  if (this.likes >= 1000) {
    this.likesEle.innerHTML = (Math.floor(this.likes/100)*100)/1000 + "K";
  } else {
    this.likesEle.innerHTML = this.likes;
  }

  // Appending and Prepending Elements
  this.commentsEle.prepend(this.commentIconEle);
  this.repostsEle.prepend(this.repostIconEle);
  this.likesEle.prepend(this.heartIconEle);
  this.shareEle.appendChild(this.shareIconEle);

  if (this.verified == true) {
    this.nameEle.appendChild(this.verifiedIconEle);
  }

  this.actionsEle.appendChild(this.commentsEle);
  this.actionsEle.appendChild(this.repostsEle);
  this.actionsEle.appendChild(this.likesEle);
  this.actionsEle.appendChild(this.shareEle);

  this.namesEle.appendChild(this.nameEle);
  this.namesEle.appendChild(this.usernameEle);

  this.contentEle.appendChild(this.namesEle);
  this.contentEle.appendChild(this.textEle);

  this.bodyEle.appendChild(this.contentEle);
  this.bodyEle.appendChild(this.actionsEle);

  this.imageEle.appendChild(this.profileImageEle);

  this.postEle.appendChild(this.imageEle);
  this.postEle.appendChild(this.bodyEle);
  this.feedEle.appendChild(this.postEle);

  // Hover Event Listeners
  this.commentsEle.addEventListener("mouseover", function () {
    that.commentIconEle.style.backgroundColor = "#E5EEF6";
    that.commentsEle.style.color = "#56A7EC";
  });
  this.commentsEle.addEventListener("mouseout", function () {
    that.commentIconEle.style.backgroundColor = "";
    that.commentsEle.style.color = "";
  });
  this.repostsEle.addEventListener("mouseover", function () {
    that.repostIconEle.style.backgroundColor = "#E7F1E9";
    that.repostsEle.style.color = "#60BE73";
  });
  this.repostsEle.addEventListener("mouseout", function () {
    that.repostIconEle.style.backgroundColor = "";
    that.repostsEle.style.color = "";
  });
  this.likesEle.addEventListener("mouseover", function () {
    that.heartIconEle.style.backgroundColor = "#F3E4E8";
    that.likesEle.style.color = "#D04166";
  });
  this.likesEle.addEventListener("mouseout", function () {
    that.heartIconEle.style.backgroundColor = "";
    that.likesEle.style.color = "";
  });
  this.shareEle.addEventListener("mouseover", function () {
    that.shareIconEle.style.backgroundColor = "#E5EEF6";
    that.shareEle.style.color = "#56A7EC";
  });
  this.shareEle.addEventListener("mouseout", function () {
    that.shareIconEle.style.backgroundColor = "";
    that.shareEle.style.color = "";
  });

  // Click Event Listeners
  this.commentsEle.addEventListener("click", function () {
    that.comments = that.comments + 1;
    if (that.comments >= 1000) {
      that.commentsEle.innerHTML = (Math.floor(that.comments/100)*100)/1000 + "K";
    } else {
      that.commentsEle.innerHTML = that.comments;
    }
    that.commentsEle.prepend(that.commentIconEle);
  });
  this.repostsEle.addEventListener("click", function () {
    that.reposts = that.reposts + 1;
    if (that.reposts >= 1000) {
      that.repostsEle.innerHTML = (Math.floor(that.reposts/100)*100)/1000 + "K";
    } else {
      that.repostsEle.innerHTML = that.reposts;
    }
    that.repostsEle.prepend(that.repostIconEle);
  });
  this.likesEle.addEventListener("click", function () {
    that.likes = that.likes + 1;
    if (that.likes >= 1000) {
      that.likesEle.innerHTML = (Math.floor(that.likes/100)*100)/1000 + "K";
    } else {
      that.likesEle.innerHTML = that.likes;
    }
    that.likesEle.prepend(that.heartIconEle);
  });

  document.body.appendChild(this.feedEle);
}

var app = new app();