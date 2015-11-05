<%@ page import="java.util.List" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.Map" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>企业信息图片</title>
    <link type="text/css" rel="stylesheet" href="static/sass/var/style.css" media="screen" type="text/css" />
</head>
<body>
  <div class="container">
      <%
          List listX = (List) request.getAttribute("img_name");
          for(int i=0;i<listX.size();i++){
              Map<String,String> vo = (Map<String, String>) listX.get(i);
      %>
      <div class="img-holder">
    <img width=100% height=100% src="static/upload/annex/<%=vo.get("img_name") %>">
  <%--<div class="img-ref">--%>
       <%--<img width="250" height="180" src="static/upload/annex/${img_name}">--%>
    <%--</div>--%>
      </div>
      <%}%>

</div>

  <%--<div class="controller">--%>
      <%--Go to: <input type="text" class="">--%>
  <%--</div>--%>
  <div class="scrolller-container">
      <div class="scroller"></div>
  </div>

  <script src='static/tw/imgjs//jquery.js'></script>
  <script src='static/tw/imgjs//TweenMax.min.js'></script>
  <script src='static/tw/imgjs//Draggable.min.js'></script>
  <script src="static/tw/imgjs//index.js"></script>
  <%--<div style="text-align:center;clear:both;position:absolute;top:0;left:260px">--%>
      <%--<script src="/gg_bd_ad_720x90.js" type="text/javascript"></script>--%>
      <%--<script src="/follow.js" type="text/javascript"></script>--%>
  <%--</div>--%>
</body>

</html>