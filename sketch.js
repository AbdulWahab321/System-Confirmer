var DETECTER=1;
var FIRSTBG=2;
var CDI=3
var com,mobile,mobile1,computer,nox,blueStacks,gam,blueStacks1
var loading
var NOInternet
var ED
var NameW = "Not known";
var init=false
var init1=false
var checkedSystem=4
var OSName = "Unknown";
async function preload(){
first=loadImage("carBg.png");
bgmp=loadSound("bgmp.mp3");
insImg=loadImage("backGround.jpg");
}
async function setup(){
 
  createCanvas(900, 500);

  gameState=FIRSTBG
  
  mobile=createButton("Mobile")
  mobile.position(150,150)
  mobile.size(200,50)
  com=createButton("PC")
  com.position(500,150)
  com.size(200,50);

  back=createButton("<< Back")
  back.position(20,440)
  back.size(100,40)
  back.hide();
  nox=createButton("Download NOX>")
  nox.position(40,40)
  nox.size(200,30)
  blueStacks=createButton("Download BlueStacks 4>")
  blueStacks.position(700,40)
  blueStacks.size(200,30)


  blueStacks1=createButton("Download BlueStacks 5>")
  blueStacks1.position(370,40)
  blueStacks1.size(200,30)

  gam=createButton("Download Street Racer PC version>")
  gam.position(305,140)
  gam.size(300,50)

  blueStacks.hide();
  blueStacks1.hide();
  nox.hide();
  gam.hide();
  computer=createButton("Download PC version")
  mobile1=createButton("Download Mobile version")
  mobile1.position(150,300)
  mobile1.size(200,50)
  computer.position(500,300)
  computer.size(200,50);
  com.hide();
  mobile.hide();
  computer.hide();
  mobile1.hide();
  say()
}
async function draw(){
 if(navigator.onLine){
   


  if(frameCount-84===0){
    bgmp.play()
    }

    if(gameState===checkedSystem){
      background(insImg)
      fill("white")
      text("Checked Your System",150,50)
      var bit="64 bit"
      if (navigator.appVersion.indexOf("Win") != -1) {
        
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1){ 
   OSName="Windows 10";
}
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1){ 
   OSName="Windows 8";
}
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1){
   OSName="Windows 7";
  }
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1){
   OSName="Windows Vista";
  }
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1){
   OSName="Windows XP";
  }
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1){
   OSName="Windows 2000";
  }
  
  if (window.navigator.userAgent.indexOf("Win64") != -1){
    bit="64 bit"
   }

   if (window.navigator.userAgent.indexOf("Win32") != -1){
    bit="32 bit"
   }

        NameW =
        "Windows OS";
        fill("white")
        textSize(55)
          text("Your System: PC",150,170)
          text("Your OS: "+OSName+" "+bit,150,230)
        
        if(frameCount-300===0){
          gameState=ED
        }
      }
      if (navigator.appVersion.indexOf("Mac") != -1) {
        NameW =
        "MacOS";
          
          text("Your System: PC",150,150)
          text("Your OS: "+NameW,150,240)
        
        if(frameCount-300===0){
          gameState=ED
        }
      }
      if (navigator.appVersion.indexOf("X11") != -1) {
        NameW =
        "UNIX OS";
       
          text("Your System: PC",150,150)
          text("Your OS: "+NameW,150,230)
        
        if(frameCount-300===0){
          gameState=ED
        }
      }
      if (navigator.appVersion.indexOf("Linux") != -1) {
        NameW =
        "Linux OS";
        
          text("Your System: PC",150,150)
          text("Your OS: "+NameW,150,230)
        
        if(frameCount-300===0){
          gameState=ED
        }
      }
      if (navigator.userAgent.indexOf("Android") != -1) {
        NameW =
        "Android OS";
       
          text("Your System: Mobile",180,150)
          text("Your OS: "+NameW,150,230)
          
        
        if(frameCount-300===0){
          location.assign("https://abdulwahab321.github.io/Street-Racer-Async-Preload-Function-Mobile-Edition/")
        }
      }
      if (navigator.userAgent.indexOf("like Mac") != -1) {
        NameW =
        "iOS";
        
          text("Your System:Mobile ",180,150)
          text("Your OS: "+NameW,150,230)
        
        if(frameCount-300===0){
          location.assign("https://abdulwahab321.github.io/Street-Racer-Async-Preload-Function-Mobile-Edition/")
        }
    }
    textSize(60)
    fill("red")
    text("Please Wait....",130,400)
    textSize(40)
    fill("white")

  }
  if(gameState===ED){
  clear();
  
  resizeCanvas(800, 500)
  background(insImg);

  Pe=createButton("Police Chase")
  Pe.position(10,50)
  Pe.size(100,50)

  SPe=createButton("Normal Edition")
  SPe.position(350,50)
  SPe.size(100,50)

  Pe.mousePressed(()=>{
    init=true
    
  })
 
  SPe.mousePressed(()=>{
    init1=true
    
  })

  }
  if(init===true){
    textSize(50)
    text("Initializing....",100,270)
    if(frameCount%150===0){
      location.assign("https://abdulwahab321.github.io/Street-Racer-Police-Chase/")
    }
  }

  if(init1===true){
    text("Initializing....",100,270)
    if(frameCount%150===0){
      location.assign("https://abdulwahab321.github.io/Street-Racer-10.5/")
    }
  }
