const charList = [
    {
        image: "B01.jpg",
        rarity: "BDS",
        title: "ฮารุ BIRTHDAY PARTY",
        atk: 8615,
        hp: 9513,
        liveMemberSkill: "Score",
    },
    {
        image: "B02.jpg",
        rarity: "BDS",
        title: "มุสึบิ BIRTHDAY PARTY",
        atk: 8145,
        hp: 10915,
        liveMemberSkill: "Score",
    },
    {
        image: "B03.jpg",
        rarity: "BDS",
        title: "โรนะ BIRTHDAY PARTY",
        atk: 7630,
        hp: 12841,
        liveMemberSkill: "Score",
    },
    {
        image: "B04.jpg",
        rarity: "BDS",
        title: "ฮิเมะ BIRTHDAY PARTY",
        atk: 7978,
        hp: 11333,
        liveMemberSkill: "Score",
    },
];


const charListContainer = document.getElementById("char-list");

function createcharList(char) {
    return `
    <a href="https://t7s.jp/character/chara/${char.idNumber}.html" target="_blank" class="container container${char.color}">
    <div class="charaName">คาซึคาเบะ<br>ฮารุ</div><img class="charaHaru" src="img/cha/01_pc.png">
</a>
    `;
}

charList.forEach((char) => {
    const charMarkup = createcharList(char);
    charListContainer.innerHTML += charMarkup;
});
