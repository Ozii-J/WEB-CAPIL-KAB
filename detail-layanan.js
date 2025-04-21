document.addEventListener('DOMContentLoaded', function() {
    // Get the service ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const serviceId = urlParams.get('id');
    
    // Load the service details based on the ID
    loadServiceDetails(serviceId);
});

function loadServiceDetails(serviceId) {
    // Define service details object
    const serviceDetails = {
        'ektp': {
            title: 'Kartu Tanda Penduduk Elektronik (E-KTP)',
            icon: 'fa-id-card',
            description: 'Kartu Tanda Penduduk Elektronik adalah identitas resmi penduduk sebagai bukti diri yang diterbitkan oleh Instansi Pelaksana yang berlaku di seluruh wilayah Negara Kesatuan Republik Indonesia.',
            requirements: [
                'Telah berusia 17 tahun atau sudah/pernah menikah',
                'Fotokopi Kartu Keluarga (KK)',
                'Surat Pengantar RT/RW',
                'KTP lama (untuk perpanjangan atau perubahan data)'
            ],
            procedures: [
                'Datang langsung ke Kantor Disdukcapil dengan membawa persyaratan lengkap',
                'Mengisi formulir permohonan KTP-el',
                'Melakukan verifikasi data pada petugas',
                'Melakukan perekaman foto, sidik jari, dan tanda tangan',
                'Menerima tanda terima permohonan KTP-el',
                'Pengambilan KTP-el sesuai jadwal yang ditentukan'
            ],
            timeService: '7 hari kerja',
            fee: 'Gratis'
        },
        'akta-kelahiran': {
            title: 'Akta Kelahiran',
            icon: 'fa-baby',
            description: 'Akta Kelahiran adalah bukti sah mengenai status dan peristiwa kelahiran seseorang yang dikeluarkan oleh Dinas Kependudukan dan Pencatatan Sipil.',
            requirements: [
                'Surat Keterangan Lahir dari dokter/bidan/rumah sakit',
                'Kartu Keluarga (KK) orang tua',
                'KTP-el orang tua',
                'Buku Nikah/Akta Perkawinan orang tua',
                'Surat Kuasa bermaterai cukup dan fotokopi KTP-el penerima kuasa (jika dikuasakan)'
            ],
            procedures: [
                'Datang langsung ke Kantor Disdukcapil dengan membawa persyaratan lengkap',
                'Mengisi formulir permohonan Akta Kelahiran',
                'Verifikasi berkas oleh petugas',
                'Menerima tanda terima permohonan',
                'Pengambilan Akta Kelahiran sesuai jadwal yang ditentukan'
            ],
            timeService: '7 hari kerja',
            fee: 'Gratis'
        },
        'akta-perkawinan': {
            title: 'Akta Perkawinan',
            icon: 'fa-ring',
            description: 'Akta Perkawinan adalah bukti sah mengenai status dan peristiwa perkawinan yang dikeluarkan oleh Dinas Kependudukan dan Pencatatan Sipil.',
            requirements: [
                'Surat Keterangan dari KUA (untuk perkawinan Muslim)',
                'KTP-el kedua mempelai',
                'Kartu Keluarga (KK) kedua mempelai',
                'Akta Kelahiran kedua mempelai',
                'Pas foto berwarna ukuran 4x6 (2 lembar)',
                'Surat Keterangan belum pernah menikah dari Kelurahan',
                'Surat izin dari orang tua (jika umur di bawah 21 tahun)'
            ],
            procedures: [
                'Datang langsung ke Kantor Disdukcapil dengan membawa persyaratan lengkap',
                'Mengisi formulir permohonan Akta Perkawinan',
                'Verifikasi berkas oleh petugas',
                'Menerima tanda terima permohonan',
                'Pengambilan Akta Perkawinan sesuai jadwal yang ditentukan'
            ],
            timeService: '7 hari kerja',
            fee: 'Gratis'
        },
        'kartu-keluarga': {
            title: 'Kartu Keluarga',
            icon: 'fa-house-user',
            description: 'Kartu Keluarga adalah kartu identitas keluarga yang memuat data tentang nama, susunan, hubungan dan jumlah anggota keluarga serta identitas anggota keluarga.',
            requirements: [
                'KTP-el Kepala Keluarga',
                'Bukti/Akta Perkawinan',
                'Akta Kelahiran anggota keluarga',
                'Surat Keterangan Pindah (jika perubahan alamat)',
                'Surat Keterangan dari RT/RW'
            ],
            procedures: [
                'Datang langsung ke Kantor Disdukcapil dengan membawa persyaratan lengkap',
                'Mengisi formulir permohonan Kartu Keluarga',
                'Verifikasi berkas oleh petugas',
                'Menerima tanda terima permohonan',
                'Pengambilan Kartu Keluarga sesuai jadwal yang ditentukan'
            ],
            timeService: '7 hari kerja',
            fee: 'Gratis'
        },
        'kia': {
            title: 'Kartu Identitas Anak (KIA)',
            icon: 'fa-users',
            description: 'Kartu Identitas Anak adalah identitas resmi anak sebagai bukti diri anak yang berusia kurang dari 17 tahun dan belum menikah yang diterbitkan oleh Dinas Kependudukan dan Pencatatan Sipil.',
            requirements: [
                'Fotokopi Akta Kelahiran',
                'Fotokopi KK orang tua/wali',
                'Fotokopi KTP-el kedua orang tua/wali',
                'Pas Foto berwarna ukuran 2x3 (2 lembar) untuk anak usia 5-17 tahun'
            ],
            procedures: [
                'Datang langsung ke Kantor Disdukcapil dengan membawa persyaratan lengkap',
                'Mengisi formulir permohonan Kartu Identitas Anak',
                'Verifikasi berkas oleh petugas',
                'Melakukan perekaman foto untuk anak usia 5-17 tahun',
                'Menerima tanda terima permohonan',
                'Pengambilan Kartu Identitas Anak sesuai jadwal yang ditentukan'
            ],
            timeService: '7 hari kerja',
            fee: 'Gratis'
        }
    };
    
    // Get the service details
    const service = serviceDetails[serviceId];
    
    if (service) {
        // Update the page content
        document.querySelector('.service-title').textContent = service.title;
        document.querySelector('.service-icon i').className = `fas ${service.icon}`;
        document.querySelector('.service-description').textContent = service.description;
        
        // Update requirements list
        const requirementsList = document.querySelector('.requirements-list');
        requirementsList.innerHTML = '';
        service.requirements.forEach(req => {
            const li = document.createElement('li');
            li.textContent = req;
            requirementsList.appendChild(li);
        });
        
        // Update procedures list
        const proceduresList = document.querySelector('.procedures-list');
        proceduresList.innerHTML = '';
        service.procedures.forEach((proc, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${proc}`;
            proceduresList.appendChild(li);
        });
        
        // Update service time and fee
        document.querySelector('.service-time').textContent = service.timeService;
        document.querySelector('.service-fee').textContent = service.fee;
    } else {
        // Handle case when service ID is not found
        document.querySelector('.page-content').innerHTML = `
            <div class="container">
                <div class="error-message">
                    <h2>Layanan tidak ditemukan</h2>
                    <p>Maaf, layanan yang Anda cari tidak ditemukan. Silakan kembali ke <a href="layanan.html">halaman layanan</a>.</p>
                </div>
            </div>
        `;
    }
}