if(gameState===CDI){
  
  clear();
  
  resizeCanvas(1100,600)
  background(insImg);
  fill("white")
  textSize(30)
  text("First to download Street Racer Game for PC You will be needed Android Emulator",10,30)
  blueStacks.show();
  blueStacks1.show();
  nox.show();
  gam.show();
  back.show();
  back.mousePressed(()=>{
    gameState=DETECTER
  })
  blueStacks.mousePressed(()=>{
    open("https://cloud.bluestacks.com/api/getdownloadnow?platform=win&win_version=7&mac_version=&client_uuid=408476a6-5ba3-4fdd-bf0c-3316f0e19e1c&app_pkg=&platform_cloud=%257B%2522description%2522%253A%2522Chrome%252089.0.4389.114%2520on%2520Windows%2520Server%25202008%2520R2%2520%252F%25207%252064-bit%2522%252C%2522layout%2522%253A%2522Blink%2522%252C%2522manufacturer%2522%253Anull%252C%2522name%2522%253A%2522Chrome%2522%252C%2522prerelease%2522%253Anull%252C%2522product%2522%253Anull%252C%2522ua%2522%253A%2522Mozilla%252F5.0%2520(Windows%2520NT%25206.1%253B%2520Win64%253B%2520x64)%2520AppleWebKit%252F537.36%2520(KHTML%252C%2520like%2520Gecko)%2520Chrome%252F89.0.4389.114%2520Safari%252F537.36%2522%252C%2522version%2522%253A%252289.0.4389.114%2522%252C%2522os%2522%253A%257B%2522architecture%2522%253A64%252C%2522family%2522%253A%2522Windows%2520Server%25202008%2520R2%2520%252F%25207%2522%252C%2522version%2522%253A%25227%2522%257D%257D&preferred_lang=en&utm_source=Google&utm_medium=CPC&gaCookie=GA1.2.2144269951.1617767977&gclid=Cj0KCQjwsLWDBhCmARIsAPSL3_3z0artfKAsZuyIYLqIMvMfn8sIIe31dvm_IziieKq4PpCnzJL6zXIaAo_AEALw_wcB&clickid=&msclkid=&affiliateId=&offerId=&transaction_id=&aff_sub=&first_landing_page=https%253A%252F%252Fwww.bluestacks.com%252F&referrer=https%253A%252F%252Fwww.google.com%252F&download_page_referrer=&utm_campaign=aw-ded-ww-tier3-eng-bluestacks5-brand&exit_utm_campaign=homepage-dl-button-head-en&incompatible=false")
  })

  nox.mousePressed(()=>{
    open("https://www.bignox.com/en/download/fullPackage?beta")
  })

  blueStacks1.mousePressed(()=>{

    open("https://cloud.bluestacks.com/api/getdownloadnow?platform=win&win_version=7&mac_version=&client_uuid=1543aa8a-0c84-4f99-8d44-6487d1325e0e&app_pkg=&platform_cloud=%257B%2522description%2522%253A%2522Chrome%252089.0.4389.114%2520on%2520Windows%2520Server%25202008%2520R2%2520%252F%25207%252064-bit%2522%252C%2522layout%2522%253A%2522Blink%2522%252C%2522manufacturer%2522%253Anull%252C%2522name%2522%253A%2522Chrome%2522%252C%2522prerelease%2522%253Anull%252C%2522product%2522%253Anull%252C%2522ua%2522%253A%2522Mozilla%252F5.0%2520(Windows%2520NT%25206.1%253B%2520Win64%253B%2520x64)%2520AppleWebKit%252F537.36%2520(KHTML%252C%2520like%2520Gecko)%2520Chrome%252F89.0.4389.114%2520Safari%252F537.36%2522%252C%2522version%2522%253A%252289.0.4389.114%2522%252C%2522os%2522%253A%257B%2522architecture%2522%253A64%252C%2522family%2522%253A%2522Windows%2520Server%25202008%2520R2%2520%252F%25207%2522%252C%2522version%2522%253A%25227%2522%257D%257D&preferred_lang=en&utm_source=&utm_medium=&gaCookie=GA1.2.2144269951.1617767977&gclid=Cj0KCQjwsLWDBhCmARIsAPSL3_3z0artfKAsZuyIYLqIMvMfn8sIIe31dvm_IziieKq4PpCnzJL6zXIaAo_AEALw_wcB&clickid=&msclkid=&affiliateId=&offerId=&transaction_id=&aff_sub=&first_landing_page=https%253A%252F%252Fwww.bluestacks.com%252F&referrer=https%253A%252F%252Fwww.google.com%252F&download_page_referrer=&utm_campaign=homepage-dl-button-en&exit_utm_campaign=bluestacks5-page-robusta-en&incompatible=false")
  })
  text("After Downloading any of android Emulators Download The Game",75,100)
  textSize(40)
  fill("red")
  stroke("white")
  strokeWeight(3)
  text("Please Make sure you have any Android Emulators Installed..",10,240)
  textSize(60)
  fill("yellow")
  stroke("white")
  strokeWeight(3)
  text("**Thank You for Installing My Game**",60,320)

  gam.mousePressed(()=>{
    open("https://s3.amazonaws.com/gonativeio/static/60718b8fb70fce7ed083b8a4/app-release.apk")
    
    
  })
}
else{
  blueStacks.hide();
  blueStacks1.hide();
  nox.hide();
  gam.hide();
  back.hide();
}

