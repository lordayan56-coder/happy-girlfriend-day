
const letter = `Dear Zobiya ❤️,

Happy Girlfriend's Day, My Love.

Kabhi kabhi main galtiyan karta hoon,
kabhi tumhe hurt bhi kar deta hoon.
Uske liye dil se Sorry.

Tum meri life ka sabse beautiful part ho.
Tumhari smile meri strength hai.
Tumhari khushi meri priority hai.

Main perfect nahi hoon,
lekin har din tumhare liye
ek better insaan banne ki koshish karunga.

Thank you for every smile,
every call,
every memory,
aur har us pal ke liye
jo humne saath bitaya.

I Love You.
Forever & Always.

– Ayan ❤️`;

let i = 0;

const typing = document.getElementById("typing");

function typeLetter() {
    if (i < letter.length) {
        typing.innerHTML += letter.charAt(i) === "\n" ? "<br>" : letter.charAt(i);
        i++;
        setTimeout(typeLetter, 35);
    }
}

function show(id) {
    document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

document.getElementById("startBtn").onclick = () => {
    show("letter");
    if (typing.innerHTML === "") typeLetter();
};

document.querySelector(".next").onclick = () => show("gallery");
document.querySelector(".next2").onclick = () => show("sorry");
document.querySelector(".next3").onclick = () => show("promise");
document.querySelector(".next4").onclick = () => show("end");
