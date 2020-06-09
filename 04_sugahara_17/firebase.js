// // Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyBQwYc8oKl8IoyXuluvfWoa43rh-m7FsYo",
  authDomain: "camp07-d036c.firebaseapp.com",
  databaseURL: "https://camp07-d036c.firebaseio.com",
  projectId: "camp07-d036c",
  storageBucket: "camp07-d036c.appspot.com",
  messagingSenderId: "455482938798",
  appId: "1:455482938798:web:fee1bdbed398d01414243f",
};
// Initialize Firebase
firebase.initializeApp(config);

var newPostRef = firebase.database().ref();

$("#save").on("click", function () {
  var latitude = localStorage.getItem("key");
  var longitude = localStorage.getItem("value");

  //   firebaseに送信
  newPostRef.push({
    memoLatitude: latitude,
    memoLongitude: longitude,
    memo: $("#text").val(),
  });
  $("#text").val("");
});

// firebaseから受信し表示
newPostRef.on("child_added", function (data) {
  const v = data.val();
  const k = data.key;
  const str = "<dl><dt>" + v.memo + "</dt><dd></dd></dl>";
  $("#list").append(str);
});
