<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>甘肃中小微企业信息管理系统</title>
    <link href="/bolong/static/resources/wq-icon.png" rel="shortcut icon">
    <script src="static/jquery/jquery-2.1.1.js"></script>

    <style>
        * {
            box-sizing: border-box;
        }

        body * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #5abb8b;
        }

        .wrap {
            margin: 180px auto;
            background-color: transparent;
        }

        h1 {
            text-align: center;
            margin-top: 6em;
        }

        a {
            box-shadow: 0 0 6px #CCCCCC;
            text-decoration: none;
            font-family: '微软雅黑', 'Microsoft YaHei', 'Source Han Sans CN ExtraLight', 'Noto Sans S Chinese Light';
            font-size: 1.2em;
            font-weight: 100;
            border-radius: 0.2em;
            background-color: white;
            color: #666;
            padding: 0.4em;
            transition: all 200ms;
        }

        a:hover{
        color: #333;
        background-color: whitesmoke;
        }

        .wrap img {
            display: block;
            width: 300px;
            margin-bottom: 1em;
        }

        .image-background {
            position: fixed;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: -1;
        }
    </style>
</head>
<body>
<div class="wrap">
    <h1><a href="/bolong/static/index.html">“甘肃中小企业信息系统”&nbsp;&nbsp;点击进入</a></h1>
</div>

<div id="banner"></div>
<div style="width: 100%;" id="image-background" class="image-background">
    <img style="width: 100%;" src="static/resources/login-back.png" class="centerImage">
</div>
<script>
    (function ($) {
        "use strict";
        var pluginName = 'centerImage';
        var pluginController = function (element, theOptions) {

            var $container = $(element);

            var defaults = {
                imgClass: "centerImage"
            };
            // Get options saved within $container's data attributes
            var meta = $container.data(pluginName + '-options');
            var options = $.extend(defaults, meta, theOptions);

            var $img = $container.find("img." + options.imgClass);
            var tempImg = new Image();
            var init = function () {
                $img.css({
                    position: "absolute",
                    "max-width": "none",
                    "max-height": "none"
                });

                tempImg.src = $img.attr("src");
                centerImage();
                $(window).on('resize.' + pluginName + ' ' + 'orientationchange.' + pluginName, centerImage);
            };

            var getImageDim = function () {
                var $imgContainer = $container;
                var containerWidth = $imgContainer.width();
                var containerHeight = $imgContainer.height();
                var containerRatio = containerHeight / containerWidth;
                var imageWidth = tempImg.width;
                var imageHeight = tempImg.height;
                var imageRatio = imageHeight / imageWidth;
                var necontainerWidth;
                var necontainerHeight;

                if (containerRatio > imageRatio) {
                    necontainerHeight = containerHeight;
                    necontainerWidth = containerHeight / imageRatio;
                } else {
                    necontainerHeight = containerWidth * imageRatio;
                    necontainerWidth = containerWidth;
                }

                return {
                    width: necontainerWidth,
                    height: necontainerHeight,
                    left: (containerWidth - necontainerWidth ) / 2,
                    top: (containerHeight - necontainerHeight ) / 2
                };
            };

            // apply style for bg image and canvas
            var centerImage = function () {
                var dim = getImageDim();
                var styleCSS = {
                    width: dim.width,
                    height: dim.height,
                    left: dim.left,
                    top: dim.top
                };

                $img.css(styleCSS);
            };

            // Destroy the warp object without removing elements
            var destroy = function () {
                // Unbind events
                $container.off('.' + pluginName);
                $container.find('*').off('.' + pluginName);
                // Remove data
                $container.removeData(pluginName);
                $container = null;
            };

            // Wapper object
            var that = {};
            that.options = options;
            that.destroy = destroy;

            // Initialize the wrapper object to generate elements of the widget
            init();

            //
            // Store wrapper object in $container using jQuery's $.data function.
            // Usage: console.log($('#theListener').data('jqListener'));
            $container.data(pluginName, that);
        };

//
// jQuery function
//
        $.fn[pluginName] = function (options) {
            this.each(function () {
                pluginController(this, options);
            });
            // Chain-ability of jQuery objects
            return this;
        };
    })(jQuery);

    $(document).ready(function () {
//debugger;
        jQuery("#image-background").centerImage();
    });
</script>
</body>
</html>