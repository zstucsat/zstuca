
$(function(){
        var select1=document.getElementById('select');
        var select2=document.getElementById('selectt');
        select1.onchange=function() {
            var index=this.selectedIndex;
            if(index==0){
                select2.selectedIndex = 0;
                for( var i = 0; i <=4; i++ ){
                    select2.options[i].disabled=true;
                }
            }else{
                for( var i = 0; i <=4; i++ ){
                    select2.options[i].disabled=false;
                }
                select2.options[index].disabled=true;
            }
            $('select').formSelect();
        }
        select2.onchange=function() {
            var index=this.selectedIndex;
            if(select1.selectedIndex==0){
                alert("请选择第一志愿");
                return;
            }
            for( var i = 1; i <=4; i++ ){
                select1.options[i].disabled=false;
            }
            if(index!=0){
                select1.options[index].disabled=true;
            }
            $('select').formSelect();
        }
        $(document).ready(function () {
            $('select').formSelect();
        });
        //性别选择
        var $female = $(".genderbox.female"),
        $male = $(".genderbox.male"),
        $submit = $("#submit");
        console.log($submit);
        $female.on("click", function () {
            console.log(123);
            var $on = $(this).find(".icon.on");
            var $off = $(this).find(".icon.off");
            $on.removeClass("hide");
            $off.addClass("hide");
            $male.find(".icon.on").addClass("hide");
            $male.find(".icon.off").removeClass("hide");
        })
        $male.on("click", function () {
            var $on = $(this).find(".icon.on");
            var $off = $(this).find(".icon.off");
            $on.removeClass("hide");
            $off.addClass("hide");
            $female.find(".icon.on").addClass("hide");
            $female.find(".icon.off").removeClass("hide");
        })
        
})

 /* 鼠标特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
     $("body").click(function(e) {
         var a = new Array("❤富强❤","❤民主❤","❤文明❤","❤和谐❤","❤自由❤","❤平等❤","❤公正❤","❤法治❤","❤爱国❤","❤敬业❤","❤诚信❤","❤友善❤");
         var $i = $("<span></span>").text(a[a_idx]);
         a_idx = (a_idx + 1) % a.length;
         var x = e.pageX,
         y = e.pageY;
         $i.css({
             "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
             "top": y - 20,
             "left": x,
             "position": "absolute",
             "font-weight": "bold",
             "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
         });
         $("body").append($i);
         $i.animate({
             "top": y - 180,
             "opacity": 0
         },
         1500,
         function() {
             $i.remove();
         });
     });
 });

!function(){

function n(n,e,t){

return n.getAttribute(e)||t

}

function e(n){

return document.getElementsByTagName(n)

}

function t(){

var t=e("script"),o=t.length,i=t[o-1];

return{

l:o,z:n(i,"zIndex",-1),o:n(i,"opacity",.5),c:n(i,"color","0,0,0"),n:n(i,"count",99)

}

}

function o(){

a=m.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,

c=m.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight

}

function i(){

r.clearRect(0,0,a,c);

var n,e,t,o,m,l;

s.forEach(function(i,x){

for(i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>a||i.x<0?-1:1,i.ya*=i.y>c||i.y<0?-1:1,r.fillRect(i.x-.5,i.y-.5,1,1),e=x+1;e<u.length;e++)n=u[e],

null!==n.x&&null!==n.y&&(o=i.x-n.x,m=i.y-n.y,

l=o*o+m*m,l<n.max&&(n===y&&l>=n.max/2&&(i.x-=.03*o,i.y-=.03*m),

t=(n.max-l)/n.max,r.beginPath(),r.lineWidth=t/2,r.strokeStyle="rgba("+d.c+","+(t+.2)+")",r.moveTo(i.x,i.y),r.lineTo(n.x,n.y),r.stroke()))

}),

x(i)

}

var a,c,u,m=document.createElement("canvas"),

d=t(),l="c_n"+d.l,r=m.getContext("2d"),

x=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||

function(n){

window.setTimeout(n,1e3/45)

},

w=Math.random,y={x:null,y:null,max:2e4};m.id=l,m.style.cssText="position:fixed;top:0;left:0;z-index:"+d.z+";opacity:"+d.o,e("body")[0].appendChild(m),o(),window.onresize=o,

window.onmousemove=function(n){

n=n||window.event,y.x=n.clientX,y.y=n.clientY

},

window.onmouseout=function(){

y.x=null,y.y=null

};

for(var s=[],f=0;d.n>f;f++){

var h=w()*a,g=w()*c,v=2*w()-1,p=2*w()-1;s.push({x:h,y:g,xa:v,ya:p,max:6e3})

}

u=s.concat([y]),

setTimeout(function(){i()},100)

}();
