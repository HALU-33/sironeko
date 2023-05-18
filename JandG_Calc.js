document.addEventListener('DOMContentLoaded', function() {
    const calculationType = document.getElementById('calculation-type');
    const questInput = document.getElementById('quest-input');
    const gachaInput = document.getElementById('gacha-input');
    const calculateButton = document.getElementById('calculate-button');

    calculationType.addEventListener('change', function() {
      switch (calculationType.value) {
        case 'quest':
          questInput.classList.remove('hidden');
          gachaInput.classList.add('hidden');
          calculateButton.disabled = false;
          break;
        case 'gacha':
          gachaInput.classList.remove('hidden');
          questInput.classList.add('hidden');
          calculateButton.disabled = false;
          break;
        default:
          questInput.classList.add('hidden');
          gachaInput.classList.add('hidden');
          calculateButton.disabled = true;
      }
    });

    calculateButton.addEventListener('click', function() {
      const resultDiv = document.getElementById('result');

      switch (calculationType.value) {
        case 'quest':
          const questTarget = document.getElementById('quest-target').value;
          const questCurrent = document.getElementById('quest-current').value;
          const questNeeded = questTarget - questCurrent;
          const questSet = 3; // クエストのセット数
          const stonesPerSet = 16; // クエストのセットあたりの石の数
          const setsNeeded = Math.ceil(questNeeded / stonesPerSet);
          const questsNeeded = setsNeeded * questSet;
          resultDiv.innerText = `石${questTarget}個集めるのに、おおよそ${questsNeeded}回クリアすると集まります。${questsNeeded}回クリアすると${setsNeeded * stonesPerSet}個集まります（既に${questCurrent}個持っているため、合計で${questTarget}個）。`;
          break;
        case 'gacha':
          const gachaTimes = document.getElementById('gacha-times').value;
          const gachaCurrent = document.getElementById('gacha-current').value;
          const stonesPerGacha = 250; // 10連ガチャあたりの石の数
          const gachaNeeded = (gachaTimes / 10) * stonesPerGacha; // 入力のガチャ連数を10で割って10連ガチャの回数を求める
          const stonesNeeded = gachaNeeded - gachaCurrent;
          resultDiv.innerText = `ガチャ${gachaTimes}連引く場合、石${gachaNeeded}個必要です。${gachaCurrent}個持ってるということなので、残り${stonesNeeded}個必要です。`;
          break;
      }
    });
  });