$(document).ready(function(){
            var wd = parseInt($(".vs li").width());
            
            $("#vs .vsBox li .vsTit1").fadeIn(500);
                    $(".vsTit2").delay(500).fadeIn(500);
                    $(".vsTit3").delay(900).fadeIn(500, function(){
                        $(this).not(":animated").animate({"top": "40%"}, 500, function(){
                            $(this).delay(7100).fadeOut(500);
                        });
                    });

                    $("#vs .vsBox li .vsTit1").delay(8000).fadeOut(500);
                    $(".vsTit2").delay(7500).fadeOut(500);
                    $(".vsTit3").css("top", "50%");
            
                $(".vsBtnIcon.on span.on").delay(700).not(":animated").animate({"width": "100%"}, 8000, function(){
                        $(".vsBtnIcon.on span").css("width", "0px");
                    });
            
            $(".vsBtnIcon").removeAttr("href");
                function rAni(){
                    $("#vs .vsBox").not(":animated").animate({"margin-left" : "-100%"}, 2000, function(){ 
                        $("#vs .vsBox li .vsTit1").fadeIn(500);
                        $(".vsTit2").delay(500).fadeIn(500);
                        $(".vsTit3").delay(900).fadeIn(500, function(){
                            $(this).not(":animated").animate({"top": "40%"}, 500, function(){
                                $(this).delay(5100).fadeOut(500);
                            });
                        });

                        $("#vs .vsBox li").eq(0).appendTo($("#vs .vsBox"));
                        $("#vs .vsBox").css("margin-left", "0px");
                        $("#vs .vsBox li .vsTit1").delay(6000).fadeOut(500);
                        $(".vsTit2").delay(5500).fadeOut(500);
                        $(".vsTit3").css("top", "50%");
                        
                        $(".vsBtnIcon.on span.on").delay(700).not(":animated").animate({"width": "100%"}, 5500, function(){
                        $(".vsBtnIcon.on span").css("width", "0px");
                    });

                    });
                };
            
            var intv = setInterval(function(){
                rAni();
            }, 8500);
            
            $(".vsBtnIcon1").click(function(){
                $(this).addClass("on");
                $(this).find(".bar1").addClass("on");
                $(".bar2, .bar3").removeClass("on");
                $(this).siblings().removeClass("on");
                
                clearInterval();
                $("#vs .vsBox").not(":animated").animate({"margin-left" : "-100%"}, 2000, function(){ 
                        $("#vs .vsBox li .vsTit1").fadeIn(500);
                        $(".vsTit2").delay(500).fadeIn(500);
                        $(".vsTit3").delay(900).fadeIn(500, function(){
                            $(this).not(":animated").animate({"top": "40%"}, 500, function(){
                                $(this).delay(5100).fadeOut(500);
                            });
                        });

                        $("#vs .vsBox li").eq(0).appendTo($("#vs .vsBox"));
                        $("#vs .vsBox").css("margin-left", "0px");
                        $("#vs .vsBox li .vsTit1").delay(6000).fadeOut(500);
                        $(".vsTit2").delay(5500).fadeOut(500);
                        $(".vsTit3").css("top", "50%");
                        
                        $(".vsBtnIcon.on span.on").delay(700).not(":animated").animate({"width": "100%"}, 5500, function(){
                        $(".vsBtnIcon.on span").css("width", "0px");
                    });
            });
                
            });
                
            });