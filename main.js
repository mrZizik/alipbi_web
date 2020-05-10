let letters = ["a", "б", "в", "г", "г1", "гь", "гъ", "д", "дж", "е", "ж", "з", "и", "к", "к1", "к11", "къ", "кь", "кь1", "л", "л1", "лъ", "м", "н", "о", "п", "п1", "р", "с", "т", "т1", "у", "у", "ф", "х", "х1", "хъ", "хь", "ц", "ц1", "ц11", "ч", "ч1", "ч11", "ш", "щ", "э", "ю", "я"];

let symbols = ["a"]

const getLetterHtml = (index) => `<div class='letter'><img class="image" src="img/${symbols[0]}.png" /></br><h1 class="text">${letters[index].toUpperCase()}</h1></div>`;

jQuery(document).ready(function(){
for (var i = 0; i < letters.length; i++) {
	$(".wrapper").append(getLetterHtml(i))
}
})
