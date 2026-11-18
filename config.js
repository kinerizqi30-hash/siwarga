const CONFIG = {
    SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbyn0_li36lmi_qK1I8Xb6WKkfYSGnAlSVxQIn7a3JXImom-_W-XrCXJp8f2lVyYauxH/exec',
    BULAN_LIST: [
        "Januari 2026", "Februari 2026", "Maret 2026", "April 2026",
        "Mei 2026", "Juni 2026", "Juli 2026", "Agustus 2026",
        "September 2026", "Oktober 2026", "November 2026", "Desember 2026"
    ],
    TARIF: {
        SAMPAH: 20000,
        WIFI: 125000
    }
};

function cekAuthWarga() {
    const user = JSON.parse(localStorage.getItem('si_warga_user'));
    if (!user) {
        window.location.href = 'login.html';
        return null;
    }
    return user;
}

function cekAuthAdmin() {
    const admin = localStorage.getItem('si_warga_admin');
    if (admin !== 'true') {
        alert("Akses ditolak! Silakan login sebagai Admin.");
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function logout() {
    localStorage.removeItem('si_warga_user');
    localStorage.removeItem('si_warga_admin');
    window.location.href = 'login.html';
}

function formatRupiah(angka) {
    return "Rp " + Number(angka || 0).toLocaleString('id-ID');
}

function getBulanSekarang() {
    const bulanIndo = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const now = new Date();
    return `${bulanIndo[now.getMonth()]} ${now.getFullYear()}`;
}