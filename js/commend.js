function getElementInputValueById(id) {
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
};

function getElementTotalDonationById(id) {
    const donationValue = parseFloat(document.getElementById(id).innerText);
    return donationValue;
}