if(gameState===DETECTER){
  resizeCanvas(900, 500);
  background(first)
  textSize(50)
  fill("yellow")
  stroke("white")
  strokeWeight(4)
  text("**Thank You for Playing My Game**",40,420)
  fill("white")
  textSize(40)
  noStroke();
  textSize(55)
  text("Checking Your System...",100,50);
  textSize(40)

  if (navigator.appVersion.indexOf("Win") != -1) {
    NameW =
    "Windows OS";
    if(frameCount-100===0){
    
      gameState=checkedSystem
    }
  }
  if (navigator.appVersion.indexOf("Mac") != -1) {
    NameW =
    "MacOS";
    if(frameCount-100===0){
    
      gameState=checkedSystem
        }

  }
  if (navigator.appVersion.indexOf("X11") != -1) {
    NameW =
    "UNIX OS";
    if(frameCount-100===0){
      gameState=checkedSystem
    }

  }
  if (navigator.appVersion.indexOf("Linux") != -1) {
    NameW =
    "Linux OS";
    if(frameCount-100===0){
      gameState=checkedSystem
    }

  }
  if (navigator.userAgent.indexOf("Android") != -1) {
    NameW =
    "Android OS";
    if(frameCount-100===0){
      gameState=checkedSystem
      
    }

  }
  if (navigator.userAgent.indexOf("like Mac") != -1) {
    NameW =
    "iOS";
    if(frameCount-100===0){
      gameState=checkedSystem
    }

  }






  computer.mousePressed(()=>{
     gameState=CDI
  })

 mobile.mousePressed(()=>{


  location.assign("https://abdulwahab321.github.io/Street-Racer-Async-Preload-Function-Mobile-Edition/")
 })

  
 com.mousePressed(()=>{


 gameState=ED

})

mobile1.mousePressed(()=>{
  location.assign("https://u6512343.ct.sendgrid.net/ls/click?upn=9JS-2F714wtrENuLalHfV-2BI9UsKKdIAuBCevyxZgAwUD9TRHF5DcdyX6mAzNKk-2Ffdc5tOk-2FAU6NIma7gwY6SDe1QDbrKMMpbr1k9OrvNA49S0TlIKdz7AG4hmQ1Tzf8Mh-2Fb-2FXP7S-2BPp0kmlHY6LmbhoWJXfy6pfib9ehLvGew4z1hQIuXwz9yggbzatyBBXylB5dTTqDGmDIBFn1-2Fia3d8a3ATte079ppQRf5pM-2FaTNEXQGg5JfsJeF3cHOS3suDbqeSui4QmfdjJMmJ5RdJqDhQ-3D-3DaFeA_-2FqHO02MTbX8WX06kR-2FYqMwcSu-2FUJVHYem3l-2Fhp6EqyF-2FCJYd1Vjv5WFKIzWrXzlVmSVUoPX7WNVWMKhGc55TsqV-2FlrSM0JcStpewovZ-2BOvOB4oskfno2kyQpfIytsTPth3q61vx6B-2BhM9MUSzSzI7-2FihLAsh3-2F0WaSoERBC6rIqTi1ri7EMyqpzIFVaH52koMZOGmUt8UbqAe24lZWS2uhEqP7nYqEjMnI9U1EyuMAExW-2BQEbPJOY-2B13k2XZVxcZZNJSno4Syx4C29ambNgVCUN3YterQtTSesYnSmhsc2YQB9njsNUts8-2BGLy0r-2F94WKZEaUkSj9xBX2KDbaBjh3Qk1HXCZu4PMabh1ZvcuKUUSPXN1kmMPp6m5-2B7dB2ul-2B")
})

 }
 else {
  com.hide();
  mobile.hide();
  computer.hide();
  mobile1.hide();
  
 }

  
  



  if(gameState===FIRSTBG){
   
 


    
    textSize(40)
    fill("white")
    text('Welcome To Street Racer Game System Cofirmer',10,50)
    textSize(30)
    text('Loading.........Please Wait',150,400)

  
  
  }





 

 


