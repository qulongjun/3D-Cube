 $(function(){
            var cx=$(".cube").offset().left+$(".cube").width()/2;//获取宽度；
            var cy=$(".cube").offset().top+$(".cube").height()/2;//获取高度；
            //alert(cy)
            $(document).mousemove(function(e){
                var px= e.pageX-cx;
                var py= e.pageY-cy;
                var pz=0;
                var m=Math.sqrt(px*px+py*py+pz*pz);
                var mx=px/m;
                var my=py/m;
                var mz=pz/m;
                $(".cube").css({
                    transform:"rotate3d("+mx+","+my+","+mz+","+m+"deg)"
                })
            })

        });