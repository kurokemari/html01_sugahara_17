function GetMap() {
  const map = new Microsoft.Maps.Map("#map", {
    credentials:
      "AkjF30aqbV5cEjEAxuMd7ockeor3Bh5lrCsZb7OVpZZL_oNabnqkz4iEn7KzzLez",
    center: new Microsoft.Maps.Location(35.6673005, 139.7140805),
    mapTypeId: Microsoft.Maps.MapTypeId.load,
    zoom: 16,
  });
  Microsoft.Maps.Events.addHandler(map, "click", GetLocation);

  // ここから  以前保存された座標にピンを立てる
  var latitude = localStorage.getItem("key");
  var longitude = localStorage.getItem("value");
  console.log(latitude);
  console.log(longitude);
  var pin = new Microsoft.Maps.Pushpin(latitude, longitude, {
    //   本当は↓にボタンによって色を変える変数を使いたい
    color: "green",
    draggable: false,
    enableClickedStyle: true,
    enableHoverStyle: true,
    visible: true,
  });
  map.entities.push(pin);
  // ここまで  以前保存された座標にピンを立てる

  //ここから　選択されているラジオボタンによってピンの色変えるための変数

  //ここまで　選択されているラジオボタンによってピンの色変えるための変数

  function GetLocation(e) {
    //種類(今回は"map")の確認
    if (e.targetType == "map") {
      //クリックした際に取得されるピクセル値を、Locationオブジェクトに変換
      var point = new Microsoft.Maps.Point(e.getX(), e.getY());
      var loc = e.target.tryPixelToLocation(point);

      //緯度と経度を変数に取得
      var latitude = Math.round(loc.latitude * 10000) / 10000;
      var longitude = Math.round(loc.longitude * 10000) / 10000;

      //取得した緯度と経度にピンをたてる
      var pin = new Microsoft.Maps.Pushpin(loc, {
        //   本当は↓にボタンによって色を変える変数を使いたい
        color: "red",
        draggable: false,
        enableClickedStyle: true,
        enableHoverStyle: true,
        visible: true,
      });
      map.entities.push(pin);
      // 取得した座標を保存
      localStorage.setItem(latitude, longitude);
    }
  }
}

// ここから　やってみたけどダメだったやつ

//     var element = document.getElementById("pin");
//     var radioNodeList = element.choose;
//     console.log(radioNodeList);
//     var ValueName = radioNodeList.value;
//     console.log(ValueName);

//     if (ValueName == "choose_inshoku") {
//       pinColer = "red";
//     } else if (ValueName == "choose_powerspot") {
//       pinColer = "yellow";
//     } else if (ValueName == "choose_dog") {
//       pinColer = "green";
//     }
//     console.log(pinColer);
//   }
// ここまで　やってみたけどダメだったやつ
