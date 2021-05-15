var Locke
var storyState = "title"

function preload(){
    locke = loadImage("JohnLocke.png")
    lock = loadImage("lock.png")
    Play = loadImage("PlayButton.png")
    Next=loadImage("next.jpg")
    bg = loadImage("ChapterBG.jpg")
    bgn = loadImage("Chapter3BG.jpg")
    t1 = loadImage("CHP1Txtr.png")
    t2 = loadImage("CHP2Txt.png")
    t3 = loadImage("CHP3Txt.png")
    t4 = loadImage("Illusion.png")
    man = loadImage("man.png")
    man2 = loadImage("man2.png")
    man3 = loadImage("man3.png")
    man4 = loadImage("man4.png")
}

function setup(){
    createCanvas(displayWidth, displayHeight-120)

    Locke = createSprite(displayWidth-900, displayHeight-550)
    Locke.addImage(locke)
    Locke.scale = 4

    PlayButton = createSprite(970,630,10,10)
    PlayButton.addImage(Play)
    PlayButton.scale = 0.5

    key = createSprite(displayWidth-400, displayHeight-750)
    key.addImage(lock)
    key.scale = 0.5

    bg1 = createSprite(displayWidth/2,displayHeight-500)
    bg1.addImage(bg)
    bg1.scale = 2.5

    bg2 = createSprite(displayWidth/2,displayHeight-500)
    bg2.addImage(bgn)
    bg2.scale = 2.5

    bg3 = createSprite(displayWidth/2,displayHeight/2900,80)

    bg4 = createSprite(displayWidth/2,displayHeight/2900,80)
    
    text1 = createSprite(displayWidth/2,100,10,10)
    text1.addImage(t1)

    text2 = createSprite(displayWidth/2,100,10,10)
    text2.addImage(t2)
    text2.scale = 0.7

    text3 = createSprite(displayWidth/2-300,200,10,10)
    text3.addImage(t3)
    text3.scale = 1

    text4 = createSprite(displayWidth/2+200,500,10,10)
    text4.addImage(t4)
    text4.scale = 1

    Man = createSprite(700, 600,10,10)
    Man.addImage(man)

    Man2 = createSprite(700, 600,10,10)
    Man2.addImage(man2)
    Man2.scale = 2

    Man3 = createSprite(200, 600,10,10)
    Man3.addImage(man3)
    Man3.scale = 1.2

    Man4 = createSprite(200,400,10,10)
    Man4.addImage(man4)
    Man4.scale = 1.2

    NextButton = createSprite(1050,300,10,10)
    NextButton.addImage(Next)
    NextButton.scale = 0.1
   
    NextButton2 = createSprite(1200,300,10,10)
    NextButton2.addImage(Next)
    NextButton2.scale = 0.1

    NextButton3 = createSprite(1200,500,10,10)
    NextButton3.addImage(Next)
    NextButton3.scale = 0.1

    NextButton4 = createSprite(displayWidth/2,500,10,10)
    NextButton4.addImage(Next)
    NextButton4.scale = 0.1

    NextButton5 = createSprite(displayWidth/2+200,570,10,10)
    NextButton5.addImage(Next)
    NextButton5.scale = 0.1

}

