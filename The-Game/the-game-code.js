const answerTrue = document.getElementById("answer-true");
const answerFalse = document.getElementById("answer-false");
const textBlock = document.getElementById("text");
const choicesBlock = document.getElementById("choices");

let i = 0;

const questionsArr = [
    "هل كان خاطر المعصية اللذي خطر على قلبك يصرف بالمعوذات والذكر؟",
    "هل تصر على نوع معصية معينة؟ لتعرف ذلك فكر بالقيام بمعصية اكبر هل يصر الخاطر القديم عليك؟ ام انك تميل الى الخاطر الجديد",
    "هل جاء خاطر المعصية بعد معصية اخرى فعلتها من قبل ؟"
]

const resultArr = [
    "مصدر هذا الخاطر كان الشيطان وهو من أضعف أنواع الخواطر ويصرف بجرد الذكر ۞إِنَّ كَيْدَ الشَّيْطَانِ كَانَ ضَعِيفًا (٧٦)النساء.",
    "مصدر هذا الخاطر هو هوى النفس وهو من اصعب أنواع الخواطر من حيث التخلص منها حيث تحتاج النفس الى بذل الجهد لترويضها",
    " مصدر الخاطر كان استدراجا من الله عز وجل وهو من اخطر أنواع الخواطر بسبب قيامك بذنب وعدم توبتك منه وعدم اكتراثك لنظرة الله عز وجل لك و  ۞ وَالَّذِينَ كَذَّبُوا بِآيَاتِنَا سَنَسْتَدْرِجُهُم مِّنْ حَيْثُ لَا يَعْلَمُونَ (١٨٢)الأعراف و سارع اخي للتوبة "
]

function init() {
    changeTextBlock(questionsArr[i]);
    answerFalse.addEventListener("click", showQuestion);
    answerTrue.addEventListener("click", showAnswer);
}

function showQuestion() {
    i++;

    answerTrue.removeEventListener("click", showAnswer);
    answerTrue.style["background"] = "#7f8c8d";
    answerFalse.removeEventListener("click", showQuestion);
    answerFalse.style["background"] = "#7f8c8d";

    setTimeout(() => {
        answerTrue.addEventListener("click", showAnswer);
        answerTrue.style["background"] = "#226F54";
        answerFalse.addEventListener("click", showQuestion);
        answerFalse.style["background"] = "#226F54";
    }, 5000);

    let text = questionsArr[i];
    if(i>=3) text = "there is no questions" 
    changeTextBlock(text);
}

function showAnswer() {
     answerTrue.removeEventListener("click", showAnswer);
    answerTrue.style["background"] = "#7f8c8d";
    answerFalse.removeEventListener("click", showQuestion);
    answerFalse.style["background"] = "#7f8c8d";

    setTimeout(() => {
        answerTrue.addEventListener("click", showAnswer);
        answerTrue.style["background"] = "#226F54";
        answerFalse.addEventListener("click", showQuestion);
        answerFalse.style["background"] = "#226F54";
    }, 5000);

    let text = resultArr[i];
    if(i>=3) text = "there is no questions" 
    changeTextBlock(text);}

function changeTextBlock(text) {
    textBlock.innerHTML = text;
}

init();