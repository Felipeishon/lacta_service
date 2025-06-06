// Modal logic
const certModal = document.getElementById('certModal');
document.getElementById('openCertModal').onclick = function(e) {
    e.preventDefault();
    certModal.style.display = 'flex';
};
document.getElementById('openCertModalFooter').onclick = function(e) {
    e.preventDefault();
    certModal.style.display = 'flex';
};
document.getElementById('closeCertModal').onclick = function() {
    certModal.style.display = 'none';
};
window.onclick = function(event) {
    if (event.target === certModal) {
        certModal.style.display = 'none';
    }
};