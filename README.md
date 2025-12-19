# cancer-risk-estimator
# Cancer Risk Estimator  **Cancer Risk Estimator** is an educational web app that provides a simple, interactive estimate of general cancer risk factors based on user responses to common lifestyle and health questions.  Built with pure HTML, CSS, JavaScript, and Bootstrap 5 — a p
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cancer Risk Estimator</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container py-5">
    <div class="header text-center mb-5 animate-fade-in">
        <h1 class="display-4 fw-bold text-primary">Cancer Risk Estimator</h1>
        <p class="lead text-muted">
            Answer questions to get an educational estimate of general cancer risk factors
        </p>
    </div>

    <div class="card shadow-lg p-4 animate-slide-up">
        <form id="cancerForm">
            <div class="row g-4">

                <div class="col-md-6">
                    <label class="form-label fw-bold">1. Age</label>
                    <select class="form-select" id="age">
                        <option value="0">Under 40</option>
                        <option value="2">40–59</option>
                        <option value="4">60+</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label class="form-label fw-bold">2. Smoking History</label>
                    <select class="form-select" id="smoking">
                        <option value="0">Never smoked</option>
                        <option value="3">Former smoker</option>
                        <option value="5">Current smoker</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label class="form-label fw-bold">3. Family History of Cancer</label>
                    <select class="form-select" id="family">
                        <option value="0">No</option>
                        <option value="3">Yes (one relative)</option>
                        <option value="5">Yes (multiple or close relatives)</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label class="form-label fw-bold">4. Daily Alcohol Consumption</label>
                    <select class="form-select" id="alcohol">
                        <option value="0">None or occasional</option>
                        <option value="2">Moderate</option>
                        <option value="4">Heavy</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label class="form-label fw-bold">5. Physical Activity</label>
                    <select class="form-select" id="activity">
                        <option value="0">Regular</option>
                        <option value="2">Some</option>
                        <option value="3">None</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label class="form-label fw-bold">6. Diet</label>
                    <select class="form-select" id="diet">
                        <option value="0">5+ servings</option>
                        <option value="1">3–4 servings</option>
                        <option value="2">Less than 3</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label class="form-label fw-bold">7. Sun Protection</label>
                    <select class="form-select" id="sun">
                        <option value="0">Always</option>
                        <option value="2">Sometimes</option>
                        <option value="3">Rarely</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label class="form-label fw-bold">8. Regular Screening</label>
                    <select class="form-select" id="screening">
                        <option value="0">Yes</option>
                        <option value="2">Somewhat</option>
                        <option value="3">No</option>
                    </select>
                </div>

            </div>

            <div class="text-center mt-5">
                <button type="button"
                        class="btn btn-primary btn-lg px-5 shadow animate-pulse"
                        onclick="calculateCancerRisk()">
                    Estimate Risk
                </button>
            </div>
        </form>
    </div>

    <div id="result" class="mt-5"></div>
</div>

<!-- JavaScript -->
<script src="script.js"></script>
</body>
</html>
body {
    background: linear-gradient(135deg, #ffeef8, #ffc0e6);
    min-height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
    max-width: 900px;
    padding: 20px;
}

/* Animations */
.animate-fade-in {
    animation: fadeIn 1.5s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-slide-up {
    opacity: 0;
    animation: slideUp 0.8s ease-out forwards;
}

@keyframes slideUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}

.animate-pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(13,110,253,0.6); }
    70% { box-shadow: 0 0 0 20px rgba(13,110,253,0); }
    100% { box-shadow: 0 0 0 0 rgba(13,110,253,0); }
}

/* Result Card */
.risk-card {
    position: relative;
    border-radius: 25px;
    overflow: hidden;
    margin: 40px auto;
    max-width: 650px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.8s ease;
}

.risk-card.show {
    opacity: 1;
    transform: scale(1);
}

/* Rainbow Border */
.risk-card::before {
    content: '';
    position: absolute;
    inset: -5px;
    background: linear-gradient(
        45deg,
        #ff006e, #ff8c00, #ffd60a,
        #06ffa5, #00d4ff, #8b00ff
    );
    border-radius: 30px;
    z-index: -1;
    background-size: 400%;
    animation: rainbowFlow 12s linear infinite;
}

@keyframes rainbowFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Risk Levels */
.low { background: linear-gradient(135deg, #a8e6cf, #dcedc1); }
.moderate { background: linear-gradient(135deg, #ffd3a5, #fddeb5); }
.high { background: linear-gradient(135deg, #ff9aa2, #ffb7b2); }
.very-high { background: linear-gradient(135deg, #ff6b6b, #ff8e8e); }
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
