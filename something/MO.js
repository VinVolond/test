var Metoddelpopolam=function(a,b){
    cnt++;
    

    var newa=a,newb=b;
    var x=(newa+newb)/2;
    var y=newa+(newb-newa)/4;
    var z=newb-(newb-newa)/4;
    if (b-a < epsilon){
        console.log("thets the end");
        console.log("a=", newa, "b=",newb, "extremum=",Myfunction(newa));
        return 0;
    }
    console.log("шаг",cnt);
    console.log("x=",x , "y=", y , "z=", z);
    
    if(Myfunction(y)>Myfunction(x) && Myfunction(x)>Myfunction(z)){
        newa=x;
        console.log("f(y)>f(x)>f(z)","f(y)=", Myfunction(y),"f(x)=",Myfunction(x),"f(z)=",Myfunction(z));
        Metoddelpopolam(newa,newb);
    }
    if(Myfunction(y)<Myfunction(x) && Myfunction(x)<Myfunction(z)){
        newb=x;
        console.log("f(y)<f(x)<f(z)","f(y)=", Myfunction(y),"f(x)=",Myfunction(x),"f(z)=",Myfunction(z));

        Metoddelpopolam(newa,newb);
    }
    if(Myfunction(y)>Myfunction(x) && Myfunction(x)<Myfunction(z)){
        newb=z;
        newa=y;
        console.log("f(y)>f(x)<f(z)","f(y)=", Myfunction(y),"f(x)=",Myfunction(x),"f(z)=",Myfunction(z));

        Metoddelpopolam(newa,newb);
    }
    if(Myfunction(y)<Myfunction(x) && Myfunction(x)>Myfunction(z)){
        newb=x;
        console.log("f(y)<f(x)>f(z)")
        console.log("f(x) плохой");
    }
    return 0;
}
var MetodGold = function(a,b){
    
    cnt++;
    var newa=a,newb=b;
    var y=a+(3-Math.sqrt(5))/2*(newb-newa);
    var z=a+(Math.sqrt(5)-1)/2*(newb-newa);
    if (newb-newa<epsilon){
        console.log("thets the end");
        console.log("a=", newa, "b=",newb, "extremum=",Myfunction(newa));
        return 0;
    }
    console.log("шаг",cnt);
    console.log("y=", y , "z=", z);
    if (Myfunction(y)>Myfunction(z)){
        newa=y;
        console.log("f(y)>f(z)","f(y)=", Myfunction(y),"f(z)=",Myfunction(z));
        MetodGold(newa,newb);
    }
    if(Myfunction(y)<Myfunction(z)){
        newb=z;
        console.log("f(y)<f(z)","f(y)=", Myfunction(y),"f(z)=",Myfunction(z));
        MetodGold(newa,newb);
    }
}
var MetodKvadrat = function(a,b){

}

var ChoseX1X2X3=function(x,step){
    var x1=x;
    var x2=step+x;
    var x3=x-step;
    console.log(x1,Myfunction(x1));
    console.log(x2,Myfunction(x2));
    console.log(x3,Myfunction(x3));
    var fmix=Myfunction(x1);
    var xmix=x;
    if(fmix>Myfunction(x2)){
        fmix=Myfunction(x2);
        xmix=x2; 
    }
    if(fmix>Myfunction(x3)){
        fmix=Myfunction(x3);
        xmix=x3;
    }
    console.log(fmix);
    console.log(xmix);
    Systemauravn(x1,x2,x3,xmix,fmix);
}
var Systemauravn=function(x1,x2,x3,xmin,fmin){
    cnt++;
    console.log("шаг",cnt);
    var first = [x1*x1,x1,1,-Myfunction(x1)];
    var second = [x2*x2,x2,1,-Myfunction(x2)];
    var third = [x3*x3,x3,1,-Myfunction(x3)];
 //   console.log(Myfunction(x1));
   // console.log(Myfunction(x2));
 //   console.log(Myfunction(x3));
    var opredilitel=first[0]*second[1]*third[2]+first[1]*second[2]*third[0]+first[2]*second[0]*third[1]-first[2]*second[1]*third[0]-first[1]*second[0]*third[2]-first[0]*second[2]*third[1];
    console.log(opredilitel);
    var opredilitel1=first[3]*second[1]*third[2]+first[1]*second[2]*third[3]+first[2]*second[3]*third[1]-first[2]*second[1]*third[3]-first[1]*second[3]*third[2]-first[3]*second[2]*third[1];
    var opredilitel2=first[0]*second[3]*third[2]+first[3]*second[2]*third[0]+first[2]*second[0]*third[3]-first[2]*second[3]*third[0]-first[3]*second[0]*third[2]-first[0]*second[2]*third[3];
    var opredilitel3=first[0]*second[1]*third[3]+first[1]*second[3]*third[0]+first[3]*second[0]*third[1]-first[3]*second[1]*third[0]-first[1]*second[0]*third[3]-first[0]*second[3]*third[1];
    xshtrih=-opredilitel2/(opredilitel1*2);
    console.log("xshtrih=",xshtrih);
    var a=opredilitel1/opredilitel;
    var b=opredilitel2/opredilitel;
    var c=opredilitel3/opredilitel;

    var uslovie1=Math.abs(c-b*b/(4*a));
    console.log(uslovie1);    

    var uslovie2=Math.abs(xmin-xshtrih);
    if(uslovie2>epsilon){
        console.log("uslovie>epsilon");
        ChoseX1X2X3(xshtrih,0.1);
    }
    else return console.log("xstar=",xshtrih);
}
var Myfunction= function(x){
    return (2*(x-7/20)+16/x);
}
// ========================================================================================================
//--===============-----=============-=-=-=-=-=-=-==-=-=-===-======================================================
var a = 0,b=10,epsilon=0.01;
console.log("a=",a,"b=",b);
var cnt=0;
var d;
//d = Metoddelpopolam(a,b);
cnt=0;
//d = MetodGold(a,b);
//Systemauravn(5,6,7);
ChoseX1X2X3(5,0.1);