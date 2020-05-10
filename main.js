let letters = ["a", "б", "в", "г", "г1", "гь", "гъ", "д", "ж", "ж1", "з", "и", "к", "к1", "к11", "кь", "кь1", "къ", "л", "л1", "лъ", "м", "н", "о", "п", "р", "с", "т", "т1", "у", "х", "х1", "хъ", "хь", "ц", "ц1", "ц11", "ч", "ч1", "ч11", "ш", "щ", "э", "я"];

let symbols = ["a", "b", "v", "g", "g1", "gm", "gt", "d", "zh", "dj", "z", "i", "k", "k1", "k11", "km", "km1", "kt", "l", "l1", "lt","m", "n", "o", "p", "r", "s", "t", "t1", "u", "x", "x1", "xt", "xm", "c", "c1", "c11", "ch", "ch1", "ch11", "sh", "sh1", "e", "ya"]

let colors = ["#7CD0FF", "#FF6F00", "#70DB72", "#e57373", "#BA68C8", "#4DB6AC", "#2196F3", "#4CAF50", "#8D6E63", "#AFB42B", "#7986CB", "#F06292", "#81C784", "#9575CD", "#29B6F6", "#e57373", "#FF8A65", "#4DB6AC", "#AFB42B", "#42A5F5", "#66BB6A","#2196F3", "#9C27B0", "#8d6e12", "#ef5350", "#AB47BC", "#26A69A", "#78909C", "#8D6E63", "#e57373", "#42A5F5", "#e57373", "#26A69A", "#5C6BC0", "#66BB6A", "#757575", "#795548", "#10519b", "#607D8B", "#F06292", "#21566A", "#81C784", "#A1887F", "#AB47BC"]

let words = ["артанди", "беле", "ваша", "гигицо", "г1ама", "гьерква", "гъане", "дидин", "жужука", "ж1ванж1ва", "зини", "иссо", "кене", "к11анча", "к11ара", "кьанк11ала", "кь1ала", "къамер", "лалу", "л1абда", "лъорлъол","мил1е", "нихьва", "осхъел", "пера", "рак11ар", "солосоло", "тупе", "т1анса", "унса", "хабу", "х1антала", "хъоча", "хьване", "ццицци", "ц1ай", "ц11ибиль", "чане", "ч1ант1а", "ч11инч11иль", "шарбал", "щакибо", "эрхьу", "яше"]

let audioContainer = new Audio("snd/a.mp3")
let isImages = true

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateAlphabet() {
    for (var i = 0; i < letters.length; i++) {
	    $(".alphabetWrapper").append(getLetterHtml(i))
    }
    $(".alphabetWrapper").append(`<div class='buttons'><div class="buttonWrapper" onclick="rotateClicked()"><img class="button" src="img/rotate.png" /></div><div class="buttonWrapper" onclick="settingsClicked()"><img class="button" src="img/settings.png" /></div></div>`)
}

function clickLetter(index) {
    audioContainer.src = "snd/b.mp3"
    $(".alphabetWrapper").hide()
    $("body").css('background', colors[index])
    $(".singleLetterWrapper").append(`<img class="letterBackButton backButton" src="img/back.png" onclick="backClicked()"/>`)
    $(".singleLetterWrapper").append(getLetterHtmlPage(index))
    $(".letterBackButton").show()
}

function backClicked() {
    $(".alphabetWrapper").show()
    $(".backButton").hide()
    $(".singleLetterWrapper").empty()
    $(".infoWrapper").hide()
    $("body").css('background', '#fff')
}

function rotateClicked() {
    if (isImages) {
        $(".image").hide()
        $(".text").show()
        $(".letter").css("background", "#fff")
    } else {
        $(".alphabetWrapper").empty()
        generateAlphabet()
    }
    isImages = !isImages
}

function settingsClicked() {
    $(".infoWrapper").css('background', '#70DB72ef')
    $(".infoBackButton").show()
    $(".infoWrapper").show()
}

const getLetterHtml = (index) => `<div class='letter' style="background: ${colors[index]}" onclick='clickLetter(${index})'><img class="image" src="img/thum_${capitalizeFirstLetter(symbols[index])}.png" /></br><h1 class="text" style="color: ${colors[index]}">${capitalizeFirstLetter(letters[index])}</h1></div>`;

const getLetterHtmlPage = (index) => `<div class="imageWrapper"><img class="fullImage" src="img/${capitalizeFirstLetter(symbols[index])}.png" /></div><h1 class="fullLetter">${capitalizeFirstLetter(letters[index])}</h1><h1 class="fullText">${capitalizeFirstLetter(words[index])}</h1>`;

jQuery(document).ready(function(){
    generateAlphabet()
})
