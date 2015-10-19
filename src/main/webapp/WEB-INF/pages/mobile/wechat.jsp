<%--
  Created by IntelliJ IDEA.
  User: dou
  Date: 15-10-19
  Time: 下午10:04
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <title>中小企业</title>
    <!-- meta使用viewport以确保页面可自由缩放 -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- 引入 jQuery Mobile 样式 -->
    <link rel="stylesheet" href="static/tw/jquery.mobile-1.4.5.min.css">

    <!-- 引入 jQuery 库 -->
    <script src="static/tw/jquery.min.js"></script>

    <!-- 引入 jQuery Mobile 库 -->
    <script src="static/tw/jquery.mobile-1.4.5.min.js"></script>
</head>
<body>
<div data-role="page" id="pageone">
    <div data-role="panel" id="myPanel">
        <ul data-role="listview" data-autodividers="true" data-inset="true">
            <li><a href="#">Adele</a></li>
            <li><a href="#">Agnes</a></li>
            <li><a href="#">Albert</a></li>
            <li><a href="#">Billy</a></li>
            <li><a href="#">Bob</a></li>
            <li><a href="#">Calvin</a></li>
            <li><a href="#">Cameron</a></li>
            <li><a href="#">Chloe</a></li>
            <li><a href="#">Christina</a></li>
            <li><a href="#">Diana</a></li>
            <li><a href="#">Gabriel</a></li>
            <li><a href="#">Glen</a></li>
            <li><a href="#">Ralph</a></li>
            <li><a href="#">Valarie</a></li>
        </ul>
    </div>

    <div data-role="header">
        <a href="#myPanel" class="ui-btn ui-btn-inline ui-corner-all ui-shadow">菜单</a>
        <h1>甘肃中小企业</h1>
    </div>

    <div data-role="main" class="ui-content">
        <p>点击下面按钮打开面板。</p>
    </div>

    <div data-role="footer">
        <h1>页面底部</h1>
    </div>
</div>

</body>
</html>
