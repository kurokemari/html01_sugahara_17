<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>会員登録・退会ページ</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <style>div{padding: 10px;font-size:16px;}</style>
</head>
<body>

<!-- Head[Start] -->
<header>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
    <div class="navbar-header"><a class="navbar-brand" href="select.php">登録者確認</a></div>
    </div>
  </nav>
</header>
<!-- Head[End] -->

<!-- Main[Start] -->
<!-- ここからinsert.phpにデータを送ります -->
<form method="post" action="insert.php">
  <div class="jumbotron">
   <fieldset>
    <legend>登録</legend>
     <label>お名前：<input type="text" name="name"></label><br>
     <label>ユーザーID：<input type="text" name="userID"></label><br>
     <label>パスワード：<input type="password" name="password"></label><br>
     <label>Email：<input type="text" name="email"></label><br>
     <input type="submit" value="登録">
    </fieldset>
  </div>
</form>
<!-- Main[End] -->

<!-- ここからupdate.phpにデータを送ります -->
<form method="post" action="update.php">
  <div class="jumbotron">
   <fieldset>
    <legend>退会</legend>
     <label>ユーザーID：<input type="text" name="userID"></label><br>
     <label>パスワード：<input type="password" name="password"></label><br>
     <input type="submit" value="退会">
    </fieldset>
  </div>
</form>
<!-- Main[End] -->


</body>
</html>
