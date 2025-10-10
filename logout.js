function logout() {
    localStorage.removeItem('aiym_token');
    localStorage.removeItem('aiym_user');
    sessionStorage.removeItem('aiym_token');
    sessionStorage.removeItem('aiym_user');
    
    window.location.href = '/login.html';
}
