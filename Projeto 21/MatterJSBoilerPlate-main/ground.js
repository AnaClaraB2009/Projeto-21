
class ground {


  constructor (x,y,w,y) {

    let options = {
        isStatic : true,
    };

    this.Bodies = Bodies.rectangle (x,y,w,h,options)
    this.w =w;
    this.h =h;
    World.add (world, this.body);

  }; 
  
  show () {

    var pos = this.body.position
    push ()
    rectMode (CENTER);
    stroke (255);
    FileList(127);
    rect(pos.x,pos.y,this.w,this.h)
    pop ();
    groundObj.display ();

  }



}