if(frameCount-10===0){
  gameState=DETECTER;
}
if(gameState===checkedSystem){
    textSize(50)
  if (navigator.appVersion.indexOf("Win") != -1) {
    NameW =
    "Windows OS";
    if(frameCount-100===0){
    
      text("Your System:PC",150,50)
      text("Your OS:"+NameW,150,80)
    }
    if(frameCount-250===0){
      gameState=ED
    }
  }
  if (navigator.appVersion.indexOf("Mac") != -1) {
    NameW =
    "MacOS";
    if(frameCount-100===0){
      text("Your System:PC",150,50)
      text("Your OS:"+NameW,150,80)
    }
    if(frameCount-250===0){
      gameState=ED
    }
  }
  if (navigator.appVersion.indexOf("X11") != -1) {
    NameW =
    "UNIX OS";
    if(frameCount-100===0){
      text("Your System:PC",150,50)
      text("Your OS:"+NameW,150,80)
    }
    if(frameCount-250===0){
      gameState=ED
    }
  }
  if (navigator.appVersion.indexOf("Linux") != -1) {
    NameW =
    "Linux OS";
    if(frameCount-100===0){
      text("Your System:PC",150,50)
      text("Your OS:"+NameW,150,80)
    }
    if(frameCount-250===0){
      gameState=ED
    }
  }
  if (navigator.userAgent.indexOf("Android") != -1) {
    NameW =
    "Android OS";
    if(frameCount-100===0){
      text("Your System:Mobile",180,50)
      text("Your OS:"+NameW,150,80)
      
    }
    if(frameCount-250===0){
      location.assign("https://abdulwahab321.github.io/Street-Racer-Async-Preload-Function-Mobile-Edition/")
    }
  }
  if (navigator.userAgent.indexOf("like Mac") != -1) {
    NameW =
    "iOS";
    if(frameCount-100===0){
      text("Your System:Mobile",180,50)
      text("Your OS:"+NameW,150,80)
    }
}
textSize(40)
}

fill("red");
strokeWeight(2)
ellipse(mouseX,mouseY,15,15)
noCursor();
 
}
else{
  alert("Please Connect To Internet To Work This Game")
  window.close();
} 
}

async function say(){
  sp=new SpeechSynthesisUtterance();
  sp.text="Hai Welcome To street Racer Game System Cofirmer"
  window.speechSynthesis.speak(sp)
}
