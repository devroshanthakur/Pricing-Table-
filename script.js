function selectPlan(plan) {
    const messageElement = document.getElementById("plan-message");
    messageElement.textContent = `You have selected the ${plan} plan!`;
    document.getElementById("selected-plan").style.display = "block";
}