function draw(){
    background("grey")

    if(storyState === "title"){
        Locke.visible = true
        key.visible = true
        PlayButton.visible = true
        bg1.visible = false
        bg3.visible = false
        bg4.visible = false
        bg2.visible = false
        text1.visible = false
        text2.visible = false
        text3.visible = false
        text4.visible = false
        Man.visible = false
        Man2.visible = false
        Man3.visible = false
        Man4.visible = false
        NextButton.visible = false
        NextButton2.visible = false
        NextButton3.visible = false
        NextButton4.visible = false
        NextButton5.visible = false


     textSize(50)
     textAlign(CENTER)
     fill("black")
     text("John Locke's", displayWidth-400, displayHeight-550)
     text("'LOCKED ROOM'", displayWidth-380, displayHeight-490)
     text("Analogy", displayWidth-400, displayHeight-430)
     

    if(mousePressedOver(PlayButton)&&storyState==="title"){
        storyState = "Chapter1"}
    }



    if(storyState === "Chapter1"){
        Locke.visible = false
        key.visible = false
        PlayButton.visible = false
        bg1.visible = true
        bg2.visible = false
        bg3.visible = false
        bg4.visible = false
        text1.visible = true
        text2.visible = false
        text3.visible = false
        text4.visible = false
        Man.visible = true
        Man2.visible = false
        Man3.visible = false
        Man4.visible = false
        NextButton.visible = true
        NextButton2.visible = false
        NextButton3.visible = false
        NextButton4.visible = false
        NextButton5.visible = false
       
    
    if(mousePressedOver(NextButton)&&storyState==="Chapter1"){
        storyState = "C2"}
    }

    if(storyState === "C2"){
    Locke.visible = false
    key.visible = false
    PlayButton.visible = false
    bg1.visible = true
    bg2.visible = false
    bg3.visible = false
    bg4.visible = false
    text1.visible = false
    text2.visible = true
    text3.visible = false
    text4.visible = false
    Man.visible = false
    Man2.visible = true
    Man3.visible = false
    Man4.visible = false
    NextButton.visible = false
    NextButton2.visible = true
    NextButton3.visible = false
    NextButton4.visible = false
    NextButton5.visible = false




    if(mousePressedOver(NextButton2)&&storyState === "C2"){
        storyState = "Chapter3"}
    }




    if(storyState === "Chapter3"){
    Locke.visible = false
    key.visible = false
    PlayButton.visible = false
    bg1.visible = false
    bg2.visible = true
    bg3.visible = false
    bg4.visible = false
    text1.visible = false
    text2.visible = false
    text3.visible = true
    text4.visible = false
    Man.visible = false
    Man2.visible = false
    Man3.visible = false
    Man4.visible = false
    NextButton.visible = false
    NextButton2.visible = false
    NextButton3.visible = true
    NextButton4.visible = false
    NextButton5.visible = false

    if(mousePressedOver(NextButton3)&&storyState === "Chapter3"){
        storyState = "Chapter4"}
    }

    if(storyState === "Chapter4"){
        Locke.visible = false
        key.visible = false
        PlayButton.visible = false
        bg1.visible = false
        bg2.visible = false
        bg3.visible = false
        bg4.visible = false
        text1.visible = false
        text2.visible = false
        text3.visible = false
        text4.visible = false
        Man.visible = false
        Man2.visible = false
        Man3.visible = true
        Man4.visible = false
        NextButton.visible = false
        NextButton2.visible = false
        NextButton3.visible = false
        NextButton4.visible = true
        NextButton5.visible = false

        textSize(40)
        textAlign(CENTER)
        fill("black")
        text("Now the man thinks that he had made his decision with FREE  WILL...", displayWidth/2, displayHeight-550)
        text("", displayWidth-380, displayHeight-490)
        text("", displayWidth-400, displayHeight-430)
            
        if(mousePressedOver(NextButton4)&&storyState === "Chapter4"){
            storyState = "Chapter5"}
        }

        if(storyState === "Chapter5"){
            Locke.visible = false
            key.visible = false
            PlayButton.visible = false
            bg1.visible = false
            bg2.visible = false
            bg3.visible = true
            bg4.visible = false
            text1.visible = false
            text2.visible = false
            text3.visible = false
            text4.visible = false
            Man.visible = false
            Man2.visible = false
            Man3.visible = false
            Man4.visible = true
            NextButton.visible = false
            NextButton2.visible = false
            NextButton3.visible = false
            NextButton4.visible = false
            NextButton5.visible = true
    
            textSize(60)
            textAlign(CENTER)
            fill("black")
            text("But in REALITY, ", displayWidth/2+200, displayHeight-650)
            text("He hasn't got a choice...", displayWidth-380, displayHeight-490)
            text("", displayWidth-400, displayHeight-430)

            if(mousePressedOver(NextButton5)&&storyState === "Chapter5"){
                storyState = "Chapter6"
            }
                
        }
        if(storyState === "Chapter6"){
            Locke.visible = false
            key.visible = false
            PlayButton.visible = false
            bg1.visible = false
            bg2.visible = false
            bg3.visible = true
            bg4.visible = true
            text1.visible = false
            text2.visible = false
            text3.visible = false
            text4.visible = true
            Man.visible = false
            Man2.visible = false
            Man3.visible = false
            Man4.visible = true
            NextButton.visible = false
            NextButton2.visible = false
            NextButton3.visible = false
            NextButton4.visible = false
            NextButton5.visible = false

            textSize(60)
            textAlign(CENTER)
            fill("black")
            text("Making his free will just an ", displayWidth/2+200, displayHeight-650)



        }



    drawSprites();

}