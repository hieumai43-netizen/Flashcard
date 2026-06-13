const words = [
    {
        vn: "Gia đình",
        jp: "家族",
        en: "Family",
        example: "家族は私にとって大切です。"
    },
    {
        vn: "Bạn bè",
        jp: "友達",
        en: "Friend",
        example: "友達と映画を見ました。"
    },
    {
        vn: "Trường học",
        jp: "学校",
        en: "School",
        example: "学校へ行きます。"
    }
];

let current = 0;

function showWord() {

    document.getElementById("vn").innerText =
        words[current].vn;

    document.getElementById("jp").innerText =
        words[current].jp;

    document.getElementById("en").innerText =
        words[current].en;

    document.getElementById("example").innerText =
        words[current].example;
}

function nextCard() {

    current++;

    if (current >= words.length) {
        current = 0;
    }

    showWord();
}

showWord();
if ("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js");

}