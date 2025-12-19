function calculateCancerRisk() {
    let score = 0;

    score += parseInt(document.getElementById("age").value);
    score += parseInt(document.getElementById("smoking").value);
    score += parseInt(document.getElementById("family").value);
    score += parseInt(document.getElementById("alcohol").value);
    score += parseInt(document.getElementById("activity").value);
    score += parseInt(document.getElementById("diet").value);
    score += parseInt(document.getElementById("sun").value);
    score += parseInt(document.getElementById("screening").value);

    let riskLevel, message, colorClass;

    if (score < 8) {
        riskLevel = "Low Risk";
        message = "Your estimated risk appears low.";
        colorClass = "low";
    } else if (score < 14) {
        riskLevel = "Moderate Risk";
        message = "Some risk factors are present.";
        colorClass = "moderate";
    } else if (score < 20) {
        riskLevel = "Elevated Risk";
        message = "Several risk factors identified.";
        colorClass = "high";
    } else {
        riskLevel = "High Risk";
        message = "Please consult a doctor for screening.";
        colorClass = "very-high";
    }

    document.getElementById("result").innerHTML = `
        <div class="risk-card ${colorClass}">
            <div class="card-body text-center py-5 text-white">
                <h2 class="fw-bold mb-4">Estimated Cancer Risk</h2>
                <h1 class="display-4 fw-bold mb-3">${riskLevel}</h1>
                <p class="fs-3 mb-3">Score: ${score}/26</p>
                <p class="fs-5 px-4">${message}</p>
                <small class="opacity-75">
                    Educational estimate only • Not a diagnosis
                </small>
            </div>
        </div>
    `;

    setTimeout(() => {
        document.querySelector(".risk-card")?.classList.add("show");
    }, 100);
}
