<?php

//  「呪文を唱える」のボタンが押されたら
   if($_POST["answer"]){
      $num = mt_rand(1,6);
      $result="";
      $img="";
      if($num==1){
         $result = "バルス";
         $img = '<img src="http://localhost/05_sugahara_17/img/barusu.jpeg">';
      }else if($num==2){
         $result = "ヤヴァアアアアアス";
         $img = '<img src="http://localhost/05_sugahara_17/img/yabasu.jpeg">';
      }else if($num==3){
         $result = "ワロス";
         $img = '<img src="http://localhost/05_sugahara_17/img/warosu.jpeg">';
      }else if($num==4){
         $result = "カワユス";
         $img = '<img src="http://localhost/05_sugahara_17/img/kawayusu.jpeg">';
      }else if($num==5){
         $result = "イタソス";
         $img = '<img src="http://localhost/05_sugahara_17/img/itasosu.jpeg">';
      }else if($num==6){
         $result = "カナシス";
         $img = '<img src="http://localhost/05_sugahara_17/img/kanasisu.jpeg">';
      }
   };
      echo "あなたの唱えた呪文：$result<br>";
      echo "$img<br>";
      echo "あなたが笑えば世界は平和に！";
?>