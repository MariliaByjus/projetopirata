class Tower {
constructor(x,y,w,h){
var options = {
 isStatic:true
}
this.w = w;
this.h = h;
this.body = Bodies.rectangle(x,y,this.w,this.h,options);
    }
}       