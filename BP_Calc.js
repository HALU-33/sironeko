// 称号と累計BPの一覧
const titles = [
  { name: "アストラ島の住人", totalBP: 0 },
  { name: "駆け出し冒険家9級", totalBP: 10 },
  { name: "駆け出し冒険家8級", totalBP: 20 },
  { name: "手慣れた冒険家7級", totalBP: 30 },
  { name: "手慣れた冒険家6級", totalBP: 50 },
  { name: "ベテラン冒険家5級", totalBP: 100 },
  { name: "ベテラン冒険家4級", totalBP: 200 },
  { name: "熟練冒険家3級", totalBP: 300 },
  { name: "熟練冒険家2級", totalBP: 500 },
  { name: "熟練冒険家1級", totalBP: 1000 },
  { name: "勇敢な戦士初段", totalBP: 2000 },
  { name: "勇敢な戦士二段", totalBP: 3000 },
  { name: "百戦錬磨の戦士三段", totalBP: 5000 },
  { name: "百戦錬磨の戦士四段", totalBP: 10000 },
  { name: "覇島の勇者五段", totalBP: 20000 },
  { name: "覇島の勇者六段", totalBP: 30000 },
  { name: "伝説の勇者七段", totalBP: 50000 },
  { name: "伝説の勇者八段", totalBP: 100000 },
  { name: "空の英雄九段", totalBP: 200000 },
  { name: "空の英雄十段", totalBP: 300000 },
  { name: "世界を駆ける風十一段", totalBP: 500000 },
  { name: "世界を駆ける風十二段", totalBP: 1000000 },
  { name: "希望の先導者十三段", totalBP: 2000000 },
  { name: "希望の先導者十四段", totalBP: 3000000 },
  { name: "空前絶後のエース十五段", totalBP: 5000000 },
  { name: "空前絶後のエース十六段", totalBP: 7000000 },
  { name: "不屈の求道者十七段", totalBP: 9000000 },
  { name: "不屈の求道者十八段", totalBP: 11000000 },
  { name: "きまぐれな旅行者十九段", totalBP: 13000000 },
  { name: "きまぐれな旅行者二十段", totalBP: 15500000 },
  { name: "奇跡の楽天家二十一段", totalBP: 18000000 },
  { name: "奇跡の楽天家二十二段", totalBP: 20500000 },
  { name: "謙虚なる上級者二十三段", totalBP: 23000000 },
  { name: "謙虚なる上級者二十四段", totalBP: 25500000 },
  { name: "万世不滅の冒険魂二十五段", totalBP: 28500000 },
  { name: "万世不滅の冒険魂二十六段", totalBP: 31500000 },
  { name: "古今独歩の異端者二十七段", totalBP: 34500000 },
  { name: "古今独歩の異端者二十八段", totalBP: 37500000 },
  { name: "歴史の当事者二十九段", totalBP: 40500000 },
  { name: "歴史の当事者三十段", totalBP: 43500000 },
  { name: "時流の抵抗者三十一段", totalBP: 46500000 },
  { name: "時流の抵抗者三十二段", totalBP: 49500000 },
  { name: "真理の探究者三十三段", totalBP: 52500000 },
  { name: "真理の探究者三十四段", totalBP: 55500000 },
];


// ステージと獲得BPの関係
const stages = {
  runes: { normal: 7000, 'bp-boost': 16700 },
  everyone: { normal: 3500, 'bp-boost': 8300 },
};

document.getElementById('calc-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // 入力を取得
  const currentTitleIndex = parseInt(document.getElementById('current-title').value);
  const bpNeeded = parseInt(document.getElementById('bp-needed').value);

  // 以下の行は要素そのものを取得します
  const stageSelect = document.getElementById('stage');
  const formationSelect = document.getElementById('formation');

  // select要素のselectedIndexプロパティを使って選択されたoptionのtextプロパティを取得します
  const stageOption = stageSelect.options[stageSelect.selectedIndex].text;
  const formationOption = formationSelect.options[formationSelect.selectedIndex].text;

  // 以下の行は要素のvalueを取得します
  const stage = stageSelect.value;
  const formation = formationSelect.value;

  // 昇格後の称号を特定
  const nextTitle = titles[currentTitleIndex + 1].name;

  // 1回に獲得できるBPを算出
  const bpPerRound = stages[stage][formation];

  // 周回数を計算（小数は切り上げ）
  const roundsNeeded = Math.ceil(bpNeeded / bpPerRound);

  // 結果を表示
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `ステージ: ${stageOption}, 編成: ${formationOption}, 昇格に必要なBP: ${bpNeeded}, 1回に獲得できるBP: ${bpPerRound}, 周回数: ${roundsNeeded}, 昇格後の称号: ${nextTitle}`;
});
