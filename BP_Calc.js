window.onload = function() {
  // Fetch data
  fetch('/sironeko.github.io/titles_bp.json')
    .then(response => response.json())
    .then(data => {
      let current_title = document.getElementById("current-title");
      let bp_needed = document.getElementById("bp-needed");
      let stage = document.getElementById("stage");
      let formation = document.getElementById("formation");
      let result = document.getElementById("result");

      // Add event listener to button
      document.getElementById("calc-form").addEventListener("submit", function(event) {
        event.preventDefault();

        let current_bp = data.bp_accumulated[current_title.selectedIndex];
        let target_bp = current_bp + parseInt(bp_needed.value);
        let stage_bp;
        let formation_bp;

        // Set BP per stage based on stage
        if (stage.value === "runes") {
          stage_bp = 5;
        } else if (stage.value === "everyone") {
          stage_bp = 15;
        }

        // Set BP per stage based on formation
        if (formation.value === "normal") {
          formation_bp = stage_bp;
        } else if (formation.value === "bp-boost") {
          formation_bp = stage_bp * 1.5;
        }

        // Calculate remaining stages
        let remaining_stages = (target_bp - current_bp) / formation_bp;
        result.textContent = `あと${remaining_stages}回ステージをクリアすればBPが目標値になります。`;
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
